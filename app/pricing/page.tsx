import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import Pricing from "@/components/sections/pricing/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "PayrollJamaica pricing starts at JMD $3,500/month for up to 10 employees. Simple, transparent pricing with no hidden fees. Automate PAYE, NIS, NHT, and Education Tax for your Jamaican business.";

export const metadata: Metadata = {
  title: "Pricing — Payroll Software Jamaica Pricing | Payroll Jamaica",
  description: ensureMinDescription(
    "PayrollJamaica pricing: Starter JMD $3,500/month (up to 10 employees), Business JMD $7,500/month (up to 50 employees), Enterprise custom. Affordable.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll software pricing Jamaica",
    "payroll cost Jamaica",
    "payroll Jamaica price",
    "cheap payroll software Jamaica",
    "affordable payroll Jamaica",
    "payroll service cost Jamaica",
    "payroll subscription Jamaica",
    "small business payroll pricing Jamaica",
    "payroll company rates Jamaica",
    "HR software pricing Jamaica",
    "payroll plans Jamaica",
    "Jamaica payroll monthly cost",
    "payroll software Jamaica",
    "PAYE software price Jamaica",
    "NIS NHT payroll cost Jamaica",
  ]),
  alternates: {
    canonical: canonical("/pricing"),
    languages: { "en-JM": canonical("/pricing"), en: canonical("/pricing") },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Pricing — Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/pricing"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "PayrollJamaica Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Simple pricing for Jamaica payroll
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              No hidden fees, no per-employee surprises. Choose the plan that fits your team and start automating PAYE, NIS, NHT, and Education Tax today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> No setup fees</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> Cancel anytime</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> JMD pricing</span>
              <span className="flex items-center gap-1.5"><span className="text-green-500">&#10003;</span> Free onboarding</span>
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <Pricing title={false} description={false} />

        {/* Comparison table */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-semibold text-center">Compare plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold">Starter</th>
                    <th className="text-center py-3 px-4 font-semibold">Business</th>
                    <th className="text-center py-3 px-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    { feature: "Employees", starter: "Up to 10", business: "Up to 50", enterprise: "Unlimited" },
                    { feature: "PAYE / NIS / NHT / Ed Tax", starter: "&#10003;", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "Digital payslips", starter: "&#10003;", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "Statutory reports (P24, SO1)", starter: "&#10003;", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "Bank payment files", starter: "&#10003;", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "Admin seats", starter: "1", business: "5", enterprise: "Unlimited" },
                    { feature: "Leave management", starter: "—", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "HR document storage", starter: "—", business: "&#10003;", enterprise: "&#10003;" },
                    { feature: "Multi-branch support", starter: "—", business: "—", enterprise: "&#10003;" },
                    { feature: "Custom integrations", starter: "—", business: "—", enterprise: "&#10003;" },
                    { feature: "Dedicated account manager", starter: "—", business: "—", enterprise: "&#10003;" },
                    { feature: "SLA guarantee", starter: "—", business: "—", enterprise: "&#10003;" },
                    { feature: "Support", starter: "Email", business: "Priority", enterprise: "Dedicated" },
                  ].map((row) => (
                    <tr key={row.feature} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center" dangerouslySetInnerHTML={{ __html: row.starter }} />
                      <td className="py-3 px-4 text-center" dangerouslySetInnerHTML={{ __html: row.business }} />
                      <td className="py-3 px-4 text-center" dangerouslySetInnerHTML={{ __html: row.enterprise }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">Pricing FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Is there a free trial?",
                  a: "Yes. Try our free payroll calculator at payrolljamaica.com/calculator to see how PAYE, NIS, NHT, and Education Tax are calculated for your employees. When you are ready for the full platform, sign up for any plan.",
                },
                {
                  q: "Can I change plans later?",
                  a: "Yes. Upgrade or downgrade any time. When you upgrade, the new rate takes effect on your next billing cycle. No penalties for switching.",
                },
                {
                  q: "Are there any setup fees?",
                  a: "No. All plans include free setup and onboarding. We help you import your employee data and get running quickly.",
                },
                {
                  q: "What happens if I exceed my employee limit?",
                  a: "We will notify you and recommend upgrading to the next plan. No surprise charges — we always discuss pricing changes with you first.",
                },
                {
                  q: "Do you charge per employee?",
                  a: "No. Each plan covers a fixed number of employees at a flat monthly rate. No per-employee add-on fees.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept bank transfers, credit/debit cards, and direct debit. Enterprise clients can arrange custom billing terms.",
                },
                {
                  q: "How does PayrollJamaica pricing compare to other payroll software in Jamaica?",
                  a: "PayrollJamaica is purpose-built for Jamaica, so you pay only for what you need. International payroll tools charge US$30-$100/month and still require manual configuration for PAYE, NIS, NHT, and Education Tax. Our Starter plan at JMD $3,500/month includes all Jamaican statutory calculations out of the box — no add-ons or hidden fees.",
                },
                {
                  q: "Can I use PayrollJamaica for a single employee?",
                  a: "Yes. The Starter plan covers up to 10 employees at a flat rate. Whether you have 1 employee or 10, the price is the same JMD $3,500/month.",
                },
                {
                  q: "Is there a contract or minimum commitment?",
                  a: "No. All plans are month-to-month with no long-term contract. You can cancel any time with no penalties or cancellation fees.",
                },
              ].map((item) => (
                <div key={item.q} className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Try free calculator CTA */}
        <section className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 py-12 rounded-2xl bg-muted/50 border border-border">
            <h2 className="text-2xl sm:text-3xl font-semibold">Not ready to commit? Try our free calculator</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              See exactly how PAYE, NIS, NHT, and Education Tax are calculated for your employees — no sign-up required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-brand-foreground shadow-md hover:opacity-90 transition-opacity"
              >
                Try Free Calculator
              </a>
              <a
                href="/paye-calculator-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                PAYE Calculator
              </a>
              <a
                href="/nis-calculator-jamaica"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                NIS Calculator
              </a>
            </div>
          </div>
        </section>

        {/* SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How much does payroll software cost in Jamaica?</h2>
              <p>
                Payroll software pricing in Jamaica varies widely. Generic international tools can cost US$30–$100 per month but require manual configuration for Jamaica&apos;s PAYE, NIS, NHT, and Education Tax rules. PayrollJamaica starts at JMD $3,500/month (approximately US$22) for up to 10 employees — with all Jamaican statutory calculations built in from day one. No manual rate configuration needed.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Is PayrollJamaica cheaper than outsourcing payroll?</h2>
              <p>
                Outsourced payroll services in Jamaica typically charge JMD $1,500–$3,000 per employee per month. For a 10-person team, that is JMD $15,000–$30,000 monthly. PayrollJamaica&apos;s Starter plan covers the same team for JMD $3,500 — a fraction of the cost, with the added benefit of running payroll yourself in minutes rather than waiting for a third party.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is included in every PayrollJamaica plan?</h2>
              <p>
                Every plan includes automated PAYE, NIS, NHT, and Education Tax calculations using current Ministry of Finance rates. You also get digital payslips for every employee, statutory remittance reports (P24, SO1), and bank-ready payment file exports compatible with NCB, JN, Scotiabank, Sagicor Bank, and FirstCaribbean. Higher plans add multi-user access, leave management, HR document storage, and dedicated support.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA
        headline="Start automating Jamaica payroll"
        text="From JMD $3,500/month. No hidden fees, no per-employee charges."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "PayrollJamaica Pricing",
            description: baseDescription,
            url: `${siteConfig.url}/pricing`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Offer",
                    name: "PayrollJamaica Starter Plan",
                    description: "Payroll software for small businesses with up to 10 employees. Includes automated PAYE, NIS, NHT, Education Tax calculations, digital payslips, and monthly statutory reports.",
                    price: "3500",
                    priceCurrency: "JMD",
                    priceValidUntil: "2026-12-31",
                    url: `${siteConfig.url}/pricing`,
                    seller: { "@type": "Organization", name: siteConfig.name },
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "PayrollJamaica Starter",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Offer",
                    name: "PayrollJamaica Business Plan",
                    description: "Payroll software for growing teams with up to 50 employees. Includes everything in Starter plus multi-user access, leave management, HR document storage, and priority support.",
                    price: "7500",
                    priceCurrency: "JMD",
                    priceValidUntil: "2026-12-31",
                    url: `${siteConfig.url}/pricing`,
                    seller: { "@type": "Organization", name: siteConfig.name },
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "PayrollJamaica Business",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Offer",
                    name: "PayrollJamaica Enterprise Plan",
                    description: "Custom payroll software for large organisations with 50+ employees. Includes dedicated account manager, custom integrations, SLA guarantee, and on-site training.",
                    url: `${siteConfig.url}/pricing`,
                    seller: { "@type": "Organization", name: siteConfig.name },
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "PayrollJamaica Enterprise",
                      applicationCategory: "BusinessApplication",
                      operatingSystem: "Web",
                    },
                  },
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is there a free trial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Try our free payroll calculator at payrolljamaica.com/calculator to see how PAYE, NIS, NHT, and Education Tax are calculated for your employees. When you are ready for the full platform, sign up for any plan.",
                },
              },
              {
                "@type": "Question",
                name: "Can I change plans later?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Upgrade or downgrade any time. When you upgrade, the new rate takes effect on your next billing cycle. No penalties for switching.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any setup fees?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All plans include free setup and onboarding. We help you import your employee data and get running quickly.",
                },
              },
              {
                "@type": "Question",
                name: "Do you charge per employee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Each plan covers a fixed number of employees at a flat monthly rate. No per-employee add-on fees.",
                },
              },
              {
                "@type": "Question",
                name: "How does PayrollJamaica pricing compare to other payroll software in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PayrollJamaica is purpose-built for Jamaica, so you pay only for what you need. International payroll tools charge US$30-$100/month and still require manual configuration for PAYE, NIS, NHT, and Education Tax. Our Starter plan at JMD $3,500/month includes all Jamaican statutory calculations out of the box.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a contract or minimum commitment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. All plans are month-to-month with no long-term contract. You can cancel any time with no penalties or cancellation fees.",
                },
              },
            ],
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
              { "@type": "ListItem", position: 2, name: "Pricing", item: `${siteConfig.url}/pricing` },
            ],
          }),
        }}
      />
    </div>
  );
}
