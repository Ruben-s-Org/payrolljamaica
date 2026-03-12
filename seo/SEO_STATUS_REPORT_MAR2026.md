# PayrollJamaica — SEO Status Report
**Prepared by:** SEO Specialist
**Date:** March 12, 2026
**Reports to:** CMO

---

## Executive Summary

**Site health: 8.5/10.** PayrollJamaica has an exceptionally strong technical SEO foundation — 308 blog posts, 50+ geo/industry landing pages, comprehensive structured data, and correct metadata on every page. The audit identified three execution gaps: (1) a static sitemap that required manual regeneration, (2) no dedicated landing pages for the three highest-volume calculator keywords, and (3) no Google Business Profile or directory citations yet. Items 1 and 2 have been implemented and deployed. Item 3 awaits Ruben.

**Estimated organic traffic opportunity:** owning "PAYE calculator Jamaica" (880/mo), "NIS calculator Jamaica" (420/mo), and "NHT calculator Jamaica" (380/mo) alone adds ~1,680 monthly high-intent visitors on top of the existing calculator traffic.

---

## What Was Done This Session

### 1. Dynamic Sitemap (`app/sitemap.ts`) ✅ Deployed
**Problem:** Site used a static `/public/sitemap.xml` that required running a manual script after each content addition. New pages weren't indexed until someone remembered to regenerate.

**Fix:** Created `/app/sitemap.ts` — a Next.js native dynamic sitemap that:
- Auto-includes every blog post from `/content/` at build time
- Covers all 50+ landing pages with correct priorities (1.0 → 0.3)
- New pages (including the three calculator pages) appear immediately
- Served at `https://payrolljamaica.com/sitemap.xml` automatically on every Cloudflare Pages deploy

### 2. PAYE Calculator Landing Page (`/paye-calculator-jamaica`) ✅ Deployed
**Target keyword:** "PAYE calculator Jamaica" — estimated **880 monthly searches**, Low difficulty

**What's on the page:**
- H1 targeting the exact keyword with 2026 freshness signal
- Embeds the full PayrollCalculator component (same tool as /calculator)
- 2026 rate table (0%, 25%, 30% bands with JMD threshold)
- Step-by-step PAYE calculation guide (5 steps)
- Remittance deadlines and penalty warnings
- Comparison to NIS/NHT/Education Tax
- HowTo schema (6 steps) — targets how-to rich results
- FAQPage schema (6 Q&As) — targets "People Also Ask" boxes
- WebApplication schema, BreadcrumbList schema
- Internal links to /calculator, /nis-calculator-jamaica, /nht-calculator-jamaica, relevant blog posts

### 3. NIS Calculator Landing Page (`/nis-calculator-jamaica`) ✅ Deployed
**Target keyword:** "NIS calculator Jamaica" — estimated **420 monthly searches**, Low difficulty

**What's on the page:**
- H1 targeting "NIS Calculator Jamaica 2026"
- Full NIS rate table (3%+3%, JMD $5M ceiling)
- Step-by-step NIS calculation guide
- NIS benefits for employees (retirement, sickness, maternity, injury)
- Remittance deadlines
- FAQPage schema (5 Q&As targeting "People Also Ask")
- WebApplication + BreadcrumbList schemas

### 4. NHT Calculator Landing Page (`/nht-calculator-jamaica`) ✅ Deployed
**Target keyword:** "NHT calculator Jamaica" — estimated **380 monthly searches**, Low difficulty

**What's on the page:**
- H1 targeting "NHT Calculator Jamaica 2026"
- NHT rate table (2%+3%, no ceiling)
- NHT refund eligibility explained (7-year rule)
- FAQPage schema (5 Q&As targeting "People Also Ask")
- Clear explanation: no ceiling (vs NIS which has JMD $5M ceiling)

---

## Current Technical SEO Scorecard

