# Google Search Console Setup Guide — payrolljamaica.com
**Task:** PAY-32
**Prepared by:** CMO
**Date:** March 2026

---

## Overview

This guide walks through the complete setup of Google Search Console (GSC) for payrolljamaica.com, including domain verification via Cloudflare DNS, sitemap submission, keyword tracking configuration, and a weekly monitoring checklist. A Bing Webmaster Tools setup is included as a bonus.

Estimated time to complete: 30–45 minutes.

---

## Step 1 — Add Your Property in Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with the Google account that manages PayrollJamaica (or create a dedicated `seo@payrolljamaica.com` Google account for this purpose)
3. Click **Add property** (top left, property selector dropdown)
4. Select **Domain** (not URL prefix) — enter: `payrolljamaica.com`
   - Domain property covers all subdomains (www, app, etc.) and both http/https
   - This is the correct choice for payrolljamaica.com
5. Click **Continue**

---

## Step 2 — Verify Domain Ownership via Cloudflare DNS

Google will show you a TXT record to add to your DNS. Cloudflare is the DNS provider for payrolljamaica.com, so verification is done there.

### 2a — Copy the TXT record from Google

In the GSC verification screen, you will see a TXT record that looks like:

```
google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Copy the full value (everything after `google-site-verification=`).

### 2b — Add the TXT record in Cloudflare

1. Log in to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select the **payrolljamaica.com** zone
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Set the following:
   - **Type:** TXT
   - **Name:** `@` (represents the root domain)
   - **Content:** Paste the full `google-site-verification=XXXXX` value
   - **TTL:** Auto
   - **Proxy status:** DNS only (grey cloud — not proxied)
6. Click **Save**

### 2c — Verify in Google Search Console

1. Return to GSC and click **Verify**
2. DNS propagation is usually instant with Cloudflare, but can take up to 5 minutes
3. If verification fails, wait 5 minutes and try again
4. Once verified, GSC will show **"Ownership verified"**

**Important:** Do not delete the TXT record after verification. Google periodically re-checks ownership and will revoke access if the record is removed.

---

## Step 3 — Submit the Sitemap

The sitemap URL for payrolljamaica.com is: `https://payrolljamaica.com/sitemap.xml`

### 3a — Submit in GSC

1. In GSC left sidebar, click **Sitemaps** (under Indexing)
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
   - GSC prepends the domain automatically — it will submit `https://payrolljamaica.com/sitemap.xml`
3. Click **Submit**
4. Status should change to **"Success"** within a few minutes

### 3b — Verify Sitemap Coverage

After 24–48 hours:
1. Click on the sitemap entry in GSC
2. Check:
   - **Submitted URLs** — should reflect the total number of pages on the site (currently ~285+ blog posts)
   - **Indexed URLs** — the number Google has crawled and indexed
   - **Errors** — investigate any sitemap parsing errors immediately

If the indexed count is significantly lower than submitted (e.g., 50 indexed out of 285 submitted), review the Coverage report for "Excluded" and "Errors" reasons.

---

## Step 4 — Keywords to Track (Tier 1 + Tier 2)

Based on the Jamaica Keyword Audit 2026 (`seo/JAMAICA_KEYWORD_AUDIT_2026.md`), the following keywords are the priority tracking targets in GSC.

### Tier 1 — Commercial Intent (Highest Priority)

| Keyword | Monthly Searches (est.) | Target Ranking |
|---|---|---|
| payroll software Jamaica | 320 | Top 5 |
| payroll services Jamaica | 210 | Top 5 |
| payroll company Jamaica | 180 | Top 5 |
| HR software Jamaica | 260 | Top 10 |
| best payroll software Jamaica | 140 | Top 5 |
| employee management software Jamaica | 110 | Top 10 |
| payroll outsourcing Jamaica | 90 | Top 5 |
| payroll Jamaica small business | 70 | Top 3 |

### Tier 2 — Compliance & Calculator Keywords

