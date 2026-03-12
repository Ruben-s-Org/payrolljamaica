import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import TrustSignals from "../components/sections/trust/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import Testimonials from "../components/sections/testimonials/default";
import HowItWorks from "../components/sections/how-it-works/default";
import DeadlineUrgency from "../components/sections/deadline-urgency/default";
import { LayoutLines } from "../components/ui/layout-lines";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const homeBaseDescription = "Payroll Jamaica provides reliable, secure HR and payroll software built specifically for Jamaican businesses. Automate payroll calculations, PAYE, NIS, NHT, and other statutory deductions with confidence, generate compliant payslips, and stay up to date with local tax rules. Our platform streamlines employee management, leave tracking, and statutory reporting so you can save time, reduce errors, and focus on growing your business. Whether you are a small team or a scaling company, Payroll Jamaica gives you simple setup, guided workflows, and clear reporting designed for Jamaica’s regulatory environment. With local-first features, accurate contributions, and clear documentation, you get peace of mind every pay cycle. Explore integrations, role-based access, and audit-friendly reports that help you stay compliant and efficient.";

export const metadata: Metadata = {
  title:
    "Payroll Jamaica — #1 Payroll & HR Software for Jamaica",
  description: ensureMinDescription(
    "Automate PAYE, NIS, NHT & Education Tax for your Jamaica business. Free calculator, compliant payslips & SO1 filing. Try free.",
    homeBaseDescription
  ),
  applicationName: siteConfig.name,
  category: "Business & Industrial",
  keywords: ensureMinKeywords([
    "Payroll Jamaica",
    "Jamaica payroll software",
    "HR software Jamaica",
    "PAYE NIS NHT",
    "Jamaica payroll compliance",
    "Jamaica payroll taxes",
    "payslips Jamaica",
    "payroll calculations Jamaica",
    "leave management Jamaica",
    "employee management Jamaica",
    "payroll automation Jamaica",
    "small business payroll Jamaica",
    "statutory deductions Jamaica",
    "PAYE filings Jamaica",
    "NIS deductions Jamaica",
    "NHT contributions Jamaica",
    "time and attendance Jamaica",
    "HRIS Jamaica",
    "cloud payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/"),
    languages: {
      "en-JM": canonical("/"),
      en: canonical("/"),
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
  referrer: "origin-when-cross-origin",
  openGraph: {
    title:
      "Payroll Jamaica — #1 Payroll & HR Software for Jamaica",
    description:
      "Automate PAYE, NIS, NHT & Education Tax for your Jamaica business. Compliant payslips, SO1 filing, and statutory reporting built for local rules.",
    url: canonical("/"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PayrollJamaica — Payroll & HR software for Jamaican businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Payroll Jamaica — #1 Payroll & HR Software for Jamaica",
    description:
      "Automate PAYE, NIS, NHT & Education Tax for your Jamaica business. Compliant payslips, SO1 filing, and statutory reporting built for local rules.",
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
  assets: [siteConfig.ogImage],
};
 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1">
        <LayoutLines />
        <Hero />
        <TrustSignals />
        <Items />
        <HowItWorks />
        <Stats />
        <DeadlineUrgency />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: canonical(siteConfig.ogImage || "/og.jpg"),
          foundingDate: "2024",
          numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
          sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin, siteConfig.links.facebook, siteConfig.links.instagram].filter(Boolean),
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: siteConfig.links.email?.replace("mailto:", ""),
              contactType: "customer support",
              areaServed: "JM",
              availableLanguage: ["en"],
            },
          ],
        }) }}
      />
      {/* JSON-LD: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: siteConfig.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          countriesSupported: "JM",
          url: siteConfig.url,
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "3500",
            highPrice: "7500",
            priceCurrency: "JMD",
            offerCount: 3,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            bestRating: "5",
            worstRating: "1",
            ratingCount: 47,
          },
        }) }}
      />
      {/* JSON-LD: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          inLanguage: "en-JM",
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }) }}
      />
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteConfig.name,
          url: siteConfig.url,
          image: canonical(siteConfig.ogImage || "/og.jpg"),
          description: "Jamaica's leading payroll and HR software for Jamaican businesses. Automate PAYE, NIS, NHT, Education Tax, and statutory compliance.",
          priceRange: "$$",
          areaServed: {
            "@type": "Country",
            name: "Jamaica",
            sameAs: "https://www.wikidata.org/wiki/Q766",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "JM",
          },
          telephone: "+18761234567",
          email: "info@payrolljamaica.com",
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@payrolljamaica.com",
            telephone: "+18761234567",
            contactType: "customer support",
            areaServed: "JM",
            availableLanguage: ["en"],
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.9970,
            longitude: -76.7936,
          },
          hasMap: "https://maps.google.com/?q=Payroll+Jamaica,Kingston,Jamaica",
          currenciesAccepted: "JMD",
          paymentAccepted: "Credit Card, Bank Transfer",
          sameAs: [
            "https://x.com/payrolljamaica",
            "https://linkedin.com/company/payrolljamaica",
            "https://facebook.com/payrolljamaica",
            "https://instagram.com/payrolljamaica",
          ],
        }) }}
      />
      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Run Payroll in Jamaica",
          description: "Run compliant payroll in Jamaica in three simple steps using PayrollJamaica software.",
          totalTime: "PT10M",
          tool: [
            { "@type": "HowToTool", name: "PayrollJamaica software" },
          ],
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Add your employees",
              text: "Import from a spreadsheet or enter employee details manually. Set salary structures, allowances, and deductions.",
              url: `${siteConfig.url}/#how-it-works`,
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Run payroll",
              text: "PAYE, NIS, NHT, and Education Tax are calculated automatically. Review the summary and approve with one click.",
              url: `${siteConfig.url}/#how-it-works`,
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Export and file",
              text: "Download payslips, bank-ready payment files, and statutory returns (SO1, P24) formatted for TAJ and your bank.",
              url: `${siteConfig.url}/#how-it-works`,
            },
          ],
        }) }}
      />
      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Payroll Jamaica?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Payroll Jamaica is modern payroll software tailored for Jamaican businesses. It is purpose‑built for local tax rules, reporting, and banking formats.",
              },
            },
            {
              "@type": "Question",
              name: "Which statutory calculations are supported?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We support PAYE, NIS, NHT, and Education Tax out of the box, including thresholds and current rates. Deductions and allowances are configurable as salary components.",
              },
            },
            {
              "@type": "Question",
              name: "What reports and remittances can I generate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Generate payslips, payroll summaries, and statutory remittance files required by MOF/TAJ. Exports are ready for submission and can be archived for audits.",
              },
            },
            {
              "@type": "Question",
              name: "Which banks are supported?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We export payment files compatible with major local banks, including NCB, JN, Scotiabank, Sagicor Bank, and FirstCaribbean.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take to run payroll?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "After initial setup, you can run payroll in minutes using bulk actions, recurring components, and automated calculations.",
              },
            },
            {
              "@type": "Question",
              name: "Is my data secure?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We use TLS encryption in transit, encrypted storage at rest, role‑based access controls, audit trails, and automated backups.",
              },
            },
            {
              "@type": "Question",
              name: "Does it handle overtime, allowances, and deductions?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Create salary components and rules for overtime, allowances, deductions, loans, and more. Configure per employee or per salary structure.",
              },
            },
            {
              "@type": "Question",
              name: "Can I import from Excel or migrate existing data?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Use CSV templates to import employees, salary structures, and historical payroll. Our team can help you map columns and validate before going live.",
              },
            },
          ],
        }) }}
      />
    </div>
  );
}
