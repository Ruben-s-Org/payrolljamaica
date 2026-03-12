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
  "Calculate National Insurance Scheme (NIS) contributions instantly with Jamaica's free NIS calculator. Compute the exact 3% employee and 3% employer NIS deductions for any salary, including the JMD $5,000,000 annual wage ceiling. Updated for 2026 NIS rates set by the Ministry of Labour and Social Security.";

export const metadata: Metadata = {
  title: "NIS Calculator Jamaica 2026 — Free National Insurance Scheme Contribution Calculator",
  description: ensureMinDescription(
    "Free NIS calculator for Jamaica 2026. Compute National Insurance Scheme contributions — 3% employee + 3% employer — with the JMD $5,000,000 annual wage ceiling applied automatically.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "NIS calculator Jamaica",
    "NIS calculator Jamaica 2026",
    "National Insurance Scheme calculator Jamaica",
    "NIS contribution calculator Jamaica",
    "Jamaica NIS calculator",
    "how to calculate NIS Jamaica",
    "NIS rates Jamaica 2026",
    "NIS deductions Jamaica",
    "NIS employer contribution Jamaica",
    "NIS employee contribution Jamaica",
    "Jamaica statutory deductions calculator",
    "NIS ceiling Jamaica",
    "NIS payroll Jamaica",
    "NIS contributions Jamaica 2026",
    "free NIS calculator Jamaica",
  ]),
  alternates: {
    canonical: canonical("/nis-calculator-jamaica"),
    languages: {
      "en-JM": canonical("/nis-calculator-jamaica"),
      en: canonical("/nis-calculator-jamaica"),
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
    title: "NIS Calculator Jamaica 2026 — Free National Insurance Scheme Calculator",
    description: baseDescription,
    url: canonical("/nis-calculator-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "NIS Calculator Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free NIS Calculator Jamaica 2026",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function NisCalculatorJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              2026 NIS rates — 3% employee + 3% employer, ceiling JMD $5,000,000/year
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-balance">
              NIS Calculator Jamaica 2026
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Calculate National Insurance Scheme (NIS) contributions for any Jamaican employee.
              Includes both employee and employer portions with the annual wage ceiling applied automatically.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <PayrollCalculator />

        {/* NIS-specific educational content */}
        <div className="w-full px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NIS in Jamaica?</h2>
              <p>
                The National Insurance Scheme (NIS) is Jamaica&apos;s compulsory social security programme,
                administered by the Ministry of Labour and Social Security. NIS provides employees with
                protection against loss of income due to sickness, maternity, employment injury, invalidity,
                and retirement. Both employers and employees are required by law to contribute to NIS.
              </p>
              <p className="mt-3">
                NIS contributions are deducted from employee salaries each pay period and matched by an
                equal employer contribution. All amounts are remitted to the National Insurance Fund by
                the employer on behalf of the employee.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Jamaica NIS rates for 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">Who pays</th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">Rate</th>
                      <th className="text-left py-2 text-foreground font-medium">Maximum annual contribution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 text-foreground">Employee</td>
                      <td className="py-2 pr-4 text-foreground font-medium">3%</td>
                      <td className="py-2">JMD $150,000/year (JMD $12,500/month)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-foreground">Employer</td>
                      <td className="py-2 pr-4 text-foreground font-medium">3%</td>
                      <td className="py-2">JMD $150,000/year (JMD $12,500/month)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Wage ceiling</td>
                      <td className="py-2 pr-4 text-foreground font-medium">JMD $5,000,000/year</td>
                      <td className="py-2">No NIS deducted on earnings above the ceiling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How to calculate NIS in Jamaica — step by step</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Determine gross salary for the period.</strong>{" "}
                  Use the actual gross pay before any deductions for the pay cycle.
                </li>
                <li>
                  <strong className="text-foreground">Check against the annual ceiling.</strong>{" "}
                  The NIS wage ceiling is JMD $5,000,000/year. Once an employee earns more than this
                  in a tax year, NIS stops being deducted on additional earnings.
                </li>
                <li>
                  <strong className="text-foreground">Multiply by 3% for employee NIS.</strong>{" "}
                  Example: JMD $100,000 gross × 3% = JMD $3,000 employee NIS deduction.
                </li>
                <li>
                  <strong className="text-foreground">Calculate employer NIS at the same rate.</strong>{" "}
                  Employer contributes an additional 3% on top of the employee contribution.
                </li>
                <li>
                  <strong className="text-foreground">Remit both to NIS.</strong>{" "}
                  Total NIS remittance = employee 3% + employer 3% = 6% of gross salary.
                </li>
              </ol>
              <p className="mt-4">
                Our{" "}
                <Link href="/calculator" className="text-foreground underline hover:no-underline">
                  Jamaica payroll calculator
                </Link>{" "}
                above automatically applies the wage ceiling and computes NIS for any pay frequency.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">NIS benefits for Jamaican employees</h2>
              <p>Employees who contribute to NIS are entitled to the following benefits:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Retirement pension</strong> — Monthly payments from age 65 (or earlier with qualifying contributions)</li>
                <li><strong className="text-foreground">Sickness benefit</strong> — Income replacement during certified illness</li>
                <li><strong className="text-foreground">Maternity benefit</strong> — 8 weeks paid benefit for qualifying mothers</li>
                <li><strong className="text-foreground">Employment injury benefit</strong> — Compensation for work-related injuries</li>
                <li><strong className="text-foreground">Invalidity benefit</strong> — Support for permanent disability</li>
                <li><strong className="text-foreground">Funeral grant</strong> — Lump-sum payment toward burial costs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">NIS remittance deadlines</h2>
              <p>
                Employers must remit NIS contributions monthly by the{" "}
                <strong className="text-foreground">14th of the following month</strong>.
                NIS is remitted alongside NHT and Education Tax using a combined C7 form submitted to TAJ.
                Quarterly filings are also required. Late remittance attracts penalties and interest.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">NIS and the other statutory deductions</h2>
              <p>NIS is deducted alongside three other statutory contributions:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-foreground">PAYE</strong> — Income tax (25–30% on income above the JMD $1,500,096 threshold)
                </li>
                <li>
                  <strong className="text-foreground">NHT</strong> — National Housing Trust (2% employee + 3% employer, no ceiling)
                </li>
                <li>
                  <strong className="text-foreground">Education Tax</strong> — 2.25% employee + 3.5% employer, no ceiling
                </li>
              </ul>
              <p className="mt-3">
                NIS is deducted <em>before</em> PAYE is calculated — meaning it reduces the taxable income
                used to compute income tax.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Automate NIS calculations</h2>
              <p>
                Payroll Jamaica automatically calculates NIS (and all other statutory deductions) for
                every employee, every pay cycle. Rates and ceilings are maintained in the platform — no
                manual updates needed when the Ministry of Labour announces changes.
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
                  <Link href="/paye-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    PAYE Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/nht-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    NHT Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/blog/nis-contributions-jamaica-2025-calculation-guide-common-compliance-mistakes" className="text-foreground underline hover:no-underline">
                    NIS Contributions Jamaica — Calculation Guide & Compliance Mistakes
                  </Link>
                </li>
                <li>
                  <Link href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">
                    Payroll Software Jamaica — Automate NIS & All Statutory Deductions
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="Stop calculating NIS manually"
        text="Payroll Jamaica handles every NIS deduction automatically — employee and employer — with the wage ceiling applied for every pay cycle."
      />

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "NIS Calculator Jamaica 2026",
            url: canonical("/nis-calculator-jamaica"),
            description: "Free NIS calculator for Jamaica. Calculate National Insurance Scheme contributions — 3% employee + 3% employer — using 2026 rates.",
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
              { "@type": "ListItem", position: 2, name: "NIS Calculator Jamaica", item: canonical("/nis-calculator-jamaica") },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much is NIS in Jamaica 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NIS (National Insurance Scheme) in Jamaica for 2026 is 3% of gross salary for employees and 3% for employers. The annual wage ceiling is JMD $5,000,000, meaning the maximum employee NIS contribution is JMD $150,000/year (JMD $12,500/month).",
                },
              },
              {
                "@type": "Question",
                name: "How do you calculate NIS in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To calculate NIS in Jamaica: multiply the employee's gross salary by 3% (employee contribution) and 3% again (employer contribution). If the employee's annual earnings have exceeded JMD $5,000,000 (the wage ceiling), no additional NIS is deducted. Use our free NIS calculator Jamaica tool above for instant results.",
                },
              },
              {
                "@type": "Question",
                name: "What is the NIS wage ceiling in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The NIS insurable wage ceiling in Jamaica is JMD $5,000,000 per year. Once an employee earns more than JMD $5,000,000 in a tax year, NIS contributions stop on the excess earnings. The maximum annual NIS contribution per person is JMD $150,000 (employee) and JMD $150,000 (employer).",
                },
              },
              {
                "@type": "Question",
                name: "Is NIS tax deductible in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Employee NIS contributions are deducted before PAYE (income tax) is calculated in Jamaica. This means NIS reduces the taxable income, which in turn reduces the PAYE liability.",
                },
              },
              {
                "@type": "Question",
                name: "When must NIS be remitted in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Employers must remit NIS contributions to TAJ by the 14th of the month following the pay period, using the C7 combined form. NIS is remitted alongside NHT and Education Tax contributions.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
