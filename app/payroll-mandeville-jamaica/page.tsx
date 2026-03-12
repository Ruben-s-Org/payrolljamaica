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
  "Payroll Jamaica serves Mandeville and Manchester Parish businesses with full PAYE, NIS, NHT, and Education Tax automation. Mandeville is Jamaica's third-largest commercial center — home to bauxite/alumina industries, retail, healthcare, and tourism. Payroll Jamaica is built for the Manchester parish business community.";

export const metadata: Metadata = {
  title: "Payroll Mandeville Jamaica — Manchester Parish",
  description: ensureMinDescription(
    "Payroll software for Mandeville and Manchester Parish businesses. Automate PAYE, NIS, NHT, Education Tax. Serving Mandeville's bauxite, retail, healthcare, and tourism employers.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Mandeville Jamaica",
    "payroll services Mandeville Jamaica",
    "payroll company Mandeville",
    "payroll software Mandeville Jamaica",
    "Manchester Parish payroll Jamaica",
    "Mandeville Jamaica payroll",
    "payroll outsourcing Mandeville Jamaica",
    "PAYE Mandeville Jamaica",
    "NIS NHT Mandeville",
    "small business payroll Mandeville",
    "payroll Manchester Jamaica",
    "bauxite payroll Jamaica",
    "payroll processing Mandeville Jamaica",
    "online payroll Mandeville Jamaica",
    "payroll management Mandeville",
  ]),
  alternates: {
    canonical: canonical("/payroll-mandeville-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-mandeville-jamaica"),
      en: canonical("/payroll-mandeville-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Mandeville Jamaica — Manchester Parish",
    description: baseDescription,
    url: canonical("/payroll-mandeville-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Mandeville Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Mandeville Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const mandevillePainPoints = [
  {
    problem: "Mandeville has no full TAJ office — payroll trips are costly",
    solution:
      "Mandeville business owners face long drives to Christiana or Kingston for TAJ services. Payroll Jamaica files everything online — PAYE, TD4, SO1 — without leaving your office in Mandeville.",
  },
  {
    problem: "Bauxite and mining sector payroll complexity",
    solution:
      "Manchester's bauxite/alumina sector has shift workers, site allowances, and overtime-heavy payroll. Payroll Jamaica handles all pay types — guaranteed hours, site allowances, and night differential.",
  },
  {
    problem: "Retail and hospitality staff with variable hours",
    solution:
      "Mandeville's growing retail corridor and hospitality sector means variable hours and changing staff. Payroll Jamaica calculates accurate pay for hourly, salaried, and part-time workers every cycle.",
  },
  {
    problem: "No payroll expertise locally in Manchester Parish",
    solution:
      "Finding a payroll accountant in Mandeville can be expensive or unreliable. Payroll Jamaica gives every Manchester business the same sophisticated payroll engine — without the accountant cost.",
  },
];

const mandevilleFeatures = [
  {
    title: "Full Jamaica statutory compliance",
    desc: "PAYE, NIS, NHT, and Education Tax at 2025/2026 rates. Payroll Jamaica updates automatically with every Jamaica budget — Mandeville businesses are always compliant.",
  },
  {
    title: "Online payslips for Manchester Parish staff",
    desc: "Email payslips to every employee on payday. Staff across Mandeville, Christiana, Porus, and May Pen can view payslips from any phone or computer.",
  },
  {
    title: "Allowances for site and field workers",
    desc: "Manchester's industrial and agricultural employers pay site allowances, travel, and housing supplements. Payroll Jamaica handles all allowances — taxable and non-taxable — correctly.",
  },
  {
    title: "Cloud-based — works from anywhere",
    desc: "Run payroll from your Main Street office or remotely. No software to install, no server, no IT person. Payroll Jamaica works from any device with internet.",
  },
  {
    title: "Annual returns in one click",
    desc: "SO1, TD4, and NHT annual returns are generated automatically. Mandeville employers hit every March 31 deadline without manual spreadsheets.",
  },
  {
    title: "Bank transfers for Manchester businesses",
    desc: "Generate bank payment files for NCB, Scotiabank, CIBC, and JN Bank. Pay your entire Mandeville payroll with a single bank transfer.",
  },
];

const mandevilleIndustries = [
  { name: "Bauxite & Mining", desc: "JAMALCO, Windalco, and supporting contractor companies across Manchester" },
  { name: "Retail & Trade", desc: "Main Street Mandeville shops, supermarkets, hardware suppliers, and service businesses" },
  { name: "Healthcare", desc: "Manchester Infirmary, private clinics, pharmacies, and dental practices" },
  { name: "Agriculture", desc: "Farming operations, agro-processing, and food distribution in Manchester Parish" },
  { name: "Education", desc: "Private schools, early childhood institutions, and tutoring centres in Mandeville" },
  { name: "Construction", desc: "Mandeville's residential and commercial development projects and contractors" },
];

const mandevilleFaqs = [
  {
    q: "Do you serve businesses registered in Manchester Parish?",
    a: "Yes. Payroll Jamaica works for all businesses registered with the Companies Office of Jamaica, including those in Manchester Parish — Mandeville, Christiana, Porus, and surrounding areas.",
  },
  {
    q: "Can I file PAYE from Mandeville without visiting a TAJ office?",
    a: "Absolutely. Payroll Jamaica generates e-file-ready PAYE submissions that you submit through TAJ Online. No physical visit to any TAJ office required — important for Mandeville businesses away from major TAJ branches.",
  },
  {
    q: "We have workers across Manchester Parish — can one payroll handle them all?",
    a: "Yes. Payroll Jamaica handles employees across all locations in one account. Run payroll for Mandeville head office staff and field workers in Christiana or May Pen together.",
  },
  {
    q: "Does Payroll Jamaica handle allowances for industrial workers?",
    a: "Yes. Payroll Jamaica supports site allowances, travel allowances, housing grants, and other supplementary pay. We apply the correct tax treatment — taxable and non-taxable — based on Jamaica tax rules.",
  },
  {
    q: "How quickly can a Mandeville business get started?",
    a: "Most Mandeville businesses are running their first payroll within one business day of signing up. Import your employee list, set pay rates, and Payroll Jamaica handles the rest.",
  },
];

export default function PayrollMandevilleJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Serving Mandeville & Manchester Parish businesses
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Mandeville,<br />Jamaica businesses
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              The payroll software built for Jamaica — trusted by businesses across Mandeville, Christiana, Porus, and Manchester Parish. Automate PAYE, NIS, NHT, and Education Tax. Comply without the paperwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free — Mandeville businesses welcome
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate your Mandeville payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Mandeville payroll problems — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mandevillePainPoints.map((item) => (
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
              Everything Mandeville businesses need
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From a one-person shop on Main Street to a 150-staff operation near the bauxite facilities — Payroll Jamaica scales with Manchester Parish businesses.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mandevilleFeatures.map((f) => (
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
              Serving every Mandeville industry
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Manchester Parish has a diverse economy. Payroll Jamaica serves every sector.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mandevilleIndustries.map((ind) => (
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
                { stat: "1 day", label: "Average setup time for Mandeville SMEs" },
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
              Mandeville payroll FAQ
            </h2>
            <div className="space-y-6">
              {mandevilleFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related city pages */}
        <RelatedCityPages currentHref="/payroll-mandeville-jamaica" />

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
              Start your Mandeville payroll today
            </h2>
            <p className="text-muted-foreground">
              Join Jamaica businesses already running compliant, automated payroll. Set up in one day — no accountant needed.
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}/payroll-mandeville-jamaica#business`,
                  name: "Payroll Jamaica",
                  description: baseDescription,
                  url: `${siteConfig.url}/payroll-mandeville-jamaica`,
                  areaServed: [
                    { "@type": "City", name: "Mandeville", addressCountry: "JM" },
                    { "@type": "AdministrativeArea", name: "Manchester", addressCountry: "JM" },
                    { "@type": "Country", name: "Jamaica" },
                  ],
                  serviceType: "Payroll Software",
                },
                {
                  "@type": "FAQPage",
                  mainEntity: mandevilleFaqs.map((faq) => ({
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
                    { "@type": "ListItem", position: 3, name: "Payroll Mandeville Jamaica", item: `${siteConfig.url}/payroll-mandeville-jamaica` },
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
