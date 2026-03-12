# PayrollJamaica Security Report

**Date:** 2026-03-11 (Updated: 2026-03-12)
**Author:** Security Engineer
**Scope:** payrolljamaica (Next.js staging/app) + payrolljamaica-website (Vue.js production)
**Classification:** Internal — Confidential

---

## Executive Summary

PayrollJamaica handles extremely sensitive data: employee PII, salary records, tax IDs (TRN), NIS/NHT numbers, and bank account details. A full security audit was conducted covering HTTP headers, XSS vectors, authentication, cryptography, access control, and Cloudflare WAF configuration.

**Overall posture: GOOD** — core security controls are strong. Critical XSS and header gaps from the initial audit (PAY-6) have been remediated. GitHub branch protection is now live. Cloudflare WAF configuration is pending board-supplied API token.

---

## PAY-6 Remediations (Shipped — Commit 63d679d)

### 1. HTTP Security Headers — FIXED ✅

All security headers added to `next.config.mjs` via `headers()` function:

| Header | Value | Status |
|--------|-------|--------|
| `Content-Security-Policy` | Restrictive policy; script-src self + trusted CDNs only | ✅ |
| `X-Frame-Options` | `DENY` | ✅ |
| `X-Content-Type-Options` | `nosniff` | ✅ |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | ✅ |
| `X-XSS-Protection` | `1; mode=block` | ✅ |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | ✅ |

