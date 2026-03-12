# Google Analytics 4 & Search Console Setup Guide — payrolljamaica.com

**Prepared for:** PayrollJamaica Dev Team
**Cloudflare Account ID:** 5add649356fc07ee71d7d586edba28ae
**Cloudflare Project:** payrolljamaica
**Cloudflare Zone ID (payrolljamaica.com):** 71c86bbc9906ff66c76f06c4c142f0b4

---

## Overview

This guide covers:
1. Getting your GA4 Measurement ID
2. Adding it to Cloudflare Pages environment variables
3. Verifying Google Search Console (GSC) — via GA4 OR DNS TXT record
4. Linking GA4 to Google Search Console
5. Expected timelines for data

Estimated time: 20–30 minutes.

---

## Step 1 — Get Your GA4 Measurement ID

The GA4 Measurement ID follows the format `G-XXXXXXXXXX`.

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select the **PayrollJamaica** GA4 property (or create one if it doesn't exist)
3. In the left sidebar, click **Admin** (gear icon, bottom left)
4. Under **Data collection and modification**, click **Data streams**
5. Select the **payrolljamaica.com** web data stream
6. The **Measurement ID** (`G-XXXXXXXXXX`) is displayed at the top right of the stream details panel

**Copy this value — you'll need it in Step 2.**

> If no property exists yet:
> - In Admin, click **Create** → **Property**
> - Enter `PayrollJamaica` as the property name
> - Set timezone to **Jamaica (UTC-5)** and currency to **JMD**
> - Click through to create a **Web** data stream for `payrolljamaica.com`
> - Copy the Measurement ID from the stream details

---

## Step 2 — Add GA4 Measurement ID to Cloudflare Pages

The Next.js site reads the measurement ID from `NEXT_PUBLIC_GA_MEASUREMENT_ID`. This must be set as an environment variable in Cloudflare Pages so it's available at build time.

### Option A — Cloudflare Dashboard (Recommended)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages** → **payrolljamaica**
3. Click **Settings** → **Environment variables**
4. Click **Add variable** under **Production** (repeat for **Preview** if needed)
5. Set:
   - **Variable name:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** `G-XXXXXXXXXX` (your actual Measurement ID from Step 1)
6. Click **Save**
7. **Redeploy** the project for the variable to take effect:
   - Go to **Deployments** tab → click **Retry deployment** on the latest deployment
   - Or push a new commit to trigger a fresh build

### Option B — Wrangler CLI

```bash
# Set for production
npx wrangler pages secret put NEXT_PUBLIC_GA_MEASUREMENT_ID \
  --project-name payrolljamaica

# When prompted, paste: G-XXXXXXXXXX
```

### Verify the variable is live

After redeployment, visit `https://payrolljamaica.com` and open browser DevTools → Network tab. You should see requests to `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX` loading on the page.

---

## Step 3 — Verify Google Search Console

There are two methods to verify GSC ownership for payrolljamaica.com. **Method A (GA4 linking) is faster** if GA4 is already tracking the site.

### Method A — Verify via Google Analytics (Preferred)

This works only if GA4 is already live on payrolljamaica.com (Steps 1–2 complete and redeployed).

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add property** → Select **URL prefix**
3. Enter: `https://payrolljamaica.com`
4. Under **Other verification methods**, select **Google Analytics**
5. Click **Verify**

GSC will confirm ownership by detecting the GA4 tracking snippet on the live site. This is instant when GA4 is correctly deployed.

> **Note:** Use the same Google account for both GA4 and GSC.

---

### Method B — Verify via DNS TXT Record (Cloudflare)

Use this method if GA4 is not yet live, or if you prefer domain-level verification.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add property** → Select **Domain** (preferred — covers all subdomains)
3. Enter: `payrolljamaica.com`
4. Click **Continue** — Google will show a TXT record like:
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
5. Copy the full value

**Add the TXT record in Cloudflare:**

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select the **payrolljamaica.com** zone (Zone ID: `71c86bbc9906ff66c76f06c4c142f0b4`)
3. Go to **DNS** → **Records** → **Add record**
4. Set:
   - **Type:** `TXT`
   - **Name:** `@`
   - **Content:** `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
   - **TTL:** Auto
5. Click **Save**
6. Back in GSC, click **Verify**

DNS propagation is usually instant with Cloudflare but can take up to 24 hours globally. Google typically verifies within a few minutes of Cloudflare saving the record.

> See also: `/seo/CLOUDFLARE_DNS_VERIFICATION_TEMPLATE.md` for a quick-reference template.

---

## Step 4 — Link GA4 to Google Search Console

Linking GSC to GA4 lets you see organic search queries, clicks, and impressions directly inside the GA4 interface.

1. In [analytics.google.com](https://analytics.google.com), go to **Admin**
2. Under **Product links**, click **Search Console links**
3. Click **Link** → **Choose accounts**
4. Select the **payrolljamaica.com** GSC property
5. Select the GA4 web stream for `payrolljamaica.com`
6. Click **Next** → **Submit**

The link is confirmed immediately. Search Console data appears in GA4 under **Reports** → **Acquisition** → **Search Console** → **Queries** within 24–48 hours.

---

## Step 5 — Submit the Sitemap to Search Console

Once verified, submit the sitemap so Google crawls payrolljamaica.com efficiently.

1. In GSC, go to **Sitemaps** (left sidebar, under Indexing)
2. In the **Add a new sitemap** field, enter: `sitemap.xml`
3. Click **Submit**

The payrolljamaica.com sitemap is auto-generated by Next.js at:
`https://payrolljamaica.com/sitemap.xml`

GSC will begin processing the sitemap within a few hours.

---

## Expected Timelines

| Event | Timeline |
|---|---|
| GA4 tracking live after Cloudflare redeploy | Immediate |
| GSC verification (GA4 method) | Instant (same session) |
| GSC verification (DNS TXT method) | Minutes to 24 hours |
| GA4 ↔ GSC link active | Immediate after linking |
| Search Console data in GA4 | 24–48 hours |
| First GSC clicks/impressions data | 3–7 days after verification |
| Full impression data (new pages indexed) | 2–8 weeks |
| Rankings for target keywords | 4–16 weeks (varies by competition) |

---

## Troubleshooting

**GA4 tracking not showing in Network tab after deploy:**
- Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in Cloudflare Pages environment variables
- Confirm the project was redeployed after adding the variable
- Clear browser cache and check in an incognito window

**GSC DNS verification failing:**
- Ensure the TXT record name is `@` (not `www` or `payrolljamaica.com`)
- In Cloudflare, confirm the record shows in the DNS table and is **not** proxied (TXT records should not be proxied)
- Wait 5 minutes and retry verification in GSC

**Search Console data not appearing in GA4:**
- Confirm both GA4 and GSC are owned by the same Google account
- Re-check the link in GA4 Admin → Search Console links
- Allow 48 hours for the link to populate data

---

## Related Files

- `/seo/CLOUDFLARE_DNS_VERIFICATION_TEMPLATE.md` — DNS TXT record quick-reference
- `/seo/GOOGLE_SEARCH_CONSOLE_SETUP.md` — Full GSC domain verification & monitoring guide
- `/seo/SEO_STATUS_REPORT_MAR2026.md` — Current SEO status and priority actions
