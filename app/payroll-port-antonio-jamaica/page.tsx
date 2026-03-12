import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Payroll services in Port Antonio, Portland Jamaica — Payroll Jamaica is the #1 payroll software for Portland's boutique tourism, agriculture, and business community. Automate PAYE, NIS, NHT, and Education Tax for your Port Antonio business. From the Blue Lagoon to Frenchman's Cove, we serve Portland's unique business landscape.";

export const metadata: Metadata = {
  title: "Payroll Services Port Antonio Jamaica — Payroll Software for Portland Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "Port Antonio's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Portland business. Trusted by boutique hotels, tour operators, banana exporters, and SMEs across Port Antonio and Portland parish.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Port Antonio Jamaica",
    "payroll services Port Antonio",
    "payroll Portland Jamaica",
    "payroll software Port Antonio",
    "Port Antonio payroll",
    "Portland parish payroll",
    "PAYE Port Antonio Jamaica",
    "NIS NHT Portland Jamaica",
    "payroll outsourcing Port Antonio",
    "boutique hotel payroll Jamaica",
    "banana industry payroll Jamaica",
    "payroll company Portland Jamaica",
    "payroll processing Port Antonio",
    "tourism payroll Portland",
    "small business payroll Portland",
  ]),
  alternates: {
    canonical: canonical("/payroll-port-antonio-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-port-antonio-jamaica"),
      en: canonical("/payroll-port-antonio-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Port Antonio Jamaica — Portland's #1 Payroll Software | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-port-antonio-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Port Antonio Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Port Antonio Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const portAntonioPainPoints = [
  {
    problem: "Rural location, no Kingston TAJ access",
    solution:
      "Portland's distance from Kingston means a TAJ office visit costs a full day. Payroll Jamaica is 100% cloud-based — file PAYE, NIS, and NHT entirely online from Port Antonio, no travel required.",
  },
  {
    problem: "Boutique hotel and eco-tourism payroll complexity",
    solution:
      "Port Antonio's boutique hotels and eco-lodges often mix full-time staff, part-timers, and seasonal guides. Payroll Jamaica handles all employment types in one account with correct tax treatment for each.",
  },
  {
    problem: "Agricultural workforce and export industry payroll",
    solution:
      "Portland's banana and breadfruit exports employ seasonal and piece-rate workers. Payroll Jamaica supports agricultural wage structures with correct NIS and PAYE calculations for variable-pay employees.",
  },
  {
    problem: "Manual spreadsheet payroll prone to errors",
    solution:
      "Portland SMEs often rely on spreadsheets that get outdated when NHT or NIS rates change. Payroll Jamaica auto-updates with every Jamaica budget — always correct, always compliant.",
  },
];

const portAntonioFeatures = [
  {
    title: "Built for Jamaica's tax system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at 2025/2026 rates — correct for every Portland business, from Blue Mountains tour operators to banana exporters.",
  },
  {
    title: "Cloud-based — run from Portland",
    desc: "Manage payroll from Port Antonio, Buff Bay, Manchioneal, or Morant Bay. Cloud-based with no installation — your internet connection is all you need.",
  },
  {
    title: "Tourism & hospitality payroll",
    desc: "Handle boutique hotel staff, tour guides, rafting operators, and villa caretakers. Manage tip and gratuity treatment, shift-based pay, and multi-role staff in one payroll.",
  },
  {
    title: "Agricultural payroll support",
    desc: "Process piece-rate pay for agricultural workers with variable harvest volumes. Calculate correct NIS and PAYE contributions on variable earnings — no manual calculations.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate TD4, NIS Schedule 7, NHT, and Education Tax reports with one click — ready for TAJ, NIS, and NHT submission every month.",
  },
  {
    title: "Online payslips & bank files",
    desc: "Email payslips to every employee on payday and generate bank transfer files for NCB, Scotiabank, and other Jamaican banks.",
  },
];

const portAntonioIndustries = [
  { name: "Boutique Hotels & Villas", desc: "Port Antonio's upscale villas, eco-lodges, and boutique hotels at Blue Lagoon and Frenchman's Cove" },
  { name: "Eco-Tourism & Adventure", desc: "Rio Grande rafting, Blue Mountains hiking, and Portland's nature-based tourism businesses" },
  { name: "Agriculture & Exports", desc: "Banana, breadfruit, yam, and ackee farming and export operations across Portland" },
  { name: "Retail & Commerce", desc: "Port Antonio's Harbour Street businesses, markets, and commercial establishments" },
  { name: "Fishing & Marine", desc: "Commercial fishing operations, boat tour operators, and marine services in Portland" },
  { name: "Government & Education", desc: "Portland parish council contractors, schools, and public sector service providers" },
];

const portAntonioFaqs = [
  {
    q: "Does Payroll Jamaica work for Portland parish businesses?",
    a: "Yes. Payroll Jamaica covers all 14 Jamaican parishes including Portland. Port Antonio, Buff Bay, Hope Bay, Long Bay — all Portland businesses can use our payroll platform.",
  },
  {
    q: "Can I file PAYE from Port Antonio without visiting Kingston?",
    a: "Absolutely. Payroll Jamaica generates e-file-ready PAYE submissions you can submit through TAJ Online from any device. No trip to Kingston or the Portland Tax Office required.",
  },
  {
    q: "How do you handle part-time and seasonal staff in Portland's tourism sector?",
    a: "Payroll Jamaica supports all employment types — full-time, part-time, seasonal, and contractual. Each gets the correct PAYE, NIS, NHT, and Education Tax treatment automatically.",
  },
  {
    q: "Can I handle agricultural piece-rate workers in Portland?",
    a: "Yes. Payroll Jamaica supports piece-rate pay — input the rate per unit and quantity, and the system calculates gross pay and applies all statutory deductions correctly.",
  },
  {
    q: "How quickly can a Port Antonio business get started?",
    a: "Most businesses are live within one business day. Import your employee list, set pay rates, and run your first payroll. All Jamaica tax tables are pre-loaded.",
  },
];

export default function PayrollPortAntonioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Portland parish businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Port Antonio,<br />Portland businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by boutique hotels, tour operators, agricultural businesses, and SMEs across Port Antonio and Portland parish. Automate PAYE, NIS, NHT, and Education Tax.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Port Antonio businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Portland payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Port Antonio payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portAntonioPainPoints.map((item) => (
                <div key={item.problem} className="rounded-xl border border-border bg-background p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✗</span>
                    <p className="font-semibold text-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Everything Portland businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From one-room guesthouses in Port Antonio to 50-staff agricultural operations in Portland — Payroll Jamaica scales with you.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portAntonioFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Serving every Portland industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From the Blue Lagoon to the Blue Mountains — we serve the diverse industries that define Portland parish.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portAntonioIndustries.map((ind) => (
                <div key={ind.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{ind.name}</p>
                  <p className="text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted across Portland parish</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Port Antonio's harbour-front to Portland's mountain villages — Payroll Jamaica keeps Portland businesses compliant and on time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for Portland SMEs" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Port Antonio payroll FAQ
            </h2>
            <div className="space-y-6">
              {portAntonioFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Start your Port Antonio payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Portland businesses saving hours every payroll cycle. Set up in less than a day — no trips to Kingston required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/payroll-company-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all Jamaica services
              </Link>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-port-antonio-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-port-antonio-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Port Antonio", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Portland", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: portAntonioFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Payroll Port Antonio Jamaica", item: `${siteConfig.url}/payroll-port-antonio-jamaica` },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
