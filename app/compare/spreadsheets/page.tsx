import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";

const baseDescription =
  "Jamaican businesses that rely on Excel spreadsheets for payroll face errors in PAYE calculations, manual NIS lookups, hours spent on payslips, and serious audit risk. Payroll Jamaica automates every statutory deduction — PAYE, NIS, NHT, and Education Tax — so you can switch from spreadsheets to compliant, automated payroll in days. See why hundreds of Jamaican employers have already made the switch.";

export const metadata: Metadata = {
  title: "Stop Doing Payroll in Spreadsheets — Switch to Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll spreadsheets create PAYE errors, audit risk, and wasted hours for Jamaican employers. Switch to Payroll Jamaica and automate PAYE, NIS, NHT, and Education Tax — accurate every time, with no manual calculations.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "payroll spreadsheet Jamaica",
    "excel payroll Jamaica",
    "payroll software vs spreadsheet Jamaica",
    "manual payroll vs software Jamaica",
    "switch from spreadsheet to payroll software Jamaica",
    "replace excel payroll Jamaica",
    "automate payroll Jamaica",
    "PAYE spreadsheet errors Jamaica",
    "payroll software for small business Jamaica",
    "migrate from excel payroll Jamaica",
    "payroll automation Jamaica",
    "spreadsheet payroll problems Jamaica",
    "Jamaican payroll errors",
    "better than excel payroll Jamaica",
    "Jamaica payroll software comparison",
  ]),
  alternates: {
    canonical: canonical("/compare/spreadsheets"),
    languages: {
      "en-JM": canonical("/compare/spreadsheets"),
      en: canonical("/compare/spreadsheets"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Stop Doing Payroll in Spreadsheets — Switch to Payroll Jamaica",
    description: baseDescription,
    url: canonical("/compare/spreadsheets"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Payroll Software vs Spreadsheets Jamaica — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Doing Payroll in Spreadsheets — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const comparisonRows = [
  {
    feature: "PAYE calculations",
    spreadsheet: "Manual formulas — error-prone, break when rates change",
    payrollJamaica: "Automatic — rates and thresholds always current",
  },
  {
    feature: "NIS contributions",
    spreadsheet: "Manual lookup of ceiling and rates each pay period",
    payrollJamaica: "Automatic — ceiling enforced, rates pre-configured",
  },
  {
    feature: "NHT contributions",
    spreadsheet: "Manual calculation, easy to apply wrong rate",
    payrollJamaica: "Automatic for employee (2%) and employer (3%)",
  },
  {
    feature: "Education Tax",
    spreadsheet: "Often forgotten or applied incorrectly",
    payrollJamaica: "Automatic — calculated every pay run without fail",
  },
  {
    feature: "Payslip generation",
    spreadsheet: "Hours of formatting work, printed manually",
    payrollJamaica: "1-click — professional payslips delivered to employees",
  },
  {
    feature: "Rate updates",
    spreadsheet: "You must manually update every formula when rates change",
    payrollJamaica: "Rates updated automatically — you are notified",
  },
  {
    feature: "Audit trail",
    spreadsheet: "No version history, easy to overwrite data accidentally",
    payrollJamaica: "Full audit log — every change timestamped and attributed",
  },
  {
    feature: "Remittance reports",
    spreadsheet: "Manual compilation, risk of totalling errors",
    payrollJamaica: "TAJ-ready remittance reports generated automatically",
  },
  {
    feature: "Multi-employee handling",
    spreadsheet: "Slow and error-prone as headcount grows",
    payrollJamaica: "Scales to unlimited employees with no added complexity",
  },
  {
    feature: "Employee access to payslips",
    spreadsheet: "Requires manual distribution by email or print",
    payrollJamaica: "Self-service portal — employees access payslips anytime",
  },
];

const painPoints = [
  {
    title: "PAYE formula errors cost you money",
    description:
      "Jamaican PAYE calculations involve the income tax threshold, two tax bands, and rounding rules. One broken formula in your spreadsheet can underpay or overpay PAYE across your entire payroll — and you may not notice until TAJ comes calling. Penalties and interest on underpaid PAYE add up quickly.",
  },
  {
    title: "You have to manually update rates every year",
    description:
      "When the Ministry of Finance announces a new income tax threshold or NIS ceiling, you need to find every formula in your spreadsheet and update it manually. Miss one cell and your payroll is wrong. Payroll Jamaica applies all rate changes automatically — you don't need to touch a thing.",
  },
  {
    title: "Payslips take hours you don't have",
    description:
      "Formatting payslips in Excel, printing or emailing them individually, and keeping records all add hours to every payroll cycle. Payroll Jamaica generates professional, compliant payslips in one click and delivers them through the employee portal — freeing up your time for higher-value work.",
  },
  {
    title: "Spreadsheets create serious audit risk",
    description:
      "If TAJ audits your payroll, you need to show accurate historical records and a clear trail of what was calculated and remitted. Spreadsheets have no built-in version control or audit log — files get overwritten, formulas change, and historical data becomes unreliable. Payroll Jamaica maintains a complete, immutable audit trail.",
  },
  {
    title: "Human error compounds over time",
    description:
      "Manual data entry, formula copy-paste mistakes, and wrong lookups each introduce small errors that compound across months and employees. Over a year of spreadsheet payroll, even careful operators accumulate compliance risk. Automation eliminates the human error layer entirely.",
  },
  {
    title: "Spreadsheets don't scale",
    description:
      "When your team was 5 people, a spreadsheet worked. At 20 employees, it's manageable. At 50, it becomes a full-time job. Payroll Jamaica runs the same payroll process for 5 or 500 employees — no extra work required as you grow.",
  },
];

const migrationSteps = [
  {
    step: "1",
    title: "Export your employee data from Excel",
    description:
      "Export your current employee list as a CSV or spreadsheet. Include employee names, TRN numbers, NIS numbers, salary details, and any recurring allowances or deductions.",
  },
  {
    step: "2",
    title: "Import into Payroll Jamaica",
    description:
      "Upload your employee data to Payroll Jamaica. Our team reviews the import and maps your fields to our system — no manual re-entry required for bulk employee imports.",
  },
  {
    step: "3",
    title: "Configure your pay structure",
    description:
      "Set up salary structures, pay frequencies (monthly, fortnightly, weekly), allowances, loan deductions, and any company-specific payroll components.",
  },
  {
    step: "4",
    title: "Run your first automated payroll",
    description:
      "Process your first payroll run with Payroll Jamaica. Review the statutory calculations alongside your old spreadsheet to confirm everything matches — then you're done with spreadsheets.",
  },
];

export default function CompareSpreadsheetsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Compare", item: canonical("/compare") },
      { "@type": "ListItem", position: 3, name: "Spreadsheets vs Payroll Jamaica", item: canonical("/compare/spreadsheets") },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Payroll Software vs Spreadsheets
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Stop doing payroll in spreadsheets.{" "}
              <span className="text-muted-foreground">Switch to Payroll Jamaica.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Every month you run payroll in Excel, you&apos;re one broken formula away from a PAYE error,
              a missed remittance, or an audit liability. Payroll Jamaica automates every calculation —
              PAYE, NIS, NHT, and Education Tax — so your payroll is accurate every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Switch from spreadsheets today
              </a>
              <a
                href="/calculator"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Try the free payroll calculator
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Spreadsheet payroll vs Payroll Jamaica
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A feature-by-feature comparison of manual spreadsheet payroll versus automated payroll software
              built for Jamaica.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="text-left p-4 font-semibold text-foreground w-1/3">Feature</th>
                    <th className="text-left p-4 font-semibold text-muted-foreground w-1/3">
                      Manual spreadsheet
                    </th>
                    <th className="text-left p-4 font-semibold text-foreground w-1/3">
                      Payroll Jamaica
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
                    >
                      <td className="p-4 font-medium text-foreground align-top">{row.feature}</td>
                      <td className="p-4 text-muted-foreground align-top leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                          {row.spreadsheet}
                        </span>
                      </td>
                      <td className="p-4 text-foreground align-top leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                          {row.payrollJamaica}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Businesses Switch */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Jamaican businesses switch from spreadsheets
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              The reasons are consistent: errors, time, compliance risk, and the realisation that spreadsheets
              weren&apos;t built for Jamaican payroll law.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {painPoints.map((p) => (
                <div key={p.title} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Steps */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              How to migrate from Excel to Payroll Jamaica
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Most Jamaican businesses complete the migration in less than a week. Here&apos;s how it works.
            </p>
            <div className="space-y-6">
              {migrationSteps.map((step) => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Why spreadsheet payroll is risky for Jamaican employers
              </h2>
              <p>
                Jamaican payroll law requires employers to correctly calculate and remit four separate statutory
                contributions — PAYE, NIS, NHT, and Education Tax — every month for every employee. Each has
                its own rates, thresholds, ceilings, and remittance deadlines. When these calculations are done
                in a spreadsheet, the risk of error is significant.
              </p>
              <p className="mt-3">
                PAYE alone involves applying the income tax threshold (currently JMD $1,500,096 per year), two
                different tax rates (25% and 30%), and prorating these across monthly or fortnightly pay periods.
                Any formula error that causes systematic underpayment of PAYE means your business owes back-taxes
                to Tax Administration Jamaica, plus interest and penalties. TAJ actively audits employer PAYE
                remittances, and discrepancies are caught during employer compliance checks.
              </p>
              <p className="mt-3">
                NIS has an annual earnings ceiling — contributions only apply up to a set threshold. Spreadsheets
                require manual checks to ensure the ceiling is correctly enforced for each employee. Overpaying
                NIS (by not applying the ceiling) or underpaying (by using an outdated ceiling) both create
                administrative problems and potential refund requests.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What happens when statutory rates change in Jamaica?
              </h2>
              <p>
                Each year, Jamaica&apos;s government budget announcement typically includes changes to the income
                tax threshold, NIS ceiling, or other statutory rates. In recent years, the income tax threshold
                has been increased several times. When rates change, every formula in your spreadsheet must be
                manually updated — and if any cells are missed, your payroll calculations will be wrong until
                discovered.
              </p>
              <p className="mt-3">
                Payroll Jamaica monitors all statutory rate announcements from the Ministry of Finance, TAJ,
                the NIS, and the NHT. When rates change, the system is updated centrally, and all employers
                are notified. Your next payroll run automatically uses the new rates — no spreadsheet edits,
                no formula updates, no risk of missing a change.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Frequently asked questions about switching from spreadsheets
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    Can I import my existing employee data from Excel?
                  </h3>
                  <p>
                    Yes. Payroll Jamaica accepts employee imports from CSV or Excel files. Our team assists
                    with the import process to ensure your salary structures, allowances, and employee records
                    are correctly configured in the new system.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    How long does the migration take?
                  </h3>
                  <p>
                    Most businesses complete the migration and run their first automated payroll within one
                    to five business days, depending on the number of employees and complexity of pay structures.
                    We recommend running the first automated payroll in parallel with your spreadsheet to
                    verify the outputs match before fully switching over.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    Will my historical payroll data be available?
                  </h3>
                  <p>
                    Payroll history prior to migrating to Payroll Jamaica lives in your old spreadsheets.
                    Going forward, all payroll runs processed in Payroll Jamaica are stored permanently with
                    full audit trails. You can export historical payroll data at any time.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    What if I have a complex pay structure with allowances and deductions?
                  </h3>
                  <p>
                    Payroll Jamaica supports configurable salary components — overtime, travel allowances,
                    housing allowances, loan deductions, union dues, and any custom deduction type. Our team
                    works with you during onboarding to replicate your existing structure in the system.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Ready to switch?
              </h2>
              <p>
                Join the Jamaican businesses that have already moved from spreadsheets to automated,
                compliant payroll. Explore our{" "}
                <a href="/features" className="text-foreground underline hover:no-underline">
                  full feature set
                </a>
                , use the{" "}
                <a href="/calculator" className="text-foreground underline hover:no-underline">
                  free payroll calculator
                </a>
                , or browse our{" "}
                <a href="/resources" className="text-foreground underline hover:no-underline">
                  Jamaica payroll resources
                </a>{" "}
                to understand what compliant payroll looks like for your business.
              </p>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block mt-4 text-foreground font-semibold underline hover:no-underline"
              >
                Switch from spreadsheets today →
              </a>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Your spreadsheet is one broken formula away from a PAYE error
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Automate PAYE, NIS, NHT, and Education Tax with Payroll Jamaica.
              Accurate, compliant payroll — without the manual work.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Switch from spreadsheets — it&apos;s free to start
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Switch from Excel to Payroll Jamaica"
        text="Automated PAYE, NIS, NHT, and Education Tax. No spreadsheet errors. No manual rate updates."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
