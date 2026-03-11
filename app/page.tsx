import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";
import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";

const homeBaseDescription = "Payroll Jamaica provides reliable, secure HR and payroll software built specifically for Jamaican businesses. Automate payroll calculations, PAYE, NIS, NHT, and other statutory deductions with confidence, generate compliant payslips, and stay up to date with local tax rules. Our platform streamlines employee management, leave tracking, and statutory reporting so you can save time, reduce errors, and focus on growing your business. Whether you are a small team or a scaling company, Payroll Jamaica gives you simple setup, guided workflows, and clear reporting designed for Jamaica’s regulatory environment. With local-first features, accurate contributions, and clear documentation, you get peace of mind every pay cycle. Explore integrations, role-based access, and audit-friendly reports that help you stay compliant and efficient.";

export const metadata: Metadata = {
  title:
    "Payroll Jamaica – Best HR & Payroll Software in Jamaica | Automate PAYE, NIS, NHT, Payslips & Compliance",
  description: ensureMinDescription(
    "Powerful, local-first HR and payroll software for Jamaican businesses. Automate PAYE, NIS and NHT calculations, generate compliant payslips, manage leave and employees, and submit accurate statutory filings. Built for Jamaica’s rules with clear reporting, role-based access and audit-ready exports—so every pay cycle is fast, accurate and compliant.",
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
      "Payroll Jamaica – Best HR & Payroll Software in Jamaica | Automate PAYE, NIS, NHT, Payslips & Compliance",
    description: homeBaseDescription,
    url: canonical("/"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Payroll Jamaica – Best HR & Payroll Software in Jamaica",
    description: homeBaseDescription,
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
      <main className="flex-1">
        <LayoutLines />
        <Hero />
        <Items />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      {/* JSON-LD: Organization */}
      <Script id="ld-json-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: canonical(siteConfig.ogImage || "/og.jpg"),
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
        })}
      </Script>
      {/* JSON-LD: SoftwareApplication */}
      <Script id="ld-json-software" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: siteConfig.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          countriesSupported: "JM",
          url: siteConfig.url,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        })}
      </Script>
      {/* JSON-LD: WebSite */}
      <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
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
        })}
      </Script>
      {/* JSON-LD: LocalBusiness */}
      <Script id="ld-json-local-business" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
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
          contactPoint: {
            "@type": "ContactPoint",
            email: "info@payrolljamaica.com",
            contactType: "customer support",
            areaServed: "JM",
            availableLanguage: ["en"],
          },
          sameAs: ["https://x.com/payrolljamaica"],
        })}
      </Script>
      {/* JSON-LD: FAQPage */}
      <Script id="ld-json-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
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
        })}
      </Script>
    </div>
  );
}
