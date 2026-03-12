import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";
import RelatedCityPages from "@/components/ui/related-city-pages";

const baseDescription =
  "Payroll services in Kingston Jamaica — Payroll Jamaica is the #1 payroll software serving Kingston businesses. Automate PAYE, NIS, NHT, and Education Tax for your Kingston employees. From New Kingston to Downtown and Half Way Tree, we handle payroll for Kingston's SMEs, professionals, and corporates.";

export const metadata: Metadata = {
  title: "Payroll Services Kingston Jamaica — Payroll Software for Kingston Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "Kingston's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Kingston business. Trusted by businesses across New Kingston, Downtown Kingston, and Half Way Tree.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Kingston Jamaica",
    "payroll services Kingston Jamaica",
    "payroll company Kingston Jamaica",
    "payroll software Kingston",
    "Kingston Jamaica payroll",
    "payroll service provider Kingston",
    "PAYE Kingston Jamaica",
    "NIS NHT Kingston",
    "payroll outsourcing Kingston Jamaica",
    "small business payroll Kingston",
    "New Kingston payroll",
    "Kingston business payroll",
    "payroll processing Kingston Jamaica",
    "online payroll Kingston Jamaica",
    "payroll management Kingston",
  ]),
  alternates: {
    canonical: canonical("/payroll-kingston-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-kingston-jamaica"),
      en: canonical("/payroll-kingston-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Kingston Jamaica — #1 Payroll Software for Kingston | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-kingston-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Kingston Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Kingston Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const kingstonPainPoints = [
  {
    problem: "TAJ office queues eating your time",
    solution:
      "Kingston's Half Way Tree Tax Office and downtown TAJ branches are packed. Payroll Jamaica files your PAYE online — no queues, no lost afternoons, full e-filing compliance.",
  },
  {
    problem: "NHT contributions for Kingston staff",
    solution:
      "Kingston has Jamaica's highest property prices — your NHT contributions matter to your staff. Payroll Jamaica tracks every dollar contributed and generates accurate NHT schedules monthly.",
  },
  {
    problem: "Multiple Kingston locations, one payroll",
    solution:
      "Running offices in New Kingston and Downtown? Retail branches in Half Way Tree and Constant Spring? Manage every location in one payroll — no more emailed spreadsheets.",
  },
  {
    problem: "High staff turnover in the capital",
    solution:
      "Kingston businesses face more frequent hiring and departures. Payroll Jamaica onboards new staff in minutes and calculates accurate final pay — including NIS and NHT final contributions.",
  },
];

const kingstonFeatures = [
  {
    title: "Built for Jamaica's tax system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at the 2025/2026 rates. Payroll Jamaica stays updated with every budget — you never have to manually adjust thresholds.",
  },
  {
    title: "Online payslips your Kingston staff love",
    desc: "Email payslips to every employee on payday. No printing, no distribution headaches. Staff can log in to view their payslip history from any device.",
  },
  {
    title: "Compliant statutory reports",
    desc: "Generate your monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click. Ready for TAJ, NIS, and NHT submission — exactly as required.",
  },
  {
    title: "Runs anywhere in Kingston",
    desc: "Cloud-based — works from New Kingston towers, Half Way Tree offices, Downtown warehouses. No installation, no server, no IT headache.",
  },
  {
    title: "Contractor and part-time support",
    desc: "Kingston's gig economy is real. Handle independent contractors, part-time workers, and full-time staff in one payroll — correct tax treatment for every employment type.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with Scotiabank, NCB, CIBC FirstCaribbean, and other Kingston banks. Bulk transfers on payday — no manual entry.",
  },
];

const kingstonIndustries = [
  { name: "Financial Services", desc: "Banks, credit unions, insurance companies in New Kingston's finance district" },
  { name: "Professional Services", desc: "Law firms, accounting firms, consulting practices across Kingston 5, 6, 10" },
  { name: "Retail & Trade", desc: "Shops from Portmore to Half Way Tree, Constant Spring Road to Downtown" },
  { name: "Healthcare", desc: "Private clinics, dental practices, pharmacies across Kingston parishes" },
  { name: "Education", desc: "Private schools, tutoring centres, early childhood institutions in Kingston" },
  { name: "Construction", desc: "Kingston's ongoing development projects, civil contractors, property developers" },
];

const kingstonFaqs = [
  {
    q: "Do you support businesses registered in Kingston and St. Andrew?",
    a: "Yes. Payroll Jamaica works for all businesses registered with the Companies Office of Jamaica, including those in Kingston, St. Andrew (which shares the Kingston Metro area), and all other parishes.",
  },
  {
    q: "Can I file PAYE online from Kingston without visiting the TAJ office?",
    a: "Absolutely. Payroll Jamaica generates e-file-ready PAYE submissions. You file directly through TAJ Online — no in-person visits to Half Way Tree or Downtown Kingston Tax Office required.",
  },
  {
    q: "I have staff working in Kingston and in the country — can one payroll handle both?",
    a: "Yes. Payroll Jamaica handles employees across all 14 parishes in one account. There's no restriction by location — run Kingston staff and rural staff in the same payroll run.",
  },
  {
    q: "How quickly can I get set up?",
    a: "Most Kingston businesses are live within one business day. Import your employee list, set pay rates and deductions, and run your first payroll. We handle the tax tables — you just approve the numbers.",
  },
  {
    q: "What banks does Payroll Jamaica support for Kingston businesses?",
    a: "We generate bank files compatible with NCB, Scotiabank, CIBC FirstCaribbean, Sagicor Bank, and JN Bank. If your bank isn't listed, contact us — we add new banks regularly.",
  },
];

export default function PayrollKingstonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Kingston businesses since day one
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Kingston,<br />Jamaica businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — used by businesses across New Kingston, Half Way Tree, Downtown, and beyond. Automate PAYE, NIS, NHT, and Education Tax. Get compliant in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Kingston businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Kingston payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Kingston payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {kingstonPainPoints.map((item) => (
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
              Everything Kingston businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From one-person operations in Kingston 6 to 200-staff companies in New Kingston — Payroll Jamaica scales with you.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kingstonFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kingston industries */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Serving every Kingston industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Kingston is Jamaica's economic engine. We serve every sector that drives the capital.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kingstonIndustries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by Kingston businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the financial district in New Kingston to small shops in Constant Spring — Kingston businesses trust Payroll Jamaica to keep their payroll compliant and on time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for Kingston SMEs" },
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
              Kingston payroll FAQ
            </h2>
            <div className="space-y-6">
              {kingstonFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related city pages */}
        <RelatedCityPages currentHref="/payroll-kingston-jamaica" />

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
              <Link href="/payroll-montego-bay-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Montego Bay
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Start your Kingston payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Kingston businesses already saving hours every payroll cycle. Set up takes less time than a trip to the TAJ office.
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
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See pricing plans
              </Link>
            </div>
          </div>
        </section>

        {/* Local SEO breadcrumb + schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-kingston-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-kingston-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Kingston", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Kingston", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Saint Andrew", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Kingston Payroll Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PAYE Payroll Processing" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NIS NHT Calculation" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Statutory Reporting" } },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: kingstonFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Kingston Jamaica", item: `${siteConfig.url}/payroll-kingston-jamaica` },
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
