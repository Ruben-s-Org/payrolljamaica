import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";
import RelatedCityPages from "@/components/ui/related-city-pages";

const baseDescription =
  "Payroll services in Morant Bay, St. Thomas, Jamaica — Payroll Jamaica is the #1 payroll software serving St. Thomas parish businesses. Automate PAYE, NIS, NHT, and Education Tax for your Morant Bay employees. From Port Morant to Yallahs and Bath, we handle payroll for St. Thomas's agricultural, fishing, tourism, and commercial businesses — fully online, no Kingston trip required.";

export const metadata: Metadata = {
  title: "Payroll Morant Bay Jamaica — St. Thomas Payroll",
  description: ensureMinDescription(
    "Morant Bay's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your St. Thomas parish business. Trusted by banana farms, fishing.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Morant Bay Jamaica",
    "payroll services St Thomas Jamaica",
    "payroll software Morant Bay",
    "St Thomas parish payroll",
    "PAYE Morant Bay Jamaica",
    "NIS NHT St Thomas",
    "agricultural payroll St Thomas Jamaica",
    "Morant Bay business payroll",
    "payroll company St Thomas Jamaica",
    "small business payroll Morant Bay",
    "payroll outsourcing Morant Bay",
    "fishing cooperative payroll Jamaica",
    "banana farm payroll Jamaica",
    "St Thomas payroll processing",
    "payroll Morant Bay SME",
  ]),
  alternates: {
    canonical: canonical("/payroll-morant-bay-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-morant-bay-jamaica"),
      en: canonical("/payroll-morant-bay-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Morant Bay Jamaica — St. Thomas Payroll",
    description: baseDescription,
    url: canonical("/payroll-morant-bay-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Morant Bay Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Morant Bay Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const morantBayPainPoints = [
  {
    problem: "Agricultural and fishing payroll complexity",
    solution:
      "St. Thomas's banana farms, coffee estates, and Port Morant fishing cooperatives rely on piece-rate pay, seasonal workers, and cooperative arrangements. Payroll Jamaica handles all of these — correct NIS and NHT deductions on every type of pay structure, every time.",
  },
  {
    problem: "Managing payroll remotely from eastern Jamaica",
    solution:
      "No need to drive to Kingston for TAJ filings. Payroll Jamaica is 100% cloud-based — manage your St. Thomas payroll from Morant Bay, Port Morant, Bath, or Seaforth on any device with internet access.",
  },
  {
    problem: "NHT and NIS for mixed agricultural and commercial workforce",
    solution:
      "From banana field workers to office staff and shop attendants, Payroll Jamaica correctly calculates NHT and NIS for every employee category — permanent, part-time, seasonal, and piece-rate workers included.",
  },
  {
    problem: "Keeping up with Jamaica's annual tax rate changes",
    solution:
      "PAYE thresholds and NIS rates change with every national budget. Payroll Jamaica updates automatically — your Morant Bay business stays compliant without manually updating spreadsheets after each Budget Day.",
  },
  {
    problem: "Generating compliance reports for multiple statutory bodies",
    solution:
      "TAJ, NIS, NHT, and Education Tax all require separate submissions. Payroll Jamaica generates all required statutory reports in one click — correctly formatted and ready to file from anywhere in St. Thomas.",
  },
];

const morantBayFeatures = [
  {
    title: "Built for Jamaica's tax system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at current 2025/2026 rates. Payroll Jamaica stays updated with every Jamaican budget announcement — St. Thomas businesses never fall behind.",
  },
  {
    title: "Agricultural and piece-rate payroll",
    desc: "Handle St. Thomas's unique workforce — banana pickers, coffee estate workers, cane cutters, fishing boat crews — with correct piece-rate calculations, variable hours, and seasonal employment processing.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click — ready for TAJ, NIS, and NHT submission without visiting any office in person.",
  },
  {
    title: "Cloud-based — works from anywhere in St. Thomas",
    desc: "Manage your Morant Bay payroll from Bath Road, Port Morant, Seaforth, or Trinityville. No installation, no Kingston commute, no paper files. Access from your phone, tablet, or laptop.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with NCB, Scotiabank, and CIBC FirstCaribbean. Bulk salary transfers on payday — no manual per-employee entry required.",
  },
  {
    title: "Employee self-service payslips",
    desc: "Email payslips to all staff on payday. Employees can view payslip history online — no paper distribution needed, no lost payslips, no extra admin for your Morant Bay business.",
  },
];

const morantBayIndustries = [
  {
    name: "Banana & Agriculture",
    desc: "St. Thomas banana farms, Blue Mountain coffee estates, and agricultural producers throughout the parish",
  },
  {
    name: "Fishing & Maritime",
    desc: "Port Morant fishing cooperative members, fish vendors, boat operators, and seafood processors along the St. Thomas coastline",
  },
  {
    name: "Tourism & Hospitality",
    desc: "Lyssons Beach resorts, Bath Mineral Spring visitors, eco-tourism operators, guest houses, and Bath Botanical Garden area businesses",
  },
  {
    name: "Retail & Commerce",
    desc: "Morant Bay's main commercial strips, market vendors with registered staff, plazas, and general traders across the parish",
  },
  {
    name: "Construction",
    desc: "Residential development contractors, highway expansion project subcontractors, and building firms operating across St. Thomas",
  },
  {
    name: "Education & Healthcare",
    desc: "Private schools, Morant Bay clinics, Bath Health Centre, pharmacies, and childcare operators throughout St. Thomas parish",
  },
];

const morantBayFaqs = [
  {
    q: "Does Payroll Jamaica work for St. Thomas businesses?",
    a: "Yes. Payroll Jamaica serves businesses registered across all 14 Jamaican parishes, including St. Thomas. Morant Bay, Port Morant, Bath, Seaforth, Yallahs, and Trinityville — all covered under one account. You file and manage everything online without leaving St. Thomas.",
  },
  {
    q: "Can I handle agricultural piece-rate workers?",
    a: "Absolutely. Payroll Jamaica supports piece-rate pay calculations for banana pickers, coffee estate workers, and other agricultural staff. Enter the rate per unit and quantity — the system calculates gross pay and applies the correct NIS, NHT, PAYE, and Education Tax deductions automatically.",
  },
  {
    q: "How do I file PAYE without driving to Kingston?",
    a: "Payroll Jamaica generates e-file-ready PAYE submissions. You file directly through TAJ Online from any device — no in-person visits to the St. Thomas Tax Office or Kingston required. It takes minutes, not a half-day trip on the highway.",
  },
  {
    q: "Do fishing cooperative members count as employees for NIS and NHT purposes?",
    a: "It depends on how the cooperative is structured. Where cooperative members are formally employed and receive a wage (rather than a share of catch), they are treated as employees and Payroll Jamaica will calculate and deduct NIS and NHT correctly. We recommend confirming the employment status with TAJ for your specific arrangement — and once confirmed, Payroll Jamaica handles all deductions automatically.",
  },
  {
    q: "How quickly can I get started?",
    a: "Most businesses are live within one business day. Import your employee list, set pay rates, and run your first payroll. All Jamaica statutory tax tables are built in — no manual configuration required.",
  },
];

export default function PayrollMorantBayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving St. Thomas parish businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Morant Bay,<br />St. Thomas businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by businesses across Morant Bay, Port Morant, Bath, Yallahs, and Seaforth. Automate PAYE, NIS, NHT, and Education Tax. Get compliant in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Morant Bay businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your St. Thomas payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Morant Bay payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {morantBayPainPoints.map((item) => (
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
              Everything St. Thomas businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From one-person shops in Morant Bay to 100-staff banana farming operations in St. Thomas — Payroll Jamaica scales with you.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {morantBayFeatures.map((f) => (
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
              Serving every St. Thomas industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From St. Thomas's banana fields to Morant Bay's commercial strip and Port Morant's fishing boats — we serve the industries that power Jamaica's easternmost parish.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {morantBayIndustries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by St. Thomas businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Morant Bay's main commercial strip to St. Thomas's farming communities and Port Morant's fishing cooperative — Payroll Jamaica keeps St. Thomas businesses compliant and on time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for St. Thomas SMEs" },
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
              Morant Bay payroll FAQ
            </h2>
            <div className="space-y-6">
              {morantBayFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related city pages */}
        <RelatedCityPages currentHref="/payroll-morant-bay-jamaica" />

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
              Start your Morant Bay payroll today
            </h2>
            <p className="text-muted-foreground">
              Join St. Thomas businesses already saving hours every payroll cycle. Set up in less than a day — no trips to Kingston required.
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
                  "@id": `${siteConfig.url}/payroll-morant-bay-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-morant-bay-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Morant Bay", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "St. Thomas", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Payroll Jamaica",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  offers: {
                    "@type": "Offer",
                    description: "Payroll software for Morant Bay and St. Thomas parish businesses in Jamaica",
                  },
                  featureList: [
                    "PAYE automation for Jamaica",
                    "NIS deductions",
                    "NHT deductions",
                    "Education Tax",
                    "Agricultural and piece-rate payroll",
                    "Fishing cooperative payroll",
                    "Statutory compliance reports",
                    "Bank payment files",
                    "Employee self-service payslips",
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: morantBayFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Morant Bay Jamaica", item: `${siteConfig.url}/payroll-morant-bay-jamaica` },
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
