import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import PayrollCalculator from "@/components/sections/calculator/default";

const baseDescription =
  "Use Jamaica's most accurate free PAYE calculator. Instantly compute Pay As You Earn income tax deductions for any gross salary using 2026 rates set by Tax Administration Jamaica (TAJ). Supports monthly, fortnightly, and weekly pay. See PAYE, NIS, NHT, and Education Tax breakdowns in seconds — no signup required.";

export const metadata: Metadata = {
  title: "PAYE Calculator Jamaica 2026 — Free Pay As You Earn Tax Calculator | Payroll Jamaica",
  description: ensureMinDescription(
    "Free PAYE calculator for Jamaica 2026. Compute Pay As You Earn income tax from any gross salary using the current JMD $1,902,360 annual threshold and 25%/30% tax rates. See your full tax breakdown instantly.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PAYE calculator Jamaica",
    "PAYE calculator Jamaica 2026",
    "Pay As You Earn calculator Jamaica",
    "Jamaica PAYE tax calculator",
    "income tax calculator Jamaica",
    "Jamaica income tax calculator 2026",
    "PAYE calculation Jamaica",
    "how to calculate PAYE Jamaica",
    "PAYE tax Jamaica",
    "Jamaica tax threshold calculator",
    "Jamaica salary tax calculator",
    "PAYE deductions Jamaica",
    "TAJ PAYE Jamaica",
    "payroll tax calculator Jamaica",
    "free PAYE calculator Jamaica",
  ]),
  alternates: {
    canonical: canonical("/paye-calculator-jamaica"),
    languages: {
      "en-JM": canonical("/paye-calculator-jamaica"),
      en: canonical("/paye-calculator-jamaica"),
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
    title: "PAYE Calculator Jamaica 2026 — Free Pay As You Earn Tax Calculator",
    description: baseDescription,
    url: canonical("/paye-calculator-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "PAYE Calculator Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PAYE Calculator Jamaica 2026",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function PayeCalculatorJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Updated for 2026 — JMD $1,902,360 threshold (effective April 2026)
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-balance">
              PAYE Calculator Jamaica 2026
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Calculate Pay As You Earn (PAYE) income tax deductions for any Jamaican salary.
              Free, accurate, and updated to reflect TAJ&apos;s 2026 rates.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <PayrollCalculator />

        {/* PAYE-specific educational content */}
        <div className="w-full px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is PAYE in Jamaica?</h2>
              <p>
                PAYE — Pay As You Earn — is Jamaica&apos;s system for withholding income tax from employee
                salaries at the source. Instead of employees paying a lump-sum tax bill annually, employers
                deduct PAYE each pay period and remit it directly to{" "}
                <strong className="text-foreground">Tax Administration Jamaica (TAJ)</strong>.
                This ensures the government collects income tax in real time throughout the year.
              </p>
              <p className="mt-3">
                All employers registered with TAJ are legally required to deduct and remit PAYE on behalf
                of their employees. Failure to do so results in interest charges, penalties, and potential
                TAJ audit action.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Jamaica PAYE rates for 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">Annual income band</th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">PAYE rate</th>
                      <th className="text-left py-2 text-foreground font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4">Up to JMD $1,902,360/year</td>
                      <td className="py-2 pr-4 text-foreground font-medium">0%</td>
                      <td className="py-2">Below income tax threshold — no PAYE due</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">JMD $1,902,361 – $6,000,000/year</td>
                      <td className="py-2 pr-4 text-foreground font-medium">25%</td>
                      <td className="py-2">Standard rate on income above threshold</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Above JMD $6,000,000/year</td>
                      <td className="py-2 pr-4 text-foreground font-medium">30%</td>
                      <td className="py-2">Higher rate for high earners</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                The income tax threshold of{" "}
                <strong className="text-foreground">JMD $1,902,360 per year (JMD $158,530/month)</strong>{" "}
                applies from April 2026. Salaries below this threshold attract zero PAYE.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How to calculate PAYE in Jamaica — step by step</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Start with gross annual salary.</strong>{" "}
                  Multiply monthly gross by 12 (or weekly by 52, fortnightly by 26).
                </li>
                <li>
                  <strong className="text-foreground">Subtract NIS employee contribution.</strong>{" "}
                  NIS (3% of gross, up to a JMD $5,000,000 ceiling) is deducted before PAYE is calculated.
                </li>
                <li>
                  <strong className="text-foreground">Subtract the income tax threshold.</strong>{" "}
                  Deduct JMD $1,902,360 from the NIS-adjusted income to get taxable income.
                </li>
                <li>
                  <strong className="text-foreground">Apply the PAYE rates.</strong>{" "}
                  25% on taxable income up to JMD $4,097,640; 30% on any balance above that.
                </li>
                <li>
                  <strong className="text-foreground">Divide by pay periods.</strong>{" "}
                  Divide annual PAYE by 12 for monthly, 26 for fortnightly, or 52 for weekly payroll.
                </li>
              </ol>
              <p className="mt-4">
                Use our{" "}
                <Link href="/calculator" className="text-foreground underline hover:no-underline">
                  free Jamaica payroll calculator
                </Link>{" "}
                above to compute PAYE instantly for any salary amount.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">PAYE remittance deadlines in Jamaica</h2>
              <p>
                Employers must remit PAYE to TAJ by the{" "}
                <strong className="text-foreground">14th of the following month</strong>. For example,
                PAYE deducted in March must be remitted by April 14th. Annual employer returns (SO1/SO2)
                are due by{" "}
                <strong className="text-foreground">March 31</strong> each year (Jamaica&apos;s tax year runs
                April 1 – March 31).
              </p>
              <p className="mt-3">
                Late remittance attracts a{" "}
                <strong className="text-foreground">penalty of 50% of the tax due</strong> plus interest at
                the current TAJ rate. Use{" "}
                <Link href="/payroll-year-end-jamaica" className="text-foreground underline hover:no-underline">
                  our year-end payroll guide
                </Link>{" "}
                to stay ahead of every deadline.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">PAYE vs other statutory deductions</h2>
              <p>
                PAYE is one of four statutory deductions Jamaican employers must make. The others are:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-foreground">NIS (National Insurance Scheme)</strong> — 3% employee,
                  3% employer (ceiling: JMD $5M/year)
                </li>
                <li>
                  <strong className="text-foreground">NHT (National Housing Trust)</strong> — 2% employee,
                  3% employer (no ceiling)
                </li>
                <li>
                  <strong className="text-foreground">Education Tax</strong> — 2.25% employee, 3.5% employer
                  (no ceiling)
                </li>
              </ul>
              <p className="mt-3">
                Our calculator above computes all four deductions simultaneously, giving you the complete
                picture of employee net pay and total employer cost.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Automate PAYE calculations</h2>
              <p>
                Manual PAYE calculations are error-prone and time-consuming — especially when rates change
                or you have multiple employees on different pay frequencies. Payroll Jamaica automates every
                PAYE, NIS, NHT, and Education Tax calculation, generates TAJ-compliant payslips, and
                produces remittance reports ready to submit. No spreadsheets. No errors.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  data-open-fillout="true"
                  className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get started free
                </a>
                <Link
                  href="/payroll-software-jamaica"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
                >
                  See payroll software →
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Related resources</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <Link href="/calculator" className="text-foreground underline hover:no-underline">
                    Jamaica Payroll Calculator — PAYE, NIS, NHT & Education Tax
                  </Link>
                </li>
                <li>
                  <Link href="/nis-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    NIS Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/nht-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    NHT Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/blog/paye-income-tax-threshold-2026-jamaica-complete-guide" className="text-foreground underline hover:no-underline">
                    PAYE Income Tax Threshold 2026 — Jamaica Complete Guide
                  </Link>
                </li>
                <li>
                  <Link href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">
                    Payroll Software Jamaica — Automate PAYE & Statutory Deductions
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="Stop calculating PAYE manually"
        text="Payroll Jamaica automates every PAYE, NIS, NHT, and Education Tax deduction — and generates compliant payslips in seconds."
      />

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "PAYE Calculator Jamaica 2026",
            url: canonical("/paye-calculator-jamaica"),
            description: "Free PAYE calculator for Jamaica. Calculate Pay As You Earn income tax deductions using 2026 TAJ rates.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "JMD" },
            inLanguage: "en-JM",
            publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "PAYE Calculator Jamaica", item: canonical("/paye-calculator-jamaica") },
            ],
          }),
        }}
      />

      {/* JSON-LD: HowTo — step-by-step PAYE calculation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Calculate PAYE in Jamaica 2026",
            description: "Step-by-step guide to calculating Pay As You Earn (PAYE) income tax in Jamaica using 2026 TAJ rates.",
            step: [
              { "@type": "HowToStep", name: "Determine annual gross salary", text: "Start with the employee's annual gross salary. Multiply monthly by 12, fortnightly by 26, or weekly by 52." },
              { "@type": "HowToStep", name: "Subtract NIS employee contribution", text: "Deduct 3% NIS contribution from gross salary (maximum JMD $150,000/year at the JMD $5,000,000 wage ceiling)." },
              { "@type": "HowToStep", name: "Apply the income tax threshold", text: "Subtract the 2026 income tax threshold of JMD $1,902,360 from the NIS-adjusted income to get taxable income." },
              { "@type": "HowToStep", name: "Calculate PAYE at 25%", text: "Multiply taxable income (up to JMD $4,097,640 above the threshold) by 25% to get PAYE at the standard rate." },
              { "@type": "HowToStep", name: "Apply 30% rate on high earnings", text: "If taxable income exceeds JMD $4,097,640 above the threshold, multiply the excess by 30%." },
              { "@type": "HowToStep", name: "Convert to pay period amount", text: "Divide annual PAYE by 12 (monthly), 26 (fortnightly), or 52 (weekly) to get the per-period deduction." },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage — targets People Also Ask boxes for PAYE queries */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the PAYE threshold in Jamaica for 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The PAYE income tax threshold in Jamaica for 2026 is JMD $1,902,360 per year (JMD $158,530 per month), effective from April 1, 2026. Employees earning below this threshold pay zero PAYE.",
                },
              },
              {
                "@type": "Question",
                name: "How do you calculate PAYE in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To calculate PAYE in Jamaica: (1) Take gross annual salary. (2) Subtract NIS employee contribution (3%, ceiling JMD $5M/year). (3) Subtract the income tax threshold (JMD $1,902,360 for 2026). (4) Apply 25% on taxable income up to JMD $4,097,640 above threshold, then 30% on any excess. (5) Divide by pay periods. Use our free PAYE calculator Jamaica tool above for instant results.",
                },
              },
              {
                "@type": "Question",
                name: "What is the PAYE rate in Jamaica 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jamaica's PAYE rates for 2026 are: 0% on income up to JMD $1,902,360/year (the income tax threshold), 25% on income from JMD $1,902,361 to JMD $6,000,000/year, and 30% on income above JMD $6,000,000/year.",
                },
              },
              {
                "@type": "Question",
                name: "When must PAYE be remitted to TAJ in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Employers must remit PAYE to Tax Administration Jamaica (TAJ) by the 14th day of the month following the pay period. For example, PAYE deducted in March is due by April 14. Annual employer returns (SO1/SO2) are due March 31.",
                },
              },
              {
                "@type": "Question",
                name: "Is PAYE the same as income tax in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — PAYE (Pay As You Earn) is the mechanism by which Jamaican employees pay income tax. Rather than paying a lump sum at year-end, income tax is withheld from each paycheck by the employer and remitted to TAJ on the employee's behalf.",
                },
              },
              {
                "@type": "Question",
                name: "Does PAYE apply to all Jamaican employees?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PAYE applies to all employed workers in Jamaica. However, employees earning below the annual income tax threshold (JMD $1,902,360 for 2026) have zero PAYE liability. Self-employed individuals pay income tax quarterly via Estimated Tax Payments instead of PAYE.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
