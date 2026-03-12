import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Payroll services in Spanish Town, Jamaica — Payroll Jamaica is the #1 payroll software serving St. Catherine businesses. Automate PAYE, NIS, NHT, and Education Tax for your Spanish Town employees. From the Spanish Town Free Zone to Old Harbour, we handle payroll for St. Catherine's factories, SMEs, and commercial businesses.";

export const metadata: Metadata = {
  title: "Payroll Services Spanish Town Jamaica — Payroll Software for St. Catherine | Payroll Jamaica",
  description: ensureMinDescription(
    "Spanish Town's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your St. Catherine business. Trusted by factories, free zone businesses, and SMEs across Spanish Town, Old Harbour, and Linstead.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Spanish Town Jamaica",
    "payroll services Spanish Town",
    "payroll company Spanish Town Jamaica",
    "payroll software St Catherine Jamaica",
    "Spanish Town Jamaica payroll",
    "St Catherine payroll services",
    "payroll service provider Spanish Town",
    "PAYE Spanish Town Jamaica",
    "NIS NHT St Catherine",
    "payroll outsourcing Spanish Town Jamaica",
    "small business payroll Spanish Town",
    "Spanish Town Free Zone payroll",
    "payroll processing Spanish Town Jamaica",
    "online payroll St Catherine",
    "manufacturing payroll Jamaica St Catherine",
  ]),
  alternates: {
    canonical: canonical("/payroll-spanish-town-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-spanish-town-jamaica"),
      en: canonical("/payroll-spanish-town-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Spanish Town Jamaica — #1 Payroll Software for St. Catherine | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-spanish-town-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Spanish Town Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Spanish Town Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const painPoints = [
  {
    problem: "Free Zone payroll compliance is complex",
    solution:
      "Spanish Town's Free Zone factories have unique payroll requirements — shift workers, overtime, and multi-currency pay for some international operations. Payroll Jamaica handles all of it automatically with full TAJ compliance.",
  },
  {
    problem: "Managing large shift workforces",
    solution:
      "St. Catherine factories often run two or three shifts. Payroll Jamaica calculates shift differentials, overtime at the correct Jamaica rate, and ensures every worker's statutory deductions are accurate — no spreadsheet needed.",
  },
  {
    problem: "Tax office visits eating into business hours",
    solution:
      "The St. Catherine Tax Office in Spanish Town handles filings for Jamaica's largest parish. Payroll Jamaica e-files your PAYE, NIS, NHT, and Education Tax online — no office visits, no queues, full compliance.",
  },
  {
    problem: "High staff count, high error risk",
    solution:
      "St. Catherine businesses often employ 50–500 workers. At that scale, a spreadsheet mistake costs real money. Payroll Jamaica eliminates manual errors with automated calculations checked against current Jamaica tax tables.",
  },
];

const features = [
  {
    title: "Built for Jamaica's statutory system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at the current 2025/2026 rates. Every budget update applied automatically — you never adjust tax thresholds manually.",
  },
  {
    title: "Shift and overtime payroll",
    desc: "Spanish Town factories need shift differentials and overtime. Payroll Jamaica calculates regular, overtime (at 1.5x), and public holiday pay to the exact Jamaica Labour Relations Code requirements.",
  },
  {
    title: "Compliant statutory reports",
    desc: "Generate monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click. Ready for TAJ, NIS, and NHT submission exactly as required.",
  },
  {
    title: "Cloud-based — runs anywhere in St. Catherine",
    desc: "Access your payroll from Spanish Town, Old Harbour, Portmore, Bog Walk, or Linstead. No installation, no local server — just your browser and an internet connection.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with NCB, Scotiabank, CIBC FirstCaribbean, and Sagicor Bank. Bulk transfers on payday — no manual entry for your entire workforce.",
  },
  {
    title: "Final pay and termination calculations",
    desc: "High workforce turnover in manufacturing? Payroll Jamaica calculates accurate final pay including notice pay, gratuity, accrued leave, and correct NIS/NHT final contributions.",
  },
];

const industries = [
  { name: "Free Zone Manufacturing", desc: "Factories and export-oriented manufacturers in the Spanish Town Free Zone and surrounding industrial areas" },
  { name: "Logistics & Warehousing", desc: "Distribution centres, trucking companies, and freight handlers serving Jamaica's largest inland logistics corridor" },
  { name: "Retail & Commerce", desc: "Supermarkets, hardware stores, and commercial businesses along Spanish Town's main thoroughfares" },
  { name: "Construction", desc: "Contractors, civil engineering firms, and property developers active across the rapidly developing St. Catherine corridor" },
  { name: "Healthcare", desc: "Spanish Town Hospital support businesses, private clinics, pharmacies, and medical practices across St. Catherine" },
  { name: "Education", desc: "Primary, secondary, and tertiary institutions across Spanish Town, Old Harbour, and surrounding communities" },
];

const faqs = [
  {
    q: "Do you serve businesses registered in St. Catherine parish?",
    a: "Yes. Payroll Jamaica serves all businesses registered with the Companies Office of Jamaica, including those based in Spanish Town, Old Harbour, Portmore, Bog Walk, Linstead, and all communities across St. Catherine parish.",
  },
  {
    q: "Can Payroll Jamaica handle shift workers and factory employees?",
    a: "Absolutely. Payroll Jamaica supports shift differentials, overtime at the correct Jamaica statutory rate (1.5x), public holiday double-pay, and all-other-time calculations required under Jamaica labour law. Ideal for Free Zone factories and large manufacturing operations.",
  },
  {
    q: "Can I file PAYE online without visiting the Spanish Town Tax Office?",
    a: "Yes. Payroll Jamaica generates e-file-ready PAYE submissions for TAJ Online. No in-person visits required. Your NIS and NHT contributions are also calculated and reported digitally.",
  },
  {
    q: "I have over 100 employees — can Payroll Jamaica handle that scale?",
    a: "Yes. Payroll Jamaica is built for businesses of all sizes — from 5 employees to 500+. Large workforce payrolls are processed in the same automated run, with bulk bank files and statutory reports generated in minutes.",
  },
  {
    q: "How quickly can a Spanish Town business get set up?",
    a: "Most businesses are live within one business day. Import your employee list, configure pay rates and deductions, and run your first payroll immediately. Jamaica tax tables are already built in.",
  },
];

export default function PayrollSpanishTownPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving St. Catherine businesses across the parish
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Spanish Town<br />& St. Catherine businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — used by businesses across Spanish Town, Old Harbour, Portmore, and beyond. Automate PAYE, NIS, NHT, and Education Tax. Get compliant in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — St. Catherine businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Spanish Town payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((item) => (
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
              Everything St. Catherine businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From small shops in Spanish Town to large Free Zone factories — Payroll Jamaica scales with every business in St. Catherine.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
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
              Serving every St. Catherine industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              St. Catherine is Jamaica's most populous parish outside the capital — and its most industrially diverse.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by St. Catherine businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Free Zone factories to Spanish Town high street shops — St. Catherine businesses trust Payroll Jamaica to keep payroll compliant and on time every month.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for St. Catherine SMEs" },
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
              Spanish Town payroll FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
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
              Start your Spanish Town payroll today
            </h2>
            <p className="text-muted-foreground">
              Join St. Catherine businesses already saving hours every payroll cycle. Set up takes less time than a trip to the Tax Office on Burke Road.
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

        {/* Local SEO schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-spanish-town-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-spanish-town-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Spanish Town", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Saint Catherine", addressCountry: "JM" },
                    { "@type": "City", name: "Old Harbour", addressCountry: "JM" },
                    { "@type": "City", name: "Linstead", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Spanish Town Payroll Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PAYE Payroll Processing" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NIS NHT Calculation" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shift & Overtime Payroll" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Statutory Reporting" } },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Spanish Town Jamaica", item: `${siteConfig.url}/payroll-spanish-town-jamaica` },
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