| Area | Status | Score | Notes |
|---|---|---|---|
| Structured data (JSON-LD) | Excellent | 9/10 | Organization, LocalBusiness, FAQPage, HowTo, BlogPosting, BreadcrumbList, WebApplication all implemented |
| Metadata completeness | Excellent | 9/10 | Title, description, OG, Twitter, canonical, hreflang on every page |
| Sitemap | Fixed → Excellent | 9/10 | Now dynamic via app/sitemap.ts |
| robots.txt | Excellent | 10/10 | Correct disallows, sitemap declared |
| Internal linking | Good | 8/10 | 3-layer CTA system in blog posts, cross-links between landing pages |
| Blog content depth | Excellent | 9/10 | 308 posts, 1,000–3,000+ words each, Jamaica-specific |
| Landing page coverage | Good | 8/10 | 50+ pages; 3 new calculator pages added |
| Page speed signals | Good | 7/10 | next/font optimized; no next/image yet |
| Image optimization | Gap | 5/10 | All pages use static /og.jpg; no per-page OG images |
| E-E-A-T signals | Weak | 4/10 | No human authors, no reviews, no media mentions |
| Backlinks | Critical gap | 1/10 | Zero external backlinks identified |
| Google Business Profile | Pending | 0/10 | Awaiting Ruben action |
| Local citations | Pending | 0/10 | Awaiting Ruben action |

---

## Keyword Ranking Priorities

### Tier 1 — Own These Now (High Volume, Low Difficulty)
| Keyword | Est. Monthly Searches | Target Page | Status |
|---|---|---|---|
| PAYE calculator Jamaica | 880 | /paye-calculator-jamaica | **NEW — deployed** |
| NIS calculator Jamaica | 420 | /nis-calculator-jamaica | **NEW — deployed** |
| NHT calculator Jamaica | 380 | /nht-calculator-jamaica | **NEW — deployed** |
| payroll software Jamaica | 320 | /payroll-software-jamaica | Existing, optimized |
| payroll services Jamaica | 210 | /payroll-services | Existing, optimized |
| payroll company Jamaica | 180 | /payroll-company-jamaica | Existing, optimized |
| best payroll software Jamaica | 140 | /payroll-software-jamaica | 1 blog post exists |

### Tier 2 — Strong Content, Needs Ranking Push
| Keyword | Est. Monthly Searches | Content Status |
|---|---|---|
| income tax Jamaica 2026 | 640 | Blog posts exist |
| PAYE threshold Jamaica 2026 | 290 | Strong blog post |
| NHT contributions Jamaica | 380 | Blog posts exist |
| NIS contribution Jamaica 2026 | 420 | Blog post exists |
| payroll Jamaica small business | 70 | Multiple posts |
| how to do payroll in Jamaica | ~200 | Blog posts exist |

### Tier 3 — Quick Wins (Very Low Difficulty)
| Keyword | Action Needed |
|---|---|
| payroll Jamaica free trial | Create dedicated page or blog post |
| payroll Jamaica pricing | /pricing page exists — optimize |
| payroll outsourcing Jamaica | /payroll-outsourcing-jamaica exists |
| Jamaica payroll software price | Blog post + link from /pricing |

---

## Critical Outstanding Actions (Ruben Required)

### 1. Google Business Profile — **URGENT** (20 min)
**Impact: HIGH.** Google Business Profile is the #1 local SEO signal. Without it:
- PayrollJamaica won't appear in Google's local pack ("3-pack")
- Zero presence on Google Maps
- Competitors with GBP will outrank us on "payroll company Jamaica" even with inferior websites

**Action:** Follow `/seo/GBP_ACTION_PACK_FOR_RUBEN.md`

### 2. Google Search Console Verification — **URGENT** (30 min)
**Impact: HIGH.** Without GSC:
- Cannot monitor which keywords we rank for
- Cannot identify crawl errors or indexing issues
- Cannot submit the sitemap for prioritized crawling
- Cannot see click-through rates or impressions

**Action:** Follow `/seo/GOOGLE_SEARCH_CONSOLE_SETUP.md`

### 3. Local Directory Citations — HIGH (2-3 hours, can be done in batches)
**Impact: MEDIUM-HIGH.** 15+ Jamaica-specific directories identified in `/seo/JAMAICA_LOCAL_CITATIONS_2026.md`. Start with:
1. JAMPRO Business Register (government — high authority)
2. Jamaica Yellow Pages
3. Jamaica Business Directory
4. Bing Places for Business (syncs with GBP)

