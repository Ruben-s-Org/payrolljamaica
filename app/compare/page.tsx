import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { CheckIcon, XIcon } from "lucide-react";

const baseDescription =
  "Compare PayrollJamaica against ADP, QuickBooks, Gusto, Sage, Excel, and spreadsheets. PayrollJamaica is the ONLY payroll software built specifically for Jamaica — with native PAYE, NIS, NHT, and Education Tax compliance built in.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs Competitors — Compare Payroll Software in Jamaica",
  description: ensureMinDescription(
    "Compare payroll software in Jamaica. PayrollJamaica vs ADP, QuickBooks, Gusto, Sage, and Excel. Only PayrollJamaica is built for Jamaica's PAYE, NIS, NHT, Education Tax compliance.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll software comparison Jamaica",
    "best payroll software Jamaica",
    "compare payroll software Jamaica",
    "PayrollJamaica vs ADP",
    "PayrollJamaica vs QuickBooks Jamaica",
    "PayrollJamaica vs Gusto Jamaica",
    "PayrollJamaica vs Sage Jamaica",
    "payroll software Jamaica",
    "Jamaica payroll software review",
    "PAYE software Jamaica",
  ]),
  alternates: { canonical: canonical("/compare") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs Competitors — Compare Payroll Software in Jamaica",
    description: baseDescription,
    url: canonical("/compare"),
    type: "website",
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
      name: "Compare Payroll Software Jamaica",
      item: `${siteConfig.url}/compare`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PayrollJamaica Competitor Comparisons",
  description:
    "Detailed comparisons of PayrollJamaica against major payroll software options for Jamaican businesses.",
  url: `${siteConfig.url}/compare`,
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "PayrollJamaica vs ADP",
      url: `${siteConfig.url}/compare/adp`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "PayrollJamaica vs QuickBooks",
      url: `${siteConfig.url}/compare/quickbooks`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "PayrollJamaica vs Gusto",
      url: `${siteConfig.url}/compare/gusto`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "PayrollJamaica vs Sage",
      url: `${siteConfig.url}/compare/sage`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "PayrollJamaica vs Excel Spreadsheets",
      url: `${siteConfig.url}/compare/excel`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "PayrollJamaica vs Spreadsheets",
      url: `${siteConfig.url}/compare/spreadsheets`,
    },
  ],
};

const competitors = [
  {
    name: "ADP",
    href: "/compare/adp",
    tagline: "vs Global Payroll Giant",
    description:
      "ADP is one of the world's largest payroll providers — built for the US market. It does not natively calculate Jamaican PAYE, NIS, NHT, or Education Tax, and starts at 5–10x the cost of PayrollJamaica.",
    verdict: "PayrollJamaica wins on Jamaica compliance, price, and local support.",
    painPoint: "No native Jamaica statutory compliance",
  },
  {
    name: "QuickBooks",
    href: "/compare/quickbooks",
    tagline: "vs Popular Accounting Software",
    description:
      "QuickBooks is excellent accounting software. Its payroll feature, however, is US-centric and lacks Jamaica PAYE thresholds, NIS ceilings, NHT rates, and TAJ reporting — requiring significant manual workarounds.",
    verdict: "PayrollJamaica wins on Jamaica-specific payroll compliance.",
    painPoint: "Payroll built for US, not Jamaica",
  },
  {
    name: "Gusto",
    href: "/compare/gusto",
    tagline: "vs US Startup Payroll Tool",
    description:
      "Gusto is a modern US payroll platform that does not operate in Jamaica. It cannot process PAYE, NIS, NHT, Education Tax, or generate SO1/P24 reports. It is simply not built for Jamaican businesses.",
    verdict: "PayrollJamaica wins — Gusto is not available for Jamaica.",
    painPoint: "Not available in Jamaica",
  },
  {
    name: "Sage",
    href: "/compare/sage",
    tagline: "vs Legacy Enterprise Software",
    description:
      "Sage has a Caribbean presence but is a legacy enterprise system with steep pricing and implementation costs. Jamaica-specific statutory compliance requires significant customisation and ongoing manual maintenance.",
    verdict: "PayrollJamaica wins on simplicity, price, and built-in compliance.",
    painPoint: "High cost and complex Jamaica configuration",
  },
  {
    name: "Excel / Spreadsheets",
    href: "/compare/excel",
    tagline: "vs Manual Spreadsheets",
    description:
      "Excel payroll is the most common approach for small Jamaican businesses — and the riskiest. Manual PAYE calculations, formula errors, missing rate updates, and no audit trail create serious compliance exposure.",
    verdict: "PayrollJamaica wins on accuracy, compliance, and time saved.",
    painPoint: "Error-prone manual calculations, no compliance guarantee",
  },
  {
    name: "Generic Spreadsheets",
    href: "/compare/spreadsheets",
    tagline: "vs Spreadsheet-Based Payroll",
    description:
      "Whether it's Google Sheets or a custom spreadsheet template, manual payroll processing in Jamaica carries constant risk: outdated tax tables, formula errors, and no TAJ-ready reporting built in.",
    verdict: "PayrollJamaica wins on automation, accuracy, and compliance.",
    painPoint: "No automatic statutory updates or TAJ reports",
  },
];

