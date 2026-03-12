# Cloudflare DNS Verification Template — payrolljamaica.com

**Cloudflare Zone:** payrolljamaica.com
**Zone ID:** `71c86bbc9906ff66c76f06c4c142f0b4`
**Cloudflare Account ID:** `5add649356fc07ee71d7d586edba28ae`

Use this template whenever you need to add a DNS TXT verification record for payrolljamaica.com in Cloudflare.

---

## When to use this

You'll need to add a DNS TXT record to Cloudflare when verifying payrolljamaica.com ownership for:
- Google Search Console (domain or URL prefix property)
- Bing Webmaster Tools
- Any other third-party service that uses DNS-based ownership verification

---

## How to Add a DNS TXT Record in Cloudflare

### Via Cloudflare Dashboard

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select the **payrolljamaica.com** zone
3. Click **DNS** in the left sidebar → **Records**
4. Click **Add record**
5. Fill in the fields as shown in the template below
6. Click **Save**
7. Return to the verification tool and click **Verify**

---

## Record Template

When the verification service gives you a token, fill in this template:

| Field | Value |
|---|---|
| **Type** | `TXT` |
| **Name** | `@` |
| **Content** | `[paste the full verification value here]` |
| **TTL** | Auto |
| **Proxy status** | DNS only (grey cloud — do NOT proxy TXT records) |

---

## Google Search Console TXT Record Example

When Google Search Console gives you a verification code, it will look like:

```
google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz0123456789AbCdEf
```

Enter it in Cloudflare as:

| Field | Value |
|---|---|
| **Type** | `TXT` |
| **Name** | `@` |
| **Content** | `google-site-verification=AbCdEfGhIjKlMnOpQrStUvWxYz0123456789AbCdEf` |
| **TTL** | Auto |

---

## Wrangler CLI Alternative

If you prefer to manage DNS via CLI (requires Cloudflare API token with DNS edit permissions):

```bash
# Add Google Search Console TXT record
curl -X POST "https://api.cloudflare.com/client/v4/zones/71c86bbc9906ff66c76f06c4c142f0b4/dns_records" \
  -H "Authorization: Bearer YOUR_CF_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "TXT",
    "name": "@",
    "content": "google-site-verification=YOUR_VERIFICATION_TOKEN_HERE",
    "ttl": 1
  }'
```

Replace `YOUR_CF_API_TOKEN` with your Cloudflare API token and `YOUR_VERIFICATION_TOKEN_HERE` with the token from Google Search Console.

---

## Propagation Notes

- Cloudflare TXT records typically propagate **within seconds to minutes** for most DNS resolvers
- Google's verification crawl usually happens within **1–5 minutes** after you click "Verify" in GSC
- If verification fails, wait 5 minutes and try again — the record is almost certainly live
- Global DNS propagation (for all resolvers worldwide) can take up to **24–48 hours**, but GSC verification doesn't require global propagation

---

## Existing DNS TXT Records for payrolljamaica.com

Keep a log of all TXT records added here to avoid confusion:

| Service | Record value (prefix) | Date added | Purpose |
|---|---|---|---|
| _(add records here as they are added)_ | | | |

---

## Related Files

- `/seo/GOOGLE_ANALYTICS_SETUP_GUIDE.md` — Full GA4 + GSC setup guide including DNS verification instructions
- `/seo/GOOGLE_SEARCH_CONSOLE_SETUP.md` — Detailed GSC monitoring and sitemap guide
