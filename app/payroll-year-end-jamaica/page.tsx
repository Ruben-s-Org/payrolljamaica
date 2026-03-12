import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Jamaica's payroll year-end deadline is March 31, 2026. Every Jamaican employer must file SO1 annual returns, NHT annual returns, TD4 summaries, and settle all PAYE, NIS, NHT, and Education Tax before the fiscal year closes. Payroll Jamaica automates every step — so you don't miss the deadline.";

export const metadata: Metadata = {
  title: "Jamaica Payroll Year-End 2026 — March 31 Checklist",
  description: ensureMinDescription(
    "March 31, 2026 is Jamaica's payroll year-end deadline. SO1 returns, NHT annual return, TD4 summaries all due. Payroll Jamaica automates every filing — get.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Jamaica payroll year end 2026",
    "Jamaica payroll March 31 deadline",
    "Jamaica tax year end payroll",
    "SO1 annual return Jamaica 2026",
    "NHT annual return Jamaica 2026",
    "TD4 summary Jamaica deadline",
    "PAYE year end Jamaica",
    "Jamaica fiscal year end payroll",
    "payroll year end checklist Jamaica",
    "Jamaica payroll deadline 2026",
    "year end payroll compliance Jamaica",
    "March 31 Jamaica payroll",
    "Jamaica employer year end filing",
    "annual payroll return Jamaica",
    "payroll year end software Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-year-end-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-year-end-jamaica"),
      en: canonical("/payroll-year-end-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Jamaica Payroll Year-End 2026 — March 31 Checklist",
    description: baseDescription,
    url: canonical("/payroll-year-end-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Jamaica Payroll Year-End 2026 March 31 Deadline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Year-End 2026 — March 31 | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const deadlineItems = [
  {
    deadline: "March 31, 2026",
    filing: "SO1 Annual Return",
    description: "Every registered employer must file the SO1 Annual Return with TAJ, declaring total emoluments paid for the year April 1, 2025 – March 31, 2026.",
    penalty: "Late filing: $10,000 JAD penalty + interest on outstanding amounts",
    urgent: true,
  },
  {
    deadline: "March 31, 2026",
    filing: "NHT Annual Return",
    description: "Employers must reconcile and submit annual NHT contributions for all employees. Underpayments from the year are due in full.",
    penalty: "Late payment: 20% surcharge on outstanding NHT contributions",
    urgent: true,
  },
  {
    deadline: "March 31, 2026",
    filing: "TD4 Certificates",
    description: "Issue TD4 (Employee's Annual Earnings Statement) to every employee who was paid during the tax year. File TD4 summary with TAJ.",
    penalty: "Failure to issue: employees cannot file personal income tax returns",
    urgent: true,
  },
  {
    deadline: "March 31, 2026",
    filing: "Education Tax Reconciliation",
    description: "Reconcile total Education Tax deducted and remitted against actual payroll for the year. Top up any shortfalls.",
    penalty: "Shortfall attracts interest and penalties under the Income Tax Act",
    urgent: true,
  },
  {
    deadline: "March 31, 2026",
    filing: "NIS Annual Reconciliation",
    description: "Submit NIS Schedule 7 for the full tax year. Confirm all NIS employee and employer contributions are fully remitted.",
    penalty: "NIS arrears accrue at prescribed rates; director liability may apply",
    urgent: false,
  },
];

const checklistSteps = [
  {
    step: "1",
    title: "Audit your payroll records",
    desc: "Pull all payroll runs April 2025 – March 2026. Verify every employee's gross pay, PAYE, NIS, NHT, and Education Tax deductions match what was remitted monthly.",
  },
  {
    step: "2",
    title: "Reconcile NIS contributions",
    desc: "Cross-check NIS deducted from employees and employer contributions against NIS records. Request a statement of account from NIS if needed.",
  },
  {
    step: "3",
    title: "Generate TD4 certificates",
    desc: "Produce a TD4 for every employee paid during the year, including those who left mid-year. Payroll Jamaica generates these automatically from your payroll data.",
  },
  {
    step: "4",
    title: "Prepare SO1 Annual Return",
    desc: "Compile total emoluments, PAYE collected, and employee count for the SO1. Payroll Jamaica pre-fills this from your payroll records — just review and submit.",
  },
  {
    step: "5",
    title: "Submit NHT Annual Return",
    desc: "Log into the NHT Online Portal and submit your annual return. Confirm all contributions are reflected — Payroll Jamaica tracks every NHT payment automatically.",
  },
  {
    step: "6",
    title: "File with TAJ before midnight March 31",
    desc: "Submit SO1 and TD4 summary via TAJ Online. Keep confirmation receipts. Payroll Jamaica stores your submission history for audit purposes.",
  },
];

const yearEndFaqs = [
  {
    q: "What is the Jamaica payroll year-end deadline for 2026?",
    a: "The Jamaica tax year runs April 1 to March 31. The 2025/2026 tax year closes on March 31, 2026. All annual returns (SO1, NHT), TD4 certificates, and year-end reconciliations must be submitted by this date.",
  },
  {
    q: "What happens if I miss the March 31 deadline?",
    a: "Late SO1 returns attract a $10,000 JAD penalty per return. Late NHT contributions attract a 20% surcharge. PAYE shortfalls attract interest. Directors of companies can be held personally liable for outstanding statutory obligations.",
  },
  {
    q: "Does Payroll Jamaica generate TD4 certificates automatically?",
    a: "Yes. Payroll Jamaica generates TD4 certificates for every employee from your payroll data. Each TD4 shows the employee's total earnings, PAYE deducted, NIS, NHT, and Education Tax for the full tax year.",
  },
  {
    q: "What is the SO1 Annual Return?",
    a: "The SO1 is a declaration filed with the Tax Administration Jamaica (TAJ) showing every employee's name, TRN, earnings, and PAYE deducted for the year. It is compulsory for all registered employers in Jamaica.",
  },
  {
    q: "How do I get started with Payroll Jamaica before March 31?",
    a: "Sign up at payrolljamaica.com, import your employee data, and your year-end filings will be pre-populated from your payroll records. Most businesses are fully set up within one business day.",
  },
];

export default function PayrollYearEndJamaicaPage() {
  const daysUntilDeadline = Math.ceil(
    (new Date("2026-03-31").getTime() - new Date("2026-03-11").getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero — urgency-first */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-sm text-red-700 font-medium mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              {daysUntilDeadline} days until March 31, 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Jamaica Payroll<br />Year-End 2026
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              March 31 is Jamaica&apos;s fiscal year-end. SO1 Annual Returns, NHT Annual Returns, and TD4 certificates are all due. Miss the deadline and face penalties. Payroll Jamaica automates every filing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-red-600 text-white px-8 py-3 text-base font-medium hover:bg-red-700 transition-colors"
              >
                Get compliant before March 31
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your year-end payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Deadline countdown cards */}
        <section className="w-full px-4 py-16 bg-red-50/50 border-y border-red-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              What&apos;s due March 31, 2026
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every Jamaican employer with registered employees must file these returns. Penalties apply from April 1.
            </p>
            <div className="space-y-4">
              {deadlineItems.map((item) => (
                <div
                  key={item.filing}
                  className={`rounded-xl border p-6 ${item.urgent ? "border-red-200 bg-white" : "border-border bg-background"}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {item.urgent && (
                          <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">CRITICAL</span>
                        )}
                        <h3 className="font-semibold text-lg">{item.filing}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-sm text-red-600 font-medium">{item.penalty}</p>
                    </div>
                    <div className="sm:text-right sm:flex-shrink-0">
                      <span className="inline-block bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                        {item.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-step checklist */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Year-end payroll checklist
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Follow these 6 steps to close your 2025/2026 payroll year clean and compliant.
            </p>
            <div className="space-y-4">
              {checklistSteps.map((step) => (
                <div key={step.step} className="flex gap-4 rounded-xl border border-border p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Payroll Jamaica for year-end */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Why Jamaica employers use Payroll Jamaica for year-end
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Every annual filing is pre-built. No manual spreadsheets, no missed obligations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Auto-generated TD4 certificates",
                  desc: "Payroll Jamaica produces a compliant TD4 for every employee — full year earnings, all deductions — with one click. Print or email directly.",
                },
                {
                  title: "SO1 return pre-filled",
                  desc: "Your SO1 Annual Return is automatically populated from your payroll records. Review totals, export, and file with TAJ Online.",
                },
                {
                  title: "NHT annual reconciliation built-in",
                  desc: "Every NHT contribution is tracked and timestamped. Your annual NHT reconciliation report is always ready — no manual counting.",
                },
                {
                  title: "Real-time compliance dashboard",
                  desc: "See which employees have outstanding NIS, NHT, or PAYE issues before March 31. Fix them in the system, not in spreadsheets.",
                },
                {
                  title: "Audit trail for every filing",
                  desc: "Every payroll run, every deduction, every payment — stored and exportable. If TAJ or NHT asks for records, you have them instantly.",
                },
                {
                  title: "2025/2026 tax rates locked in",
                  desc: "PAYE thresholds, NIS caps, NHT rates, and Education Tax percentages for 2025/2026 are already in the system — accurate for year-end reconciliation.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-background p-6 space-y-2">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency stats */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Don&apos;t face March 31 alone</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "5", label: "Annual filings due by March 31" },
                { stat: "20%", label: "NHT surcharge for late employers" },
                { stat: "1 day", label: "Setup time with Payroll Jamaica" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Jamaica year-end payroll FAQ
            </h2>
            <div className="space-y-6">
              {yearEndFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-200 bg-red-50 text-sm text-red-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
              March 31 deadline — act now
            </div>
            <h2 className="text-3xl font-semibold">
              Close your 2026 payroll year clean
            </h2>
            <p className="text-muted-foreground">
              Every Jamaican employer with staff needs to file before March 31. Payroll Jamaica makes it simple — TD4s, SO1, NHT, all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started before March 31
              </Link>
              <Link
                href="/payroll-company-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all Jamaica payroll services
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FAQPage",
                  mainEntity: yearEndFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "HowTo",
                  name: "Jamaica Payroll Year-End Checklist 2026",
                  description: "Step-by-step guide to closing the 2025/2026 Jamaica tax year payroll — SO1, NHT, TD4, and PAYE reconciliation.",
                  step: checklistSteps.map((s) => ({
                    "@type": "HowToStep",
                    position: parseInt(s.step),
                    name: s.title,
                    text: s.desc,
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Jamaica Payroll Year-End 2026", item: `${siteConfig.url}/payroll-year-end-jamaica` },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
