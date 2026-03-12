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
  "PayrollJamaica vs ADP for Jamaican businesses. Compare features, statutory compliance (PAYE, NIS, NHT, Education Tax), pricing, local support, and Jamaica-specific reports. See why Jamaican employers choose PayrollJamaica over ADP for compliant, automated payroll.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs ADP — Best Payroll Software for Jamaica",
  description: ensureMinDescription(
    "PayrollJamaica vs ADP Payroll: which is better for Jamaican businesses? Compare PAYE, NIS, NHT compliance, local bank formats, SO1/P24 reports, Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PayrollJamaica vs ADP",
    "ADP payroll Jamaica",
    "best payroll software Jamaica",
    "ADP alternative Jamaica",
    "payroll software comparison Jamaica",
    "Jamaica payroll software vs ADP",
    "local payroll software Jamaica",
    "ADP PAYE Jamaica",
    "ADP NIS NHT Jamaica",
    "ADP Caribbean payroll",
  ]),
  alternates: { canonical: canonical("/compare/adp") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs ADP — Best Payroll for Jamaica",
    description: baseDescription,
    url: canonical("/compare/adp"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/compare` },
    { "@type": "ListItem", position: 3, name: "vs ADP", item: `${siteConfig.url}/compare/adp` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does ADP support Jamaican payroll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADP has a Caribbean presence but its payroll engine is built for the US market. ADP does not natively calculate Jamaican PAYE using the J$1,500,096 threshold, NIS, NHT, or Education Tax. Jamaican employers using ADP typically need significant manual configuration and workarounds for statutory compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Is ADP more expensive than PayrollJamaica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ADP pricing for Caribbean businesses typically starts at US$150-300+ per month, billed in USD. PayrollJamaica starts at J$3,500 per month (approximately US$22), billed in JMD with no exchange rate risk. ADP also often requires implementation fees and consultant costs for Jamaica-specific setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from ADP to PayrollJamaica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most businesses migrate from ADP to PayrollJamaica within one week. Export your employee data from ADP, import it into PayrollJamaica, and run your first automated, Jamaica-compliant payroll immediately. Our team assists with the migration at no extra cost.",
      },
    },
  ],
};

type Support = "full" | "partial" | "none";

const features: { feature: string; pj: Support; adp: Support; note?: string }[] = [
  { feature: "PAYE calculation (J$1,500,096 threshold)", pj: "full", adp: "none", note: "ADP uses US federal/state tax rules natively" },
  { feature: "NIS contributions (3%/3%)", pj: "full", adp: "none" },
  { feature: "NHT contributions (2%/3%)", pj: "full", adp: "none" },
  { feature: "Education Tax (2.25%/3.5%)", pj: "full", adp: "none" },
  { feature: "HEART/NSTA levy (3%)", pj: "full", adp: "none" },
  { feature: "SO1 annual return generation", pj: "full", adp: "none" },
  { feature: "P24 report generation", pj: "full", adp: "none" },
  { feature: "NIS remittance files", pj: "full", adp: "none" },
  { feature: "Jamaica bank file formats (NCB, JN, Scotiabank)", pj: "full", adp: "none" },
  { feature: "JMD currency support", pj: "full", adp: "partial", note: "ADP supports multi-currency but is optimised for USD" },
  { feature: "Payslip generation", pj: "full", adp: "full" },
  { feature: "Employee self-service portal", pj: "full", adp: "full" },
  { feature: "Leave management", pj: "full", adp: "full" },
  { feature: "Multi-location / departments", pj: "full", adp: "full" },
  { feature: "Overtime calculations", pj: "full", adp: "full" },
  { feature: "Time and attendance", pj: "partial", adp: "full", note: "ADP has advanced T&A hardware integrations" },
  { feature: "Local customer support (Jamaica)", pj: "full", adp: "none", note: "ADP Caribbean support covers multiple islands; no Jamaica payroll specialists" },
  { feature: "Pricing in JMD", pj: "full", adp: "none", note: "ADP charges in USD" },
  { feature: "No implementation fees", pj: "full", adp: "none", note: "ADP typically charges US$500-2,000+ for implementation" },
];

function StatusIcon({ status }: { status: Support }) {
  if (status === "full") return <CheckIcon className="size-5 text-green-500" />;
  if (status === "partial") return <MinusIcon className="size-5 text-yellow-500" />;
  return <XIcon className="size-5 text-red-400" />;
}

export default function CompareADPPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
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
              <li aria-current="page">vs ADP</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs ADP
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            ADP is one of the largest payroll providers globally, but it was built
            for the US market. Its Caribbean operations handle basic payroll
            processing, but for Jamaica-specific statutory compliance — PAYE,
            NIS, NHT, Education Tax, and local bank formats — you need software
            purpose-built for Jamaica.
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
                    <th className="text-center p-3 font-semibold w-32">ADP</th>
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
                          <StatusIcon status={row.adp} />
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
              Why Jamaican Businesses Choose PayrollJamaica Over ADP
            </h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Built-in Jamaica statutory compliance
              </h3>
              <p className="text-muted-foreground">
                ADP was designed for US federal and state payroll (W-2, 1099,
                FICA, Medicare). Its core platform does not calculate Jamaican
                PAYE using the J$1,500,096 annual threshold, NIS at 3%/3%, NHT
                at 2%/3%, Education Tax at 2.25%/3.5%, or HEART/NSTA at 3%.
                While ADP has Caribbean operations, employers report needing
                significant manual workarounds for Jamaica&apos;s specific
                statutory deductions. With PayrollJamaica, every deduction is
                calculated automatically and correctly every pay run.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. Jamaica statutory reports (SO1, P24, NIS returns)
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica generates the exact reports required for TAJ
                filing: SO1 annual returns, P24 employee tax certificates, and
                NIS remittance files. ADP&apos;s reporting engine generates US
                tax forms (W-2, 1099, 940/941) and generic exports that require
                manual transformation for Jamaica&apos;s Tax Administration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. Local bank payment files
              </h3>
              <p className="text-muted-foreground">
                Export bank-ready payment files formatted for NCB, JN,
                Scotiabank, Sagicor Bank, and FirstCaribbean. No manual
                reformatting. ADP payment exports use US banking formats (ACH,
                NACHA) that Jamaican banks do not accept.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                4. Dramatically lower cost
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica starts at J$3,500/month with no implementation
                fees. ADP Caribbean pricing typically starts at US$150-300+ per
                month (approximately J$23,000-46,000+), billed in USD, plus
                implementation fees of US$500-2,000+. For a Jamaican SME, that
                is 5-10x the cost — for software that still does not handle
                Jamaica&apos;s statutory requirements natively.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                5. No long contracts or lock-in
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica operates on month-to-month billing with no
                long-term contracts. ADP typically requires annual contracts and
                charges early termination fees. If the software does not work
                for you, you should be free to leave — and with PayrollJamaica,
                you are.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                6. Local support team that understands Jamaica
              </h3>
              <p className="text-muted-foreground">
                Get help from a team that understands Jamaican payroll law, TAJ
                requirements, and local business practices. ADP&apos;s Caribbean
                support covers multiple islands and cannot provide the
                Jamaica-specific payroll expertise you need when navigating NIS
                registration, SO1 filing, or Education Tax questions.
              </p>
            </div>
          </section>

          {/* When ADP Makes Sense */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              When ADP might be the right choice
            </h2>
            <p className="text-muted-foreground">
              ADP is a strong platform for large multinational companies that
              need unified HR and payroll across many countries, including the
              US. If your company has 500+ employees across multiple countries
              and needs a single global HR platform, ADP&apos;s scale may be
              relevant. However, for your Jamaican operations specifically, you
              can use PayrollJamaica alongside your global ADP instance —
              getting compliant, automated local payroll without the cost and
              compliance gaps of forcing ADP to handle Jamaica&apos;s unique
              statutory requirements.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Does ADP support Jamaican payroll?</h3>
                <p className="text-muted-foreground text-sm">
                  ADP has a Caribbean presence but its payroll engine is built
                  for the US market. It does not natively calculate Jamaican
                  PAYE using the J$1,500,096 threshold, NIS, NHT, or Education
                  Tax. Jamaican employers using ADP typically need significant
                  manual configuration and workarounds for statutory compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is ADP more expensive than PayrollJamaica?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes. ADP pricing for Caribbean businesses typically starts at
                  US$150-300+ per month, billed in USD. PayrollJamaica starts at
                  J$3,500 per month (approximately US$22), billed in JMD with no
                  exchange rate risk. ADP also often requires implementation fees
                  and consultant costs for Jamaica-specific setup.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I switch from ADP to PayrollJamaica?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes. Most businesses migrate from ADP to PayrollJamaica within
                  one week. Export your employee data from ADP, import it into
                  PayrollJamaica, and run your first automated, Jamaica-compliant
                  payroll immediately. Our team assists with the migration at no
                  extra cost.
                </p>
              </div>
            </div>
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
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Explore Payroll Software
              </Link>
            </div>
          </section>

          <RelatedPages exclude="/compare/adp" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
