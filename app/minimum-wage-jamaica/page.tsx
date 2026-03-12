import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import FAQ from "@/components/sections/faq/default";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import RelatedPages from "@/components/ui/related-pages";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";

const baseDescription =
  "Jamaica minimum wage 2026: current rates for all worker categories including general workers, security guards, and industrial security guards. Updated minimum wage amounts per 40-hour work week with PAYE, NIS, NHT, and Education Tax impact calculations.";

export const metadata: Metadata = {
  title: "Jamaica Minimum Wage 2026 — Current Rates & Payroll Impact",
  description: ensureMinDescription(
    "Jamaica minimum wage 2026: current rates per 40-hour week for all worker categories. See how PAYE, NIS, NHT, and Education Tax apply to minimum wage workers. Free payroll calculator included.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Jamaica minimum wage 2026",
    "minimum wage Jamaica",
    "Jamaica minimum wage rate",
    "minimum wage increase Jamaica",
    "Jamaica minimum wage per hour",
    "Jamaica minimum wage per week",
    "security guard minimum wage Jamaica",
    "Jamaica national minimum wage",
    "minimum wage calculator Jamaica",
  ]),
  alternates: { canonical: canonical("/minimum-wage-jamaica") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "Jamaica Minimum Wage 2026 — Current Rates & Payroll Impact",
    description: baseDescription,
    url: canonical("/minimum-wage-jamaica"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Jamaica Minimum Wage 2026",
      item: `${siteConfig.url}/minimum-wage-jamaica`,
    },
  ],
};

const wageRates = [
  {
    category: "General Workers",
    weekly: "J$13,000",
    hourly: "J$325",
    monthly: "J$56,333",
    annual: "J$676,000",
  },
  {
    category: "Security Guards",
    weekly: "J$14,000",
    hourly: "J$350",
    monthly: "J$60,667",
    annual: "J$728,000",
  },
  {
    category: "Industrial Security Guards",
    weekly: "J$16,000",
    hourly: "J$400",
    monthly: "J$69,333",
    annual: "J$832,000",
  },
];

