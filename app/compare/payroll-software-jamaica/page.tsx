import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Comparing payroll software options for your Jamaican business? Only Payroll Jamaica is built from the ground up for Jamaican statutory compliance — PAYE, NIS, NHT, Education Tax, NLA, and all Tax Administration Jamaica (TAJ) filing requirements. International software like Gusto, Sage, and QuickBooks Payroll were not built for Jamaica and cannot accurately handle your statutory deductions. See how Payroll Jamaica compares to every alternative and why hundreds of Jamaican employers have chosen us as the best payroll software in Jamaica.";

export const metadata: Metadata = {
  title: "Best Payroll Software Jamaica 2026 — Comparison & Reviews | Payroll Jamaica",
  description: ensureMinDescription(
    "Compare the best payroll software options for Jamaican businesses. Payroll Jamaica is the only solution built specifically for PAYE, NIS, NHT, Education Tax, and TAJ compliance. See how we compare to international software, spreadsheets, and managed services.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "best payroll software Jamaica",
    "payroll software comparison Jamaica",
    "payroll software Jamaica 2026",
    "Jamaica payroll software review",
    "compare payroll software Jamaica",
    "top payroll software Jamaica",
    "payroll software for Jamaican business",
    "PAYE software Jamaica",
    "NIS NHT payroll software Jamaica",
    "payroll software vs accountant Jamaica",
    "payroll software vs outsourcing Jamaica",
    "Jamaican payroll system",
    "TAJ compliant payroll software",
    "payroll automation Jamaica",
    "payroll solution Jamaica",
  ]),
  alternates: {
    canonical: canonical("/compare/payroll-software-jamaica"),
    languages: {
      "en-JM": canonical("/compare/payroll-software-jamaica"),
      en: canonical("/compare/payroll-software-jamaica"),
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
    title: "Best Payroll Software Jamaica 2026 — Comparison | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/compare/payroll-software-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Best Payroll Software Jamaica — Payroll Jamaica Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Payroll Software Jamaica 2026 — Comparison",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const comparisons = [
  {
    option: "Payroll Jamaica",
    isUs: true,
    jamaicaCompliance: true,
    payeCalculation: true,
    nisNhtEduTax: true,
    tajFiling: true,
    payslipsInJmd: true,
    localSupport: true,
    setupTime: "Same day",
    price: "From JMD 4,500/mo",
    verdict: "Purpose-built for Jamaica",
  },
  {
    option: "Excel Spreadsheet",
    isUs: false,
    jamaicaCompliance: false,
    payeCalculation: false,
    nisNhtEduTax: false,
    tajFiling: false,
    payslipsInJmd: false,
    localSupport: false,
    setupTime: "Ongoing manual work",
    price: "Free (but costly in errors)",
    verdict: "High error and compliance risk",
  },
  {
    option: "International Software (Gusto, Sage, QuickBooks)",
    isUs: false,
    jamaicaCompliance: false,
    payeCalculation: false,
    nisNhtEduTax: false,
    tajFiling: false,
    payslipsInJmd: false,
    localSupport: false,
    setupTime: "Weeks of manual setup",
    price: "USD $40–250/mo + manual adjustments",
    verdict: "Not built for Jamaica — compliance gaps",
  },
  {
    option: "Hiring an In-House Payroll Clerk",
    isUs: false,
    jamaicaCompliance: true,
    payeCalculation: true,
    nisNhtEduTax: true,
    tajFiling: true,
    payslipsInJmd: true,
    localSupport: true,
    setupTime: "4–8 weeks to hire",
    price: "JMD 80,000–150,000+/mo salary",
    verdict: "Expensive — software is more reliable",
  },
  {
    option: "Payroll Outsourcing / Accountant",
    isUs: false,
    jamaicaCompliance: true,
    payeCalculation: true,
    nisNhtEduTax: true,
    tajFiling: true,
    payslipsInJmd: true,
    localSupport: true,
    setupTime: "1–2 weeks",
    price: "JMD 10,000–50,000+/mo",
    verdict: "Costlier, less control than software",
  },
];

const features = [
  {
    title: "100% Jamaica-specific statutory calculations",
    description:
      "Every PAYE band, NIS ceiling, NHT rate, Education Tax rate, and NLA deduction is pre-built and updated automatically when the government changes rates. No manual configuration required.",
  },
  {
    title: "TAJ-ready remittance reports",
    description:
      "Generate monthly PAYE, NIS, NHT, and Education Tax remittance summaries in the exact format Tax Administration Jamaica requires. Download, file, pay — done in minutes.",
  },
  {
    title: "Annual return preparation",
    description:
      "S01, P24, and NHT annual returns prepared automatically from your payroll data. Never miss a statutory deadline again.",
  },
  {
    title: "Payslips in JMD",
    description:
      "Professional, itemised payslips in Jamaican dollars — showing gross pay, all statutory deductions, net pay, and any voluntary deductions. Your employees always know exactly what they were paid and why.",
  },
  {
    title: "Built for Jamaica's workforce",
    description:
      "Handles public holiday pay (13 holidays), overtime rules, maternity leave, NIS sick certificates, multiple income types (salary, hourly, commission), and all Jamaican contract types.",
  },
  {
    title: "Local customer support",
    description:
      "Real support from a team that knows Jamaican payroll law. When TAJ changes the rules, we update the software — and we're here to help if you have questions.",
  },
];

const faqs = [
  {
    q: "What is the best payroll software for small businesses in Jamaica?",
    a: "Payroll Jamaica is purpose-built for Jamaican businesses of all sizes. For small businesses (1–50 employees), our software handles PAYE, NIS, NHT, and Education Tax automatically, generates TAJ-ready remittance reports, and produces professional payslips — all without needing a dedicated payroll department. Our starter plans begin from JMD 4,500 per month.",
  },
  {
    q: "Can I use Gusto or Sage for payroll in Jamaica?",
    a: "While Gusto, Sage, and QuickBooks Payroll are excellent software for their home markets (USA, UK), they were not built for Jamaican statutory compliance. They do not include Jamaican PAYE tax bands, NIS contribution ceilings, NHT or Education Tax rates, or TAJ filing formats. Using them for Jamaican payroll requires significant manual customisation and creates serious compliance risk. Payroll Jamaica is the only payroll software purpose-built for Jamaica.",
  },
  {
    q: "Is payroll software cheaper than hiring an accountant in Jamaica?",
    a: "In almost all cases, yes. A qualified payroll accountant or payroll clerk in Jamaica typically costs JMD 80,000–150,000 per month in salary, plus benefits. Outsourcing payroll to an accounting firm costs JMD 10,000–50,000+ per month depending on employee count. Payroll Jamaica software starts from JMD 4,500 per month and gives you full control of your payroll with complete accuracy — typically saving Jamaican businesses JMD 50,000–120,000 per month compared to in-house payroll staffing.",
  },
  {
    q: "How quickly can I get started with Payroll Jamaica?",
    a: "Most businesses are processing payroll on the same day they sign up. Our onboarding process walks you through entering your employee details, pay rates, and deduction settings. Once your data is in, you can run your first payroll immediately. There is no long setup or training period required.",
  },
  {
    q: "Does Payroll Jamaica handle NHT and NIS?",
    a: "Yes — NHT (National Housing Trust) at 2% employee / 3% employer, NIS (National Insurance Scheme) at 3% employee / 3% employer (up to the contribution ceiling), Education Tax at 2.25% employee / 3.5% employer, and PAYE income tax are all calculated automatically on every payroll run. Remittance reports are generated for each statutory authority.",
  },
  {
    q: "What is the difference between payroll software and a payroll company?",
    a: "Payroll software (like Payroll Jamaica) is a platform you use yourself to run payroll for your employees — you stay in control, with the calculations automated. A payroll company (or payroll outsourcing service) takes over your payroll function entirely, with their staff running payroll on your behalf. Payroll Jamaica offers both: self-service software and a fully managed payroll service for businesses that prefer to outsource.",
  },
];

export default function ComparePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Compare", item: canonical("/compare") },
      { "@type": "ListItem", position: 3, name: "Best Payroll Software Jamaica", item: canonical("/compare/payroll-software-jamaica") },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Payroll Jamaica",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Payroll software built specifically for Jamaican businesses — automates PAYE, NIS, NHT, Education Tax, and TAJ statutory compliance.",
    offers: {
      "@type": "Offer",
      price: "4500",
      priceCurrency: "JMD",
      priceValidUntil: "2026-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "87",
      bestRating: "5",
    },
    url: siteConfig.url,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const checkIcon = (val: boolean) =>
    val ? (
      <span className="text-green-600 font-bold text-lg">✓</span>
    ) : (
      <span className="text-red-500 font-bold text-lg">✗</span>
    );

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Payroll Software Comparison
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              The best payroll software for Jamaican businesses in 2026
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              There is only one payroll software built specifically for Jamaica — with every PAYE band,
              NIS ceiling, NHT rate, and TAJ filing format pre-configured. Compare your options and
              see why hundreds of Jamaican employers choose Payroll Jamaica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                data-open-fillout="true"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <a
                href="/calculator"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Calculate payroll deductions
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="w-full px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Payroll software comparison for Jamaica
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Not all payroll solutions are equal — especially for Jamaican statutory compliance.
              Here is how your options stack up.
            </p>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-4 font-semibold">Solution</th>
                    <th className="text-center p-4 font-semibold">Jamaica compliance</th>
                    <th className="text-center p-4 font-semibold">PAYE auto-calc</th>
                    <th className="text-center p-4 font-semibold">NIS / NHT / Edu Tax</th>
                    <th className="text-center p-4 font-semibold">TAJ filing reports</th>
                    <th className="text-center p-4 font-semibold">JMD payslips</th>
                    <th className="text-center p-4 font-semibold">Local support</th>
                    <th className="text-left p-4 font-semibold">Price (est.)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr
                      key={row.option}
                      className={`border-t border-border ${row.isUs ? "bg-foreground/5 font-medium" : i % 2 === 0 ? "" : "bg-muted/20"}`}
                    >
                      <td className="p-4">
                        {row.isUs && (
                          <span className="inline-block bg-foreground text-background text-xs font-semibold px-2 py-0.5 rounded mr-2">
                            Best
                          </span>
                        )}
                        {row.option}
                      </td>
                      <td className="p-4 text-center">{checkIcon(row.jamaicaCompliance)}</td>
                      <td className="p-4 text-center">{checkIcon(row.payeCalculation)}</td>
                      <td className="p-4 text-center">{checkIcon(row.nisNhtEduTax)}</td>
                      <td className="p-4 text-center">{checkIcon(row.tajFiling)}</td>
                      <td className="p-4 text-center">{checkIcon(row.payslipsInJmd)}</td>
                      <td className="p-4 text-center">{checkIcon(row.localSupport)}</td>
                      <td className="p-4 text-xs text-muted-foreground">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {comparisons.map((row) => (
                <div
                  key={row.option}
                  className={`rounded-xl border p-5 ${row.isUs ? "border-foreground bg-foreground/5" : "border-border"}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {row.isUs && (
                      <span className="bg-foreground text-background text-xs font-semibold px-2 py-0.5 rounded">
                        Best
                      </span>
                    )}
                    <h3 className="font-semibold text-sm">{row.option}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <span>Jamaica compliance: {row.jamaicaCompliance ? "✓" : "✗"}</span>
                    <span>PAYE auto-calc: {row.payeCalculation ? "✓" : "✗"}</span>
                    <span>NIS/NHT/Edu Tax: {row.nisNhtEduTax ? "✓" : "✗"}</span>
                    <span>TAJ reports: {row.tajFiling ? "✓" : "✗"}</span>
                    <span>JMD payslips: {row.payslipsInJmd ? "✓" : "✗"}</span>
                    <span>Local support: {row.localSupport ? "✓" : "✗"}</span>
                  </div>
                  <p className="text-xs font-medium">{row.price}</p>
                  <p className="text-xs text-muted-foreground mt-1 italic">{row.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Payroll Jamaica Wins */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Why Payroll Jamaica is the best choice for Jamaican businesses
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Generic payroll software requires you to configure Jamaica manually — and still gets it wrong.
              Payroll Jamaica is built for one market: Jamaica.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-background rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The problem with international software */}
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Why international payroll software fails in Jamaica
              </h2>
              <p>
                Software like Gusto, QuickBooks Payroll, Sage Payroll, and ADP was built for the US, UK,
                or other markets where their developers live. Jamaica is not a market they have invested
                in building for, which means:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>No Jamaican PAYE tax bands (25% / 30% with the JMD 1.5M threshold) built in</li>
                <li>No NIS contribution ceiling pre-configured</li>
                <li>No NHT (National Housing Trust) deduction logic</li>
                <li>No Education Tax rates</li>
                <li>No TAJ remittance report formats</li>
                <li>No S01 or P24 annual return generation</li>
                <li>No understanding of Jamaican public holiday rules</li>
              </ul>
              <p className="mt-3">
                To use international software for Jamaican payroll, your accountant would need to manually
                configure custom deduction formulas, maintain them every time rates change, and produce
                TAJ reports manually from raw data. This is expensive, error-prone, and exactly the kind
                of risk that leads to TAJ penalties.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How much does payroll software cost in Jamaica?
              </h2>
              <p>
                Payroll Jamaica plans start from <strong className="text-foreground">JMD 4,500 per month</strong> for
                small businesses (up to 10 employees). Medium-sized businesses typically pay JMD 8,000–15,000
                per month depending on employee count and features required. There are no setup fees and no
                long-term contracts required.
              </p>
              <p className="mt-3">
                Compare this to the alternatives:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li><strong className="text-foreground">In-house payroll clerk:</strong> JMD 80,000–150,000+ per month in salary plus benefits</li>
                <li><strong className="text-foreground">Payroll outsourcing to an accounting firm:</strong> JMD 10,000–50,000+ per month</li>
                <li><strong className="text-foreground">International software:</strong> USD $40–250/mo plus significant manual configuration time</li>
                <li><strong className="text-foreground">Spreadsheets:</strong> Free, but carries serious compliance and audit risk</li>
              </ul>
              <p className="mt-3">
                For most Jamaican businesses, payroll software is the most cost-effective option — especially
                when you factor in the time spent on manual calculations and the risk of TAJ penalties for
                incorrect filings.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Payroll software vs. outsourcing payroll in Jamaica
              </h2>
              <p>
                Both payroll software and payroll outsourcing solve the compliance problem — but they have
                different trade-offs. With <strong className="text-foreground">payroll software</strong>, you stay
                in control: you can run payroll at any time, access your data instantly, make corrections
                immediately, and see exactly what every employee is paid. The software handles the calculations;
                you make the decisions.
              </p>
              <p className="mt-3">
                With <strong className="text-foreground">payroll outsourcing</strong>, an external team runs payroll
                on your behalf. This reduces your workload but can mean slower turnaround times, less flexibility,
                and higher cost per month. You also have less direct visibility into your payroll data.
              </p>
              <p className="mt-3">
                Payroll Jamaica offers both. Our self-service software gives you full control at low cost.
                Our <a href="/payroll-outsourcing-jamaica" className="text-foreground underline hover:no-underline">managed payroll service</a> is
                available if you prefer to outsource entirely. Many Jamaican businesses start with our software
                and add managed services as they grow.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How to choose payroll software for your Jamaican business
              </h2>
              <p>
                When evaluating payroll software for Jamaica, ask these questions:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Does it automatically calculate Jamaica PAYE at the correct thresholds?</li>
                <li>Does it handle NIS, NHT, and Education Tax contributions (both employee and employer)?</li>
                <li>Does it generate TAJ-format remittance reports each month?</li>
                <li>Does it handle Jamaican public holiday pay rules?</li>
                <li>Does it support S01 and P24 annual return preparation?</li>
                <li>Is there local customer support that understands Jamaican payroll law?</li>
                <li>Is the pricing in JMD, not USD?</li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica answers yes to all of these. No other software on the market does. That is
                why we are Jamaica&apos;s leading payroll software.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                See the full feature set
              </h2>
              <p>
                Ready to compare in more detail? Explore our{" "}
                <a href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">
                  full payroll software overview
                </a>{" "}
                to see every feature included, or check our{" "}
                <a href="/pricing" className="text-foreground underline hover:no-underline">
                  transparent pricing plans
                </a>{" "}
                starting from JMD 3,500/month. You can also browse our{" "}
                <a href="/features" className="text-foreground underline hover:no-underline">feature list</a>, or
                learn about our industry-specific solutions for{" "}
                <a href="/industries/hospitality" className="text-foreground underline hover:no-underline">hotels and hospitality</a>,{" "}
                <a href="/industries/construction" className="text-foreground underline hover:no-underline">construction</a>,{" "}
                <a href="/industries/retail" className="text-foreground underline hover:no-underline">retail</a>, and{" "}
                <a href="/industries/healthcare" className="text-foreground underline hover:no-underline">healthcare</a>.
              </p>
              <p className="mt-3">
                If you are currently using spreadsheets, read our guide on{" "}
                <a href="/compare/spreadsheets" className="text-foreground underline hover:no-underline">switching from spreadsheets to payroll software</a>.
                You can also see our detailed comparisons with{" "}
                <a href="/compare/quickbooks" className="text-foreground underline hover:no-underline">QuickBooks</a>,{" "}
                <a href="/compare/sage" className="text-foreground underline hover:no-underline">Sage</a>,{" "}
                <a href="/compare/adp" className="text-foreground underline hover:no-underline">ADP</a>, and{" "}
                <a href="/compare/gusto" className="text-foreground underline hover:no-underline">Gusto</a>.
              </p>
              <a
                href="/calculator"
                data-open-fillout="true"
                className="inline-block mt-4 text-foreground font-semibold underline hover:no-underline"
              >
                Start your free trial — no credit card required →
              </a>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Jamaica&apos;s only purpose-built payroll software
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              PAYE, NIS, NHT, Education Tax, and TAJ filing — all automated for Jamaica.
              Set up in minutes. No spreadsheets, no manual calculations, no compliance risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                data-open-fillout="true"
                className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <a
                href="/pricing"
                className="inline-block border border-background/30 text-background font-semibold px-8 py-3 rounded-lg hover:bg-background/10 transition-colors"
              >
                View pricing plans
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Best payroll software in Jamaica"
        text="Purpose-built for PAYE, NIS, NHT, and TAJ compliance. Start today — free setup."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(softwareSchema) }}
      />
    </div>
  );
}
