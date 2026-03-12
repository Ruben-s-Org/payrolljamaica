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
  "Calculate Jamaica Education Tax contributions instantly with our free calculator. Compute the 2.25% employee and 3.5% employer Education Tax deductions for any salary using 2026 TAJ rates. No ceiling applies — Education Tax is due on all earnings. Includes remittance deadlines, filing requirements, and step-by-step guide.";

export const metadata: Metadata = {
  title: "Education Tax Calculator Jamaica 2026 — Free Employee & Employer Education Tax Calculator",
  description: ensureMinDescription(
    "Free Education Tax calculator for Jamaica 2026. Calculate 2.25% employee + 3.5% employer Education Tax deductions on any salary. No annual ceiling. Updated TAJ rates, instant results.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Education Tax calculator Jamaica",
    "Education Tax calculator Jamaica 2026",
    "Jamaica Education Tax calculator",
    "Education Tax Jamaica 2026",
    "how to calculate Education Tax Jamaica",
    "Education Tax rates Jamaica",
    "Education Tax deductions Jamaica",
    "Education Tax employer Jamaica",
    "Education Tax employee Jamaica",
    "Jamaica statutory deductions calculator",
    "Education Tax payroll Jamaica",
    "TAJ Education Tax Jamaica",
    "payroll tax calculator Jamaica",
    "Education Tax filing Jamaica",
    "free Education Tax calculator Jamaica",
  ]),
  alternates: {
    canonical: canonical("/education-tax-calculator-jamaica"),
    languages: {
      "en-JM": canonical("/education-tax-calculator-jamaica"),
      en: canonical("/education-tax-calculator-jamaica"),
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
    title: "Education Tax Calculator Jamaica 2026 — Free Employee & Employer Calculator",
    description: baseDescription,
    url: canonical("/education-tax-calculator-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Education Tax Calculator Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Education Tax Calculator Jamaica 2026",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function EducationTaxCalculatorJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              2026 rates — 2.25% employee + 3.5% employer, no ceiling
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-balance">
              Education Tax Calculator Jamaica 2026
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Calculate Jamaica Education Tax deductions for any salary.
              Covers both the 2.25% employee rate and 3.5% employer rate — no annual ceiling applies.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <PayrollCalculator />

        {/* Education Tax educational content */}
        <div className="w-full px-4 pb-20">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is Education Tax in Jamaica?</h2>
              <p>
                Education Tax is a statutory levy collected from Jamaican employees and employers to fund
                the national education system. It is remitted to Tax Administration Jamaica (TAJ) quarterly,
                alongside NIS and NHT contributions using the C7 combined form.
              </p>
              <p className="mt-3">
                Unlike NIS — which has an annual wage ceiling — Education Tax applies to every dollar of
                gross salary with no limit. Both the employee portion (2.25%) and the employer portion (3.5%)
                are calculated on gross earnings.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Jamaica Education Tax rates 2026</h2>
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
                      <td className="py-2 pr-4 text-foreground font-medium">2.25%</td>
                      <td className="py-2">None — applies to all earnings</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-foreground">Employer</td>
                      <td className="py-2 pr-4 text-foreground font-medium">3.5%</td>
                      <td className="py-2">None — applies to all earnings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Together, employer and employee Education Tax totals{" "}
                <strong className="text-foreground">5.75% of gross payroll</strong> — the highest combined
                rate of any single statutory contribution in Jamaica.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How to calculate Education Tax in Jamaica</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>
                  <strong className="text-foreground">Use gross salary for the pay period.</strong>{" "}
                  Education Tax is calculated on full gross pay before any deductions.
                </li>
                <li>
                  <strong className="text-foreground">Multiply by 2.25% for employee Education Tax.</strong>{" "}
                  Example: JMD $100,000 × 2.25% = JMD $2,250 deducted from employee pay.
                </li>
                <li>
                  <strong className="text-foreground">Multiply by 3.5% for employer Education Tax.</strong>{" "}
                  Example: JMD $100,000 × 3.5% = JMD $3,500 employer cost (on top of salary).
                </li>
                <li>
                  <strong className="text-foreground">No ceiling — apply to all earnings.</strong>{" "}
                  Unlike NIS, there is no ceiling on Education Tax. A salary of JMD $10M pays the same
                  percentage as JMD $100,000.
                </li>
              </ol>
              <p className="mt-4">
                Use our{" "}
                <Link href="/calculator" className="text-foreground underline hover:no-underline">
                  Jamaica payroll calculator
                </Link>{" "}
                above to compute Education Tax alongside PAYE, NIS, and NHT simultaneously.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Education Tax remittance deadlines</h2>
              <p>
                Education Tax is remitted <strong className="text-foreground">quarterly</strong> using the
                C7 form submitted to TAJ. Quarterly due dates are:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Q1 (Apr–Jun): Due <strong className="text-foreground">July 14</strong></li>
                <li>Q2 (Jul–Sep): Due <strong className="text-foreground">October 14</strong></li>
                <li>Q3 (Oct–Dec): Due <strong className="text-foreground">January 14</strong></li>
                <li>Q4 (Jan–Mar): Due <strong className="text-foreground">April 14</strong></li>
              </ul>
              <p className="mt-3">
                Note: Although TAJ C7 filings are quarterly, most payroll software (including Payroll Jamaica)
                calculates and accrues Education Tax monthly, making quarterly remittance easy.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">All four Jamaica statutory deductions</h2>
              <p>Education Tax is one of four mandatory payroll deductions in Jamaica:</p>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>
                  <Link href="/paye-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    <strong>PAYE</strong>
                  </Link>{" "}
                  — Income tax (25–30% above JMD $1,500,096 threshold)
                </li>
                <li>
                  <Link href="/nis-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    <strong>NIS</strong>
                  </Link>{" "}
                  — National Insurance Scheme (3%+3%, ceiling JMD $5M/year)
                </li>
                <li>
                  <Link href="/nht-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    <strong>NHT</strong>
                  </Link>{" "}
                  — National Housing Trust (2%+3%, no ceiling)
                </li>
                <li>
                  <strong>Education Tax</strong> — 2.25%+3.5%, no ceiling (this page)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Automate Education Tax calculations</h2>
              <p>
                Payroll Jamaica automatically calculates Education Tax for every employee on every payroll
                run. The quarterly C7 remittance report is generated automatically — just review and submit
                to TAJ. No spreadsheets, no manual rate checks.
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
              <h2 className="text-foreground text-xl font-semibold mb-3">Related calculators & resources</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <Link href="/calculator" className="text-foreground underline hover:no-underline">
                    Jamaica Payroll Calculator — All Deductions
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
                  <Link href="/nht-calculator-jamaica" className="text-foreground underline hover:no-underline">
                    NHT Calculator Jamaica 2026
                  </Link>
                </li>
                <li>
                  <Link href="/blog/jamaica-nht-education-tax-2025-employer-compliance-filing-mistakes" className="text-foreground underline hover:no-underline">
                    NHT & Education Tax — Employer Compliance & Filing Mistakes
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="Stop tracking Education Tax manually"
        text="Payroll Jamaica calculates all statutory deductions automatically — including Education Tax — and generates your quarterly C7 remittance report."
      />

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Education Tax Calculator Jamaica 2026",
            url: canonical("/education-tax-calculator-jamaica"),
            description: "Free Education Tax calculator for Jamaica. Calculate 2.25% employee + 3.5% employer Education Tax on any salary using 2026 TAJ rates.",
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
              { "@type": "ListItem", position: 2, name: "Education Tax Calculator Jamaica", item: canonical("/education-tax-calculator-jamaica") },
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
                name: "What is the Education Tax rate in Jamaica for 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Jamaica Education Tax rates for 2026 are 2.25% for employees and 3.5% for employers, calculated on gross salary with no annual ceiling. The combined employer + employee rate is 5.75%.",
                },
              },
              {
                "@type": "Question",
                name: "How do you calculate Education Tax in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To calculate Education Tax in Jamaica: multiply gross salary by 2.25% for the employee deduction, and by 3.5% for the employer contribution. There is no ceiling — apply to the full gross salary regardless of earnings level. Use our free Education Tax calculator Jamaica tool above for instant results.",
                },
              },
              {
                "@type": "Question",
                name: "When is Education Tax due in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Education Tax is remitted quarterly to TAJ using the C7 form: Q1 (Apr–Jun) due July 14; Q2 (Jul–Sep) due October 14; Q3 (Oct–Dec) due January 14; Q4 (Jan–Mar) due April 14.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a ceiling on Education Tax in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Unlike NIS (which has a JMD $5,000,000 annual wage ceiling), Education Tax has no ceiling. The 2.25% employee rate and 3.5% employer rate apply to all gross earnings regardless of salary level.",
                },
              },
              {
                "@type": "Question",
                name: "What is Education Tax used for in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Education Tax funds Jamaica's public education system — primary, secondary, and tertiary levels. It is collected by Tax Administration Jamaica (TAJ) and allocated by the Ministry of Education.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