export default function MinimumWagePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-4xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Minimum Wage Jamaica</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Jamaica Minimum Wage 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Current minimum wage rates for Jamaica, including all worker
            categories. See how statutory deductions (PAYE, NIS, NHT, Education
            Tax) affect take-home pay for minimum wage employees.
          </p>

          {/* Wage Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Current Minimum Wage Rates (40-Hour Work Week)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold">Category</th>
                    <th className="text-right p-3 font-semibold">Per Hour</th>
                    <th className="text-right p-3 font-semibold">Per Week</th>
                    <th className="text-right p-3 font-semibold">Per Month</th>
                    <th className="text-right p-3 font-semibold">Per Year</th>
                  </tr>
                </thead>
                <tbody>
                  {wageRates.map((rate) => (
                    <tr key={rate.category} className="border-b">
                      <td className="p-3 font-medium">{rate.category}</td>
                      <td className="p-3 text-right">{rate.hourly}</td>
                      <td className="p-3 text-right">{rate.weekly}</td>
                      <td className="p-3 text-right">{rate.monthly}</td>
                      <td className="p-3 text-right">{rate.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Based on a 40-hour work week. Monthly calculated as weekly ×
              52 ÷ 12. Rates set by the Ministry of Labour and Social Security.
            </p>
          </section>

          {/* Statutory Impact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Statutory Deductions on Minimum Wage
            </h2>
            <p className="text-muted-foreground mb-4">
              Even at minimum wage, employers must make the following statutory
              deductions and contributions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Employee Deductions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    <strong>PAYE:</strong> Not applicable — minimum wage falls
                    below the J$1,500,096/year threshold
                  </li>
                  <li>
                    <strong>NIS:</strong> 3% of gross pay
                  </li>
                  <li>
                    <strong>NHT:</strong> 2% of gross pay
                  </li>
                  <li>
                    <strong>Education Tax:</strong> 2.25% of gross pay
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Total employee deductions: 7.25% of gross
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Employer Contributions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    <strong>NIS:</strong> 3% of gross pay
                  </li>
                  <li>
                    <strong>NHT:</strong> 3% of gross pay
                  </li>
                  <li>
                    <strong>Education Tax:</strong> 3.5% of gross pay
                  </li>
                  <li>
                    <strong>HEART/NSTA:</strong> 3% of gross pay
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Total employer cost: 12.5% above gross wages
                </p>
              </div>
            </div>
          </section>

          {/* Example Calculation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Example: General Worker Minimum Wage Payslip
            </h2>
            <div className="border rounded-lg p-6 max-w-md">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Gross Monthly Pay</span>
                  <span className="font-medium">J$56,333</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-muted-foreground">
                  <span>PAYE</span>
                  <span>J$0 (below threshold)</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>NIS (3%)</span>
                  <span>−J$1,690</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>NHT (2%)</span>
                  <span>−J$1,127</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Education Tax (2.25%)</span>
                  <span>−J$1,267</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-semibold">
                  <span>Net Take-Home Pay</span>
                  <span className="text-primary">J$52,249</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Use our{" "}
              <Link
                href="/calculator"
                className="text-primary underline"
              >
                free payroll calculator
              </Link>{" "}
              to run exact calculations for any salary amount.
            </p>
          </section>

          {/* Key Facts */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Key Facts About Jamaica&apos;s Minimum Wage
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Who sets the minimum wage?
                </h3>
                <p className="text-sm">
                  The Ministry of Labour and Social Security sets Jamaica&apos;s
                  minimum wage through the National Minimum Wage Advisory
                  Commission. Rates are reviewed periodically and announced via
                  gazette.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Does minimum wage apply to all workers?
                </h3>
                <p className="text-sm">
                  Yes — the national minimum wage applies to all employees in
                  Jamaica, regardless of industry or contract type. Some
                  categories (security guards) have higher minimum rates due to
                  the nature of their work.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  What about overtime for minimum wage workers?
                </h3>
                <p className="text-sm">
                  Overtime for minimum wage workers must be paid at the premium
                  rate (typically 1.5× for weekdays, 2× for Sundays and public
                  holidays). The overtime premium is calculated on the minimum
                  wage hourly rate and is fully subject to all statutory
                  deductions.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  Penalties for paying below minimum wage
                </h3>
                <p className="text-sm">
                  Employers who pay below the minimum wage face penalties under
                  the Minimum Wage Act. Employees can report violations to the
                  Ministry of Labour and Social Security.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center dark:from-emerald-950/30 dark:to-teal-950/30">
            <h2 className="text-xl font-semibold mb-3">
              Calculate payroll for any salary
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Whether minimum wage or executive salary — our free calculator
              shows exact PAYE, NIS, NHT, and Education Tax deductions instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Free Payroll Calculator
              </Link>
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Payroll Software Jamaica
              </Link>
            </div>
          </section>

          <FAQ
            title="Minimum Wage FAQ"
            items={[
              {
                question: "What is the current minimum wage in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    The current minimum wage in Jamaica is J$13,000 per 40-hour
                    work week for general workers, J$14,000 for security guards,
                    and J$16,000 for industrial security guards.
                  </p>
                ),
              },
              {
                question:
                  "Do minimum wage workers pay PAYE tax in Jamaica?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    No. At current minimum wage levels, annual earnings fall below
                    the PAYE threshold of J$1,500,096 per year, so no income tax
                    is deducted. However, NIS (3%), NHT (2%), and Education Tax
                    (2.25%) still apply.
                  </p>
                ),
              },
              {
                question:
                  "How much does it cost an employer to hire a minimum wage worker?",
                answer: (
                  <p className="text-muted-foreground max-w-[640px]">
                    For a general worker at J$56,333/month, the total employer
                    cost is approximately J$63,375/month including NIS (3%), NHT
                    (3%), Education Tax (3.5%), and HEART/NSTA (3%) — about 12.5%
                    above the gross wage.
                  </p>
                ),
              },
            ]}
            className="mt-12"
          />

          <RelatedPages exclude="/minimum-wage-jamaica" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