| Keyword | Monthly Searches (est.) | Target Ranking |
|---|---|---|
| PAYE calculator Jamaica | 880 | Top 3 |
| income tax Jamaica 2026 | 640 | Top 10 |
| NIS contribution Jamaica 2026 | 420 | Top 5 |
| NHT contribution Jamaica | 380 | Top 5 |
| tax threshold Jamaica 2025 | 310 | Top 5 |
| PAYE threshold Jamaica 2026 | 290 | Top 3 |
| maternity leave Jamaica | 280 | Top 10 |
| payroll tax Jamaica | 210 | Low |
| statutory deductions Jamaica | 190 | Top 5 |
| how to calculate PAYE Jamaica | 170 | Top 3 |

**Total tracked keywords: 18 priority terms** (Tier 1 + Tier 2)

### How to Track These Keywords in GSC

GSC does not have a "keyword tracking" dashboard like Ahrefs/SEMrush. Instead, track via:

1. **Performance Report** → Search type: Web
2. Click **"+ New"** → **Query** → **"Query contains"** → enter each keyword
3. Set date range to **Last 28 days** (rolling)
4. Export data as CSV weekly for trend tracking

For deeper keyword tracking, connect GSC to **Google Looker Studio** (free) to build a dashboard that tracks these 18 keywords' impressions, clicks, and average position over time.

---

## Step 5 — Performance Tracking for Jamaica-Specific Queries

### 5a — Country Filter

By default, GSC shows global data. To filter for Jamaica:

1. Performance Report → click **"+ New"**
2. **Country** → **"Country equals"** → **Jamaica**
3. This will show impressions and clicks from Jamaican searchers specifically

**Save this filtered view** by bookmarking the URL — GSC does not save custom filter combinations.

### 5b — Set Up Regular Export

1. Apply the Jamaica country filter + date range of "Last 28 days"
2. Click **Export** → Google Sheets
3. Save to a shared Google Sheet titled "PayrollJamaica GSC — Jamaica Queries"
4. Do this export every Monday morning (takes 2 minutes)

### 5c — Device Segmentation

Jamaican users are predominantly mobile. Check the mobile/desktop split:

1. Performance Report → **Device** tab
2. Confirm what percentage of Jamaica impressions come from mobile
3. If mobile is >60%, prioritise mobile Core Web Vitals (Cloudflare Workers handles this well)

---

## Step 6 — Set Up Alerts and Monitoring

### 6a — Email Notifications

1. GSC Settings (gear icon, top right) → **Email preferences**
2. Enable notifications for:
   - Coverage issues (new crawl errors)
   - Security issues
   - Manual actions (penalties — important to catch immediately)

### 6b — Core Web Vitals Baseline

1. Go to **Experience** → **Core Web Vitals** in GSC sidebar
2. Note current scores for mobile and desktop
3. Any pages in "Poor" status need immediate attention — these hurt rankings

---

## Weekly Monitoring Checklist (Every Monday)

Run this checklist every Monday morning. Takes approximately 20 minutes.

### Monday Monitoring Routine

**1. Overall Performance (5 min)**
- [ ] Open GSC Performance Report
- [ ] Set date range: Last 7 days vs. previous 7 days
- [ ] Check total clicks, impressions, CTR — any significant drops?
- [ ] Flag any metric that dropped >20% week-over-week for investigation

**2. Top 20 Jamaican Payroll Keywords (10 min)**
- [ ] Apply Jamaica country filter
- [ ] Sort by Impressions (descending)
- [ ] Review position changes for the 18 priority keywords listed in Step 4
- [ ] Record current average position for each keyword in tracking spreadsheet
- Keywords to check every week:
  1. payroll software Jamaica
  2. payroll services Jamaica
  3. payroll company Jamaica
  4. HR software Jamaica
  5. best payroll software Jamaica
  6. employee management software Jamaica
  7. payroll outsourcing Jamaica
  8. payroll Jamaica small business
  9. PAYE calculator Jamaica
  10. income tax Jamaica 2026
  11. NIS contribution Jamaica 2026
  12. NHT contribution Jamaica
  13. tax threshold Jamaica 2025
  14. PAYE threshold Jamaica 2026
  15. maternity leave Jamaica
  16. payroll tax Jamaica
  17. statutory deductions Jamaica
  18. how to calculate PAYE Jamaica
  19. Jamaica payroll software price
  20. payroll software Jamaica free trial

**3. Indexing Health (3 min)**
- [ ] Go to **Indexing** → **Pages**
- [ ] Check "Not indexed" count — is it growing or shrinking?
- [ ] Click into "Crawled - currently not indexed" — are any important pages excluded?
- [ ] Check if new blog posts from the previous week appear in "Indexed" within 7 days

