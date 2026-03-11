# PayrollJamaica — WhatsApp Business Strategy
**CMO Authored | March 2026**

> WhatsApp is Jamaica's #1 communication channel. Every Jamaican business owner uses it daily. This is not optional — it is how we meet customers where they are.

---

## Why WhatsApp First for Jamaica

- **95%+ of Jamaicans** with a smartphone use WhatsApp daily
- Business owners prefer WhatsApp over email for quick questions
- Competitors are not on WhatsApp — first-mover advantage
- WhatsApp Business is free with powerful automation

---

## 1. Profile Setup

Business Name: `Payroll Jamaica`
Category: `Finance & Accounting`
Description: `Jamaica's payroll software — PAYE, NHT, NIS compliance automated. Free calculator at payrolljamaica.com/calculator`
Address: `Kingston, Jamaica`
Hours: `Mon–Fri 8:00am–5:00pm (Jamaica time)`
Website: `https://payrolljamaica.com`
Email: `info@payrolljamaica.com`

**Action required:** Update `config/site.ts` — replace `18761234567` with the real WhatsApp Business phone number.

---

## 2. Quick Replies Library (Set up in WA Business → Business Tools)

### /hi — Welcome
```
Hi! Thanks for reaching out to Payroll Jamaica.

We help Jamaican businesses automate payroll — PAYE, NHT, NIS, and statutory compliance.

1 — Free payroll calculator
2 — Pricing
3 — PAYE/compliance question
4 — Talk to the team

Reply with a number or just ask your question!
```

### /paye — PAYE Rates
```
Jamaica PAYE Rates 2025/2026:
- Tax-free threshold: J$1,500,096/year
- Rate up to J$6M: 25%
- Rate above J$6M: 30%
- Education Tax: 2.25% (employee) + 3.5% (employer)

Calculate exact PAYE: payrolljamaica.com/calculator
```

### /nht — NHT
```
Jamaica NHT 2026:
- Employee: 2% of gross salary
- Employer: 3% of gross salary
- Due: 14th of following month
- Late penalty: 20% surcharge

Auto-calculated by PayrollJamaica every pay run.
```

### /nis — NIS
```
Jamaica NIS 2026:
- Employee: 3%
- Employer: 3%
- Annual cap: ~J$5,000,000 insurable earnings
- Due: 14th of following month
```

### /deadline — Key Dates
```
Jamaica Payroll Deadlines 2026:
- Monthly remittances: 14th of following month
- Annual S02 return: March 31
- New tax year: April 1
- NHT annual return: April 30
```

### /bye — Closing
```
Thanks for chatting with Payroll Jamaica!

Questions anytime Mon–Fri 8am–5pm.
Free calculator: payrolljamaica.com/calculator

Big up!
```

---

## 3. Away Message
```
Thanks for contacting Payroll Jamaica!

We are away right now (hours: Mon–Fri 8am–5pm Jamaica time).

We will reply first thing when we are back. In the meantime:
- Free payroll calculator: payrolljamaica.com/calculator
- PAYE guide: payrolljamaica.com/blog

Leave your question and we will get back to you!
```

---

## 4. Broadcast Lists

| List | Audience | Frequency | Content |
|---|---|---|---|
| Business Owners | SME owners | 2x/month | Compliance reminders, budget news |
| HR & Accountants | Professionals | 1x/month | Rate updates, regulatory changes |
| Calculator Users | Free tool users | 1x/month | Feature updates, upgrade CTAs |

**Sample broadcast (Business Owners — tax year end):**
```
PayrollJamaica Update — March 2026

Tax year ends March 31! Quick checklist:
- All PAYE filed with TAJ?
- NHT, NIS payments current?
- S02 annual return submitted?

Need help? Reply here or visit payrolljamaica.com/calculator
```

---

## 5. WhatsApp Status (3x/week)

**Monday:** Compliance tip + deadline reminder
**Wednesday:** Educational payroll fact
**Friday:** Engagement question ("How was payroll week?")

---

## 6. Website Integration

### Float Button (LIVE)
`WhatsAppButton` component added to root layout — visible on every page, bottom-right green button.

### Footer Link (LIVE)
"WhatsApp Us" added to Follow Us column in footer.

### Recommended next: Calculator page CTA
Add below results: "Want to automate this? Chat with us on WhatsApp"

---

## 7. Phone Number Action Required

Get a dedicated Jamaica 876 number for WhatsApp Business:
- **FLOW SIM** or **Digicel SIM** — J$500 starter pack
- Register the number with WhatsApp Business app
- Update `config/site.ts` → `links.whatsapp` with the real number

---

## 8. KPIs

| Metric | Month 1 | Month 3 |
|---|---|---|
| Conversations started | 20 | 100 |
| Avg response time | <2 hours | <30 min |
| Broadcast contacts | 50 | 300 |
| WA → website conversion | 10% | 20% |
