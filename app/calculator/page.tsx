import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import PayrollCalculator from "@/components/sections/calculator/default";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { siteConfig } from "@/config/site";

const baseDescription =
  "Free Jamaica payroll calculator for 2025. Instantly calculate PAYE income tax, NIS contributions, NHT deductions, and Education Tax for any salary. See your take-home pay and total employer cost in seconds. Built for Jamaican businesses using current statutory rates: income tax threshold JMD 1,500,096, PAYE at 25% and 30%, NIS at 3%, NHT at 2% employee and 3% employer, Education Tax at 2.25% employee and 3.5% employer. Ideal for HR managers, accountants, business owners, and employees who need accurate Jamaica payroll deductions. This free online PAYE calculator Jamaica tool supports both monthly and annual salary inputs and displays a full statutory deductions breakdown so you can plan your payroll with confidence.";

export const metadata: Metadata = {
  title: "Jamaica Payroll Calculator 2025 – Free PAYE, NIS & NHT Calculator",
  description: ensureMinDescription(
    "Free Jamaica payroll calculator 2025. Calculate PAYE income tax, NIS, NHT, and Education Tax instantly. Enter any salary to see take-home pay and total employer cost — built for Jamaican businesses.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "PAYE calculator Jamaica",
    "Jamaica payroll calculator",
    "NIS calculator Jamaica",
    "NHT calculator Jamaica",
    "Jamaica income tax calculator",
    "Education Tax calculator Jamaica",
    "take home pay calculator Jamaica",
    "payroll deductions Jamaica",
    "PAYE Jamaica 2025",
    "statutory deductions calculator Jamaica",
    "Jamaica salary calculator",
    "payroll tax calculator Jamaica",
    "NIS NHT PAYE calculator",
    "Jamaica net salary calculator",
    "employer cost calculator Jamaica",
    "free payroll calculator Jamaica",
  ]),
  alternates: { canonical: canonical("/calculator") },
  openGraph: {
    title: "Jamaica Payroll Calculator 2025 – Free PAYE, NIS & NHT Calculator",
    description: baseDescription,
    url: canonical("/calculator"),
    type: "website",
    images: [
      {
        url: canonical(siteConfig.ogImage || "/og.jpg"),
        width: 1200,
        height: 630,
        alt: "Payroll Jamaica – Free PAYE, NIS & NHT Calculator 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamaica Payroll Calculator 2025 – Free PAYE, NIS & NHT Calculator",
    description: baseDescription,
    images: [canonical(siteConfig.ogImage || "/og.jpg")],
    site: "@payrolljamaica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 w-full px-4 pb-28">
        <div className="max-w-container mx-auto py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground">
              <li><a href="/" className="underline hover:text-foreground">Home</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Payroll Calculator</li>
            </ol>
          </nav>

          {/* Hero copy */}
          <div className="mb-10 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Jamaica Payroll Calculator 2025
            </h1>
            <p className="text-lg text-muted-foreground">
              Calculate PAYE income tax, NIS, NHT, and Education Tax instantly using
              current 2025 Jamaica statutory rates. Enter any gross salary to see your
              take-home pay and total employer cost.
            </p>
          </div>

          {/* Calculator */}
          <PayrollCalculator />

          {/* SEO content block */}
          <div className="mt-16 max-w-2xl space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">How is PAYE calculated in Jamaica?</h2>
              <p>
                PAYE (Pay As You Earn) is Jamaica&apos;s income tax withheld from employee salaries each pay period.
                For 2025, the annual income tax threshold is <strong className="text-foreground">JMD $1,500,096</strong>.
                Income above the threshold is taxed at <strong className="text-foreground">25%</strong> up to JMD $6,000,000,
                and <strong className="text-foreground">30%</strong> on the remainder. Employers are legally required to
                remit PAYE to Tax Administration Jamaica (TAJ) on behalf of employees.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NIS and how much is deducted?</h2>
              <p>
                NIS (National Insurance Scheme) provides social security benefits to Jamaican workers.
                In 2025, both employees and employers contribute <strong className="text-foreground">3%</strong> of gross
                salary, subject to a ceiling of <strong className="text-foreground">JMD $5,000,000 per year</strong>.
                This means the maximum employee NIS contribution is JMD $150,000 annually.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is NHT and who pays it?</h2>
              <p>
                NHT (National Housing Trust) helps Jamaican employees access affordable housing.
                Employees contribute <strong className="text-foreground">2%</strong> of gross salary with no ceiling,
                while employers contribute <strong className="text-foreground">3%</strong>.
                NHT contributions can be reclaimed by employees after seven years if not used for housing.
              </p>
            </section>

            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">What is Education Tax?</h2>
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
                payslips, and produces statutory remittance reports ready for TAJ — so you can run payroll
                in minutes, not hours.
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
      <FooterSection />
      <FloatingCTA
        headline="Automate your Jamaica payroll"
        text="Stop calculating deductions manually. Let Payroll Jamaica handle PAYE, NIS, NHT, and Education Tax automatically."
      />

      {/* JSON-LD: WebApplication */}
      <Script id="ld-json-webapp" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Jamaica Payroll Calculator 2025",
          url: canonical("/calculator"),
          description:
            "Free Jamaica payroll calculator. Calculate PAYE, NIS, NHT, and Education Tax using 2025 statutory rates.",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "JMD" },
          inLanguage: "en-JM",
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        })}
      </Script>

      {/* JSON-LD: BreadcrumbList */}
      <Script id="ld-json-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Payroll Calculator", item: canonical("/calculator") },
          ],
        })}
      </Script>

      {/* JSON-LD: HowTo — PAYE calculation steps */}
      <Script id="ld-json-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Calculate PAYE in Jamaica (2025)",
          description:
            "Step-by-step guide to calculating PAYE income tax, NIS, NHT, and Education Tax in Jamaica using 2025 statutory rates.",
          step: [
            {
              "@type": "HowToStep",
              name: "Determine gross salary",
              text: "Start with the employee's gross monthly or annual salary before any deductions.",
            },
            {
              "@type": "HowToStep",
              name: "Calculate NIS contribution",
              text: "Multiply gross salary by 3% (employee NIS rate). Apply the JMD $5,000,000 annual ceiling.",
            },
            {
              "@type": "HowToStep",
              name: "Calculate taxable income",
              text: "Subtract the NIS employee contribution and the income tax threshold (JMD $1,500,096/year) from gross salary.",
            },
            {
              "@type": "HowToStep",
              name: "Calculate PAYE",
              text: "Apply 25% to taxable income up to JMD $4,499,904 above the threshold, then 30% on any excess.",
            },
            {
              "@type": "HowToStep",
              name: "Calculate NHT and Education Tax",
              text: "Multiply gross salary by 2% for NHT and 2.25% for Education Tax. No ceilings apply.",
            },
            {
              "@type": "HowToStep",
              name: "Sum all deductions",
              text: "Add PAYE + NIS + NHT + Education Tax to get total employee deductions. Subtract from gross to get take-home pay.",
            },
          ],
        })}
      </Script>
    </div>
  );
}
