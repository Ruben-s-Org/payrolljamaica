import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";

const baseDescription =
  "Payroll services in Ocho Rios, Jamaica — Payroll Jamaica is the #1 payroll software for St. Ann tourism businesses. Automate PAYE, NIS, NHT, and Education Tax for your Ocho Rios hotel, attraction, or restaurant. Handle gratuity sharing, seasonal staff, and tip income correctly — built for Jamaica's tourism capital.";

export const metadata: Metadata = {
  title: "Payroll Services Ocho Rios Jamaica — Hotel & Tourism Payroll for St. Ann | Payroll Jamaica",
  description: ensureMinDescription(
    "Ocho Rios payroll software for hotels, attractions, and restaurants. Automate PAYE, NIS, NHT, gratuity, and seasonal worker payroll for St. Ann tourism businesses. Jamaica-compliant from day one.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Ocho Rios Jamaica",
    "payroll services Ocho Rios",
    "hotel payroll Ocho Rios Jamaica",
    "payroll software St Ann Jamaica",
    "Ocho Rios Jamaica payroll",
    "St Ann payroll services",
    "tourism payroll Jamaica Ocho Rios",
    "payroll service provider Ocho Rios",
    "PAYE Ocho Rios Jamaica",
    "hotel gratuity payroll Jamaica",
    "seasonal worker payroll Jamaica",
    "attraction staff payroll Jamaica",
    "payroll outsourcing Ocho Rios",
    "online payroll St Ann Jamaica",
    "restaurant payroll Ocho Rios",
  ]),
  alternates: {
    canonical: canonical("/payroll-ocho-rios-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-ocho-rios-jamaica"),
      en: canonical("/payroll-ocho-rios-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Ocho Rios Jamaica — Hotel & Tourism Payroll for St. Ann | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-ocho-rios-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Ocho Rios Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Ocho Rios Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const painPoints = [
  {
    problem: "Gratuity and tip sharing done wrong",
    solution:
      "Ocho Rios hotels and restaurants collect gratuity through service charges. Payroll Jamaica correctly splits, taxes, and reports gratuity distributions — compliant with Jamaica's Income Tax Act rules on gratuity income.",
  },
  {
    problem: "Seasonal hiring creates payroll chaos",
    solution:
      "Tourism peaks December–April. Adding 20 seasonal workers in November and releasing them in May is painful on spreadsheets. Payroll Jamaica onboards and offboards staff in minutes with accurate final pay calculations.",
  },
  {
    problem: "Multi-department, multi-rate payrolls",
    solution:
      "Your resort has housekeeping, F&B, front desk, maintenance, and management — all on different pay rates and schedules. Payroll Jamaica handles every department in one payroll run with correct tax treatment.",
  },
  {
    problem: "NHT contributions for hospitality staff",
    solution:
      "Hotel staff rely on NHT for home ownership — accurate NHT contributions matter to your team. Payroll Jamaica tracks every dollar and generates correct NHT schedules with zero manual calculation.",
  },
];

const features = [
  {
    title: "Gratuity and service charge handling",
    desc: "Ocho Rios tourism operations live and die by gratuity. Payroll Jamaica handles mandatory 10% service charges, optional gratuity pooling, and tip income — taxed correctly per Jamaica's Income Tax Act.",
  },
  {
    title: "Seasonal workforce management",
    desc: "Activate or deactivate seasonal employees each year with a click. Payroll Jamaica remembers their details, calculates correct final pay on departure, and re-onboards them in seconds next season.",
  },
  {
    title: "Full Jamaica statutory compliance",
    desc: "PAYE, NIS, NHT, and Education Tax at 2025/2026 rates — automatically applied. Every TAJ budget update is built in so Ocho Rios employers always file the right amounts.",
  },
  {
    title: "Compliant statutory reports",
    desc: "Monthly TD4, NIS Schedule 7, NHT, and Education Tax reports generated with one click. Ready for TAJ, NIS, and NHT submission exactly as required.",
  },
  {
    title: "Cloud-based — works anywhere in St. Ann",
    desc: "Manage payroll from Ocho Rios, Brown's Town, St. Ann's Bay, Runaway Bay, or Priory. No installation, no local server — just a browser and an internet connection.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate payroll bank files compatible with NCB, Scotiabank, CIBC FirstCaribbean, and Sagicor Bank. Pay your entire resort or attraction staff with a single bulk bank transfer.",
  },
];

const industries = [
  { name: "All-Inclusive Resorts", desc: "Large resort complexes in the Ocho Rios tourism strip — Dunn's River corridor to Turtle Beach" },
  { name: "Tourist Attractions", desc: "Dunn's River Falls, Dolphin Cove, Mystic Mountain, ATV tours, and other Ocho Rios experiences" },
  { name: "Restaurants & F&B", desc: "Restaurants, bars, beach clubs, and food service operations serving Ocho Rios tourists and locals" },
  { name: "Guest Houses & Villas", desc: "Smaller boutique hotels, guest houses, and villa rentals across St. Ann parish" },
  { name: "Tour Operators", desc: "Ground transportation, excursion operators, and cruise ship port service providers" },
  { name: "Retail & Craft", desc: "Craft market vendors, duty-free shops, beach vendors, and retail businesses on Main Street" },
];

const faqs = [
  {
    q: "Do you serve businesses registered in St. Ann parish?",
    a: "Yes. Payroll Jamaica serves all businesses registered with the Companies Office of Jamaica, including those in Ocho Rios, St. Ann's Bay, Runaway Bay, Brown's Town, Priory, and all communities across St. Ann parish.",
  },
  {
    q: "How does Payroll Jamaica handle hotel gratuity and service charges?",
    a: "Payroll Jamaica treats mandatory service charges (typically 10%) as taxable income distributed to employees, per Jamaica's Income Tax Act. Gratuity pooling distributions are calculated and taxed correctly per the JA tax code. You enter the amounts, we handle the tax treatment.",
  },
  {
    q: "Can I manage seasonal workers who join in December and leave in April?",
    a: "Yes. Seasonal employees can be added to your payroll in minutes and deactivated at season end. Payroll Jamaica calculates accurate final pay including any accrued leave and correct NIS/NHT final contributions. Next season, reactivate with one click.",
  },
  {
    q: "My resort has 80 staff across 6 departments — can Payroll Jamaica handle that?",
    a: "Absolutely. Payroll Jamaica is built for multi-department operations. Organize staff by department, assign department-specific pay rates and rules, and run the full resort payroll in one automated run.",
  },
  {
    q: "Can I file PAYE without visiting the St. Ann Tax Office?",
    a: "Yes. Payroll Jamaica generates e-file-ready PAYE submissions for TAJ Online. No in-person visits required. NIS and NHT contributions are also calculated and reported digitally.",
  },
];

export default function PayrollOchoRiosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica&apos;s tourism capital
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Ocho Rios<br />hotels & businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica&apos;s tourism industry — handle gratuity, seasonal staff, PAYE, NIS, NHT, and Education Tax for your Ocho Rios business. Get compliant in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Ocho Rios businesses welcome
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
              Ocho Rios payroll problems — solved
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
              Everything Ocho Rios tourism businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From small guest houses on Main Street to large all-inclusive resorts — Payroll Jamaica handles every payroll need in St. Ann.
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
              Serving every Ocho Rios tourism sector
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Ocho Rios is Jamaica&apos;s #1 cruise port and a major tourist destination — we serve every business in the tourism ecosystem.
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
            <h2 className="text-3xl font-semibold">Trusted by St. Ann tourism businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Dunn&apos;s River corridor resorts to boutique guest houses in the hills — Ocho Rios businesses trust Payroll Jamaica to keep their payroll compliant every season.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for St. Ann businesses" },
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
              Ocho Rios payroll FAQ
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
              Start your Ocho Rios payroll today
            </h2>
            <p className="text-muted-foreground">
              Join St. Ann tourism businesses already saving hours every payroll cycle. Set up in a day — long before your next guest checks in.
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

        {/* Local SEO schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-ocho-rios-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-ocho-rios-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Ocho Rios", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Saint Ann", addressCountry: "JM" },
                    { "@type": "City", name: "Runaway Bay", addressCountry: "JM" },
                    { "@type": "City", name: "St. Ann's Bay", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Ocho Rios Tourism Payroll Services",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Payroll Processing" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gratuity & Service Charge Payroll" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Worker Payroll" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PAYE NIS NHT Statutory Reporting" } },
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
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica Hotels", item: `${siteConfig.url}/payroll-jamaica-hotels` },
                    { "@type": "ListItem", position: 3, name: "Payroll Ocho Rios Jamaica", item: `${siteConfig.url}/payroll-ocho-rios-jamaica` },
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
