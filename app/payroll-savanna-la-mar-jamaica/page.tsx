import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll services in Savanna-la-Mar, Jamaica — Payroll Jamaica is the #1 payroll software for Westmoreland businesses. Automate PAYE, NIS, NHT, and Education Tax compliance for Sav-la-Mar and Westmoreland parish employers.";

export const metadata: Metadata = {
  title: "Payroll Services Savanna-la-Mar Jamaica — Westmoreland Payroll Software | Payroll Jamaica",
  description: ensureMinDescription(
    "Savanna-la-Mar and Westmoreland's best payroll software. Automate PAYE, NIS, NHT, and Education Tax for your Sav-la-Mar business. Trusted by Westmoreland businesses across tourism, agriculture, and services.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll Savanna-la-Mar Jamaica",
    "payroll services Savanna-la-Mar",
    "payroll company Savanna-la-Mar Jamaica",
    "payroll software Westmoreland Jamaica",
    "Sav-la-Mar payroll",
    "Westmoreland Jamaica payroll",
    "payroll service provider Sav-la-Mar",
    "PAYE Westmoreland Jamaica",
    "NIS NHT Savanna-la-Mar",
    "small business payroll Westmoreland",
    "payroll outsourcing Savanna-la-Mar Jamaica",
  ]),
  alternates: {
    canonical: canonical("/payroll-savanna-la-mar-jamaica"),
    languages: {
      "en-JM": canonical("/payroll-savanna-la-mar-jamaica"),
      en: canonical("/payroll-savanna-la-mar-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Payroll Services Savanna-la-Mar Jamaica — Westmoreland Payroll Software | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/payroll-savanna-la-mar-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Services Savanna-la-Mar Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services Savanna-la-Mar Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const savPainPoints = [
  {
    problem: "Seasonal agriculture and tourism payroll",
    solution:
      "Westmoreland's economy runs on seasonal labour — sugarcane, tourism, and fishing. Payroll Jamaica handles variable headcounts, seasonal hires, and fluctuating hours without extra setup.",
  },
  {
    problem: "March 31 S01 and NHT returns from Sav-la-Mar",
    solution:
      "No need to drive to Kingston or wait in TAJ queues. Payroll Jamaica generates your S01 and NHT annual returns digitally — file online before the March 31 deadline from anywhere.",
  },
  {
    problem: "Managing payroll for multiple sites",
    solution:
      "Running a resort property near Negril and an office in Sav-la-Mar? Manage all locations and employee types in one payroll platform — no spreadsheets, no double entry.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Payroll Jamaica — Savanna-la-Mar",
  description: baseDescription,
  url: canonical("/payroll-savanna-la-mar-jamaica"),
  areaServed: [
    { "@type": "City", name: "Savanna-la-Mar", containedInPlace: { "@type": "AdministrativeArea", name: "Westmoreland, Jamaica" } },
    { "@type": "AdministrativeArea", name: "Westmoreland Parish, Jamaica" },
  ],
  serviceType: "Payroll Software and Compliance Services",
  priceRange: "From J$2,500/employee/month",
};

export default function SavannaLaMarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Navbar />
      <FloatingCTA />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-900 via-green-800 to-yellow-700 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-yellow-400 text-green-900 text-sm font-bold px-3 py-1 rounded-full mb-4">
              WESTMORELAND PARISH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payroll Services in<br />
              <span className="text-yellow-400">Savanna-la-Mar, Jamaica</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Jamaica-built payroll software for Westmoreland businesses. Automate PAYE, NHT, NIS, and Education Tax — and file S01 returns without leaving Sav-la-Mar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={siteConfig.getStartedUrl}
                className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/calculator"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-green-900 transition-colors"
              >
                Free PAYE Calculator
              </Link>
            </div>
          </div>
        </section>

        {/* Why Sav-la-Mar businesses choose us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Built for Westmoreland Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {savPainPoints.map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="text-red-600 font-semibold text-sm mb-2">COMMON PROBLEM</div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.problem}</h3>
                  <div className="text-green-600 font-semibold text-sm mb-2">PAYROLL JAMAICA SOLUTION</div>
                  <p className="text-gray-700 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statutory rates */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              2026 Jamaica Statutory Rates — Applied Automatically
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Every Westmoreland payroll run uses the correct 2026 rates — automatically. No manual rate updates ever needed.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="text-left p-4">Deduction</th>
                    <th className="text-center p-4">Employee</th>
                    <th className="text-center p-4">Employer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "PAYE", employee: "25% / 30%", employer: "—" },
                    { name: "NHT", employee: "2%", employer: "3%" },
                    { name: "NIS", employee: "3% (capped)", employer: "3% (capped)" },
                    { name: "Education Tax", employee: "2.25%", employer: "3.5%" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-900">{row.name}</td>
                      <td className="p-4 text-center text-gray-700">{row.employee}</td>
                      <td className="p-4 text-center text-gray-700">{row.employer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-green-800 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Running Payroll the Right Way in Savanna-la-Mar
            </h2>
            <p className="text-green-100 mb-8">
              30-day free trial. No credit card. Supports all Westmoreland business types — tourism, agriculture, retail, services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={siteConfig.getStartedUrl}
                className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="mailto:info@payrolljamaica.com"
                className="border-2 border-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-green-200 text-sm mt-6">
              Questions? Email <a href="mailto:info@payrolljamaica.com" className="underline">info@payrolljamaica.com</a> — Jamaica-based support.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Payroll Services Across Jamaica</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Kingston", href: "/payroll-kingston-jamaica" },
                { name: "Montego Bay", href: "/payroll-montego-bay-jamaica" },
                { name: "Portmore", href: "/payroll-portmore-jamaica" },
                { name: "Spanish Town", href: "/payroll-spanish-town-jamaica" },
                { name: "Mandeville", href: "/payroll-mandeville-jamaica" },
                { name: "Ocho Rios", href: "/payroll-ocho-rios-jamaica" },
                { name: "Negril", href: "/payroll-negril-jamaica" },
                { name: "May Pen", href: "/payroll-may-pen-jamaica" },
              ].map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="text-center py-2 px-3 bg-gray-50 border border-gray-200 rounded-lg text-green-700 hover:bg-green-50 hover:border-green-300 transition-colors text-sm font-medium"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
