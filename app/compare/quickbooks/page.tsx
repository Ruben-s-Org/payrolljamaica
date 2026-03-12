import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { CheckIcon, XIcon, MinusIcon } from "lucide-react";

const baseDescription =
  "PayrollJamaica vs QuickBooks Payroll for Jamaican businesses. Compare features, statutory compliance (PAYE, NIS, NHT, Education Tax), pricing, local support, and Jamaica-specific reports. See why Jamaican employers choose PayrollJamaica over QuickBooks for compliant, automated payroll.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs QuickBooks — Best Payroll Software for Jamaica",
  description: ensureMinDescription(
    "PayrollJamaica vs QuickBooks Payroll: which is better for Jamaican businesses? Compare PAYE, NIS, NHT compliance, local bank formats, SO1/P24 reports, Jamaica pricing, and local support.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PayrollJamaica vs QuickBooks",
    "QuickBooks payroll Jamaica",
    "best payroll software Jamaica",
    "QuickBooks alternative Jamaica",
    "payroll software comparison Jamaica",
    "Jamaica payroll software vs QuickBooks",
    "local payroll software Jamaica",
    "QuickBooks PAYE Jamaica",
    "QuickBooks NIS NHT Jamaica",
  ]),
  alternates: { canonical: canonical("/compare/quickbooks") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs QuickBooks — Best Payroll for Jamaica",
    description: baseDescription,
    url: canonical("/compare/quickbooks"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/compare` },
    { "@type": "ListItem", position: 3, name: "vs QuickBooks", item: `${siteConfig.url}/compare/quickbooks` },
  ],
};

type Support = "full" | "partial" | "none";

const features: { feature: string; pj: Support; qb: Support; note?: string }[] = [
  { feature: "PAYE calculation (J$1,500,096 threshold)", pj: "full", qb: "none", note: "QuickBooks uses US/international tax rules" },
  { feature: "NIS contributions (3%/3%)", pj: "full", qb: "none" },
  { feature: "NHT contributions (2%/3%)", pj: "full", qb: "none" },
  { feature: "Education Tax (2.25%/3.5%)", pj: "full", qb: "none" },
  { feature: "HEART/NSTA levy (3%)", pj: "full", qb: "none" },
  { feature: "SO1 annual return generation", pj: "full", qb: "none" },
  { feature: "P24 report generation", pj: "full", qb: "none" },
  { feature: "NIS remittance files", pj: "full", qb: "none" },
  { feature: "Jamaica bank file formats (NCB, JN, Scotiabank)", pj: "full", qb: "none" },
  { feature: "JMD currency support", pj: "full", qb: "partial", note: "QuickBooks supports JMD but optimised for USD" },
  { feature: "Payslip generation", pj: "full", qb: "full" },
  { feature: "Employee self-service portal", pj: "full", qb: "full" },
  { feature: "Leave management", pj: "full", qb: "partial" },
  { feature: "Multi-location / departments", pj: "full", qb: "full" },
  { feature: "Overtime calculations", pj: "full", qb: "full" },
  { feature: "Local customer support (Jamaica)", pj: "full", qb: "none", note: "QuickBooks support is US/international" },
  { feature: "Pricing in JMD", pj: "full", qb: "none", note: "QuickBooks charges in USD" },
  { feature: "No US tax forms (W-2, 1099)", pj: "full", qb: "none", note: "QuickBooks generates US forms you don't need" },
];

function StatusIcon({ status }: { status: Support }) {
  if (status === "full") return <CheckIcon className="size-5 text-green-500" />;
  if (status === "partial") return <MinusIcon className="size-5 text-yellow-500" />;
  return <XIcon className="size-5 text-red-400" />;
}

export default function CompareQuickBooksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-5xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/compare/payroll-software-jamaica" className="underline hover:text-foreground">Compare</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">vs QuickBooks</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs QuickBooks
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            QuickBooks is powerful accounting software, but it was built for
            US businesses. For Jamaican payroll — with PAYE, NIS, NHT, Education
            Tax, and local bank formats — you need software built for Jamaica.
          </p>

          {/* Comparison Table */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold min-w-[200px]">Feature</th>
                    <th className="text-center p-3 font-semibold w-32">PayrollJamaica</th>
                    <th className="text-center p-3 font-semibold w-32">QuickBooks</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((row) => (
                    <tr key={row.feature} className="border-b">
                      <td className="p-3">
                        <span className="font-medium">{row.feature}</span>
                        {row.note && (
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {row.note}
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-flex justify-center">
                          <StatusIcon status={row.pj} />
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-flex justify-center">
                          <StatusIcon status={row.qb} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-14 space-y-8">
            <h2 className="text-2xl font-semibold">
              Why Jamaican Businesses Choose PayrollJamaica
            </h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Built-in Jamaica statutory compliance
              </h3>
              <p className="text-muted-foreground">
                QuickBooks was designed for US tax law (W-2, 1099, FICA, federal
                and state taxes). It does not calculate PAYE using the
                J$1,500,096 annual threshold, NIS, NHT, Education Tax, or
                HEART/NSTA. With PayrollJamaica, every statutory deduction is
                calculated automatically — correctly — every pay run.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. Jamaica statutory reports (SO1, P24, NIS returns)
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica generates the exact reports you need for TAJ
                filing: SO1 annual returns, P24 employee tax certificates, and
                NIS remittance files. QuickBooks generates US tax forms (W-2,
                1099) that are irrelevant to Jamaican compliance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. Local bank payment files
              </h3>
              <p className="text-muted-foreground">
                Export bank-ready payment files formatted for NCB, JN,
                Scotiabank, Sagicor Bank, and FirstCaribbean. No manual
                reformatting. QuickBooks payment exports follow US banking
                formats (ACH) that Jamaican banks don&apos;t accept.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                4. Pricing in JMD, not USD
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica starts at J$3,500/month. QuickBooks Payroll
                starts at US$50/month (approximately J$7,750+), billed in USD —
                so your cost fluctuates with the exchange rate. And that price
                is for a US product that doesn&apos;t handle Jamaica&apos;s tax
                rules.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                5. Local support team
              </h3>
              <p className="text-muted-foreground">
                Get help from a team that understands Jamaican payroll law,
                TAJ requirements, and local business practices. QuickBooks
                support is US-based and cannot advise on NIS registration, SO1
                filing, or Jamaica-specific compliance questions.
              </p>
            </div>
          </section>

          {/* When QuickBooks Makes Sense */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              When QuickBooks might be the right choice
            </h2>
            <p className="text-muted-foreground">
              QuickBooks is excellent accounting software. If you need
              QuickBooks for your general accounting (invoicing, expenses,
              bookkeeping), you can use it alongside PayrollJamaica. Many of our
              customers use QuickBooks for accounting and PayrollJamaica for
              payroll — getting the best of both worlds. The key point is: don&apos;t
              use QuickBooks <em>payroll</em> features for Jamaican employees,
              because they weren&apos;t designed for Jamaica&apos;s tax system.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center dark:from-blue-950/30 dark:to-indigo-950/30">
            <h2 className="text-xl font-semibold mb-3">
              See the difference for yourself
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Try our free calculator to see accurate PAYE, NIS, NHT, and
              Education Tax calculations — then imagine every pay run automated.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Free Payroll Calculator
              </Link>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
