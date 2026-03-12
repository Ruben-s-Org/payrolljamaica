import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription = "Payroll Jamaica offers comprehensive payroll services for Jamaican businesses of all sizes. Whether you are a sole trader, small business, or growing enterprise, our managed payroll service handles PAYE, NIS, NHT, Education Tax, payslip generation, and statutory filing — so you can focus on running your business.";

export const metadata: Metadata = {
  title: "Payroll Services Jamaica — Managed Payroll for Jamaican Businesses | Payroll Jamaica",
  description: ensureMinDescription(
    "Professional payroll services for Jamaica. Payroll Jamaica manages PAYE, NIS, NHT, Education Tax, and statutory compliance for businesses of all sizes. Accurate payslips, remittance reports, and bank-ready payment files — handled for you.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll services Jamaica",
    "payroll company Jamaica",
    "payroll outsourcing Jamaica",
    "managed payroll Jamaica",
    "payroll provider Jamaica",
    "payroll processing Jamaica",
    "Jamaica payroll management",
    "outsource payroll Jamaica",
    "payroll bureau Jamaica",
    "PAYE services Jamaica",
    "statutory compliance services Jamaica",
    "small business payroll Jamaica",
    "payroll software Jamaica",
    "HR services Jamaica",
    "payroll administration Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-services"),
    languages: { "en-JM": canonical("/payroll-services"), en: canonical("/payroll-services") },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    title: "Payroll Services Jamaica — Managed Payroll | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-services"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Jamaica — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function PayrollServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll services built for Jamaica
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Stop calculating PAYE, NIS, NHT, and Education Tax manually. Payroll Jamaica handles your statutory deductions, payslips, and compliance filings — accurately, every pay cycle.
            </p>
            <a href="#" data-open-fillout="true" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">What&apos;s included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Statutory deductions",
                  desc: "Automated PAYE, NIS, NHT, and Education Tax calculations using current Ministry of Finance rates and thresholds.",
                },
                {
                  title: "Payslip generation",
                  desc: "Professional digital payslips for every employee, every pay cycle. Employees access them via self-service portal.",
                },
                {
                  title: "Remittance reports",
                  desc: "SO1, P24, and statutory remittance schedules generated automatically and ready for TAJ submission.",
                },
                {
                  title: "Bank payment files",
                  desc: "Export payment files compatible with NCB, JN, Scotiabank, Sagicor Bank, and FirstCaribbean for batch payroll payments.",
                },
                {
                  title: "Leave management",
                  desc: "Track vacation, sick, and statutory leave balances. Enforce company leave policies automatically.",
                },
                {
                  title: "Compliance monitoring",
                  desc: "Deadline reminders for NIS, NHT, PAYE, and Education Tax filings. Never miss a statutory deadline.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-xl space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">Why Jamaican businesses choose Payroll Jamaica</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Built for Jamaica, not adapted",
                  desc: "Generic payroll software requires you to manually configure Jamaican tax rules. Payroll Jamaica is built from the ground up for Jamaica's specific PAYE, NIS, NHT, and Education Tax rules.",
                },
                {
                  title: "Rates updated automatically",
                  desc: "When the Ministry of Finance announces rate changes, we update the system. Your next payroll run uses the correct rates without any manual intervention.",
                },
                {
                  title: "Audit-ready documentation",
                  desc: "Every payroll run is fully logged. Export historical records and statutory filings in formats accepted by TAJ for compliance reviews and audits.",
                },
                {
                  title: "Local support",
                  desc: "Our support team understands Jamaica's payroll environment. When you have a question about PAYE calculations or NIS filings, you get a relevant answer.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is a payroll service in Jamaica?</h2>
              <p>
                A payroll service in Jamaica manages the calculation and processing of employee wages, including all statutory deductions required by law — PAYE (Pay As You Earn income tax), NIS (National Insurance Scheme), NHT (National Housing Trust), and Education Tax. A payroll service ensures accurate deductions are remitted to Tax Administration Jamaica (TAJ) on time, reducing the risk of penalties.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is the difference between payroll software and a payroll service?</h2>
              <p>
                Payroll software like Payroll Jamaica gives your team a self-service platform to run payroll internally, with automated calculations. A fully outsourced payroll service means an external company processes payroll on your behalf. Payroll Jamaica offers software-driven efficiency at a fraction of the cost of outsourcing — you run payroll yourself in minutes, with automated compliance built in.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Which businesses in Jamaica need a payroll service?</h2>
              <p>
                Any employer in Jamaica with one or more employees is required to register with TAJ, NIS, and NHT and remit statutory deductions. This applies to hotels, restaurants, retailers, construction companies, professional services firms, healthcare providers, and all other employers. Payroll Jamaica serves businesses from sole traders with one employee to enterprises with hundreds of staff.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA
        headline="Ready to automate your Jamaica payroll?"
        text="Get started with Payroll Jamaica and stop calculating statutory deductions manually."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Payroll Services Jamaica",
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            serviceType: "Payroll Processing",
            areaServed: { "@type": "Country", name: "Jamaica" },
            description: "Managed payroll and HR software for Jamaican businesses. Automates PAYE, NIS, NHT, Education Tax, payslips, and statutory filing.",
            url: `${siteConfig.url}/payroll-services`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Payroll Services", item: `${siteConfig.url}/payroll-services` },
            ],
          }),
        }}
      />
    </div>
  );
}