const keyDifferentiators = [
  "Native PAYE calculation (J$1,500,096 threshold)",
  "NIS, NHT, Education Tax & HEART/NSTA built in",
  "SO1, P24, and TAJ-ready reports",
  "NCB, JN Bank, Scotiabank payment files",
  "Priced in JMD — from J$3,500/month",
  "Local support team that knows Jamaica payroll",
];

export default function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-5xl mx-auto py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Compare</li>
            </ol>
          </nav>

          {/* Hero */}
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs Competitors
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            Compare payroll software for Jamaica. PayrollJamaica is the{" "}
            <strong>only payroll software built specifically for Jamaica</strong>{" "}
            — with native PAYE, NIS, NHT, Education Tax, and TAJ-ready reports.
            No workarounds. No manual calculations. No compliance gaps.
          </p>

          {/* Key Differentiators Banner */}
          <div className="rounded-2xl border bg-muted/50 p-6 mb-12">
            <h2 className="text-base font-semibold mb-4">
              What makes PayrollJamaica different
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {keyDifferentiators.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm">
                  <CheckIcon className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison Cards */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              Head-to-head comparisons
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {competitors.map((comp) => (
                <Link
                  key={comp.href}
                  href={comp.href}
                  className="group block rounded-2xl border bg-card p-6 hover:border-primary/50 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {comp.tagline}
                      </span>
                      <h3 className="text-lg font-semibold mt-0.5 group-hover:text-primary transition-colors">
                        PayrollJamaica vs {comp.name}
                      </h3>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 rounded-md bg-red-50 dark:bg-red-950/30 px-2 py-1 text-xs font-medium text-red-600 dark:text-red-400 flex-shrink-0 ml-3"
                      title={`${comp.name} pain point`}
                    >
                      <XIcon className="size-3" />
                      {comp.painPoint}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {comp.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400">
                      {comp.verdict}
                    </p>
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      Full comparison &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Summary Table */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              Quick comparison: Jamaica compliance at a glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold min-w-[180px]">
                      Feature
                    </th>
                    <th className="text-center p-3 font-semibold w-28 text-primary">
                      PayrollJamaica
                    </th>
                    <th className="text-center p-3 font-semibold w-24">ADP</th>
                    <th className="text-center p-3 font-semibold w-28">
                      QuickBooks
                    </th>
                    <th className="text-center p-3 font-semibold w-24">
                      Excel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "PAYE (Jamaica threshold)",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "NIS contributions",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "NHT contributions",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "Education Tax",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "SO1 & P24 reports",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "Jamaica bank files (NCB, JN)",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "JMD pricing",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: true,
                    },
                    {
                      feature: "Local Jamaica support",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                    {
                      feature: "Automatic rate updates",
                      pj: true,
                      adp: false,
                      qb: false,
                      excel: false,
                    },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b">
                      <td className="p-3 font-medium">{row.feature}</td>
                      {[row.pj, row.adp, row.qb, row.excel].map((val, i) => (
                        <td key={i} className="p-3 text-center">
                          <span className="inline-flex justify-center">
                            {val ? (
                              <CheckIcon className="size-5 text-green-500" />
                            ) : (
                              <XIcon className="size-5 text-red-400" />
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Based on publicly available product information. See individual
              comparison pages for detailed analysis.
            </p>
          </section>

          {/* Why Jamaica-specific matters */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl font-semibold">
              Why Jamaica-specific payroll software matters
            </h2>
            <p className="text-muted-foreground">
              Jamaican payroll is governed by a unique set of statutory rules
              that international software was not designed to handle. The
              J$1,500,096 PAYE annual threshold, the NIS earnings ceiling, the
              NHT &ldquo;2/3 rule&rdquo;, Education Tax rates, and
              HEART/NSTA levy are all specific to Jamaica — and they change
              regularly.
            </p>
            <p className="text-muted-foreground">
              When you use a US-based platform like ADP, QuickBooks, or Gusto
              for Jamaican payroll, you are either manually calculating statutory
              deductions (with all the human error that creates) or you are
              non-compliant. TAJ audits are real, and penalties for underpayment
              of PAYE or NIS are significant.
            </p>
            <p className="text-muted-foreground">
              PayrollJamaica is the only software where Jamaica compliance is
              the default — not an add-on, not a workaround, not a manual
              process. Every rate, every threshold, every TAJ report format is
              built in from day one.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">
              See Jamaica-compliant payroll in action
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm">
              Try our free payroll calculator to see accurate PAYE, NIS, NHT,
              and Education Tax calculations — then start your free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </Link>
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Explore Payroll Software
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
