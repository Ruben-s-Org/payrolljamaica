import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Payroll services in May Pen, Clarendon, Jamaica — Payroll Jamaica is the #1 payroll software serving Clarendon businesses. Automate PAYE, NIS, NHT, and Education Tax for your May Pen employees. From Clarendon Park to Lionel Town and Four Paths, we handle payroll for Clarendon's sugar industry, farms, SMEs, and commercial businesses.";

export const metadata: Metadata = {
  title: "Payroll Services May Pen Jamaica — Payroll Software for Clarendon Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "May Pen's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Clarendon business. Trusted by sugar industry, farms, SMEs, and commercial businesses across May Pen, Lionel Town, and Four Paths.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll May Pen Jamaica",
    "payroll services May Pen",
    "payroll Clarendon Jamaica",
    "payroll software May Pen",
    "May Pen payroll",
    "Clarendon payroll services",
    "PAYE May Pen Jamaica",
    "NIS NHT Clarendon",
    "payroll outsourcing May Pen",
    "small business payroll Clarendon",
    "payroll company May Pen Jamaica",
    "payroll processing May Pen",
    "Clarendon business payroll",
    "sugar industry payroll Jamaica",
    "agricultural payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-may-pen-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-may-pen-jamaica"),
      en: canonical("/payroll-may-pen-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services May Pen Jamaica — #1 Payroll Software for Clarendon | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-may-pen-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services May Pen Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services May Pen Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const mayPenPainPoints = [
  {
    problem: "Agricultural and seasonal worker payroll",
    solution:
      "Clarendon's sugar cane and farming industries rely on seasonal workers. Payroll Jamaica handles variable hours, piece-rate pay, and seasonal employment — correct tax treatment every time.",
  },
  {
    problem: "Managing payroll from rural Clarendon",
    solution:
      "No need to drive to Kingston for TAJ filings. Payroll Jamaica is 100% cloud-based — manage your Clarendon payroll from May Pen, Chapelton, or Lionel Town on any device.",
  },
  {
    problem: "NHT and NIS for mixed workforce",
    solution:
      "From factory floor to office staff, Payroll Jamaica correctly calculates NHT and NIS for every employee category — permanent, part-time, and seasonal staff included.",
  },
  {
    problem: "Keeping up with Jamaica's annual tax changes",
    solution:
      "PAYE thresholds and NIS rates change with every budget. Payroll Jamaica updates automatically — your May Pen business is always compliant without manual spreadsheet updates.",
  },
];

const mayPenFeatures = [
  {
    title: "Built for Jamaica's tax system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at 2025/2026 rates. Payroll Jamaica stays updated with every Jamaican budget announcement.",
  },
  {
    title: "Agricultural & seasonal payroll",
    desc: "Handle Clarendon's unique workforce — sugar cane cutters, farm workers, seasonal staff — with correct piece-rate pay, variable hour calculations, and final pay processing.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click — ready for TAJ, NIS, and NHT submission.",
  },
  {
    title: "Cloud-based — works from anywhere",
    desc: "Manage your Clarendon payroll from May Pen's Constant Spring Road commercial area, Lionel Town, or anywhere with internet. No installation required.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with NCB, Scotiabank, and CIBC FirstCaribbean. Bulk transfers on payday — no manual entry per employee.",
  },
  {
    title: "Employee self-service",
    desc: "Email payslips to all staff on payday. Employees can view payslip history online — no paper distribution, no lost payslips.",
  },
];

const mayPenIndustries = [
  { name: "Sugar & Agriculture", desc: "Clarendon's sugar cane farms, Frome Sugar Factory supply chain, and agricultural businesses" },
  { name: "Retail & Commercial", desc: "May Pen's Main Street businesses, plazas, and commercial strips serving Clarendon" },
  { name: "Manufacturing", desc: "Clarendon factories, agro-processing plants, and light manufacturing businesses" },
  { name: "Transportation", desc: "Route taxis, trucking, and logistics operations serving Clarendon and Jamaica's central corridor" },
  { name: "Construction", desc: "Clarendon contractors, builders, and housing development companies" },
  { name: "Education & Healthcare", desc: "Private schools, clinics, pharmacies, and health centres across Clarendon" },
];

const mayPenFaqs = [
  {
    q: "Does Payroll Jamaica work for Clarendon businesses?",
    a: "Yes. Payroll Jamaica serves businesses registered across all 14 Jamaican parishes, including Clarendon. May Pen, Lionel Town, Four Paths, Chapelton — all covered under one account.",
  },
  {
    q: "Can I handle seasonal and permanent workers in the same payroll?",
    a: "Absolutely. Payroll Jamaica supports multiple employee types — permanent, part-time, seasonal, and contractual — each with the correct tax treatment and deductions under Jamaica's Labour Relations Code.",
  },
  {
    q: "How do I file PAYE without visiting the TAJ office in Clarendon?",
    a: "Payroll Jamaica generates e-file-ready PAYE submissions. You file directly through TAJ Online from any device — no in-person visits to the Clarendon Tax Office required.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most businesses are live within one business day. Import your employee list, set pay rates, and run your first payroll. We handle all Jamaica tax tables.",
  },
  {
    q: "Is there support for piece-rate agricultural workers?",
    a: "Yes. Payroll Jamaica supports piece-rate pay calculations — you enter the rate per unit and the quantity, and the system calculates gross pay and applies the correct NIS, NHT, PAYE, and Education Tax deductions.",
  },
];

export default function PayrollMayPenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Clarendon businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for May Pen,<br />Clarendon businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by businesses across May Pen, Lionel Town, Four Paths, and Clarendon Park. Automate PAYE, NIS, NHT, and Education Tax. Get compliant in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — May Pen businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Clarendon payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              May Pen payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mayPenPainPoints.map((item) => (
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
              Everything Clarendon businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From one-person shops in May Pen to 100-staff agricultural operations in Clarendon — Payroll Jamaica scales with you.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mayPenFeatures.map((f) => (
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
              Serving every Clarendon industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From Clarendon's sugar fields to May Pen's commercial strip — we serve the industries that power Jamaica's heartland.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mayPenIndustries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by Clarendon businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From May Pen's main commercial strip to Clarendon's farming communities — Payroll Jamaica keeps Clarendon businesses compliant and on time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for Clarendon SMEs" },
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
              May Pen payroll FAQ
            </h2>
            <div className="space-y-6">
              {mayPenFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Explore more of Payroll Jamaica</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-sm text-center">
              <Link href="/calculator" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Calculator
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica
              </Link>
              <Link href="/pricing" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Pricing Plans
              </Link>
              <Link href="/payroll-kingston-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Kingston
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Start your May Pen payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Clarendon businesses already saving hours every payroll cycle. Set up in less than a day — no trips to Kingston required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors">
                See pricing plans
              </Link>
            </div>
          </div>
        </section>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-may-pen-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-may-pen-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "May Pen", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Clarendon", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: mayPenFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll May Pen Jamaica", item: `${siteConfig.url}/payroll-may-pen-jamaica` },
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
