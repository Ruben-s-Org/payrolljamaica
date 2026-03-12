# PayrollJamaica Security Report

**Date:** 2026-03-11
**Author:** Security Engineer
**Scope:** payrolljamaica (Next.js staging/app) + payrolljamaica-website (Vue.js production)
**Classification:** Internal — Confidential

---

## Executive Summary

PayrollJamaica handles extremely sensitive data: employee PII, salary records, tax IDs (TRN), NIS/NHT numbers, and bank account details. A full security audit was conducted covering HTTP headers, XSS vectors, authentication, cryptography, access control, and Cloudflare WAF configuration.

**Overall posture: GOOD** — core security controls are strong. Critical XSS and header gaps from the initial audit (PAY-6) have been remediated. Three infrastructure items remain (GitHub branch protection, Cloudflare WAF, rate limiting).

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

### 1. GitHub Branch Protection — IN PROGRESS ⚠️

**Target:** `Ruben-s-Org/payrolljamaica` → `main` branch
**Required settings:**
- Require pull request before merging (1 approving review)
- Dismiss stale reviews on new commits
- Disallow force pushes
- Disallow branch deletion
- Enforce for admins

**Status:** Blocked — `jarvisemelina` PAT has write but not admin access to the repo. `rubencharlesx` (org admin) must grant admin access or apply protection via GitHub web UI.

**Action required:** Ruben to either (a) go to Settings → Branches → main → Add protection rule, or (b) grant jarvisemelina admin on the repo.

### 2. Cloudflare WAF — CONFIGURED ✅

Applied to zone `payrolljamaica.com` (Zone ID: `71c86bbc9906ff66c76f06c4c142f0b4`):

- **OWASP Core Ruleset:** Enabled (managed ruleset `efb7b8c949ac4650a09736fc376e9aee`)
- **Bot Fight Mode:** Enabled
- **Rate Limiting:**
  - `/api/*` endpoints: 100 req/min per IP (block 1 min)
  - `/api/login` and `/api/auth/*`: 10 req/min per IP (block 10 min)
- **Security Level:** High
- **Browser Integrity Check:** Enabled
- **Challenge Passage:** 30 minutes

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

- **File:** `backend/src/utils/crypto.ts` line 97
- **Issue:** Static salt `'payrolljamaica-encryption-salt'` used for AES-GCM key derivation. Should be random per-operation.
- **Note:** IV is correctly randomized (line 110), which partially compensates.
- **Recommendation:** Replace static salt with `crypto.randomBytes(16)` stored alongside ciphertext.
- **Risk:** Medium — weakens encryption entropy for bank account data.

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
| Bank account encryption | `backend/src/routes/employees.ts` | ✅ AES-GCM, admin-only decryption, masked for other roles |
| Login rate limiting | `backend/src/routes/auth.ts` | ✅ 5 req/min, 15-min lockout after 5 failures |
| Tenant isolation | `backend/src/middleware.ts` | ✅ Tenant context enforced on all protected routes |
| Input validation | `backend/src/utils/validation.ts` | ✅ Zod schemas for all endpoints |
| Audit logging | `backend/src/services/audit.ts` | ✅ Login failures, policy changes, data access; IP anonymized per JDPA |
| XSS in JSON-LD | `lib/jsonld.ts` | ✅ `<`, `>`, `&` escaped correctly |
| Blog content sanitization | `lib/content.ts` | ✅ sanitize-html applied before dangerouslySetInnerHTML |

---

## Jamaica Data Protection Act (JDPA) Compliance Notes

| Requirement | Status | Notes |
|------------|--------|-------|
| Data minimization | ✅ | Only necessary employee fields collected |
| Encryption of sensitive data | ⚠️ | Bank accounts encrypted (AES-GCM); salt issue (M2) should be fixed |
| Access controls | ✅ | Role-based: admin vs employee, tenant isolation |
| Audit trail | ✅ | Login, data access, and policy changes logged |
| IP anonymization in logs | ✅ | Implemented in `audit.ts` |
| Right to access/erasure | 🔲 | API endpoints for data export/deletion not yet confirmed |
| Data breach notification | 🔲 | No incident response runbook found — create one |

---

## Remediation Priority

| Priority | Item | Owner | Deadline |
|----------|------|-------|----------|
| 🔴 Critical | GitHub branch protection on main | Ruben (needs admin) | Immediate |
| 🟠 High | Fix hardcoded encryption salt (M2) | Engineering | Sprint 2 |
| 🟠 High | Migrate JWT to httpOnly cookies (M1) | Engineering | Sprint 2 |
| 🟡 Medium | CSP report size limit (M3) | Engineering | Sprint 3 |
| 🟡 Medium | CORS localhost exact match (L1) | Engineering | Sprint 3 |
| 🟢 Low | Rate limiter periodic flush (L2) | Engineering | Sprint 4 |
| 🟢 Low | Remove security error console.log (L3) | Engineering | Sprint 4 |
| 🔲 Backlog | Data export/erasure API (JDPA) | Product + Engineering | TBD |
| 🔲 Backlog | Incident response runbook | Security | TBD |

---

## Cloudflare Security Configuration

**Zone:** payrolljamaica.com
**Account:** rubencharlestouitou@gmail.com

| Feature | Status |
|---------|--------|
| HTTPS Only (HTTP→HTTPS redirect) | ✅ Enforced |
| HSTS | ✅ 2-year + preload |
| WAF (OWASP Core Rules) | ✅ Enabled |
| Bot Fight Mode | ✅ Enabled |
| Rate Limiting — API | ✅ 100 req/min |
| Rate Limiting — Auth | ✅ 10 req/min |
| Browser Integrity Check | ✅ Enabled |
| Security Level | ✅ High |
| DDoS Protection | ✅ Cloudflare managed (automatic) |

---

*Report generated by Security Engineer agent (df4d801b) · PayrollJamaica · 2026-03-11*
*Next review: 2026-06-11*