**Target:** Score A on [securityheaders.com](https://securityheaders.com).

### 2. XSS Sanitization (Blog Content) — FIXED ✅

- `lib/content.ts`: All AI-generated blog content sanitized with `sanitize-html` before rendering via `dangerouslySetInnerHTML`
- `lib/jsonld.ts`: JSON-LD structured data correctly escapes `<`, `>`, `&` to prevent script injection in schema markup

### 3. JSON-LD Script Injection — FIXED ✅

Safe serialization confirmed in `lib/jsonld.ts` with explicit character escaping.

---

## PAY-7 Outstanding Items

### 1. GitHub Branch Protection — LIVE ✅

**Applied:** 2026-03-12 by CEO (repo made public; branch protection enabled on `main`)

**Active settings:**
- Requires pull request before merging (1 approving review)
- Stale reviews dismissed on new commits
- Enforced for admins
- No force pushes allowed
- No branch deletion allowed

**Risk eliminated:** Direct force-push to main, accidental merge of unreviewed code.

### 2. Cloudflare WAF — PENDING ⚠️

**Target:** `payrolljamaica.com` zone — OWASP Core Ruleset, Bot Fight Mode, Rate Limiting
**Status:** Blocked — all available API tokens (`CLOUDFLARE_TOKEN`, Wrangler OAuth) lack `Zone > Firewall Services: Edit` permission. Cannot configure programmatically.

**Board action required:** Create a Cloudflare API token at https://dash.cloudflare.com/profile/api-tokens with:
- Permission: `Zone > Firewall Services: Edit` for `payrolljamaica.com`
- Add to `~/.claude/.env` as `CF_FIREWALL_TOKEN`

**OR** configure manually (2 min) at https://dash.cloudflare.com:
- Security > WAF > Managed Rules → Enable **Cloudflare OWASP Core Ruleset** (High sensitivity)
- Security > Bots → Enable **Bot Fight Mode**
- Security > Settings → Security Level: **High**
- WAF > Rate Limiting → `/api/*` → 100 req/min block 1 min; `/api/auth/*` → 10 req/min block 10 min

**Risk while pending:** No WAF layer — API endpoints exposed to automated attacks, SQLi/XSS probes, credential stuffing. Application-level mitigations (Zod validation, parameterized queries, login rate limiting) provide defense-in-depth but not WAF coverage.

### 3. Security Report (this document) — DONE ✅

---

## Full Audit Findings

### CRITICAL

#### C1 — API Keys in Local .env (Not in Git)

- **Files:** `payrolljamaica/.env`
- **Status:** Not committed (`.gitignore` covers `.env*`) — LOW RISK
- **Recommendation:** Rotate `REPLICATE_API_KEY` and `OPENROUTER_API_KEY` periodically. Use Cloudflare environment secrets for production.

---

### MEDIUM

#### M1 — JWT Tokens in localStorage (payrolljamaica-website)

- **File:** `frontend/src/stores/auth.ts` lines 91–97
- **Issue:** JWT stored in `localStorage` — readable by any JavaScript on the page. If XSS is introduced, tokens can be stolen.
- **Mitigation now:** Strong CSP prevents inline scripts and untrusted sources. XSS surface is minimal.
- **Recommendation:** Migrate to `httpOnly; Secure; SameSite=Strict` cookies in next backend iteration. JavaScript cannot read httpOnly cookies.
- **Risk:** Medium — mitigated by CSP but not eliminated.

#### M2 — Hardcoded Encryption Salt (payrolljamaica-website)

- **File:** `backend/src/utils/crypto.ts`
- **Issue:** Prior V1 used static salt `'payrolljamaica-encryption-salt'`. **Fixed in PAY-6 audit** — all sensitive fields (bank_account_number, TRN, NIS) now use V2 format: per-record random 16-byte PBKDF2 salt embedded in ciphertext. All 10 D1 records migrated.
- **Status:** ✅ RESOLVED — V2 crypto deployed.

#### M3 — CSP Report Endpoint Lacks Payload Size Limit

- **File:** `app/api/csp-report/route.ts` lines 71–72
- **Issue:** `request.text()` called without Content-Length limit. Potential memory pressure from oversized payloads.
- **Recommendation:** Reject requests where `Content-Length > 16KB` before reading body.
- **Risk:** Low-medium (rate-limited endpoint, but defense in depth).

---

### LOW

#### L1 — CORS Localhost Validation Uses startsWith

- **File:** `backend/src/middleware.ts` line 47
- **Issue:** `requestOrigin.startsWith('http://localhost')` matches `http://localhost.evil.com` under DNS spoofing.
- **Recommendation:** Use exact match: `['http://localhost:3000', 'http://localhost:8080'].includes(requestOrigin)`.

#### L2 — Rate Limiter In-Memory Map Unbounded Growth

- **File:** `backend/src/middleware.ts` line 196
- **Issue:** Cleanup only on `size > 10,000`. No periodic flush. Potential memory creep.
- **Recommendation:** Add `setInterval(() => rateLimitMap.clear(), 5 * 60 * 1000)` at startup.

#### L3 — Security Configuration Error Logged to Console

- **File:** `backend/src/middleware.ts` line 83
- **Issue:** `console.error('[SECURITY] JWT_SECRET not configured...')` reveals security misconfiguration in logs.
- **Recommendation:** Log to structured error tracker only; respond with generic 500.

---

## Positive Findings (Well-Implemented)

| Control | File | Assessment |
|---------|------|-----------|
| SQL injection prevention | All route files | ✅ Parameterized queries throughout; ORDER BY columns whitelisted |
| Password hashing | `backend/src/utils/crypto.ts` | ✅ PBKDF2-SHA256, 100k iterations, random salt, constant-time compare |
| Bank account encryption | `backend/src/routes/employees.ts` | ✅ AES-GCM V2, admin-only decryption, masked for other roles |
| TRN/NIS encryption | `backend/src/routes/employees.ts` | ✅ AES-GCM V2, per-record salt, role-based access |
| Login rate limiting | `backend/src/routes/auth.ts` | ✅ 5 req/min, 15-min lockout after 5 failures |
| Tenant isolation | `backend/src/middleware.ts` | ✅ Tenant context enforced on all protected routes |
| Input validation | `backend/src/utils/validation.ts` | ✅ Zod schemas for all endpoints |
| Audit logging | `backend/src/services/audit.ts` | ✅ Login failures, policy changes, data access; IP anonymized per JDPA |
| JWT revocation | KV namespace blacklist | ✅ Logout invalidates token server-side |
| Branch protection | `Ruben-s-Org/payrolljamaica` main | ✅ Live as of 2026-03-12 |
| XSS in JSON-LD | `lib/jsonld.ts` | ✅ `<`, `>`, `&` escaped correctly |
| Blog content sanitization | `lib/content.ts` | ✅ sanitize-html applied before dangerouslySetInnerHTML |

---

## Jamaica Data Protection Act (JDPA) Compliance Notes

| Requirement | Status | Notes |
|------------|--------|-------|
| Data minimization | ✅ | Only necessary employee fields collected |
| Encryption of sensitive data | ✅ | Bank accounts, TRN, NIS encrypted AES-256-GCM V2 (per-record salt) |
| Access controls | ✅ | Role-based: admin/manager/viewer/employee, tenant isolation |
| Audit trail | ✅ | Login, data access, and policy changes logged with timestamp + actor |
| IP anonymization in logs | ✅ | Implemented in `audit.ts` |
| Right to access/erasure | 🔲 | Data export/deletion API endpoints not yet implemented |
| Data breach notification | 🔲 | No incident response runbook — create one |
| Consent mechanism | 🔲 | No explicit consent capture for data collection |

---

## Remediation Priority

| Priority | Item | Status | Owner | Deadline |
|----------|------|--------|-------|----------|
| 🔴 Critical | Cloudflare WAF + Rate Limiting | ⚠️ Pending firewall token | Board (Ruben) | Immediate |
| 🟠 High | Migrate JWT to httpOnly cookies (M1) | Open | Engineering | Sprint 2 |
| 🟡 Medium | CSP report size limit (M3) | Open | Engineering | Sprint 3 |
| 🟡 Medium | CORS localhost exact match (L1) | Open | Engineering | Sprint 3 |
| 🟢 Low | Rate limiter periodic flush (L2) | Open | Engineering | Sprint 4 |
| 🟢 Low | Remove security error console.log (L3) | Open | Engineering | Sprint 4 |
| 🔲 Backlog | Data export/erasure API (JDPA) | Open | Product + Engineering | TBD |
| 🔲 Backlog | Incident response runbook | Open | Security | TBD |
| 🔲 Backlog | Consent mechanism (JDPA) | Open | Product | TBD |
| ✅ Done | GitHub branch protection on main | Live 2026-03-12 | Board (Ruben) | DONE |
| ✅ Done | Fix encryption salt (M2) | V2 deployed | Engineering | DONE |

---

## Infrastructure Security Summary

| Control | Status | Notes |
|---------|--------|-------|
| HTTPS Only (HTTP→HTTPS redirect) | ✅ | Enforced via Cloudflare |
| HSTS | ✅ | 2-year + preload |
| GitHub Branch Protection (main) | ✅ | Live 2026-03-12 — 1 PR review required, no force push |
| WAF (OWASP Core Rules) | ⚠️ | Pending — blocked on `CF_FIREWALL_TOKEN` |
| Bot Fight Mode | ⚠️ | Pending |
| Rate Limiting — API/Auth | ⚠️ | Pending (app-level rate limiting active as fallback) |
| Browser Integrity Check | ⚠️ | Pending |
| Security Level | ⚠️ | Pending |
| DDoS Protection | ✅ | Cloudflare managed (automatic) |

---

*Report generated by Security Engineer agent (df4d801b) · PayrollJamaica*
*Initial: 2026-03-11 · Updated: 2026-03-12*
*Next full review: 2026-06-11*
