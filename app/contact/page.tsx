import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import RelatedPages from "@/components/ui/related-pages";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

const baseDescription =
  "Contact PayrollJamaica for payroll software support, demos, and partnership enquiries. Reach us via email, WhatsApp, or schedule a demo. We serve businesses across Jamaica.";

export const metadata: Metadata = {
  title: "Contact Us — PayrollJamaica | Payroll Support",
  description: ensureMinDescription(
    "Contact PayrollJamaica for support, demos, and enquiries. Reach us via email, WhatsApp, or schedule a demo. Serving Jamaica.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "contact PayrollJamaica",
    "payroll software support Jamaica",
    "payroll Jamaica phone",
    "payroll Jamaica email",
    "payroll demo Jamaica",
    "payroll Jamaica WhatsApp",
  ]),
  alternates: {
    canonical: canonical("/contact"),
    languages: {
      "en-JM": canonical("/contact"),
      en: canonical("/contact"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Contact Us — PayrollJamaica",
    description: baseDescription,
    url: canonical("/contact"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Contact PayrollJamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — PayrollJamaica | Payroll Support",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
  ],
};

const contactMethods = [
  {
    icon: <MailIcon className="size-6" />,
    title: "Email",
    description: "For general enquiries and support",
    action: "info@payrolljamaica.com",
    href: "mailto:info@payrolljamaica.com",
    cta: "Send Email",
  },
  {
    icon: <MessageCircleIcon className="size-6" />,
    title: "WhatsApp",
    description: "Quick questions and demo requests",
    action: "Message us on WhatsApp",
    href: siteConfig.links.whatsapp || "https://wa.me/18763612493",
    cta: "Open WhatsApp",
  },
  {
    icon: <PhoneIcon className="size-6" />,
    title: "Schedule a Demo",
    description: "See PayrollJamaica in action",
    action: "Book a 15-minute walkthrough",
    href: "#",
    cta: "Request Demo",
    fillout: true,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-4xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Have questions about payroll software for your Jamaican business?
            We&apos;re here to help. Reach out through any of the channels below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="border rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="text-primary mb-4">{method.icon}</div>
                <h2 className="text-lg font-semibold mb-1">{method.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  {...(method.fillout ? { "data-open-fillout": "true" } : {})}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity mt-auto"
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-2xl">
              <div>
                <h3 className="font-medium mb-1">
                  Do you offer free trials?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes — you can try our{" "}
                  <Link href="/calculator" className="text-primary underline">
                    free payroll calculator
                  </Link>{" "}
                  immediately with no signup. For the full platform, request a
                  demo and we&apos;ll set up a trial account.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  What are your support hours?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Business hours support: Monday–Friday, 8 AM – 5 PM (Jamaica
                  time). We typically respond to emails within 4 hours.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  Can you help migrate from Excel or another system?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We provide guided migration support including CSV
                  import templates, data mapping, and validation before you go
                  live.
                </p>
              </div>
            </div>
          </div>
          <RelatedPages exclude="/contact" />
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
