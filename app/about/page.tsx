import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const baseDescription =
  "PayrollJamaica is Jamaica's purpose-built payroll and HR software. We automate PAYE, NIS, NHT, Education Tax, payslips, and statutory compliance for Jamaican businesses of every size.";

export const metadata: Metadata = {
  title: "About PayrollJamaica — Jamaica's Payroll & HR Software",
  description: ensureMinDescription(
    "About PayrollJamaica — Jamaica's leading payroll and HR software company. Built by Jamaicans, for Jamaican businesses. Automate PAYE, NIS, NHT, payslips, and compliance.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "about PayrollJamaica",
    "Jamaica payroll company",
    "payroll software Jamaica",
    "who is PayrollJamaica",
    "Jamaica HR software company",
    "payroll provider Jamaica",
  ]),
  alternates: { canonical: canonical("/about") },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About PayrollJamaica — Jamaica's Payroll & HR Software",
    description: baseDescription,
    url: canonical("/about"),
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og.jpg`,
  foundingDate: "2024",
  description: baseDescription,
  areaServed: { "@type": "Country", name: "Jamaica" },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.links.facebook,
    siteConfig.links.instagram,
  ].filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@payrolljamaica.com",
    contactType: "customer support",
    areaServed: "JM",
    availableLanguage: ["en"],
  },
  knowsAbout: [
    "Payroll processing Jamaica",
    "PAYE income tax Jamaica",
    "NIS contributions Jamaica",
    "NHT contributions Jamaica",
    "Education Tax Jamaica",
    "Statutory compliance Jamaica",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
      />
      <Navbar />
      <main className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">About</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-6">
            About PayrollJamaica
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              PayrollJamaica is modern payroll and HR software built specifically
              for Jamaican businesses. We handle the complexities of local tax
              law — PAYE, NIS, NHT, Education Tax, HEART/NSTA — so you can focus
              on running your business.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Every Jamaican employer — from a five-person shop in May Pen to a
              500-employee operation in Kingston — deserves payroll software that
              understands local rules, generates compliant reports, and just
              works. We built PayrollJamaica to make that a reality.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">What We Do</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Automated statutory calculations</strong> — PAYE with the
                correct J$1,500,096 annual threshold, NIS (3%/3%), NHT (2%/3%),
                Education Tax (2.25%/3.5%), and HEART/NSTA (3%).
              </li>
              <li>
                <strong>Professional payslips</strong> — generated in one click,
                accessible to employees via self-service.
              </li>
              <li>
                <strong>Statutory reports</strong> — SO1, P24, NIS returns, and
                NHT remittance files formatted for TAJ submission.
              </li>
              <li>
                <strong>Bank-ready payment files</strong> — compatible with NCB,
                JN, Scotiabank, Sagicor Bank, and FirstCaribbean.
              </li>
              <li>
                <strong>Leave and benefits management</strong> — track vacation,
                sick leave, and benefits with configurable policies.
              </li>
              <li>
                <strong>Multi-location support</strong> — manage branches,
                departments, and cost centres from a single dashboard.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Built for Jamaica
            </h2>
            <p className="text-muted-foreground">
              Unlike generic international payroll tools, PayrollJamaica is
              designed from the ground up for Jamaica&apos;s regulatory
              environment. We stay current with tax rate changes, threshold
              updates, and compliance requirements so you don&apos;t have to.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground">
              We serve businesses across every sector in Jamaica, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {[
                { name: "Hotels & Hospitality", href: "/payroll-jamaica-hotels" },
                { name: "Construction", href: "/construction-payroll-jamaica" },
                { name: "Retail", href: "/retail-payroll-jamaica" },
                { name: "Healthcare", href: "/healthcare-payroll-jamaica" },
                { name: "Manufacturing", href: "/manufacturing-payroll-jamaica" },
                { name: "Education", href: "/education-payroll-jamaica" },
                { name: "Government & NGO", href: "/government-ngo-payroll-jamaica" },
                { name: "Restaurants", href: "/payroll-jamaica-restaurants" },
                { name: "Churches", href: "/payroll-jamaica-churches" },
              ].map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="text-sm border rounded-lg px-3 py-2 hover:bg-muted transition text-center"
                >
                  {industry.name}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
              Get Started
            </h2>
            <p className="text-muted-foreground">
              Try our{" "}
              <Link href="/calculator" className="text-primary underline">
                free payroll calculator
              </Link>{" "}
              to see PAYE, NIS, NHT, and Education Tax calculations instantly.
              When you&apos;re ready to automate your entire payroll process,{" "}
              <Link href="/pricing" className="text-primary underline">
                view our plans
              </Link>{" "}
              or{" "}
              <a
                href="#"
                data-open-fillout="true"
                className="text-primary underline"
              >
                request a demo
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
