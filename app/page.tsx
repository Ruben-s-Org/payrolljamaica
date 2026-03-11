import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
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
        <Pricing />
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
          sameAs: [siteConfig.links.twitter, siteConfig.links.github].filter(Boolean),
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
            "@type": "AggregateOffer",
            lowPrice: "3500",
            highPrice: "7500",
            priceCurrency: "JMD",
            offerCount: 3,
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
        })}
      </Script>
    </div>
  );
}
