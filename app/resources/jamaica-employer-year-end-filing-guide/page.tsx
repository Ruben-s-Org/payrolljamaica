import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import { siteConfig } from "@/config/site";
import { canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
  title: "March 31 Year-End Filing Guide for Jamaica Employers | Payroll Jamaica",
  description:
    "Complete March 31 year-end filing guide for Jamaican employers. SO1 annual return, P24, NIS reconciliation, NHT returns — every filing you need before the deadline. Free downloadable PDF checklist.",
  keywords: [
    "March 31 filing deadline Jamaica",
    "Jamaica employer year-end filing",
    "SO1 annual return Jamaica",
    "P24 Jamaica",
    "NIS reconciliation Jamaica",
    "NHT annual return Jamaica",
    "TAJ year-end filing",
    "Jamaica payroll year-end checklist",
    "PAYE annual return Jamaica 2026",
    "Jamaica employer compliance deadline",
  ],
  alternates: {
    canonical: canonical("/resources/jamaica-employer-year-end-filing-guide"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "March 31 Year-End Filing Guide for Jamaica Employers",
    description:
      "Everything Jamaican employers must file by March 31: SO1, P24, NIS reconciliation, NHT returns. Free downloadable checklist.",
    url: canonical("/resources/jamaica-employer-year-end-filing-guide"),
    type: "article",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "March 31 Year-End Filing Guide — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "March 31 Year-End Filing Guide for Jamaica Employers",
    description:
      "SO1, P24, NIS, NHT — everything Jamaica employers must file by March 31. Free checklist.",
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteConfig.url}/resources` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Year-End Filing Guide",
      item: `${siteConfig.url}/resources/jamaica-employer-year-end-filing-guide`,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "March 31 Year-End Filing Guide for Jamaica Employers",
  description:
    "Comprehensive guide to every filing Jamaican employers must complete by March 31: SO1, P24, NIS reconciliation, and NHT returns.",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
};

export default function JamaicaEmployerYearEndFilingGuide() {
  const breadcrumbJsonLd = safeJsonLd(breadcrumbSchema);
  const articleJsonLd = safeJsonLd(articleSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="w-full px-4 py-12 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                &larr; Back to Resources
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Free Guide &middot; Updated March 2026
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              March 31 Year-End Filing Guide<br />
              <span className="text-muted-foreground">for Jamaica Employers</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Every filing Jamaican employers must complete by March 31 &mdash; SO1 Annual Return, P24 certificates,
              NIS reconciliation, and NHT returns. Miss any of these and you face penalties, interest charges,
              and potential prosecution.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintButton />
              <a
                href="#get-checklist"
                className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity print:hidden"
              >
                Download PDF Checklist &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Urgency Banner */}
        <section className="w-full px-4 py-6 bg-red-50 dark:bg-red-950/20 border-b border-red-200 dark:border-red-800 print:bg-white">
          <div className="max-w-3xl mx-auto flex items-start gap-3">
            <span className="text-2xl">🚨</span>
            <div>
              <p className="font-bold text-red-900 dark:text-red-200">
                Deadline: March 31, 2026 &mdash; 19 days away
              </p>
              <p className="text-sm text-red-800 dark:text-red-300">
                TAJ does not grant extensions. Late filing: 10% surcharge + 1.5% monthly interest.
                NIS and NHT impose separate penalties. Start now to avoid last-minute scrambling.
              </p>
            </div>
          </div>
        </section>

        {/* Overview of all filings */}
        <section className="w-full px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* What must be filed */}
            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <h2 className="text-lg font-bold mb-4">What Must Be Filed by March 31?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Jamaica&apos;s tax year runs April 1 to March 31. By the end of March, every employer must complete
                these filings for the tax year just ending:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "SO1 Annual Return",
                    body: "PAYE annual return filed with TAJ. Reports total emoluments and PAYE deducted for every employee.",
                    agency: "Tax Administration Jamaica",
                  },
                  {
                    title: "P24 Certificates",
                    body: "Annual tax deduction certificates issued to each employee showing total earnings and PAYE deducted.",
                    agency: "Issued to employees",
                  },
                  {
                    title: "NIS Annual Reconciliation",
                    body: "Reconcile all NIS contributions paid during the year against NIS records. Resolve any discrepancies.",
                    agency: "National Insurance Scheme",
                  },
                  {
                    title: "NHT Annual Return",
                    body: "Annual reconciliation of NHT contributions. Confirm total employee and employer contributions match NHT records.",
                    agency: "National Housing Trust",
                  },
                ].map((filing) => (
                  <div key={filing.title} className="bg-background rounded-lg p-4 border border-border">
                    <h3 className="font-bold text-sm mb-1">{filing.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{filing.body}</p>
                    <p className="text-xs font-semibold text-muted-foreground">Filed with: {filing.agency}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Filing 1: SO1 */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded">Filing 1</span>
                <h2 className="text-xl font-bold">SO1 Annual Return (PAYE)</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Filed with Tax Administration Jamaica (TAJ)</p>
              <div className="space-y-3">
                {[
                  "Gather all 12 monthly payroll registers (April 2025 – March 2026)",
                  "Reconcile total gross emoluments paid to each employee",
                  "Confirm total PAYE deducted per employee matches your payroll records",
                  "Cross-check PAYE remitted monthly against TAJ receipts (P11 forms)",
                  "Identify any variances — under-remittances attract 10% penalty + 1.5%/month interest",
                  "Download current SO1 form from taj.gov.jm (use 2025/2026 version)",
                  "Complete employer details: TRN, business name, registered address",
                  "Enter each employee: full name, TRN, NIS number, total emoluments, total PAYE",
                  "Include benefit-in-kind values (company vehicles, housing, loans, etc.)",
                  "Include directors' fees — must be reported separately on the SO1",
                  "Calculate Box totals: total emoluments, total PAYE deducted, total PAYE remitted",
                  "Sign the declaration (must be signed by a director, proprietor, or authorized officer)",
                  "Submit via TAJ e-Services portal — or file paper copy at nearest TAJ office",
                  "Pay any balance due via TAJ portal, bank transfer, or at TAJ cashier",
                  "Save TAJ submission confirmation receipt — keep for 7 years minimum",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filing 2: P24 */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded">Filing 2</span>
                <h2 className="text-xl font-bold">P24 Employee Tax Certificates</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Issued to every employee</p>
              <div className="space-y-3">
                {[
                  "Generate a P24 certificate for every employee who worked during the tax year",
                  "Include: employee name, TRN, NIS number, total emoluments, total PAYE deducted",
                  "Include benefit-in-kind values shown on each employee's record",
                  "For employees who left during the year: issue a P45 (leaving certificate) if not already done",
                  "Distribute P24 certificates to all current employees before March 31",
                  "Retain employer copies of all P24s for a minimum of 7 years",
                  "Employees need P24s to file personal income tax returns with TAJ",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filing 3: NIS */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded">Filing 3</span>
                <h2 className="text-xl font-bold">NIS Annual Reconciliation</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Filed with National Insurance Scheme (mlss.gov.jm / nis.gov.jm)</p>
              <div className="space-y-3">
                {[
                  "Log into the NIS employer portal at nis.gov.jm",
                  "Download your NIS contribution statement for April 2025 – March 2026",
                  "Compare NIS contributions remitted against your payroll records",
                  "Verify employee NIS numbers are correct — incorrect numbers delay benefit claims",
                  "Confirm contributions calculated at 3% employee + 3% employer on insurable wages",
                  "Check that no employee exceeded the annual NIS ceiling of JMD $5,000,000",
                  "Resolve any discrepancies with NIS before March 31",
                  "File corrected returns if any months were under-remitted or reported incorrectly",
                  "Keep NIS reconciliation records for a minimum of 7 years",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filing 4: NHT */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded">Filing 4</span>
                <h2 className="text-xl font-bold">NHT Annual Return</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Filed with National Housing Trust (nht.gov.jm)</p>
              <div className="space-y-3">
                {[
                  "Log into the NHT employer portal at nht.gov.jm",
                  "Download your NHT contribution statement for the full tax year",
                  "Reconcile NHT contributions: 2% employee + 3% employer on gross salary",
                  "Verify no earnings ceiling was applied — NHT has no ceiling, applies to all earnings",
                  "Confirm all employees are registered with NHT — new hires must be added within 7 days",
                  "Resolve any discrepancies with NHT before March 31",
                  "Submit annual reconciliation via the NHT employer portal",
                  "Keep NHT reconciliation records for a minimum of 7 years",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Education Tax & HEART */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-foreground text-background text-xs font-bold px-2 py-1 rounded">Filing 5</span>
                <h2 className="text-xl font-bold">Education Tax &amp; HEART/NSTA Reconciliation</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Included in TAJ filings</p>
              <div className="space-y-3">
                {[
                  "Reconcile Education Tax deductions: 2.25% employee + 3.5% employer on gross salary",
                  "Confirm Education Tax remittances match your payroll records (filed with PAYE to TAJ)",
                  "If liable for HEART/NSTA: reconcile 3% employer levy on total gross payroll",
                  "HEART/NSTA applies if monthly payroll exceeds JMD $292,813.50",
                  "Resolve any Education Tax or HEART discrepancies with TAJ before March 31",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Post year-end */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-muted text-foreground text-xs font-bold px-2 py-1 rounded border border-border">After March 31</span>
                <h2 className="text-xl font-bold">Prepare for the New Tax Year</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">April 1 &ndash; April 14, 2026</p>
              <div className="space-y-3">
                {[
                  "Reset payroll system to 2026/2027 tax year (April 1 start)",
                  "Verify all 2026 budget rates are applied — PAYE threshold, NIS ceiling, etc.",
                  "Collect updated TD1 (Employee Tax Declaration) from any employee whose status changed",
                  "Register any new employees with NIS, NHT, and TAJ if not already done",
                  "Update salary sacrifice, pension, and benefit-in-kind configurations",
                  "Process April payroll and remit all statutory deductions by April 14",
                  "Set up calendar reminders for the 14th of each month for the full year",
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-border print:border-gray-400" />
                    <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Penalties reference */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <h2 className="text-lg font-bold text-red-900 dark:text-red-200 mb-4">Penalties for Late or Non-Filing</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-red-200 dark:border-red-800">
                    <th className="text-left py-2 font-semibold text-red-900 dark:text-red-200">Filing</th>
                    <th className="text-right py-2 font-semibold text-red-900 dark:text-red-200">Penalty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100 dark:divide-red-900">
                  <tr>
                    <td className="py-3 text-red-800 dark:text-red-300">SO1 (PAYE) late filing</td>
                    <td className="py-3 text-right font-semibold text-red-900 dark:text-red-200">10% surcharge on PAYE due</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-red-800 dark:text-red-300">PAYE late payment interest</td>
                    <td className="py-3 text-right font-semibold text-red-900 dark:text-red-200">1.5% per month (compounding)</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-red-800 dark:text-red-300">NIS late remittance</td>
                    <td className="py-3 text-right font-semibold text-red-900 dark:text-red-200">Penalties + potential prosecution</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-red-800 dark:text-red-300">NHT late remittance</td>
                    <td className="py-3 text-right font-semibold text-red-900 dark:text-red-200">Surcharges + interest</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-red-800 dark:text-red-300">Failure to issue P24 certificates</td>
                    <td className="py-3 text-right font-semibold text-red-900 dark:text-red-200">Employee complaint to TAJ + penalties</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-red-700 dark:text-red-400 mt-4">
                Persistent non-compliance can result in TAJ enforcement action including liens on business assets,
                garnishment orders, and criminal prosecution of responsible officers.
              </p>
            </div>

            {/* Email capture for PDF */}
            <div id="get-checklist" className="bg-muted/40 border-2 border-foreground/20 rounded-xl p-8 text-center print:hidden">
              <span className="text-5xl block mb-4">📋</span>
              <h2 className="text-2xl font-bold mb-2">Download the Complete Filing Checklist (PDF)</h2>
              <p className="text-muted-foreground mb-2 max-w-lg mx-auto">
                Get this entire year-end filing guide as a printable PDF checklist. Share it with your accountant,
                HR team, or business partner so nothing falls through the cracks before March 31.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Enter your email and we&apos;ll send it instantly &mdash; free, no strings attached.
              </p>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send me the free checklist &rarr;
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. We also send Jamaica payroll deadline reminders so you never miss a filing.
              </p>
            </div>

            {/* SEO content */}
            <div className="space-y-6 text-sm leading-7 text-muted-foreground">
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  Why is March 31 the most important date for Jamaican employers?
                </h2>
                <p>
                  Jamaica&apos;s tax year ends on March 31. This means every employer must reconcile and file their
                  annual returns for PAYE, NIS, NHT, and Education Tax by this date. It is the single most
                  compliance-heavy deadline of the year. Unlike monthly remittances (due on the 14th), the March 31
                  filings require you to reconcile the entire year&apos;s payroll records against what was actually
                  remitted to TAJ, NIS, and NHT.
                </p>
              </div>
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  What is the SO1 Annual Return?
                </h2>
                <p>
                  The SO1 is the annual PAYE return that every Jamaican employer must file with Tax Administration
                  Jamaica (TAJ). It summarizes total emoluments paid and total PAYE deducted for every employee
                  during the tax year (April 1 to March 31). The SO1 must be accompanied by individual employee
                  details including name, TRN, NIS number, total earnings, and PAYE deducted. If the total PAYE
                  remitted during the year is less than the total deducted, the balance must be paid with the SO1.
                </p>
              </div>
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  What is a P24 certificate?
                </h2>
                <p>
                  A P24 is the annual tax deduction certificate that employers must issue to every employee.
                  It shows the employee&apos;s total earnings and total PAYE deducted during the tax year.
                  Employees need their P24 to file personal income tax returns with TAJ. Employers are legally
                  required to issue P24 certificates by March 31.
                </p>
              </div>
              <div>
                <h2 className="text-foreground text-xl font-semibold mb-3">
                  How do I reconcile NIS and NHT contributions?
                </h2>
                <p>
                  Log into the NIS employer portal (nis.gov.jm) and the NHT employer portal (nht.gov.jm) to
                  download your contribution statements for the full tax year. Compare these against your internal
                  payroll records. Any discrepancies &mdash; missing months, incorrect amounts, wrong employee
                  numbers &mdash; must be resolved before March 31. Both NIS and NHT impose penalties for
                  under-remittance, and unresolved discrepancies can delay employee benefit claims.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-foreground text-background rounded-xl p-6 text-center print:hidden">
              <p className="font-bold text-lg mb-2">Let us handle year-end filing for you</p>
              <p className="text-sm opacity-80 mb-4">
                PayrollJamaica generates your SO1, P24 certificates, and reconciliation reports automatically.
                No spreadsheets. No manual calculations. No missed deadlines.
              </p>
              <a
                href="/calculator"
                className="inline-block bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mr-3"
              >
                Try Free Calculator &rarr;
              </a>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block border border-background/30 font-semibold px-6 py-3 rounded-lg hover:bg-background/10 transition-colors"
              >
                Get Started Free
              </a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