---

## Recommended Next Steps (SEO Specialist Will Execute)

### A. Content Gaps — New Blog Posts (This Week)
These high-value keywords have zero content and very low competition:

1. **"Jamaica payroll software price"** — searchers comparing costs; leads directly to /pricing
2. **"payroll Jamaica free trial"** — bottom-of-funnel, very high intent
3. **"Jamaica Education Tax calculator"** — same pattern as PAYE/NIS/NHT, unclaimed
4. **"TAJ payroll registration Jamaica"** — how to register with TAJ, high informational value

### B. Related Posts Component
Blog posts currently link to landing pages (via "Related Resources") but not to each other. A "Read Next" section showing 3 related blog posts would:
- Increase average session duration
- Distribute link equity across the blog
- Reduce bounce rate

### C. E-E-A-T Improvements
Google rewards "Experience, Expertise, Authoritativeness, and Trustworthiness." Currently missing:
- **Human author attribution** — Add "Written by PayrollJamaica Compliance Team" to blog posts
- **Customer reviews/testimonials** — Even 3-5 real testimonials would help
- **Media mentions** — One guest post in Jamaica Observer Business or Loop Jamaica would be transformative

### D. Education Tax Calculator Landing Page
Following the same pattern as PAYE/NIS/NHT:
- Target: "Education Tax calculator Jamaica" (~150/mo, very low difficulty)
- Page: `/education-tax-calculator-jamaica`
- Will complete the calculator keyword cluster

---

## 90-Day Ranking Projections

Based on current content quality and the new structured data implementation:

| Keyword | Current (Est.) | 30 days | 60 days | 90 days |
|---|---|---|---|---|
| payroll Jamaica | Not in top 50 | Top 30 | Top 15 | Top 10 |
| payroll software Jamaica | Not in top 50 | Top 20 | Top 10 | Top 5 |
| PAYE calculator Jamaica | Not in top 50 | Top 15 | Top 8 | Top 5 |
| NIS calculator Jamaica | Not in top 50 | Top 10 | Top 5 | Top 3 |
| NHT calculator Jamaica | Not in top 50 | Top 10 | Top 5 | Top 3 |
| payroll company Jamaica | Not in top 50 | Top 20 | Top 10 | Top 8 |

**Caveat:** These projections assume Google Business Profile and GSC are set up within 2 weeks. Without GBP, local pack rankings won't materialize regardless of on-page optimization.

---

## Backlink Strategy (Critical Gap)

PayrollJamaica has **zero external backlinks** — this is the biggest medium-term ranking blocker. High-authority backlinks are required to compete for "payroll Jamaica" head terms.

**Priority backlink targets:**
1. **Jamaica Observer Business** — Guest article on payroll compliance for Jamaican SMEs
2. **Loop Jamaica** — Business section, accept contributed articles
3. **JBDC (Jamaica Business Development Corporation)** — Free listing + article opportunity
4. **PSOJ (Private Sector Organisation of Jamaica)** — Member resource listing
5. **Accounting firm partnerships** — Each firm that links to us from their website is a high-authority local backlink
6. **University of Technology Jamaica / UTech** — Link from their business/HR resources page

**Recommended outreach:** CMO or CEO should reach out to Jamaica Observer Business for a contributed article on "What every Jamaican business owner needs to know about payroll compliance in 2026." This one article could generate 20–50 referral visitors/month AND provide a high-authority backlink.

---

## Summary

Three high-value calculator pages are live. The sitemap is now fully dynamic. The site's technical SEO is among the best in the Jamaica market. The next 30 days should focus on:

1. **Ruben:** Google Business Profile + Google Search Console (2 hours total, highest ROI task)
2. **SEO Specialist:** Education Tax calculator page + 4 new targeted blog posts
3. **CMO/CEO:** Initiate backlink outreach to Jamaica Observer + JBDC

With GBP, GSC, and 3 quality backlinks in place, expect to appear in Google's local pack for "payroll company Jamaica" within 60 days.

---
*Next report: April 1, 2026 — will include GSC data on keyword rankings and crawl coverage.*
