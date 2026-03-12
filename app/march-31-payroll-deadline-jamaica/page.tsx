import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Jamaica employers have until March 31, 2026 to complete the S01 Annual Return, NHT Annual Return, P6 forms for employees, and year-end payroll reconciliation. Use this checklist to stay compliant and avoid TAJ penalties.";

export const metadata: Metadata = {
  title: "March 31 Jamaica Payroll Deadline 2026 — File Now",
  description: ensureMinDescription(
    "March 31, 2026 deadline for Jamaica employers to file S01, NHT Annual Return, and P6 forms. Avoid TAJ penalties — use our compliance checklist.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "March 31 payroll deadline Jamaica 2026",
    "Jamaica payroll compliance deadline",
    "S01 annual return Jamaica",
    "NHT annual return Jamaica 2026",
    "P6 form Jamaica employer",
    "year-end payroll Jamaica",
    "TAJ annual return deadline",
    "Jamaica employer compliance March 2026",
    "payroll deadline Jamaica",
    "year-end reconciliation Jamaica payroll",
    "Jamaica payroll checklist 2026",
    "PAYE annual return Jamaica",
    "NIS annual return Jamaica",
    "payroll software Jamaica compliance",
  ]),
  alternates: {
    canonical: canonical("/march-31-payroll-deadline-jamaica"),
    languages: {
      "en-JM": canonical("/march-31-payroll-deadline-jamaica"),
      en: canonical("/march-31-payroll-deadline-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "March 31 Jamaica Payroll Deadline 2026 — File Now",
    description: baseDescription,
    url: canonical("/march-31-payroll-deadline-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "March 31 Jamaica Payroll Deadline 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Deadline March 31 2026 | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const checklistItems = [
  {
    title: "S01 Annual Return",
    tag: "TAJ Filing",
    desc: "File your S01 (Annual PAYE Return) with Tax Administration Jamaica by March 31. This summarises every employee's earnings and PAYE deducted for the 2025 tax year. Missing this deadline triggers automatic penalties and interest charges.",
    urgent: true,
  },
  {
    title: "NHT Annual Return",
    tag: "NHT Filing",
    desc: "Submit your Annual Employer Return to the National Housing Trust. The return reconciles NHT contributions collected per employee throughout the year. Discrepancies between your monthly remittances and the annual return are flagged for follow-up.",
    urgent: true,
  },
  {
    title: "P6 Forms to All Employees",
    tag: "Employee Obligation",
    desc: "Issue P6 (TD4) forms to every employee who worked for you during the 2025 tax year — including employees who have since left. Employees need their P6 to file personal income tax returns. Failure to issue P6s on time is an employer offence under the Income Tax Act.",
    urgent: true,
  },
  {
    title: "Year-End Payroll Reconciliation",
    tag: "Internal",
    desc: "Reconcile total gross payroll, total PAYE deducted, and total statutory contributions (NIS, NHT, Education Tax) against your monthly remittance receipts for January–December 2025. Any variances must be corrected before filing your annual returns.",
    urgent: false,
  },
];

const faqItems = [
  {
    q: "What is the SO1 return deadline in Jamaica?",
    a: "The SO1 (Annual PAYE Employer Return) deadline in Jamaica is March 31 every year. All Jamaican employers must file the SO1 with Tax Administration Jamaica (TAJ) by March 31 following the end of the tax year (April 1 – March 31), reporting total earnings and PAYE deducted for each employee.",
  },
  {
    q: "What is the S01 Annual Return in Jamaica?",
    a: "The S01 is the Annual PAYE Employer Return submitted to Tax Administration Jamaica (TAJ). It details each employee's total earnings and total PAYE deducted for the tax year. It must be submitted by March 31 following the tax year end.",
  },
  {
    q: "What happens if I miss the March 31 payroll deadline in Jamaica?",
    a: "Missing the March 31 deadline triggers penalties under the Income Tax Act and the NHT Act. TAJ charges interest at 40% per annum on outstanding amounts, and NHT can levy additional surcharges. Late filing also increases the likelihood of an employer audit.",
  },
  {
    q: "Who must file the NHT Annual Return?",
    a: "Every registered employer in Jamaica is required to file an Annual Employer Return with the National Housing Trust, regardless of how many employees they have or whether all contributions were paid on time during the year.",
  },
  {
    q: "How do I generate P6 (TD4) forms for my employees?",
    a: "P6 (TD4) forms summarise each employee's gross income and PAYE deducted. Payroll Jamaica generates compliant TD4 forms for all employees in one step — no spreadsheets or manual calculations required. You can issue them digitally or print them.",
  },
  {
    q: "Can I use payroll software to prepare my March 31 filings?",
    a: "Yes. Payroll Jamaica automatically produces S01-ready data exports, NHT Annual Return summaries, and TD4 forms for every employee. The year-end reconciliation is built into the dashboard — you can see any discrepancies before they become a filing problem.",
  },
];

export default function March31DeadlinePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400 text-sm font-medium mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
              19 days left — deadline is March 31, 2026
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Jamaica Payroll Compliance Deadline: March 31, 2026
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Every Jamaican employer must complete four critical obligations by March 31. Miss the deadline and you face TAJ penalties, NHT surcharges, and employee complaints. Here is exactly what to do — and how to do it fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial — get compliant fast
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Featured snippet target: SO1 return deadline */}
        <section className="w-full px-4 pb-12" id="so1-return-deadline-jamaica">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">SO1 Return Deadline Jamaica</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The SO1 (Annual PAYE Employer Return) deadline in Jamaica is{" "}
              <strong className="text-foreground">March 31 every year</strong>.
              All Jamaican employers must file the SO1 with Tax Administration Jamaica (TAJ) by March 31 following the end of the tax year (April 1 &ndash; March 31), reporting each employee&apos;s total earnings and PAYE deducted.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-foreground font-medium">Filing</th>
                    <th className="text-left py-2 pr-4 text-foreground font-medium">Deadline</th>
                    <th className="text-left py-2 text-foreground font-medium">Filed with</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4">SO1 Annual PAYE Return</td>
                    <td className="py-2 pr-4 text-foreground font-medium">March 31</td>
                    <td className="py-2">Tax Administration Jamaica (TAJ)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">NHT Annual Return</td>
                    <td className="py-2 pr-4 text-foreground font-medium">March 31</td>
                    <td className="py-2">National Housing Trust</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">P6 (TD4) forms to employees</td>
                    <td className="py-2 pr-4 text-foreground font-medium">March 31</td>
                    <td className="py-2">Issued to each employee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Urgency stats */}
        <section className="w-full px-4 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: "19", label: "Days until March 31 deadline" },
              { stat: "4", label: "Compliance tasks to complete" },
              { stat: "40%", label: "TAJ interest rate on late PAYE" },
              { stat: "0", label: "Extensions granted by TAJ" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-border space-y-1">
                <div className="text-2xl font-bold">{item.stat}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-semibold">
                What employers must complete by March 31
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These are not optional. Each item is a legal obligation under the Income Tax Act, NHT Act, or NIS Act. Work through them in order — the reconciliation must be done before you can file accurate annual returns.
              </p>
            </div>
            <div className="space-y-6">
              {checklistItems.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 border rounded-xl space-y-3 ${
                    item.urgent
                      ? "border-red-200 bg-red-50/40 dark:border-red-800 dark:bg-red-950/20"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                            item.urgent
                              ? "border-red-300 text-red-700 bg-red-100 dark:border-red-700 dark:text-red-400 dark:bg-red-900/30"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {item.tag}
                        </span>
                        {item.urgent && (
                          <span className="text-xs px-2 py-0.5 rounded-full border border-red-300 text-red-700 bg-red-100 dark:border-red-700 dark:text-red-400 dark:bg-red-900/30 font-medium">
                            March 31 deadline
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Payroll Jamaica helps */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              How Payroll Jamaica gets you to March 31 compliant
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "S01 data export ready to file",
                  desc: "Payroll Jamaica generates your S01 Annual Return data in the format TAJ expects. No spreadsheet construction — pull the report, review it, submit.",
                },
                {
                  title: "NHT Annual Return summary",
                  desc: "Your NHT employer return is pre-built from your payroll data. Contributions are reconciled against monthly remittances so you can spot and fix discrepancies before filing.",
                },
                {
                  title: "P6 (TD4) forms for every employee",
                  desc: "Generate compliant TD4 forms for all employees in one action. Issue them digitally through the employee portal or export PDFs for printing and distribution.",
                },
                {
                  title: "Year-end reconciliation dashboard",
                  desc: "See your full 2025 payroll year at a glance: total gross, total PAYE, total NIS/NHT/Ed Tax — matched against your monthly remittance records. Variances flagged automatically.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-xl space-y-2 bg-background">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial — 19 days is enough time
              </a>
            </div>
          </div>
        </section>

        {/* Penalty section */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-center">
              What happens if you miss March 31
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "TAJ penalties and 40% interest",
                  desc: "Tax Administration Jamaica charges interest at 40% per annum on any unpaid PAYE balances. A late or inaccurate S01 return also triggers an automatic penalty. The longer you wait after March 31, the more expensive it becomes.",
                },
                {
                  title: "NHT surcharges and employer flags",
                  desc: "The National Housing Trust levies surcharges on late Annual Return filings. Your employer account may be flagged, which can affect employees applying for NHT benefits and mortgage assistance.",
                },
                {
                  title: "Employee complaints and legal exposure",
                  desc: "Employees who do not receive their P6 (TD4) forms cannot file their own income tax returns on time. This creates grounds for complaints to TAJ and, in some cases, legal action against the employer for failure to comply with the Income Tax Act.",
                },
                {
                  title: "Increased audit risk",
                  desc: "Late or missing annual filings flag your business for closer TAJ scrutiny. An employer who consistently misses deadlines faces a higher likelihood of a full payroll audit — which can reach back three to five years.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="w-full px-4 pb-16 bg-muted/20">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-2xl font-semibold text-center">Frequently asked questions</h2>
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              {faqItems.map((item, i) => (
                <section key={i}>
                  <h3 className="text-foreground text-base font-semibold mb-2">{item.q}</h3>
                  <p>{item.a}</p>
                </section>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-2xl border border-border bg-muted/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
              19 days left
            </div>
            <h2 className="text-3xl font-semibold">
              Don&apos;t leave March 31 compliance to the last minute
            </h2>
            <p className="text-muted-foreground">
              Payroll Jamaica generates your S01 export, NHT Annual Return, and TD4 forms automatically from your payroll data. Start your free trial today and have your filings ready before the deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Start free trial
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="March 31 Jamaica payroll deadline — 19 days left"
        text="Generate your S01, NHT Annual Return, and P6 forms automatically. Start free today."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Jamaica Payroll Compliance Deadline March 31 2026 — Checklist & Guide",
            description: baseDescription,
            url: canonical("/march-31-payroll-deadline-jamaica"),
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            datePublished: "2026-03-12",
            dateModified: "2026-03-12",
            inLanguage: "en-JM",
            about: {
              "@type": "Thing",
              name: "Jamaica Payroll Compliance",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: "March 31 Payroll Deadline Jamaica 2026",
                item: canonical("/march-31-payroll-deadline-jamaica"),
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
