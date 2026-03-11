import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Payroll Jamaica serves Portmore and St. Catherine Parish businesses with full PAYE, NIS, NHT, and Education Tax automation. Portmore is one of Jamaica's largest population centers — a business hub for retail, logistics, construction, and service industries. Payroll Jamaica is built for Portmore SMEs.";

export const metadata: Metadata = {
  title: "Payroll Services Portmore Jamaica — Payroll Software for St. Catherine | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Portmore and St. Catherine businesses. Automate PAYE, NIS, NHT, Education Tax. Serving Portmore's retail, logistics, construction, and service employers.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Portmore Jamaica",
    "payroll services Portmore Jamaica",
    "payroll company Portmore",
    "payroll software Portmore Jamaica",
    "St Catherine Parish payroll Jamaica",
    "Portmore Jamaica payroll",
    "payroll outsourcing Portmore Jamaica",
    "PAYE Portmore Jamaica",
    "NIS NHT Portmore",
    "small business payroll Portmore",
    "payroll Spanish Town Jamaica",
    "payroll St Catherine Jamaica",
    "payroll processing Portmore Jamaica",
    "online payroll Portmore Jamaica",
    "payroll management Portmore",
  ]),
  alternates: {
    canonical: canonical("/payroll-portmore-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-portmore-jamaica"),
      en: canonical("/payroll-portmore-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Portmore Jamaica — St. Catherine | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-portmore-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Portmore Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Portmore Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const portmorePainPoints = [
  {
    problem: "Commuting to Kingston TAJ adds hours to every payroll cycle",
    solution:
      "Portmore businesses lose hours commuting over the causeway to Kingston for payroll filings. Payroll Jamaica handles PAYE, SO1, and all statutory filings online — no Kingston commute required.",
  },
  {
    problem: "Portmore's retail sector has high part-time staff turnover",
    solution:
      "Portmore's shopping centres and retail strips see constant staff changes. Payroll Jamaica onboards new employees in minutes and calculates accurate final pay — including NHT and NIS — without manual calculations.",
  },
  {
    problem: "Logistics and warehouse payroll is complex",
    solution:
      "St. Catherine's logistics hub means shift differentials, overtime caps, and allowances. Payroll Jamaica handles all pay structures — including irregular hours and multiple pay rates for the same employee.",
  },
  {
    problem: "Growth from small to medium means outgrowing spreadsheets",
    solution:
      "Many Portmore businesses start with spreadsheet payroll. When you hit 10 employees, manual payroll breaks. Payroll Jamaica scales from 1 to 500 employees with the same simple interface.",
  },
];

const portmoreFeatures = [
  {
    title: "Jamaica-compliant payroll automation",
    desc: "Full PAYE, NIS, NHT, and Education Tax at 2025/2026 rates. Payroll Jamaica updates with every Jamaica budget — Portmore businesses stay compliant automatically.",
  },
  {
    title: "Payslips for Portmore's mobile workforce",
    desc: "Email digital payslips to every employee. Portmore's commuter workforce can access payslips from any phone — no printing, no physical distribution.",
  },
  {
    title: "Multi-location payroll for St. Catherine",
    desc: "Run payroll for Portmore, Spanish Town, and Linstead locations in one account. Consolidated reports, separate location breakdowns — everything in one place.",
  },
  {
    title: "Overtime and shift management",
    desc: "Portmore's logistics and retail sectors require accurate overtime. Payroll Jamaica applies Jamaica's overtime rules (time-and-a-half after 40 hours) automatically.",
  },
  {
    title: "Year-end compliance made easy",
    desc: "SO1 Annual Returns, TD4 certificates, and NHT returns generated automatically. Never miss another March 31 deadline.",
  },
  {
    title: "Bank payment files — all major Jamaica banks",
    desc: "Pay your entire Portmore workforce with a single bank transfer. Compatible with NCB, Scotiabank, CIBC, Sagicor, and JN Bank.",
  },
];

const portmoreIndustries = [
  { name: "Retail & Shopping Centres", desc: "Portmore Town Centre, Waterford, and St. Catherine retail businesses" },
  { name: "Logistics & Warehousing", desc: "St. Catherine's growing logistics park and warehouse operations" },
  { name: "Construction", desc: "Portmore's residential development and infrastructure projects" },
  { name: "Food & Beverage", desc: "Restaurants, bakeries, and food processing in the Greater Portmore area" },
  { name: "Healthcare", desc: "Private clinics, pharmacies, and medical practices serving Portmore residents" },
  { name: "Professional Services", desc: "Accounting, legal, insurance, and business services for the St. Catherine market" },
];

const portmoreFaqs = [
  {
    q: "Do you serve businesses registered in St. Catherine Parish?",
    a: "Yes. Payroll Jamaica works for all businesses registered with the Companies Office of Jamaica, including those in St. Catherine — Portmore, Spanish Town, Linstead, Bog Walk, and surrounding areas.",
  },
  {
    q: "Can Portmore businesses file PAYE without going to Kingston?",
    a: "Absolutely. Payroll Jamaica generates e-file-ready PAYE submissions through TAJ Online. No causeway traffic, no Kingston parking — file from your Portmore office.",
  },
  {
    q: "We have staff in Portmore and Spanish Town — can one payroll handle both?",
    a: "Yes. Payroll Jamaica handles employees across all locations in one account. Run payroll for Portmore and Spanish Town employees together in one payroll run.",
  },
  {
    q: "Can Payroll Jamaica handle hourly workers in Portmore's retail sector?",
    a: "Yes. Payroll Jamaica supports hourly, salaried, and part-time workers. Enter hours worked each period and the system calculates gross pay, PAYE, NIS, NHT, and Education Tax automatically.",
  },
  {
    q: "How long does it take a Portmore business to get set up?",
    a: "Most Portmore businesses are live within one business day. Import your employee list, set pay rates, and you&apos;re running compliant payroll. Our setup takes less time than a round trip to Kingston.",
  },
];

export default function PayrollPortmoreJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Portmore & St. Catherine Parish businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Portmore,<br />Jamaica businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by businesses across Portmore, Spanish Town, and St. Catherine Parish. Automate PAYE, NIS, NHT, and Education Tax. File online — no Kingston commute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Portmore businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Portmore payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Portmore payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {portmorePainPoints.map((item) => (
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
              Everything Portmore businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From a single retail store in Waterford to a 200-staff logistics operation — Payroll Jamaica scales with St. Catherine businesses.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portmoreFeatures.map((f) => (
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
              Serving every Portmore industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              St. Catherine&apos;s diverse economy — from retail to logistics to professional services — is covered.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {portmoreIndustries.map((ind) => (
                <div key={ind.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{ind.name}</p>
                  <p className="text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted by businesses across Jamaica</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for Portmore SMEs" },
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
              Portmore payroll FAQ
            </h2>
            <div className="space-y-6">
              {portmoreFaqs.map((faq) => (
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
              Start your Portmore payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Portmore businesses running compliant, automated payroll. Set up in one day — no Kingston trip required.
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-portmore-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-portmore-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Portmore", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Saint Catherine", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: portmoreFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Portmore Jamaica", item: `${siteConfig.url}/payroll-portmore-jamaica` },
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
