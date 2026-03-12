import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll services in Montego Bay Jamaica — Payroll Jamaica is the payroll software built for Montego Bay businesses. Automate PAYE, NIS, NHT, and Education Tax for your MoBay employees. From the hotel strip in Rose Hall to business parks in Freeport, we handle payroll for Montego Bay's tourism, retail, and professional services sectors.";

export const metadata: Metadata = {
  title: "Payroll Services Montego Bay Jamaica — Payroll Software for MoBay Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "Montego Bay's payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Montego Bay business. Trusted by hotels, retailers, and SMEs across St. James Parish.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Montego Bay Jamaica",
    "payroll services Montego Bay",
    "payroll company Montego Bay Jamaica",
    "payroll software Montego Bay",
    "MoBay payroll Jamaica",
    "St James payroll Jamaica",
    "payroll outsourcing Montego Bay",
    "Montego Bay hotel payroll",
    "Montego Bay business payroll",
    "PAYE Montego Bay Jamaica",
    "NIS NHT St James",
    "payroll processing Montego Bay",
    "small business payroll Montego Bay",
    "online payroll Montego Bay Jamaica",
    "tourism payroll Montego Bay",
  ]),
  alternates: {
    canonical: canonical("/payroll-montego-bay-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-montego-bay-jamaica"),
      en: canonical("/payroll-montego-bay-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Montego Bay Jamaica — Built for MoBay Businesses | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-montego-bay-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Montego Bay Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Montego Bay Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const mobayPainPoints = [
  {
    problem: "Seasonal tourism staffing spikes",
    solution:
      "Winter season brings staff surges across MoBay's hotel strip. Payroll Jamaica handles seasonal workers, tip income, and peak-season overtime — automatically, with correct PAYE for variable pay.",
  },
  {
    problem: "Filing taxes from a busy resort town",
    solution:
      "No time to drive to the TAJ office in Montego Bay? Payroll Jamaica generates e-file-ready PAYE reports. File online through TAJ — from your desk, the back office, or your phone.",
  },
  {
    problem: "St. James Parish NIS compliance",
    solution:
      "Montego Bay employers face the same NIS obligations as Kingston. Payroll Jamaica calculates and reports NIS for every worker — protecting your business from NIS penalties and under-contribution claims.",
  },
  {
    problem: "Multiple outlets, one messy payroll",
    solution:
      "Restaurants in Freeport, retail in Montego Bay Shopping Centre, spa at Rose Hall? Manage every location in one payroll account — no spreadsheets emailed between managers.",
  },
];

const mobayFeatures = [
  {
    title: "Tourism industry specialist",
    desc: "Handle tip income PAYE, seasonal hiring, service charge distributions, and shift differentials — all common in MoBay's hospitality industry. Correct Jamaica tax treatment built in.",
  },
  {
    title: "Online payroll — no TAJ office queue",
    desc: "E-file your PAYE remittances from anywhere. Payroll Jamaica generates the exact format TAJ Online requires. No more queueing at the Half Way Tree Road Tax Office.",
  },
  {
    title: "Compliant statutory reports",
    desc: "TD4, NIS Schedule 7, NHT, and Education Tax reports generated automatically each month. Ready for submission — no manual aggregation of spreadsheet columns.",
  },
  {
    title: "Instant digital payslips",
    desc: "Email payslips to every Montego Bay employee on payday. Workers get their deduction breakdown instantly — no paper, no printing, no chasing the supervisor.",
  },
  {
    title: "Overtime and shift premium support",
    desc: "Montego Bay's 24/7 hotel economy means complex shift patterns. Payroll Jamaica applies Jamaica's overtime multipliers (1.5× weekdays, 2× Sundays/holidays) correctly.",
  },
  {
    title: "Bank-ready transfer files",
    desc: "Generate payroll bank files for NCB, Scotiabank, and other Montego Bay-area banks. One upload, all salaries transferred — no manual input for each employee.",
  },
];

const mobayIndustries = [
  { name: "Hotels & Resorts", desc: "All-inclusive, boutique, business hotels from Rose Hall to Downtown MoBay" },
  { name: "Restaurants & Bars", desc: "Hip Strip venues, resort restaurants, casual dining across St. James" },
  { name: "Retail", desc: "Shopping centre stores, duty-free shops, market vendors with formal staff" },
  { name: "Tours & Attractions", desc: "Tour operators, excursion companies, water sports businesses" },
  { name: "Professional Services", desc: "Law firms, accounting practices, medical clinics in Montego Bay" },
  { name: "Construction", desc: "MoBay's ongoing hotel and infrastructure development projects" },
];

const faqs = [
  {
    q: "Can I manage Montego Bay payroll entirely online?",
    a: "Yes. Payroll Jamaica is fully cloud-based. Manage your MoBay payroll from anywhere with internet access — no local server, no installation, and no need to visit any government office in person.",
  },
  {
    q: "Does Payroll Jamaica support hotel and tourism businesses in Montego Bay?",
    a: "Absolutely. Payroll Jamaica handles tip income PAYE, seasonal staff, service charge distribution, and shift differentials — all common in MoBay's hospitality sector. See our dedicated hotel payroll page for more detail.",
  },
  {
    q: "I have businesses in both Kingston and Montego Bay — can one account manage both?",
    a: "Yes. One Payroll Jamaica account handles employees across all of Jamaica's 14 parishes. Kingston staff and Montego Bay staff process in the same payroll run — no duplicate accounts needed.",
  },
  {
    q: "Are the PAYE rates different for Montego Bay?",
    a: "No. Jamaica has a unified income tax system — PAYE rates and thresholds are the same nationwide. Montego Bay businesses pay the same PAYE, NIS, NHT, and Education Tax as Kingston businesses.",
  },
  {
    q: "How do I handle Montego Bay staff who work in different parishes seasonally?",
    a: "Workers employed by your Montego Bay entity are processed under your company registration regardless of where they physically work. Payroll Jamaica tracks each employee under your company account — parish of work doesn't affect payroll calculations.",
  },
];

export default function PayrollMontegoBayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Montego Bay and all of St. James Parish
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Montego Bay,<br />Jamaica businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              MoBay's hotels, restaurants, retailers, and professionals trust Payroll Jamaica to run compliant payroll. PAYE, NIS, NHT, and Education Tax — automated. No TAJ office queues.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — MoBay businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your MoBay payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Montego Bay payroll challenges — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mobayPainPoints.map((item) => (
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
              Everything MoBay businesses need from payroll
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              From a 5-person guesthouse to a 300-room resort — Payroll Jamaica scales with Montego Bay's business community.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobayFeatures.map((f) => (
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
              Serving every Montego Bay sector
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              MoBay is Jamaica's tourist capital and a growing commercial hub. We serve the businesses that power it.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mobayIndustries.map((ind) => (
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
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-semibold">Trusted by Montego Bay businesses</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: "285+", label: "Jamaica payroll guides — including tourism topics" },
                { stat: "100%", label: "Jamaica PAYE and statutory compliance built in" },
                { stat: "All year", label: "High season and low season support" },
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
              Montego Bay payroll FAQ
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
              Run your MoBay payroll the right way
            </h2>
            <p className="text-muted-foreground">
              Join Montego Bay businesses already saving hours every payroll cycle. Cloud-based, Jamaica-compliant, and designed for tourism businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/payroll-jamaica-hotels"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Hotel payroll Jamaica
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-montego-bay-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-montego-bay-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Montego Bay", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Saint James", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
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
                    { "@type": "ListItem", position: 3, name: "Payroll Montego Bay Jamaica", item: `${siteConfig.url}/payroll-montego-bay-jamaica` },
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
