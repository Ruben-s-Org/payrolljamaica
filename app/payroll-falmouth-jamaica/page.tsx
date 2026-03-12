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
  "Payroll services in Falmouth, Trelawny, Jamaica — Payroll Jamaica is the #1 payroll software serving Trelawny businesses. Automate PAYE, NIS, NHT, and Education Tax for your Falmouth employees. From the Falmouth Cruise Ship Pier to Duncans, Clark's Town, and the North Coast tourism corridor, we handle payroll for Trelawny's cruise tourism, banana industry, agriculture, and commercial businesses.";

export const metadata: Metadata = {
  title: "Payroll Falmouth Jamaica — Trelawny Payroll Software",
  description: ensureMinDescription(
    "Falmouth's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Trelawny business. Trusted by cruise tourism operators, banana exporters, hotels, restaurants, and SMEs across Falmouth, Duncans, Clark's Town, and the North Coast.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Falmouth Jamaica",
    "payroll services Trelawny",
    "payroll software Falmouth",
    "Trelawny payroll",
    "PAYE Falmouth Jamaica",
    "NIS NHT Trelawny",
    "cruise ship worker payroll Jamaica",
    "tourism payroll Falmouth",
    "banana industry payroll Jamaica",
    "Trelawny business payroll",
    "payroll Falmouth Trelawny",
    "payroll company Falmouth Jamaica",
    "payroll processing Trelawny",
    "North Coast tourism payroll Jamaica",
    "seasonal worker payroll Trelawny",
  ]),
  alternates: {
    canonical: canonical("/payroll-falmouth-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-falmouth-jamaica"),
      en: canonical("/payroll-falmouth-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Falmouth Jamaica — Trelawny Payroll Software",
    description: baseDescription,
    url: canonical("/payroll-falmouth-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Falmouth Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Falmouth Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const falmouthPainPoints = [
  {
    problem: "Cruise ship tourism payroll surges and gratuity complexity",
    solution:
      "Falmouth's cruise ship pier receives 500,000+ visitors annually, creating seasonal payroll surges for tour operators, restaurants, and excursion companies. Payroll Jamaica handles service charge distribution, gratuity treatment, and tip allocation automatically — correctly classified under Jamaica tax law every time.",
  },
  {
    problem: "Banana and agricultural piece-rate workers",
    solution:
      "Trelawny's banana industry (Fyffes/Chiquita export operations) relies on seasonal and piece-rate workers. Payroll Jamaica calculates piece-rate gross pay, applies the correct NIS, NHT, PAYE, and Education Tax deductions, and handles seasonal start/end employment without errors.",
  },
  {
    problem: "Managing NHT and NIS for mixed permanent and seasonal staff",
    solution:
      "North Coast hotels, restaurants, and tour operators carry a core permanent team that swells with seasonal hires when cruise ships dock. Payroll Jamaica correctly classifies each employee type and applies the right statutory deductions — no more spreadsheet guesswork between ship seasons.",
  },
  {
    problem: "Remote filing without visiting the Falmouth Tax Office",
    solution:
      "No need to leave Trelawny or drive to Kingston for PAYE submissions. Payroll Jamaica is 100% cloud-based — file PAYE, NIS, NHT, and Education Tax returns online through TAJ from Falmouth, Duncans, or anywhere in Trelawny.",
  },
  {
    problem: "Payroll for businesses serving both Falmouth and Montego Bay markets",
    solution:
      "Many Trelawny businesses operate across the Falmouth–Montego Bay corridor (just 35 minutes apart). Payroll Jamaica runs payroll for multi-location operations under one account, with consolidated statutory reports for TAJ.",
  },
];

const falmouthFeatures = [
  {
    title: "Built for Jamaica's tax system",
    desc: "Full PAYE, NIS, NHT, and Education Tax automation at 2025/2026 rates. Payroll Jamaica stays current with every Jamaican budget announcement — your Trelawny business is always compliant.",
  },
  {
    title: "Tourism & cruise payroll tools",
    desc: "Handle service charge pools, gratuity allocation, and tip income for Falmouth's hotels, restaurants, and excursion operators. Correct NIS and PAYE treatment for gratuity income built in.",
  },
  {
    title: "Piece-rate & seasonal worker support",
    desc: "Trelawny's banana and agricultural workforce relies on piece-rate pay. Enter the rate per unit and quantity — Payroll Jamaica calculates gross pay and applies all Jamaica statutory deductions automatically.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate monthly TD4, NIS Schedule 7, NHT, and Education Tax reports with one click — ready for TAJ, NIS, and NHT submission without manual compilation.",
  },
  {
    title: "Cloud-based — works from anywhere in Trelawny",
    desc: "Manage payroll from the Falmouth waterfront, Duncans, Clark's Town, or on a laptop at your Montego Bay office. No software installation — just a browser.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with NCB, Scotiabank, and CIBC FirstCaribbean. Bulk transfers on payday — no manual entry per employee, even for large seasonal crews.",
  },
  {
    title: "Employee self-service payslips",
    desc: "Email payslips to all staff on payday. Hotel, restaurant, and tour operator teams can view payslip history online — no paper distribution, no lost payslips during busy cruise season.",
  },
  {
    title: "Multi-location payroll",
    desc: "Run payroll across Falmouth, Duncans, and the North Coast tourism corridor from one account. Separate reports per location with a single consolidated statutory submission.",
  },
];

const falmouthIndustries = [
  { name: "Cruise Tourism & Excursions", desc: "Tour operators, excursion companies, and waterfront businesses serving the Falmouth Cruise Ship Pier — one of the Caribbean's busiest" },
  { name: "Hotels & Hospitality", desc: "North Coast hotels, guesthouses, Fisherman's Inn, heritage properties, and Airbnb operations along the Trelawny coastline" },
  { name: "Restaurants & Food Service", desc: "Falmouth waterfront restaurants, jerk centres, and catering operations that surge with every cruise ship arrival" },
  { name: "Banana & Agriculture", desc: "Trelawny banana exporters (Fyffes/Chiquita supply chain), sugar operations, and farming enterprises with seasonal piece-rate workers" },
  { name: "Fishing & Marine", desc: "Commercial fishing operations, fish vendors, boat charters, and marine service businesses across the Trelawny coastline" },
  { name: "Retail & Commercial", desc: "Falmouth town businesses, Duncans shops, and Trelawny plaza and commercial strip operators" },
  { name: "Construction & Trades", desc: "Trelawny contractors, builders, and tradespeople supporting the parish's tourism infrastructure growth" },
  { name: "Education & Healthcare", desc: "Private schools, clinics, pharmacies, and health centres serving Falmouth, Clark's Town, and communities across Trelawny" },
];

const falmouthFaqs = [
  {
    q: "Does Payroll Jamaica work for Trelawny businesses?",
    a: "Yes. Payroll Jamaica serves businesses registered across all 14 Jamaican parishes, including Trelawny. Falmouth, Duncans, Clark's Town, Bunkers Hill, Wakefield, Stewart Town — all covered under one account.",
  },
  {
    q: "How do I handle gratuity for cruise ship excursion workers?",
    a: "Payroll Jamaica calculates service charge distribution and gratuity allocation automatically. Gratuity income is handled with the correct PAYE and NIS treatment under Jamaica tax law — no manual calculations for your Falmouth tour operation or restaurant team.",
  },
  {
    q: "Can I manage seasonal banana workers in payroll?",
    a: "Yes. Payroll Jamaica fully supports piece-rate pay and seasonal employment. Enter the piece rate and quantity worked, and the system calculates gross pay and applies the correct NIS, NHT, PAYE, and Education Tax deductions — critical for Trelawny's banana export workforce.",
  },
  {
    q: "How do I file PAYE without visiting the Falmouth Tax Office?",
    a: "Payroll Jamaica generates e-file-ready PAYE submissions compatible with TAJ Online. File directly through TAJ from any device — no in-person visits to the Falmouth or Montego Bay Tax Office required.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most businesses are live within one business day. Import your employee list, set pay rates, and run your first payroll. All Jamaica tax tables, NIS rates, and NHT rates are built in — no manual setup required.",
  },
];

export default function PayrollFalmouthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Trelawny businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Falmouth,<br />Trelawny businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by businesses across Falmouth, Duncans, Clark's Town, and the North Coast tourism corridor. Automate PAYE, NIS, NHT, and Education Tax. Handle cruise tourism surges, banana piece-rate workers, and seasonal staff with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Falmouth businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Trelawny payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Falmouth payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {falmouthPainPoints.map((item) => (
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
              Everything Trelawny businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From a one-person tour guide operation in Falmouth to a 150-staff hotel on the North Coast — Payroll Jamaica scales with your Trelawny business.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {falmouthFeatures.map((f) => (
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
              Serving every Trelawny industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From Falmouth's cruise pier to Trelawny's banana farms and North Coast hotels — we serve the industries that make Trelawny one of Jamaica's most dynamic parishes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {falmouthIndustries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by Trelawny businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Falmouth's busy waterfront to Trelawny's banana farms and the North Coast tourism corridor — Payroll Jamaica keeps Trelawny businesses compliant, accurate, and on time every pay cycle.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "500K+", label: "Cruise visitors to Falmouth annually — tourism payroll is our speciality" },
                { stat: "100%", label: "Jamaica tax compliance built-in — PAYE, NIS, NHT, Education Tax" },
                { stat: "1 day", label: "Average setup time for Trelawny SMEs and tourism operators" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* North Coast callout */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-background p-8 md:p-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Falmouth Cruise Ship Pier — Jamaica's busiest tourism gateway
              </h2>
              <p className="text-muted-foreground">
                The Falmouth Cruise Ship Pier is one of the largest in the Caribbean, purpose-built to accommodate the world's biggest cruise ships. More than half a million passengers pass through Falmouth each year, creating a uniquely intense payroll environment for Trelawny businesses — with sudden staff surges on ship days, complex gratuity pools, and tip income that must be correctly treated under Jamaica's PAYE rules.
              </p>
              <p className="text-muted-foreground">
                Payroll Jamaica handles all of it: service charge distribution across your team, gratuity calculation, NIS and PAYE on tip income, and the quick payroll turnarounds that tourism businesses in Falmouth demand. Whether you run a tour bus company, a craft market, a waterfront restaurant, or a full-service hotel, Payroll Jamaica is built for the pace of Falmouth's cruise tourism economy.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-lg bg-muted/60 p-4">
                  <p className="font-semibold text-sm mb-1">Seasonal surge management</p>
                  <p className="text-sm text-muted-foreground">Scale your payroll up and down as cruise schedules change. Add seasonal staff in minutes, run payroll on ship-day schedules, and close out seasonal employment correctly.</p>
                </div>
                <div className="rounded-lg bg-muted/60 p-4">
                  <p className="font-semibold text-sm mb-1">Service charge & gratuity tools</p>
                  <p className="text-sm text-muted-foreground">Distribute service charges across your team, apply the correct PAYE treatment to gratuity income, and keep your restaurant or hotel payroll fully compliant with Jamaica law.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banana industry callout */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-background p-8 md:p-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Trelawny banana industry payroll — piece-rate made simple
              </h2>
              <p className="text-muted-foreground">
                Trelawny is one of Jamaica's key banana-producing parishes, with export operations supplying Fyffes and Chiquita from the North Coast. Banana farming payroll is uniquely complex — workers are often paid by piece-rate (per bunch or per box), employment is seasonal, and the workforce fluctuates with harvest cycles.
              </p>
              <p className="text-muted-foreground">
                Payroll Jamaica supports piece-rate pay natively. Enter the rate per unit and the quantity each worker produced, and the system calculates gross pay and applies the correct NIS, NHT, PAYE, and Education Tax deductions automatically. Seasonal employment starts and ends are handled cleanly, with correct final pay and Record of Employment generation when the season closes.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-lg bg-muted/60 p-4">
                  <p className="font-semibold text-sm mb-1">Piece-rate calculations</p>
                  <p className="text-sm text-muted-foreground">Rate per unit × quantity = correct gross pay, every time, with full statutory deductions applied.</p>
                </div>
                <div className="rounded-lg bg-muted/60 p-4">
                  <p className="font-semibold text-sm mb-1">Seasonal worker onboarding</p>
                  <p className="text-sm text-muted-foreground">Add dozens of seasonal workers quickly at harvest time and close out their employment correctly at season end.</p>
                </div>
                <div className="rounded-lg bg-muted/60 p-4">
                  <p className="font-semibold text-sm mb-1">NIS & NHT for farm workers</p>
                  <p className="text-sm text-muted-foreground">Agricultural workers are entitled to NIS and NHT. Payroll Jamaica ensures correct contributions for every worker type.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Falmouth & Trelawny payroll FAQ
            </h2>
            <div className="space-y-6">
              {falmouthFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related city pages */}
        <RelatedCityPages currentHref="/payroll-falmouth-jamaica" />

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
              Start your Falmouth payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Trelawny businesses already saving hours every payroll cycle. Set up in less than a day — no trips to Kingston, no spreadsheets, no PAYE calculation headaches.
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
                  "@id": `${siteConfig.url}/payroll-falmouth-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-falmouth-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Falmouth", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Trelawny", addressCountry: "JM" },
                    { "@type": "City", name: "Duncans", addressCountry: "JM" },
                    { "@type": "City", name: "Clark's Town", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Payroll Jamaica",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description: "Cloud-based payroll software for Jamaican businesses — automates PAYE, NIS, NHT, and Education Tax for businesses in Falmouth, Trelawny, and across all 14 parishes.",
                  url: siteConfig.url,
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "JMD",
                    availability: "https://schema.org/InStock",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: falmouthFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Falmouth Jamaica", item: `${siteConfig.url}/payroll-falmouth-jamaica` },
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
