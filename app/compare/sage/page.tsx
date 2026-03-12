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
  "PayrollJamaica vs Sage Payroll for Jamaican businesses. Compare features, statutory compliance (PAYE, NIS, NHT, Education Tax), pricing, local support, and Jamaica-specific reports. See why Jamaican employers choose PayrollJamaica over Sage for compliant, automated payroll.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs Sage — Best Payroll Software for Jamaica",
  description: ensureMinDescription(
    "PayrollJamaica vs Sage Payroll: which is better for Jamaican businesses? Compare PAYE, NIS, NHT compliance, local bank formats, SO1/P24 reports, Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Sage payroll Jamaica",
    "Sage alternative Jamaica",
    "Sage vs PayrollJamaica",
    "best payroll software Jamaica",
    "Sage 300 payroll Jamaica",
    "payroll software comparison Jamaica",
    "Jamaica payroll software vs Sage",
    "local payroll software Jamaica",
    "Sage PAYE Jamaica",
    "Sage NIS NHT Jamaica",
  ]),
  alternates: { canonical: canonical("/compare/sage") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs Sage — Best Payroll for Jamaica",
    description: baseDescription,
    url: canonical("/compare/sage"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/compare` },
    { "@type": "ListItem", position: 3, name: "vs Sage", item: `${siteConfig.url}/compare/sage` },
  ],
};

type Support = "full" | "partial" | "none";

const features: { feature: string; pj: Support; sage: Support; note?: string }[] = [
  { feature: "PAYE calculation (J$1,500,096 threshold)", pj: "full", sage: "none", note: "Sage uses South Africa/UK/international tax rules" },
  { feature: "NIS contributions (3%/3%)", pj: "full", sage: "none" },
  { feature: "NHT contributions (2%/3%)", pj: "full", sage: "none" },
  { feature: "Education Tax (2.25%/3.5%)", pj: "full", sage: "none" },
  { feature: "HEART/NSTA levy (3%)", pj: "full", sage: "none" },
  { feature: "SO1 annual return generation", pj: "full", sage: "none" },
  { feature: "P24 report generation", pj: "full", sage: "none" },
  { feature: "NIS remittance files", pj: "full", sage: "none" },
  { feature: "Jamaica bank file formats (NCB, JN, Scotiabank)", pj: "full", sage: "none" },
  { feature: "JMD currency support", pj: "full", sage: "partial", note: "Sage supports multiple currencies but is not optimised for JMD" },
  { feature: "Payslip generation", pj: "full", sage: "full" },
  { feature: "Employee self-service portal", pj: "full", sage: "full" },
  { feature: "Leave management", pj: "full", sage: "full" },
  { feature: "Multi-location / departments", pj: "full", sage: "full" },
  { feature: "Overtime calculations", pj: "full", sage: "full" },
  { feature: "Works out of the box for Jamaica", pj: "full", sage: "none", note: "Sage requires extensive customisation and often consultants" },
  { feature: "Local customer support (Jamaica)", pj: "full", sage: "none", note: "Sage support is international; no Jamaica payroll expertise" },
  { feature: "Pricing in JMD", pj: "full", sage: "none", note: "Sage charges in USD/GBP/ZAR" },
];

function StatusIcon({ status }: { status: Support }) {
  if (status === "full") return <CheckIcon className="size-5 text-green-500" />;
  if (status === "partial") return <MinusIcon className="size-5 text-yellow-500" />;
  return <XIcon className="size-5 text-red-400" />;
}

export default function CompareSagePage() {
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
              <li aria-current="page">vs Sage</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs Sage Payroll
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Sage 300 and Sage Payroll are used by some Caribbean businesses, but
            they were designed primarily for South African, UK, and international
            markets. For Jamaican payroll — with PAYE, NIS, NHT, Education Tax,
            and local bank formats — you need software built specifically for
            Jamaica.
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
                    <th className="text-center p-3 font-semibold w-32">Sage</th>
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
                          <StatusIcon status={row.sage} />
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
              Why Jamaican Businesses Choose PayrollJamaica Over Sage
            </h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Built-in Jamaica statutory compliance
              </h3>
              <p className="text-muted-foreground">
                Sage Payroll was designed for South African and UK tax
                legislation. It does not natively calculate PAYE using the
                J$1,500,096 annual threshold, NIS (3% employee / 3% employer),
                NHT (2% / 3%), Education Tax (2.25% / 3.5%), or HEART/NSTA
                (3%). With PayrollJamaica, every Jamaican statutory deduction is
                calculated automatically and correctly every pay run — no
                custom formulas or workarounds needed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. Jamaica statutory reports (SO1, P24, NIS returns)
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica generates the exact reports you need for TAJ
                filing: SO1 annual returns, P24 employee tax certificates, and
                NIS remittance files. Sage generates reports formatted for South
                African (IRP5, EMP201) or UK (P60, P45) tax authorities — none
                of which are accepted by Jamaica&apos;s Tax Administration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. Local bank payment files
              </h3>
              <p className="text-muted-foreground">
                Export bank-ready payment files formatted for NCB, JN,
                Scotiabank, Sagicor Bank, and FirstCaribbean. No manual
                reformatting. Sage payment exports follow international banking
                formats that Jamaican banks do not accept without conversion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                4. Works out of the box — no consultants required
              </h3>
              <p className="text-muted-foreground">
                Sage requires complex setup and heavy customisation to handle
                Jamaica&apos;s unique payroll requirements. Many businesses spend
                thousands on consultants to configure Sage for local compliance —
                and still end up with manual workarounds. PayrollJamaica is
                purpose-built for Jamaica and works from day one with zero
                configuration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                5. Affordable JMD pricing vs expensive USD licensing
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica starts at J$3,500/month. Sage Payroll
                subscriptions are typically priced in USD, GBP, or ZAR —
                significantly more expensive even before factoring in the
                consultant fees needed to customise it for Jamaica. Your cost
                also fluctuates with the exchange rate, making budgeting
                unpredictable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                6. Local support team
              </h3>
              <p className="text-muted-foreground">
                Get help from a team that understands Jamaican payroll law,
                TAJ requirements, and local business practices. Sage&apos;s
                support is international and cannot advise on NIS registration,
                SO1 filing deadlines, or Jamaica-specific compliance questions.
              </p>
            </div>
          </section>

          {/* When Sage Makes Sense */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              When Sage might be the right choice
            </h2>
            <p className="text-muted-foreground">
              Sage is a solid ERP and accounting platform for large enterprises
              operating across multiple countries. If you already use Sage 300
              for your general accounting or have operations in South Africa or
              the UK where Sage has native payroll support, it may make sense to
              keep Sage for those regions. However, for your Jamaican payroll,
              you can run PayrollJamaica alongside Sage — getting compliant,
              automated local payroll without the cost and complexity of trying
              to force Sage to handle Jamaica&apos;s unique statutory
              requirements.
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
              <Link
                href="/payroll-software-jamaica"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Explore Payroll Software
              </Link>
            </div>
          </section>

          <RelatedPages exclude="/compare/sage" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
