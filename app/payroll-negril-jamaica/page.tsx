import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Link from "next/link";

const baseDescription =
  "Payroll services in Negril, Jamaica — Payroll Jamaica is the #1 payroll software for Negril's tourism and hospitality industry. Automate PAYE, NIS, NHT, and Education Tax for your Negril hotel, resort, or business. From Seven Mile Beach to West End, we handle payroll for Westmoreland and Hanover's tourism economy.";

export const metadata: Metadata = {
  title: "Payroll Services Negril Jamaica — Payroll Software for Hotels & Tourism | Payroll Jamaica",
  description: ensureMinDescription(
    "Negril's top payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Negril hotel, resort, restaurant, or tourism business. Trusted by Westmoreland and Hanover businesses along Seven Mile Beach.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Negril Jamaica",
    "payroll services Negril",
    "payroll Westmoreland Jamaica",
    "payroll Hanover Jamaica",
    "hotel payroll Negril",
    "resort payroll Jamaica",
    "tourism payroll Negril",
    "PAYE Negril Jamaica",
    "NIS NHT Westmoreland",
    "payroll Seven Mile Beach",
    "payroll outsourcing Negril",
    "hospitality payroll Jamaica",
    "payroll software Negril",
    "gratuity payroll Jamaica",
    "seasonal worker payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-negril-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-negril-jamaica"),
      en: canonical("/payroll-negril-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Negril Jamaica — #1 Hotel & Tourism Payroll | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-negril-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Negril Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Negril Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
  },
};

const negrilPainPoints = [
  {
    problem: "Gratuity distribution and tax treatment",
    solution:
      "Negril's all-inclusive resorts and restaurants collect gratuities that must be properly allocated and taxed. Payroll Jamaica automates gratuity distribution and applies the correct PAYE treatment — every pay period.",
  },
  {
    problem: "High-season hiring and low-season layoffs",
    solution:
      "Negril's tourism industry has strong seasonal peaks. Payroll Jamaica handles rapid onboarding during high season and processes final pay, NIS contributions, and NHT final returns when the season ends.",
  },
  {
    problem: "Managing multiple resort departments",
    solution:
      "Beach staff, housekeeping, F&B, entertainment, front desk — each with different pay rates and hours. Manage every Negril hotel department in one payroll with department-level reporting.",
  },
  {
    problem: "NIS and NHT for tourism shift workers",
    solution:
      "Variable shift schedules and split shifts are common in Negril. Payroll Jamaica calculates accurate NIS and NHT on variable earnings — no manual calculations, no errors.",
  },
];

const negrilFeatures = [
  {
    title: "Hotel & resort payroll built for Jamaica",
    desc: "Full gratuity tracking, tip pooling, service charge distribution, and correct PAYE/NIS/NHT treatment for Negril's all-inclusive and boutique hotel workforce.",
  },
  {
    title: "Seasonal workforce management",
    desc: "Quickly onboard high-season staff, process mid-year terminations, and generate accurate final pay with all statutory deductions calculated — NIS final, NHT final, and accumulated leave.",
  },
  {
    title: "Multi-department reporting",
    desc: "Break payroll costs by department — Food & Beverage, Housekeeping, Entertainment, Front Desk. Export cost reports for hotel management and ownership reporting.",
  },
  {
    title: "100% cloud — run from Seven Mile Beach",
    desc: "Manage payroll from any device on the beach or in the office. Cloud-based with no installation — perfect for Negril's fast-moving hospitality environment.",
  },
  {
    title: "Statutory compliance reports",
    desc: "Generate TD4, NIS Schedule 7, NHT, and Education Tax reports monthly — ready for TAJ, NIS, and NHT submission. Never miss a deadline.",
  },
  {
    title: "Bank-ready payment files",
    desc: "Generate bulk payment files for NCB, Scotiabank, and other Jamaican banks. Pay all Negril staff in one transfer on payday.",
  },
];

const negrilIndustries = [
  { name: "Resorts & Hotels", desc: "All-inclusive resorts, boutique hotels, and guesthouses along Seven Mile Beach and West End" },
  { name: "Restaurants & Bars", desc: "Cliffside restaurants, beach bars, and entertainment venues across Negril" },
  { name: "Water Sports & Tours", desc: "Snorkelling operators, boat tours, Jet Ski rentals, and Negril's adventure tourism sector" },
  { name: "Retail & Shopping", desc: "Craft markets, souvenir shops, and tourist-facing retail businesses in Negril" },
  { name: "Transportation", desc: "Taxi operators, shuttle services, and ground transportation for Negril's tourism corridor" },
  { name: "Spas & Wellness", desc: "Resort spas, massage therapists, and wellness centres serving Negril's tourism market" },
];

const negrilFaqs = [
  {
    q: "How does Payroll Jamaica handle gratuity for Negril hotel workers?",
    a: "Payroll Jamaica supports service charge and gratuity allocation. You can distribute gratuity pools across eligible staff, and the system applies the correct PAYE treatment — mandatory service charges are subject to PAYE, while voluntary tips have different treatment. Our Jamaica tax compliance ensures every allocation is correct.",
  },
  {
    q: "Can I run seasonal payroll for Negril's high-season staff?",
    a: "Yes. Payroll Jamaica handles temporary and seasonal employees with correct short-term employment tax treatment. When the season ends, generate accurate final pay including NIS contributions and NHT final return in one click.",
  },
  {
    q: "Do you cover businesses in both Westmoreland and Hanover parishes?",
    a: "Yes. Payroll Jamaica covers all 14 Jamaican parishes. Whether your Negril business falls in Westmoreland or Hanover, you're fully covered under one account.",
  },
  {
    q: "How do I submit PAYE for my Negril business?",
    a: "Payroll Jamaica generates e-file-ready PAYE submissions each month. You file directly through TAJ Online — no in-person visits to the Westmoreland or Hanover Tax Office required.",
  },
  {
    q: "Can multiple managers run payroll for different departments?",
    a: "Yes. Payroll Jamaica supports multiple user accounts with role-based access. Your HR manager, finance team, and department heads can each have appropriate access — viewing their department or managing full payroll.",
  },
];

export default function PayrollNegrilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Negril's tourism economy
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Negril,<br />Jamaica businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica's tourism capital. Trusted by hotels, resorts, restaurants, and tour operators along Seven Mile Beach. Automate PAYE, NIS, NHT, gratuity, and Education Tax.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Negril businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Negril payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Negril payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {negrilPainPoints.map((item) => (
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
              Everything Negril businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From boutique guesthouses to large all-inclusive resorts — Payroll Jamaica handles tourism payroll at any scale.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {negrilFeatures.map((f) => (
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
              Serving every Negril business sector
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              From Seven Mile Beach to West End cliffs — we serve every business in Jamaica's most iconic tourism destination.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {negrilIndustries.map((ind) => (
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
            <h2 className="text-3xl font-semibold">Trusted by Negril's tourism businesses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the cliffs of West End to Seven Mile Beach — Payroll Jamaica keeps Negril businesses compliant, on time, and focused on what matters: their guests.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Average setup time for Negril businesses" },
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
              Negril payroll FAQ
            </h2>
            <div className="space-y-6">
              {negrilFaqs.map((faq) => (
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
              Start your Negril payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Negril's tourism businesses saving hours every payroll cycle. Set up in less than a day — get back to running your resort.
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

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-negril-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-negril-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Negril", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Westmoreland", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Hanover", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: negrilFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Negril Jamaica", item: `${siteConfig.url}/payroll-negril-jamaica` },
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
