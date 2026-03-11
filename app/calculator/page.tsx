import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import PayrollCalculator from "@/components/sections/calculator/default";

const baseDescription =
  "Use our free Jamaica payroll calculator to instantly compute PAYE income tax, NIS, NHT and Education Tax deductions for any gross monthly salary. Updated for 2025 rates set by the Ministry of Finance. Calculate your net take-home pay and see the full employer cost breakdown — no signup required. Supports monthly, fortnightly and weekly pay frequencies.";

export const metadata: Metadata = {
  title:
    "Jamaica Payroll Calculator 2026 — Free PAYE, NIS, NHT & Education Tax Calculator | Payroll Jamaica",
  description: ensureMinDescription(
    "Free Jamaica payroll calculator for 2026. Instantly compute PAYE income tax, NIS (3%), NHT (2%) and Education Tax (2.25%) deductions from any gross monthly salary. See your net take-home pay and employer cost breakdown — no signup needed.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "Jamaica payroll calculator",
    "PAYE calculator Jamaica",
    "NIS calculator Jamaica",
    "NHT calculator Jamaica",
    "Jamaica income tax calculator",
    "Jamaica salary calculator 2026",
    "PAYE calculation Jamaica 2026",
    "Education Tax Jamaica",
    "net pay calculator Jamaica",
    "take-home pay Jamaica",
    "employer cost calculator Jamaica",
    "statutory deductions Jamaica calculator",
    "Jamaica tax calculator",
    "payroll tax Jamaica",
    "Jamaica payroll deductions",
  ]),
  alternates: {
    canonical: canonical("/calculator"),
    languages: {
      "en-JM": canonical("/calculator"),
      en: canonical("/calculator"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Jamaica Payroll Calculator 2026 — Free PAYE, NIS & NHT Calculator",
    description: baseDescription,
    url: canonical("/calculator"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Jamaica Payroll Calculator — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Jamaica Payroll Calculator 2026 — PAYE, NIS, NHT",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <PayrollCalculator />
        {/* SEO content block */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-container mx-auto max-w-3xl space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How is PAYE calculated in Jamaica?</h2>
              <p>
                PAYE (Pay As You Earn) is Jamaica&apos;s income tax withheld from employee salaries each pay period.
                For 2025/2026, the annual income tax threshold is <strong className="text-foreground">JMD $1,902,360</strong> (effective April 2026).
                Income above the threshold is taxed at <strong className="text-foreground">25%</strong> up to JMD $6,000,000,
                and <strong className="text-foreground">30%</strong> on the remainder. Employers remit PAYE to
                Tax Administration Jamaica (TAJ) on behalf of employees.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NIS and how much is deducted?</h2>
              <p>
                NIS (National Insurance Scheme) provides social security benefits to Jamaican workers.
                In 2025, both employees and employers contribute <strong className="text-foreground">3%</strong> of gross
                salary, subject to a ceiling of <strong className="text-foreground">JMD $5,000,000 per year</strong>.
                The maximum employee NIS contribution is JMD $150,000 annually (JMD $12,500/month).
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NHT and who pays it?</h2>
              <p>
                NHT (National Housing Trust) helps Jamaican employees access affordable housing.
                Employees contribute <strong className="text-foreground">2%</strong> of gross salary with no ceiling,
                while employers contribute <strong className="text-foreground">3%</strong>.
                NHT contributions can be reclaimed after seven years if not used for housing.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is Education Tax in Jamaica?</h2>
              <p>
                Education Tax funds Jamaica&apos;s public education system.
                Employees pay <strong className="text-foreground">2.25%</strong> and employers pay{" "}
                <strong className="text-foreground">3.5%</strong> of gross salary, with no ceiling.
                It is remitted quarterly to TAJ alongside NIS and NHT contributions.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">Automate your Jamaica payroll</h2>
              <p>
                Calculating statutory deductions manually every pay cycle is error-prone and time-consuming.
                Payroll Jamaica automates PAYE, NIS, NHT, and Education Tax calculations, generates compliant
                payslips, and produces statutory remittance reports ready for TAJ.
              </p>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-block mt-3 text-foreground font-semibold underline hover:no-underline"
              >
                Get started with Payroll Jamaica →
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA
        headline="Automate your Jamaica payroll"
        text="Stop calculating deductions manually. Let Payroll Jamaica handle PAYE, NIS, NHT, and Education Tax automatically."
      />
      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Jamaica Payroll Calculator 2026",
          url: canonical("/calculator"),
          description: "Free Jamaica payroll calculator. Calculate PAYE, NIS, NHT, and Education Tax using 2026 statutory rates.",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "JMD" },
          inLanguage: "en-JM",
          publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Payroll Calculator", item: canonical("/calculator") },
          ],
        }) }}
      />
      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Calculate PAYE in Jamaica (2026)",
          description: "Step-by-step guide to calculating PAYE income tax, NIS, NHT, and Education Tax in Jamaica using 2026 statutory rates.",
          step: [
            { "@type": "HowToStep", name: "Determine gross salary", text: "Start with the employee's gross monthly or annual salary before any deductions." },
            { "@type": "HowToStep", name: "Calculate NIS contribution", text: "Multiply gross salary by 3% (employee NIS rate). Apply the JMD $5,000,000 annual ceiling." },
            { "@type": "HowToStep", name: "Calculate taxable income", text: "Subtract the NIS employee contribution and the income tax threshold (JMD $1,902,360/year as of April 2026) from gross salary." },
            { "@type": "HowToStep", name: "Calculate PAYE", text: "Apply 25% to taxable income up to JMD $4,499,904 above the threshold, then 30% on any excess." },
            { "@type": "HowToStep", name: "Calculate NHT and Education Tax", text: "Multiply gross salary by 2% for NHT and 2.25% for Education Tax. No ceilings apply." },
            { "@type": "HowToStep", name: "Sum all deductions", text: "Add PAYE + NIS + NHT + Education Tax to get total employee deductions. Subtract from gross to get take-home pay." },
          ],
        }) }}
      />
    </div>
  );
}
