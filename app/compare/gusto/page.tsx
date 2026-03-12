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
  "PayrollJamaica vs Gusto for Jamaican businesses. Compare features, statutory compliance (PAYE, NIS, NHT, Education Tax), pricing, local support, and Jamaica-specific reports. See why Jamaican employers choose PayrollJamaica over Gusto for compliant, automated payroll.";

export const metadata: Metadata = {
  title: "PayrollJamaica vs Gusto — Best Payroll Software for Jamaica",
  description: ensureMinDescription(
    "PayrollJamaica vs Gusto Payroll: which is better for Jamaican businesses? Compare PAYE, NIS, NHT compliance, local bank formats, SO1/P24 reports, Jamaica pricing, and local support.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PayrollJamaica vs Gusto",
    "Gusto payroll Jamaica",
    "best payroll software Jamaica",
    "Gusto alternative Jamaica",
    "payroll software comparison Jamaica",
    "Jamaica payroll software vs Gusto",
    "local payroll software Jamaica",
    "Gusto PAYE Jamaica",
    "Gusto NIS NHT Jamaica",
    "Gusto Caribbean payroll",
    "Gusto international payroll Jamaica",
  ]),
  alternates: { canonical: canonical("/compare/gusto") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "PayrollJamaica vs Gusto — Best Payroll for Jamaica",
    description: baseDescription,
    url: canonical("/compare/gusto"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${siteConfig.url}/compare` },
    { "@type": "ListItem", position: 3, name: "vs Gusto", item: `${siteConfig.url}/compare/gusto` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I use Gusto for payroll in Jamaica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gusto only supports payroll for US-based employees and US contractors. It does not operate in Jamaica and cannot process Jamaican payroll. Gusto does not calculate PAYE, NIS, NHT, or Education Tax. For Jamaican payroll, you need software built for Jamaica like PayrollJamaica.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best alternative to Gusto for Jamaica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PayrollJamaica is the best alternative to Gusto for Jamaican businesses. It is the only payroll software purpose-built for Jamaica, with automatic PAYE, NIS, NHT, and Education Tax calculations, TAJ-ready reports (SO1, P24), local bank file exports, and pricing in JMD starting at J$3,500/month.",
      },
    },
    {
      "@type": "Question",
      name: "Does Gusto support international payroll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gusto offers limited international contractor payments but does not provide full payroll processing outside the US. It cannot handle Jamaican statutory deductions, local bank formats, or TAJ filing requirements. For international teams with Jamaican employees, PayrollJamaica handles the Jamaica payroll while Gusto can handle US payroll separately.",
      },
    },
  ],
};

type Support = "full" | "partial" | "none";

const features: { feature: string; pj: Support; gusto: Support; note?: string }[] = [
  { feature: "PAYE calculation (J$1,500,096 threshold)", pj: "full", gusto: "none", note: "Gusto only supports US tax calculations" },
  { feature: "NIS contributions (3%/3%)", pj: "full", gusto: "none" },
  { feature: "NHT contributions (2%/3%)", pj: "full", gusto: "none" },
  { feature: "Education Tax (2.25%/3.5%)", pj: "full", gusto: "none" },
  { feature: "HEART/NSTA levy (3%)", pj: "full", gusto: "none" },
  { feature: "SO1 annual return generation", pj: "full", gusto: "none" },
  { feature: "P24 report generation", pj: "full", gusto: "none" },
  { feature: "NIS remittance files", pj: "full", gusto: "none" },
  { feature: "Jamaica bank file formats (NCB, JN, Scotiabank)", pj: "full", gusto: "none" },
  { feature: "JMD currency support", pj: "full", gusto: "none", note: "Gusto operates in USD only" },
  { feature: "Payslip generation", pj: "full", gusto: "full", note: "Gusto generates US-format pay stubs" },
  { feature: "Employee self-service portal", pj: "full", gusto: "full" },
  { feature: "Leave management", pj: "full", gusto: "full" },
  { feature: "Benefits administration", pj: "partial", gusto: "full", note: "Gusto has strong US benefits (401k, health insurance)" },
  { feature: "Overtime calculations", pj: "full", gusto: "full" },
  { feature: "Operates in Jamaica", pj: "full", gusto: "none", note: "Gusto is US-only" },
  { feature: "Local customer support (Jamaica)", pj: "full", gusto: "none", note: "Gusto only supports US customers" },
  { feature: "Pricing in JMD", pj: "full", gusto: "none", note: "Gusto charges in USD; not available for Jamaica" },
];

function StatusIcon({ status }: { status: Support }) {
  if (status === "full") return <CheckIcon className="size-5 text-green-500" />;
  if (status === "partial") return <MinusIcon className="size-5 text-yellow-500" />;
  return <XIcon className="size-5 text-red-400" />;
}

export default function CompareGustoPage() {
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
              <li aria-current="page">vs Gusto</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            PayrollJamaica vs Gusto
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Gusto is a popular payroll platform in the United States, but it
            does not operate in Jamaica. Gusto only processes payroll for
            US-based employees and cannot handle Jamaican statutory deductions
            like PAYE, NIS, NHT, or Education Tax. If you are looking for the
            &ldquo;Gusto of Jamaica,&rdquo; PayrollJamaica is the answer.
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
                    <th className="text-center p-3 font-semibold w-32">Gusto</th>
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
                          <StatusIcon status={row.gusto} />
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
              Why Gusto Does Not Work for Jamaica
            </h2>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Gusto is US-only — it does not operate in Jamaica
              </h3>
              <p className="text-muted-foreground">
                Unlike other international payroll platforms that attempt to
                serve multiple countries, Gusto is explicitly US-only. You
                cannot sign up for Gusto with a Jamaican business. It has no
                Jamaica entity, no JMD billing, and no Jamaican tax compliance.
                If you searched for &ldquo;Gusto payroll Jamaica&rdquo; hoping
                to use Gusto here, the short answer is: you cannot.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. No Jamaican statutory deductions at all
              </h3>
              <p className="text-muted-foreground">
                Gusto calculates US federal income tax, state taxes, Social
                Security, and Medicare. It has zero support for Jamaican PAYE
                (with the J$1,500,096 threshold), NIS (3%/3%), NHT (2%/3%),
                Education Tax (2.25%/3.5%), or HEART/NSTA (3%). These are not
                features Gusto plans to add — Jamaica is not in their roadmap.
                PayrollJamaica handles all of these automatically.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. No TAJ reports, SO1, or P24 generation
              </h3>
              <p className="text-muted-foreground">
                Gusto generates US tax forms: W-2, 1099, 940/941. It cannot
                generate SO1 annual returns, P24 employee tax certificates, or
                NIS remittance files — the reports every Jamaican employer needs
                for TAJ compliance. PayrollJamaica generates all of these
                automatically from your payroll data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                4. PayrollJamaica is the &ldquo;Gusto of Jamaica&rdquo;
              </h3>
              <p className="text-muted-foreground">
                If you admire Gusto&apos;s clean interface, automated
                calculations, and employee self-service features, PayrollJamaica
                delivers the same modern payroll experience — but built
                specifically for Jamaica. Modern cloud platform, automatic
                statutory deductions, employee portal, one-click payslips, and
                local bank payment files. All at J$3,500/month, billed in JMD.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                5. Affordable JMD pricing
              </h3>
              <p className="text-muted-foreground">
                Even if Gusto were available in Jamaica, its US pricing starts
                at US$40/month base + US$6/employee/month. For a 20-person
                team, that is US$160/month (approximately J$25,000+). PayrollJamaica
                handles the same team size starting at J$3,500/month — a fraction
                of the cost — with full Jamaica statutory compliance included.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                6. Local support that understands Jamaican payroll law
              </h3>
              <p className="text-muted-foreground">
                PayrollJamaica&apos;s support team understands TAJ requirements,
                NIS registration, SO1 filing deadlines, and Jamaica-specific
                compliance questions. Gusto&apos;s support team only handles US
                payroll law — they cannot help with any Jamaica-specific
                question.
              </p>
            </div>
          </section>

          {/* When Gusto Makes Sense */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-4">
              When Gusto might be relevant
            </h2>
            <p className="text-muted-foreground">
              If your company has US-based employees alongside your Jamaican
              team, Gusto is an excellent choice for your US payroll. Many
              businesses use Gusto for their US operations and PayrollJamaica
              for their Jamaican operations — getting the best of both worlds.
              The key point is: Gusto cannot handle Jamaican payroll at all, so
              you need a Jamaica-specific solution regardless.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I use Gusto for payroll in Jamaica?</h3>
                <p className="text-muted-foreground text-sm">
                  No. Gusto only supports payroll for US-based employees and US
                  contractors. It does not operate in Jamaica and cannot process
                  Jamaican payroll. For Jamaica, use PayrollJamaica — the only
                  payroll software purpose-built for Jamaican statutory compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What is the best alternative to Gusto for Jamaica?</h3>
                <p className="text-muted-foreground text-sm">
                  PayrollJamaica is the best Gusto alternative for Jamaican
                  businesses. It offers the same modern payroll experience —
                  automatic calculations, employee self-service, cloud-based
                  platform — but built for Jamaica with PAYE, NIS, NHT, and
                  Education Tax compliance, TAJ-ready reports, and local bank
                  file exports. Pricing starts at J$3,500/month.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Does Gusto support international payroll?</h3>
                <p className="text-muted-foreground text-sm">
                  Gusto offers limited international contractor payments but
                  does not provide full payroll processing outside the US. It
                  cannot handle Jamaican statutory deductions, local bank
                  formats, or TAJ filing requirements. For international teams
                  with Jamaican employees, use PayrollJamaica for Jamaica and
                  Gusto for the US.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center dark:from-blue-950/30 dark:to-indigo-950/30">
            <h2 className="text-xl font-semibold mb-3">
              The Gusto of Jamaica — try PayrollJamaica
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Modern payroll software, built for Jamaica. Automatic PAYE, NIS,
              NHT, and Education Tax. Try our free calculator to see it in action.
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

          <RelatedPages exclude="/compare/gusto" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
