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
  "Use Jamaica's free NHT calculator to compute National Housing Trust contributions for any salary. Calculate the 2% employee and 3% employer NHT deductions for 2026, with no annual ceiling. Find out how much your employees can reclaim after 7 years and how NHT contributions work for homeownership.";

export const metadata: Metadata = {
  title: "NHT Calculator Jamaica 2026 — Free NHT Calculator",
  description: ensureMinDescription(
    "Free NHT calculator for Jamaica 2026. Calculate National Housing Trust contributions — 2% employee + 3% employer — with no annual ceiling. Instant results.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "NHT calculator Jamaica",
    "NHT calculator Jamaica 2026",
    "National Housing Trust calculator Jamaica",
    "NHT contribution calculator Jamaica",
    "Jamaica NHT calculator",
    "how to calculate NHT Jamaica",
    "NHT rates Jamaica 2026",
    "NHT deductions Jamaica",
    "NHT employer contribution Jamaica",
    "NHT employee contribution Jamaica",
    "NHT refund Jamaica",
    "NHT contributions Jamaica 2026",
    "Jamaica housing trust calculator",
    "NHT payroll Jamaica",
    "free NHT calculator Jamaica",
  ]),
  alternates: {
    canonical: canonical("/nht-calculator-jamaica"),
    languages: {
      "en-JM": canonical("/nht-calculator-jamaica"),
      en: canonical("/nht-calculator-jamaica"),
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
    title: "NHT Calculator Jamaica 2026 — Free NHT Calculator",
    description: baseDescription,
    url: canonical("/nht-calculator-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "NHT Calculator Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free NHT Calculator Jamaica 2026",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function NhtCalculatorJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              2026 NHT rates — 2% employee + 3% employer, no ceiling
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-balance">
              NHT Calculator Jamaica 2026
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Calculate National Housing Trust (NHT) contributions for any Jamaican employee.
              Includes both employee and employer deductions with no annual ceiling to apply.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <PayrollCalculator />

        {/* NHT-specific educational content */}
        <div className="w-full px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NHT in Jamaica?</h2>
              <p>
                The National Housing Trust (NHT) is a Jamaican statutory body that helps working Jamaicans
                access affordable housing finance. NHT funds are used to provide low-interest mortgages
                to contributors for purchasing or building a home in Jamaica.
              </p>
              <p className="mt-3">
                Both employees and employers contribute to NHT on every dollar of salary — there is no
                ceiling. Unlike NIS, NHT contributions are not lost permanently: employees can reclaim
                their personal contributions after 7 years if they have not used them for a housing benefit.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Jamaica NHT rates for 2026</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-medium">Who pays</th>
                      <th className="text-left py-2 pr-4 text-foreground font-medium">Rate</th>
                      <th className="text-left py-2 text-foreground font-medium">Ceiling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 text-foreground">Employee</td>
                      <td className="py-2 pr-4 text-foreground font-medium">2%</td>
                      <td className="py-2">None — applies to all earnings</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-foreground">Employer</td>
                      <td className="py-2 pr-4 text-foreground font-medium">3%</td>
                      <td className="py-2">None — applies to all earnings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Unlike NIS, there is no ceiling on NHT. An employee earning JMD $10,000,000/year would
                pay NHT on the full amount. The employee contribution is{" "}
                <strong className="text-foreground">2% of gross salary</strong> and the employer pays
                an additional{" "}
                <strong className="text-foreground">3% of gross salary</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How to calculate NHT in Jamaica</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Determine gross salary for the period.</strong>{" "}
                  NHT is calculated on gross pay before any other deductions.
                </li>
                <li>
                  <strong className="text-foreground">Multiply by 2% for employee NHT.</strong>{" "}
                  Example: JMD $150,000 gross × 2% = JMD $3,000 employee NHT.
                </li>
                <li>
                  <strong className="text-foreground">Multiply by 3% for employer NHT.</strong>{" "}
                  Example: JMD $150,000 gross × 3% = JMD $4,500 employer NHT.
                </li>
                <li>
                  <strong className="text-foreground">No ceiling check required.</strong>{" "}
                  Unlike NIS, NHT has no annual wage ceiling — apply the rates to the full gross salary.
                </li>
              </ol>
              <p className="mt-4">
                Use our{" "}
                <Link href="/calculator" className="text-foreground underline hover:no-underline">
                  free Jamaica payroll calculator
                </Link>{" "}
                above to compute NHT alongside all other statutory deductions.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Can employees get NHT contributions back?</h2>
              <p>
                Yes. Employees can apply to the NHT for a refund of their personal contributions (the 2%
                employee portion) after <strong className="text-foreground">7 years</strong>, provided
                they have not received a housing benefit or loan from the NHT during that period. The
                employer&apos;s 3% contribution is not refundable — it remains in the NHT fund.
              </p>
              <p className="mt-3">
                To apply for an NHT refund, employees must complete the NHT Refund Application form and
                submit it to the nearest NHT office or apply online at the NHT website.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">NHT remittance and deadlines</h2>
              <p>
                Employers must remit NHT contributions by the{" "}
                <strong className="text-foreground">14th of the following month</strong> using the C7
                combined form, submitted to Tax Administration Jamaica (TAJ). NHT is remitted together
                with NIS and Education Tax as part of the monthly statutory filing.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">NHT alongside the other statutory deductions</h2>
              <p>
                NHT is one of four statutory deductions on every Jamaican payroll:
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">PAYE</strong> — Income tax (25–30% above the JMD $1,500,096 threshold)</li>
                <li><strong className="text-foreground">NIS</strong> — National Insurance Scheme (3% employee + 3% employer, ceiling JMD $5M/year)</li>
                <li><strong className="text-foreground">NHT</strong> — National Housing Trust (2% employee + 3% employer, no ceiling)</li>
                <li><strong className="text-foreground">Education Tax</strong> — 2.25% employee + 3.5% employer, no ceiling</li>
              </ul>
              <p className="mt-3">
                Our calculator above computes all four simultaneously, showing you the full picture of
                take-home pay and total employer cost.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Automate NHT calculations</h2>
              <p>
                Payroll Jamaica automatically calculates NHT (and all other statutory deductions) for
                every employee every pay cycle. The platform handles all four deductions — PAYE, NIS,
                NHT, and Education Tax — and generates TAJ-compliant remittance reports automatically.
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
                  <Link href="/nis-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    NIS Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/blog/jamaica-nht-education-tax-2025-employer-compliance-filing-mistakes" className="text-foreground underline hover:no-underline">
                    NHT & Education Tax — Employer Compliance & Filing Mistakes
                  </Link>
                </li>
                <li>
                  <Link href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">
                    Payroll Software Jamaica — Automate NHT & All Statutory Deductions
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="Stop calculating NHT manually"
        text="Payroll Jamaica automates NHT, NIS, PAYE, and Education Tax for every employee — with compliant payslips generated in seconds."
      />

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "NHT Calculator Jamaica 2026",
            url: canonical("/nht-calculator-jamaica"),
            description: "Free NHT calculator for Jamaica. Calculate National Housing Trust contributions — 2% employee + 3% employer — with no annual ceiling.",
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
              { "@type": "ListItem", position: 2, name: "NHT Calculator Jamaica", item: canonical("/nht-calculator-jamaica") },
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
                name: "How much is NHT in Jamaica 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NHT (National Housing Trust) in Jamaica for 2026 is 2% of gross salary for employees and 3% for employers. There is no annual ceiling — NHT applies to every dollar of gross earnings.",
                },
              },
              {
                "@type": "Question",
                name: "How do you calculate NHT in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To calculate NHT in Jamaica: multiply the employee's gross salary by 2% for the employee NHT contribution, and by 3% for the employer NHT contribution. No wage ceiling applies — use the full gross salary. Use our free NHT calculator Jamaica tool above for instant results.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get my NHT contributions back in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Employees can reclaim their NHT contributions (the 2% employee portion) after 7 years, if they have not received a housing loan or benefit from the NHT. The employer's 3% portion is not refundable.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a ceiling on NHT contributions in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Unlike NIS (which has a JMD $5,000,000 annual wage ceiling), NHT has no ceiling. Both the 2% employee and 3% employer contributions apply to all earnings regardless of salary level.",
                },
              },
              {
                "@type": "Question",
                name: "When must NHT be remitted in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Employers must remit NHT by the 14th of the following month using the C7 combined form submitted to TAJ. NHT is remitted alongside NIS and Education Tax contributions.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