**4. Sitemap Status (1 min)**
- [ ] Go to **Indexing** → **Sitemaps**
- [ ] Confirm sitemap status is still "Success" — no errors
- [ ] Check if submitted URL count matches expected total posts

**5. Coverage Errors (1 min)**
- [ ] Go to **Indexing** → **Pages** → Filter: "Error"
- [ ] Any new 404 errors? Fix immediately (redirect to correct URL)
- [ ] Any server errors (5xx)? Escalate to dev if present

---

## Monthly Review (First Monday of Each Month)

In addition to the weekly checklist:

- [ ] Export full Performance data for the month to the tracking Google Sheet
- [ ] Update ranking positions for all 18 priority keywords
- [ ] Identify top 5 pages by clicks — are they converting (check against signup data)?
- [ ] Identify keywords where we appear on page 2 (positions 11–20) — these are quick-win optimisation targets
- [ ] Submit any new blog posts' URLs via **URL Inspection** → **Request Indexing** if they haven't indexed within 7 days

---

## Bonus: Bing Webmaster Tools Setup

Bing has a smaller market share than Google, but Bing powers DuckDuckGo and Microsoft Edge, adding incremental traffic. Setup takes 10 minutes.

### Setup Steps

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account (create one at outlook.com if needed)
3. Click **Add a site** → enter `https://payrolljamaica.com`
4. Click **Add**

### Verification Options (Choose One)

**Option A — Import from Google Search Console (Easiest)**
1. On the Bing setup screen, select **Import from Google Search Console**
2. Authorise the Google account that has GSC access
3. Bing will automatically import your site, sitemap, and some performance data
4. This is the fastest method if GSC is already set up

**Option B — XML File Verification**
1. Download the BingSiteAuth.xml file Bing provides
2. Upload it to the root of payrolljamaica.com (i.e., accessible at `https://payrolljamaica.com/BingSiteAuth.xml`)
3. Click **Verify** in Bing Webmaster Tools

**Option C — CNAME Record (DNS)**
1. Bing provides a CNAME record value
2. Add it in Cloudflare DNS (same process as Google TXT record — see Step 2b, but choose CNAME type)
3. Click **Verify**

### Submit Sitemap to Bing

1. Once verified, go to **Sitemaps** in Bing Webmaster Tools
2. Enter: `https://payrolljamaica.com/sitemap.xml`
3. Click **Submit**

### Bing SEO Tools Worth Using

- **Keyword Research** — Bing has its own keyword tool with data from Bing/DuckDuckGo searches; useful for validating Jamaica keyword volumes
- **Site Scan** — automated SEO audit that flags on-page issues
- **Backlink data** — Bing often shows different backlink data than Google; useful for link building

---

## Troubleshooting Common Issues

| Issue | Cause | Fix |
|---|---|---|
| Verification fails after adding TXT record | DNS propagation delay | Wait 10 minutes and retry |
| Sitemap shows "Couldn't fetch" | Sitemap URL blocked by robots.txt or firewall | Check robots.txt doesn't disallow /sitemap.xml |
| Pages indexed count is very low vs. submitted | Duplicate content or thin content signals | Review page quality; add canonical tags |
| Impressions show but no clicks | Low CTR — title/meta descriptions not compelling | Rewrite meta descriptions with Jamaica-specific CTAs |
| New blog posts not indexed after 2 weeks | Google hasn't crawled yet | Use URL Inspection → Request Indexing for priority posts |

---

## Resources

- Google Search Console Help: [support.google.com/webmasters](https://support.google.com/webmasters)
- GSC Training (free): [developers.google.com/search/docs](https://developers.google.com/search/docs)
- Bing Webmaster Tools Help: [bing.com/webmasters/help](https://www.bing.com/webmasters/help)
- Related: `seo/JAMAICA_KEYWORD_AUDIT_2026.md` — full keyword list and SEO strategy
- Related: `seo/JAMAICA_LOCAL_CITATIONS_STRATEGY.md` — local SEO signals

---

*GSC Setup Guide prepared by CMO for PAY-32. After setup, assign weekly monitoring to SEO Specialist. First full performance report available 28 days after verification.*
