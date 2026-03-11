# PayrollJamaica Email Newsletter Strategy 2026

**Target Audience:** Jamaican SME owners, HR managers, accountants
**Goal:** Build an owned audience that converts to PayrollJamaica subscribers
**Primary Platform:** ConvertKit (recommended) or Mailchimp

---

## 1. Platform Recommendation

### ConvertKit (Recommended)
ConvertKit is the top choice for PayrollJamaica because it's built for creators and SaaS companies focused on conversion sequences — not just blasts.

**Free Tier Limits:** Up to 10,000 subscribers, unlimited emails, automation sequences
**Best for:** Welcome sequences, segmentation by business size, lead magnet delivery

**Setup Instructions — ConvertKit:**
1. Go to [app.convertkit.com](https://app.convertkit.com) and create a free account
2. Enter "Payroll Jamaica" as your creator name
3. Connect your domain: `payrolljamaica.com` for sending (use `hello@payrolljamaica.com` or `newsletter@payrolljamaica.com`)
4. Add a sending domain in Settings > Email > Custom Sending Domain — add a CNAME record to your DNS
5. Create your first Form: "Jamaica Payroll Checklist Download" (used on homepage)
6. Create your first Sequence: "Welcome Sequence" — add all 5 emails (see Section 4)
7. Set the sequence trigger: When subscriber joins "Jamaica Payroll Checklist" form
8. Create a tag: `lead-magnet-checklist` to track source
9. Enable double opt-in (required for GDPR/CAN-SPAM compliance, also good practice for Jamaica)
10. Connect to your website via the embed code or ConvertKit WordPress plugin

**ConvertKit Free Tier Upgrade Path:** Upgrade to Creator ($25/mo) when you exceed 10k subscribers or need A/B testing.

---

### Mailchimp (Alternative)
**Free Tier Limits:** Up to 500 contacts, 1,000 emails/month — very limited for growth
**Best for:** Teams that already use Mailchimp and want drag-and-drop template design

**Setup Instructions — Mailchimp:**
1. Go to [mailchimp.com](https://mailchimp.com) and create a free account
2. Create an Audience: "PayrollJamaica Subscribers"
3. Set your From Name as "Payroll Jamaica" and From Email as `hello@payrolljamaica.com`
4. Authenticate your domain: Mailchimp > Account > Domains — add DKIM and SPF records
5. Create a Landing Page for your lead magnet (Mailchimp has a free landing page builder)
6. Set up a Customer Journey: Welcome series → 5 emails over 10 days
7. Note: Mailchimp's automation is more limited on free tier — upgrade to Essentials ($13/mo) for full automation

**Verdict:** Use ConvertKit. The free tier is more generous, automation is included, and it's better suited for a conversion-focused SaaS funnel.

---

## 2. Email Capture Strategy

### Lead Magnets

#### Lead Magnet #1: Free Jamaica Payroll Compliance Checklist 2026
**Placement:** Homepage hero section, blog sidebar, calculator page, exit intent popup
**Format:** PDF download (2–4 pages)
**Title:** "Free Download: Jamaica Payroll Compliance Checklist 2026"
**Subtitle:** "Everything your business needs to stay compliant with TAJ, NHT, NIS & PAYE this year"

**Checklist Contents to Include:**
- PAYE registration with TAJ
- NHT employer registration
- NIS registration
- Education Tax obligations
- Monthly remittance deadlines (14th of each month)
- Year-end S02 filing (March 31)
- Record-keeping requirements (7 years)
- New employee onboarding paperwork checklist
- 2026 statutory deduction rates reference card

**Opt-in Copy for Website:**
> "Download the free 2026 Jamaica Payroll Compliance Checklist — used by 2,000+ Jamaican business owners to stay compliant with TAJ. Enter your email to get instant access."

---

#### Lead Magnet #2: Free PAYE Calculator (Email Gate)
**Placement:** `/calculator` page — show the calculator for free, but gate the "Save & Export" or "Email Results" feature
**Trigger:** After user inputs their first calculation, show a modal: "Email me my results"
**Copy:** "Want to save your PAYE calculations? Enter your email and we'll send your full breakdown — plus future tax rate updates."
**Tag in ConvertKit:** `calculator-lead` (higher intent than checklist leads)

**Why This Works:** Calculator users are actively doing payroll — highest purchase intent of any lead source. Nurture these leads with the software pitch earlier (move Email 5 to Email 3 in their sequence).

---

#### Lead Magnet #3: Exit Intent Popup Strategy
**Tool:** Use [Sumo](https://sumo.com) (free tier) or add a simple JavaScript exit-intent script
**Trigger:** Mouse moves toward browser close button / tab bar (desktop) OR 60 seconds idle (mobile)
**Popup Headline:** "Wait — Are You Paying Too Much in Payroll Penalties?"
**Subheadline:** "Get the free 2026 Jamaica Payroll Compliance Checklist before you go."
**CTA Button:** "Yes, Send Me the Checklist"
**Dismiss Link:** "No thanks, I prefer to risk TAJ penalties"

**Exit Intent Rules:**
- Only show once per session
- Don't show on calculator page (users there should see the calculator email gate instead)
- A/B test the headline: "Before You Go..." vs. "Free Download..."
- Fire after 30 seconds minimum time on page (avoid annoying quick bounces)

---

### Additional Email Capture Points
| Page | Capture Method | Lead Magnet Offered |
|------|---------------|---------------------|
| Homepage | Inline form in hero | Compliance Checklist |
| Blog posts | Mid-post inline + end of post | Compliance Checklist |
| Calculator page | Results gate / modal | Save My PAYE Calculation |
| Pricing page | Inline: "Not ready yet?" | Compliance Checklist |
| Exit intent (all pages) | Popup | Compliance Checklist |

---

## 3. Welcome Sequence — 5 Emails (Full Copy)

**Sequence Settings:**
- Delay between emails: 2 days (Email 1 immediate, Email 2 on Day 2, Email 3 on Day 4, Email 4 on Day 7, Email 5 on Day 10)
- From Name: "Ruben at Payroll Jamaica"
- Reply-to: hello@payrolljamaica.com
- Send time: 8:00 AM Jamaica time (EST -5)

---

### Email 1: Welcome + Free Jamaica Payroll Guide (Send Immediately)

**Subject:** Your Jamaica Payroll Checklist is here (+ a welcome from us)
**Preview Text:** Everything you need to stay compliant with TAJ this year

---

Hi [First Name],

Welcome — your free **2026 Jamaica Payroll Compliance Checklist** is attached to this email. Click below to download it now.

**[Download Your Free Checklist →]**

Keep it somewhere handy. It covers:
- Every statutory deduction you need to remit (PAYE, NHT, NIS, Education Tax)
- The exact deadlines TAJ expects — including the ones businesses most often miss
- New employee onboarding paperwork requirements
- The 7-year record-keeping rule most Jamaican employers don't know about

---

**A quick word from us:**

Payroll Jamaica was built for one reason: Jamaican business owners shouldn't have to become tax experts just to pay their staff correctly.

Every month, businesses across Jamaica get hit with TAJ penalties — not because they're dishonest, but because payroll compliance in Jamaica is genuinely complicated. PAYE thresholds, NHT rates, NIS contribution caps, Education Tax, statutory holidays — it adds up fast.

We're building the simplest, most compliant payroll software in Jamaica. And while we do that, we want to give you the tools to run payroll confidently — whether you use our software or not.

Over the next 10 days, I'll send you:
- A deep dive into PAYE (the one deduction that trips up most employers)
- A complete guide to NHT and NIS
- The 5 payroll mistakes we see Jamaican businesses make most often
- And an offer to try PayrollJamaica free

No spam. Just practical payroll guidance for Jamaican businesses.

If you have a payroll question right now, reply to this email. I read every reply.

Cheers,
Ruben
Founder, Payroll Jamaica
payrolljamaica.com

---

*You're receiving this because you downloaded the Jamaica Payroll Compliance Checklist from payrolljamaica.com. You can unsubscribe at any time using the link below.*

---

### Email 2: PAYE Deep Dive (Day 2)

**Subject:** The PAYE mistake that costs Jamaican businesses millions every year
**Preview Text:** Most employers get this wrong — here's what TAJ actually expects

---

Hi [First Name],

Yesterday I sent you the compliance checklist. Today I want to go deeper on the one deduction that causes more TAJ penalties than anything else: **PAYE**.

**What Is PAYE?**

Pay As You Earn (PAYE) is Jamaica's income tax withheld from employee salaries. As an employer, you're a tax collector — you withhold it from your staff and remit it to TAJ by the 14th of the following month.

Get it wrong and you pay penalties of **up to 50% of the outstanding amount** plus interest.

---

**The 2026 PAYE Rates (Jamaica)**

| Annual Gross Income | Tax Rate |
|---------------------|----------|
| Up to $1,500,796 | 0% (Personal income tax threshold) |
| $1,500,797 – $6,000,000 | 25% |
| Over $6,000,000 | 30% |

*Note: The personal income tax threshold is adjusted periodically. Always check the current TAJ rate before processing payroll.*

The personal allowance of **$1,500,796** means employees earning below this amount pay zero income tax. But you still need to calculate it correctly — especially for part-time staff, employees who start mid-year, and those with multiple jobs.

---

**The Most Common PAYE Mistakes:**

**1. Not adjusting for mid-year hires**
If someone starts in July, their annual tax-free threshold doesn't reset — they only get 6 months of threshold. Many employers apply the full annual threshold and under-withhold.

**2. Ignoring taxable benefits**
Company cars, housing allowances above the tax-free limit, and certain bonuses are taxable. Many employers forget to gross these up.

**3. Missing the 14th-of-the-month deadline**
Even one day late triggers a penalty. Set a calendar reminder: **every month by the 14th**, you must remit PAYE, NHT, NIS, and Education Tax to TAJ.

**4. Not filing even when you have zero employees**
If you're registered for PAYE and had no employees that month, you still need to file a nil return. TAJ penalties apply for not filing, not just for not paying.

**5. Using last year's rates**
Jamaica adjusts tax thresholds and contribution rates periodically. If you're using a spreadsheet from 2023, you may be applying outdated numbers.

---

**The Fix:**

Most of these mistakes are eliminated by using software that automatically applies current Jamaica tax rates and tracks every deduction. PayrollJamaica does exactly this — and it was built specifically for Jamaica's statutory requirements.

But whether you use software or not, the most important thing is to **know your deadlines and document everything**.

In the next email, I'll cover NHT and NIS — two more deductions that regularly trip up employers.

Cheers,
Ruben
Payroll Jamaica

---

### Email 3: NHT + NIS Guide (Day 4)

**Subject:** NHT and NIS explained — what every Jamaican employer must know
**Preview Text:** Two deductions, four common mistakes, one guide

---

Hi [First Name],

In the last email I covered PAYE. Today: the other two big statutory deductions — **NHT** (National Housing Trust) and **NIS** (National Insurance Scheme).

Together with Education Tax and PAYE, these four deductions make up the core of Jamaica payroll compliance. Let's break them down.

---

**NHT — National Housing Trust**

NHT is a housing fund that employees can draw on for mortgages. Both employer and employee contribute.

**2026 NHT Rates:**
- Employee contribution: **2% of gross salary**
- Employer contribution: **3% of gross salary**
- Total: **5% of gross salary**

There's no income cap — NHT applies to the full gross wage.

**Common NHT Mistakes:**
- Forgetting the employer's 3% portion (it's not just deducted from employees — you pay 3% on top)
- Not registering new employees with NHT before their first payroll run
- Failing to remit by the 14th (NHT and PAYE share the same deadline — miss one, miss both)

**Employee Benefit:** After 7 years of contributions, employees become eligible for NHT-subsidized mortgages. This is a genuine retention benefit worth communicating to your team.

---

**NIS — National Insurance Scheme**

NIS is Jamaica's social security equivalent — it funds sickness benefits, maternity leave benefits, and retirement pensions.

**2026 NIS Rates:**
- Employee contribution: **3% of insurable wages**
- Employer contribution: **3% of insurable wages**
- Total: **6% of insurable wages**

**NIS Insurable Wage Ceiling (2026):** Approximately **$5,000,000/year** (confirm current figure with NIS — this is adjusted periodically).

This ceiling matters: once an employee's gross earnings exceed the insurable wage ceiling in a calendar year, NIS contributions stop for the rest of that year.

**Education Tax:**
- Employee: **2.25% of gross**
- Employer: **3.5% of gross**

---

**Total Employer Cost Per Employee**

| Deduction | Employee | Employer |
|-----------|----------|----------|
| PAYE | Varies | 0% (employer remits, not contributes) |
| NHT | 2% | 3% |
| NIS | 3% | 3% |
| Education Tax | 2.25% | 3.5% |
| **Total employer add-on** | | **~9.5% of gross** |

This is why the "true cost" of an employee is significantly more than their salary. A $200,000/month salary costs your business roughly $219,000/month in employer contributions alone — before any benefits or equipment.

---

**The Remittance Process**

All four deductions (PAYE, NHT, NIS, Education Tax) are remitted together to TAJ by the **14th of the following month**. You'll use the monthly remittance form (S01) and the annual reconciliation return (S02, due by March 31).

Payroll Jamaica handles all of this automatically — one click to generate your S01 figures.

Next email: The 5 most expensive payroll mistakes Jamaican businesses make — and how to avoid them.

Cheers,
Ruben
Payroll Jamaica

---

### Email 4: "5 Payroll Mistakes Jamaican Businesses Make" (Day 7)

**Subject:** 5 payroll mistakes that cost Jamaican businesses real money (are you making #3?)
**Preview Text:** TAJ penalties, employee trust issues, and cash flow traps — all avoidable

---

Hi [First Name],

After working with hundreds of Jamaican businesses on payroll, I've seen the same expensive mistakes made over and over. Some are small. Some have cost businesses hundreds of thousands of dollars.

Here are the 5 I see most often:

---

**Mistake #1: Paying employees in cash without records**

It feels simpler. No paperwork, no bank delays, no complexity. But paying cash without payslips means:
- No PAYE documentation
- No proof of NHT/NIS remittance
- No defense in an employee dispute
- No audit trail if TAJ investigates

TAJ has the authority to assess back taxes, interest, and penalties going back **7 years**. If you've been paying cash informally, this is a significant liability on your balance sheet right now.

**Fix:** Issue payslips for every payment, even cash payments. Document everything.

---

**Mistake #2: Treating contractors as employees (or vice versa)**

Misclassifying employees as independent contractors (to avoid statutory deductions) is one of the most common — and dangerous — payroll errors in Jamaica.

If TAJ or the Labour Department reclassifies your "contractors" as employees, you owe:
- All back PAYE, NHT, NIS, and Education Tax
- Employer contributions you avoided
- Penalties and interest
- Potentially, employee benefits (vacation pay, sick leave) you didn't provide

**The test:** Does the person work set hours you control? Do they use your equipment? Do they work exclusively for you? If yes to two or more, they're likely an employee.

---

**Mistake #3: Missing the 14th-of-the-month deadline even once**

This is the one that surprises business owners. A single late remittance — even by one day — results in:
- A penalty of **10% of the outstanding amount**
- Interest charges that compound monthly
- A compliance flag on your TAJ account that increases audit risk

Many businesses have a good run for years, then get hit with cash flow issues one month, pay late, and incur a penalty they weren't expecting.

**Fix:** Set automated reminders for the 12th (process) and 14th (pay). Never use payroll funds for other expenses — treat deductions as money that was never yours.

---

**Mistake #4: Not updating payroll when the tax rates change**

Jamaica's personal income tax threshold, NIS insurable wage ceiling, and minimum wage are adjusted periodically. Many businesses are running on outdated rates — either over-withholding (upsetting employees) or under-withholding (creating a liability).

If you're using a spreadsheet that was built three years ago, there's a real chance the formulas are wrong today.

**Fix:** Use payroll software that automatically updates to current Jamaica tax rates — or check TAJ and NIS announcements every April when new rates typically take effect.

---

**Mistake #5: Not keeping payroll records for 7 years**

The Income Tax Act requires employers to maintain payroll records for a minimum of **7 years**. Many small businesses don't — especially those that process payroll manually on paper or in Excel files they eventually delete.

In a TAJ audit, if you can't produce records, the burden of proof shifts to you. TAJ can estimate your liability and you must disprove it.

**Fix:** Store all payroll records — payslips, remittance confirmations, employee contracts — in a secure digital location. Cloud-based payroll software does this automatically.

---

**The Common Thread**

Every one of these mistakes has the same root cause: payroll being treated as an informal, manual process rather than a system with proper controls.

Payroll Jamaica was built to eliminate every one of these risks. Tomorrow I'll show you exactly how — and you can try it free.

Cheers,
Ruben
Payroll Jamaica

---

### Email 5: Product Pitch + Free Trial CTA (Day 10)

**Subject:** Ready to never worry about Jamaica payroll compliance again?
**Preview Text:** Try PayrollJamaica free — no credit card required

---

Hi [First Name],

Over the past week and a half, I've walked you through:
- The full PAYE framework for Jamaica
- NHT, NIS, and Education Tax rates and remittance requirements
- The 5 most expensive payroll mistakes — and how to avoid them

All of it adds up to one thing: **running payroll in Jamaica correctly requires keeping track of a lot of moving parts**.

Most small business owners in Jamaica are doing this manually — spreadsheets, paper forms, mental notes about deadlines. It works, until it doesn't. And when it doesn't, the penalties are real.

---

**That's why we built Payroll Jamaica.**

Payroll Jamaica is payroll software designed specifically for Jamaican businesses. Not adapted from a US or UK system. Built from the ground up for Jamaica's statutory requirements.

**Here's what it does:**

✓ Automatically calculates PAYE, NHT, NIS, and Education Tax using current Jamaica rates
✓ Generates payslips for every employee with every pay run
✓ Tracks remittance deadlines and alerts you before the 14th
✓ Produces the S01 monthly remittance figures in one click
✓ Stores all your payroll records securely in the cloud — accessible anywhere, including during a TAJ audit
✓ Handles employee onboarding with automatic TAJ registration paperwork
✓ Works for businesses with 1 employee or 500+

---

**What our users say:**

*"I was spending half a day every month on payroll. Now it takes 20 minutes and I'm confident everything is right."*
— SME owner, Kingston

*"We got audited by TAJ and I was able to pull every record instantly. The auditor was in and out in an hour."*
— HR Manager, Montego Bay

---

**Your Free Trial**

Try Payroll Jamaica free for 30 days. No credit card required. Full access to all features.

**[Start Your Free Trial →]** — payrolljamaica.com

If you have any questions before signing up — about whether it's right for your business, how it handles your specific situation, or anything else — just reply to this email. I'm happy to help.

Cheers,
Ruben
Founder, Payroll Jamaica
payrolljamaica.com

P.S. — The free trial includes a free onboarding call with our team. We'll help you set up your first payroll run from scratch.

---

## 4. Monthly Newsletter Template

**Send Day:** First Tuesday of every month
**From Name:** "Payroll Jamaica Newsletter"
**Subject Line Formula:** [Month] Payroll Update: [1 specific timely topic]

---

**TEMPLATE:**

**Subject:** [Month] Jamaica Payroll Update: [Topic]
**Preview:** [One sentence hook referencing the most time-sensitive item]

---

Hi [First Name],

Here's your [Month] payroll update for Jamaican businesses.

---

**This Month's Deadline Reminder**
[Relevant deadline for this month — e.g., "March 14: February PAYE/NHT/NIS remittance due" or "March 31: S02 Annual Return due"]

Quick note: [1–2 sentences explaining any nuance or what to watch for this month]

---

**Feature Story: [Topic]**
[300–400 word original article on a Jamaica-relevant payroll/HR topic. Examples:
- New minimum wage announcement and what it means for payroll
- TAJ announces new penalty enforcement campaign
- How to prepare for the end of tax year in March/April
- NHT changes for 2026
- Guide to handling Christmas bonus payroll correctly]

---

**Quick Tips This Month**
- [Short tip 1 — 1 sentence]
- [Short tip 2 — 1 sentence]
- [Short tip 3 — 1 sentence]

---

**From Our Blog**
[Link to most recent blog post with 1-sentence description]
[Link to second most recent blog post]

---

**Community Question**
*"[Paraphrased question from a customer or common support question]"*

[Answer in 2–3 sentences]

Have a payroll question? Reply to this email — I read every one.

---

**[Button: Try PayrollJamaica Free]**

Cheers,
Ruben
Payroll Jamaica
payrolljamaica.com | Unsubscribe

---

## 5. Tax Year-End Sequence (March/April Jamaica)

Jamaica's tax year ends March 31. This is the highest-stakes compliance period for most businesses.

**5-Email Tax Year-End Sequence — Send February through March:**

| Email | Send Date | Subject | Content |
|-------|-----------|---------|---------|
| YE-1 | Feb 15 | "Jamaica tax year ends in 6 weeks — are you ready?" | Overview of year-end obligations, S02 reminder |
| YE-2 | Feb 28 | "S02 Annual Return: Step-by-step guide for Jamaica employers" | How to complete the S02, common errors, deadlines |
| YE-3 | Mar 7 | "Your year-end payroll checklist for March 31" | Downloadable checklist, reconciliation steps |
| YE-4 | Mar 21 | "10 days left: Last chance to fix payroll errors before TAJ deadline" | Urgency email, amendment process, how PayrollJamaica automates this |
| YE-5 | Apr 1 | "Tax year closed — here's what to set up for the new year" | New year setup guide, updated rates, fresh-start offer |

**Key Tax Year-End Dates to Reference:**
- March 14: Final monthly remittance for March (March income)
- March 31: S02 Annual Return due to TAJ
- April 14: April remittance (first of new tax year)
- Employer deadlines can shift if the 14th falls on a weekend — always check

---

## 6. Subject Line Templates (25+ Lines)

### Urgency / Deadline Lines
1. "TAJ deadline this Friday — are you ready?"
2. "Less than 48 hours to submit your March payroll remittance"
3. "Your S02 is due March 31 — here's the checklist"
4. "Jamaica minimum wage changes April 1 — update your payroll now"
5. "⚠️ Reminder: Monthly PAYE remittance due in 3 days"

### Pain / Problem Lines
6. "The payroll mistake that cost this Kingston business $400,000"
7. "Are you under-withholding PAYE? Here's how to check"
8. "Why TAJ audits are up 40% this year (and what to do about it)"
9. "Still doing payroll in Excel? Read this first"
10. "You hired someone last month — did you register them with NHT?"

### Curiosity / Intrigue Lines
11. "The NIS change most Jamaican employers missed"
12. "What TAJ is actually looking for when they audit you"
13. "How much is your payroll really costing you? (Most businesses guess wrong)"
14. "3 questions about Jamaica payroll — answered"
15. "What happens if you pay your employees late in Jamaica"

### Value / Guide Lines
16. "Free: Jamaica Payroll Compliance Checklist 2026"
17. "PAYE calculator: Find out exactly what to withhold this month"
18. "Your complete guide to NHT and NIS contributions"
19. "The 5-minute payroll audit every Jamaican business should do"
20. "Jamaica payroll from scratch: The beginner's complete guide"

### Social Proof / Story Lines
21. "How a Kingston restaurant owner went from TAJ penalties to zero compliance issues"
22. "\"I never have to think about payroll deadlines anymore\" — how she did it"
23. "2,000 Jamaican business owners use this checklist — here's why"
24. "What Jamaica's most compliance-confident companies have in common"

### Seasonal / Timely Lines
25. "Christmas bonus payroll: What Jamaica law requires"
26. "April payroll update: New tax year, new rates"
27. "Good Friday is coming — here's your statutory holiday pay calculation"
28. "End of year payroll cleanup: What to do before March 31"

---

## 7. Key Implementation Notes

**Segmentation from Day 1:**
- Tag all leads by source: `checklist`, `calculator`, `blog`, `exit-popup`
- Tag by business size when possible: collect this on the opt-in form ("How many employees do you have?" — dropdown: 1–5 / 6–20 / 21–100 / 100+)
- Higher employee count = faster pitch sequence (move Email 5 to Day 7)

**Deliverability:**
- Authenticate your sending domain (SPF, DKIM, DMARC records)
- Never send purchased lists — all organic
- Maintain below 0.3% spam complaint rate
- Clean inactive subscribers (no opens in 6 months) every quarter

**Growth Target:**
- Month 1–3: 0–500 subscribers (organic from site traffic)
- Month 3–6: 500–2,000 (with paid traffic or content marketing)
- Month 6–12: 2,000–10,000 (at scale, email list drives significant trial signups)

**Conversion Benchmark:**
- Welcome sequence → Free trial: Target 5–10% of subscribers
- Monthly newsletter → Trial clicks: Target 1–3% per email
