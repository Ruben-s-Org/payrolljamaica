import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { CheckIcon, XIcon, MinusIcon } from "lucide-react";
import RelatedPages from "@/components/ui/related-pages";

const baseDescription =
  "PayrollJamaica vs Excel spreadsheets for Jamaican payroll. Compare automation, compliance, accuracy, audit trails, bank file exports, and time savings. See why Jamaican businesses switch from Excel to PayrollJamaica for error-free, compliant payroll processing.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs Excel — Automate Payroll",
  description: ensureMinDescription(
    "PayrollJamaica vs Excel for Jamaican payroll: compare automation, compliance updates, audit trails, bank file exports, and digital payslips. Stop risking.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PayrollJamaica vs Excel",
    "Excel payroll Jamaica",
    "payroll spreadsheet Jamaica",
    "Excel payroll template Jamaica",
    "automate payroll Jamaica",
    "payroll software vs Excel",
    "Jamaica payroll calculator Excel",
    "Excel PAYE calculator Jamaica",
    "stop using Excel for payroll Jamaica",
  ]),
  alternates: { canonical: canonical("/compare/excel") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs Excel — Automate Your Jamaica Payroll",
    description: baseDescription,
    url: canonical("/compare/excel"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/compare` },
    { "@type": "ListItem", position: 3, name: "vs Excel", item: `${siteConfig.url}/compare/excel` },
  ],
};

type Support = "full" | "partial" | "none";

const features: { feature: string; pj: Support; excel: Support; note?: string }[] = [
  { feature: "PAYE calculation (J$1,500,096 threshold)", pj: "full", excel: "partial", note: "Requires manual formula — errors common when rates change" },
  { feature: "NIS contributions (3%/3%)", pj: "full", excel: "partial", note: "Manual formula with ceiling logic prone to mistakes" },
  { feature: "NHT contributions (2%/3%)", pj: "full", excel: "partial" },
  { feature: "Education Tax (2.25%/3.5%)", pj: "full", excel: "partial" },
  { feature: "HEART/NSTA levy (3%)", pj: "full", excel: "partial" },
  { feature: "Automatic rate updates when tax law changes", pj: "full", excel: "none", note: "You must manually find and update every formula" },
  { feature: "SO1 annual return generation", pj: "full", excel: "none", note: "Must be compiled manually from 12 months of data" },
  { feature: "P24 report generation", pj: "full", excel: "none" },
  { feature: "NIS remittance files", pj: "full", excel: "none" },
  { feature: "Jamaica bank file formats (NCB, JN, Scotiabank)", pj: "full", excel: "none", note: "Must manually prepare bank upload files" },
  { feature: "Digital payslips", pj: "full", excel: "none", note: "Payslips must be created and distributed manually" },
  { feature: "Employee self-service portal", pj: "full", excel: "none" },
  { feature: "Audit trail / change history", pj: "full", excel: "none", note: "No record of who changed what and when" },
  { feature: "Multi-user access with permissions", pj: "full", excel: "partial", note: "Shared files risk accidental overwrites" },
  { feature: "Overtime calculations", pj: "full", excel: "partial" },
  { feature: "Leave tracking", pj: "full", excel: "partial", note: "Requires separate sheet with manual tracking" },
  { feature: "Data backup and security", pj: "full", excel: "none", note: "Files can be lost, corrupted, or accessed by anyone" },
  { feature: "No cost to get started", pj: "partial", excel: "full", note: "Excel is free if you already have it" },
];

function StatusIcon({ status }: { status: Support }) {
  if (status === "full") return <CheckIcon className="size-5 text-green-500" />;
  if (status === "partial") return <MinusIcon className="size-5 text-yellow-500" />;
  return <XIcon className="size-5 text-red-400" />;
}

export default function CompareExcelPage() {
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
              <li aria-current="page">vs Excel</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs Excel Spreadsheets
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Many Jamaican businesses still run payroll in Excel. It works — until
            a formula breaks, tax rates change, or an auditor asks for records.
            PayrollJamaica automates everything Excel makes you do manually, with
            built-in Jamaican compliance and zero formula risk.
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
                    <th className="text-center p-3 font-semibold w-32">Excel</th>
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
                          <StatusIcon status={row.excel} />
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
              Why Jamaican Businesses Switch from Excel
            </h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Formula errors cost real money
              </h3>
              <p className="text-muted-foreground">
                A single wrong cell reference in your PAYE formula can
                under-deduct tax for months — leaving you liable for the
                shortfall plus penalties from TAJ. With PayrollJamaica, the
                J$1,500,096 threshold, NIS ceilings, and every statutory rate
                are calculated by tested, audited code. No broken formulas. No
                missed rate changes. No nasty surprises at year-end.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. Tax rate changes update automatically
              </h3>
              <p className="text-muted-foreground">
                When Jamaica changes tax rates or thresholds — as happened with
                the PAYE threshold increase — PayrollJamaica updates
                automatically. With Excel, you need to find every formula in
                every sheet, update the values, and hope you didn&apos;t miss
                one. Many businesses discover the error months later when
                filing their SO1.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. SO1, P24, and NIS returns in one click
              </h3>
              <p className="text-muted-foreground">
                With Excel, preparing your SO1 annual return means manually
                compiling 12 months of payroll data, cross-checking every
                employee&apos;s totals, and formatting the report for TAJ
                submission. PayrollJamaica generates SO1 returns, P24
                certificates, and NIS remittance files instantly from your
                existing payroll data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                4. Bank payment files without manual prep
              </h3>
              <p className="text-muted-foreground">
                Every pay day with Excel means manually typing employee bank
                details into your bank&apos;s upload template — or copying and
                pasting between formats and praying nothing shifts.
                PayrollJamaica exports bank-ready files for NCB, JN,
                Scotiabank, Sagicor, and FirstCaribbean in the exact format
                each bank requires.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                5. Complete audit trail
              </h3>
              <p className="text-muted-foreground">
                Excel has no audit trail. Anyone can change a number with no
                record of what was changed, when, or by whom. If TAJ audits
                your payroll, you have no way to prove the accuracy of
                historical calculations. PayrollJamaica logs every change,
                every pay run, and every adjustment — giving you a complete,
                tamper-proof record.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                6. Hours saved every pay period
              </h3>
              <p className="text-muted-foreground">
                The average Jamaican business spends 4-8 hours per pay run on
                Excel payroll: entering data, checking formulas, preparing bank
                files, printing payslips, and manually distributing them.
                PayrollJamaica reduces this to minutes. For a business paying
                fortnightly, that&apos;s 100+ hours per year returned to
                running your business.
              </p>
            </div>
          </section>

          {/* When Excel Makes Sense */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              When Excel might still work
            </h2>
            <p className="text-muted-foreground">
              If you are a sole proprietor with no employees and just need to
              track your own income, Excel may be sufficient. But the moment you
              hire your first employee and need to calculate PAYE, NIS, NHT, and
              Education Tax — and file SO1 returns — the risk of errors and
              the time cost of manual processing quickly outweigh the &quot;free&quot;
              price tag of a spreadsheet. PayrollJamaica starts at
              J$3,500/month, which pays for itself in time saved on the very
              first pay run.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center dark:from-blue-950/30 dark:to-indigo-950/30">
            <h2 className="text-xl font-semibold mb-3">
              See what automated payroll looks like
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Try our free calculator to see accurate PAYE, NIS, NHT, and
              Education Tax calculations — the same engine that powers every
              PayrollJamaica pay run.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Free Payroll Calculator
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </section>

          <RelatedPages exclude="/compare/excel" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
