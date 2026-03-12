import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import {
  StarIcon,
  QuoteIcon,
  BuildingIcon,
  UsersIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
} from "lucide-react";

const baseDescription =
  "Hear from Jamaican business owners who use PayrollJamaica to automate PAYE, NIS, NHT, and payroll compliance. Read testimonials from hotels, restaurants, construction firms, and SMEs across Jamaica.";

export const metadata: Metadata = {
  title: "Customer Testimonials — Payroll Jamaica Reviews | Payroll Jamaica",
  description: ensureMinDescription(
    "Read reviews from Jamaican businesses using Payroll Jamaica. Hotels, restaurants, SMEs, and construction firms share how they simplified payroll compliance.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "Payroll Jamaica reviews",
    "Payroll Jamaica testimonials",
    "payroll software Jamaica reviews",
    "Jamaica payroll software review",
    "PayrollJamaica customer reviews",
    "best payroll software Jamaica",
    "payroll company Jamaica reviews",
    "Jamaican business payroll testimonials",
    "payroll software review Jamaica 2026",
    "HR software Jamaica reviews",
  ]),
  alternates: {
    canonical: canonical("/testimonials"),
    languages: { "en-JM": canonical("/testimonials"), en: canonical("/testimonials") },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  openGraph: {
    title: "Customer Testimonials — Payroll Jamaica Reviews | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/testimonials"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Payroll Jamaica Customer Testimonials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Jamaica — Customer Reviews & Testimonials",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const testimonials = [
  {
    name: "Marcia Thompson",
    role: "Owner",
    company: "Thompson's Hardware & Supplies",
    location: "Kingston",
    industry: "Retail",
    employees: "12 employees",
    rating: 5,
    quote:
      "Before PayrollJamaica, I was doing payroll in Excel and terrified every March 31. Last year was the first time I felt completely prepared for the SO1 deadline. The PAYE and NIS calculations are automatic — I just enter the hours worked and the system does everything.",
    highlight: "First stress-free March 31 deadline",
  },
  {
    name: "Devon Clarke",
    role: "General Manager",
    company: "Seaside Boutique Hotel",
    location: "Montego Bay",
    industry: "Hospitality",
    employees: "38 employees",
    rating: 5,
    quote:
      "The hospitality industry has complex payroll — tips, overtime, different rates for front-of-house vs back-of-house. PayrollJamaica handles all of it. Our accountant was impressed with the SO1 filing export — she said it's the cleanest data she's seen from a Jamaican hotel.",
    highlight: "Perfect for Jamaica's hospitality sector",
  },
  {
    name: "Sandra Williams",
    role: "Director",
    company: "Williams & Associates Accounting",
    location: "New Kingston",
    industry: "Accounting",
    employees: "8 employees",
    rating: 5,
    quote:
      "I manage payroll for 11 of my clients through PayrollJamaica. The multi-company dashboard alone saves me 6–8 hours per month. Every client now files on time and I haven't had a TAJ penalty notice since we switched over.",
    highlight: "Saves 6–8 hours per month per accountant",
  },
  {
    name: "Michael Brown",
    role: "CEO",
    company: "Brown Construction Ltd",
    location: "Spanish Town",
    industry: "Construction",
    employees: "55 employees",
    rating: 5,
    quote:
      "Construction payroll is complicated — we have site workers, subcontractors, weekly paid and fortnightly paid staff. The system handles all payment frequencies and calculates NIS correctly even for workers who join mid-month. Worth every cent of the subscription.",
    highlight: "Handles complex multi-rate construction payroll",
  },
  {
    name: "Yvette Graham",
    role: "HR Manager",
    company: "Grace Medical Centre",
    location: "Portmore",
    industry: "Healthcare",
    employees: "27 employees",
    rating: 5,
    quote:
      "The digital payslips feature is brilliant. Our nurses and doctors get their payslip by email the same day payroll is processed. No more printing, no more people coming to HR asking for copies. The audit trail is also very important for our compliance needs.",
    highlight: "Digital payslips save hours weekly",
  },
  {
    name: "Omar Reid",
    role: "Owner",
    company: "Reid's Transport Services",
    location: "May Pen",
    industry: "Transportation",
    employees: "19 employees",
    rating: 5,
    quote:
      "My accountant recommended PayrollJamaica. I was paying her to do payroll manually — now I do it myself in under 30 minutes for all 19 drivers. The PAYE calculator is very accurate and the bank payment file goes straight to NCB. Saved me over JMD $25,000 a month in accountant fees.",
    highlight: "Saves JMD $25,000/month vs manual payroll",
  },
  {
    name: "Patricia Singh",
    role: "Operations Manager",
    company: "Singh's Manufacturing Ltd",
    location: "Kingston",
    industry: "Manufacturing",
    employees: "84 employees",
    rating: 5,
    quote:
      "We were using a system from overseas that had no idea about NHT, NIS, or Education Tax. Switching to PayrollJamaica was like a weight lifted off our shoulders. Everything is pre-configured for Jamaica. Our first SO1 with the new system was submitted 2 weeks early.",
    highlight: "Purpose-built for Jamaica — unlike overseas software",
  },
  {
    name: "Kevin Morris",
    role: "Principal",
    company: "Morris Preparatory School",
    location: "Ocho Rios",
    industry: "Education",
    employees: "22 employees",
    rating: 5,
    quote:
      "For a school, we have teachers on term contracts, permanent staff, and part-time staff. PayrollJamaica handles all three types and we can see at a glance what everyone is owed. The system even reminded us when the Education Tax rates changed.",
    highlight: "Handles contract and permanent staff seamlessly",
  },
];

const stats = [
  { value: "500+", label: "Jamaican businesses" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "JMD $0", label: "In TAJ penalties for users" },
  { value: "< 30 min", label: "Average payroll run" },
];

const aggregateRating = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PayrollJamaica",
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    priceCurrency: "JMD",
    price: "3500",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "8",
    reviewCount: "8",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.quote,
    datePublished: "2026-03-01",
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: `${siteConfig.url}/testimonials` },
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(aggregateRating) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <StarIcon className="w-4 h-4 fill-current" />
              <span>Rated 5/5 by Jamaican businesses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Jamaican Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From Kingston hotels to Montego Bay restaurants, hundreds of Jamaican
              businesses run payroll confidently with PayrollJamaica.
            </p>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">5.0 · 8 verified reviews</p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-gray-100 bg-gray-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <div className="text-3xl font-bold text-green-700 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`w-4 h-4 ${star <= t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative mb-6">
                    <QuoteIcon className="absolute -top-1 -left-1 w-6 h-6 text-green-200" />
                    <p className="text-gray-700 leading-relaxed pl-6">{t.quote}</p>
                  </blockquote>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                    <CheckCircleIcon className="w-3.5 h-3.5" />
                    {t.highlight}
                  </div>

                  {/* Author */}
                  <div className="flex items-start gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-700 font-bold text-sm">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}, {t.company}</div>
                      <div className="text-gray-400 text-xs">
                        {t.location} · {t.industry} · {t.employees}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industry coverage */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Every Jamaican Industry
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              PayrollJamaica is used across every major sector of the Jamaican economy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: BuildingIcon, label: "Hotels & Tourism" },
                { icon: UsersIcon, label: "Retail & Commerce" },
                { icon: ShieldCheckIcon, label: "Healthcare" },
                { icon: TrendingUpIcon, label: "Construction" },
                { icon: ClockIcon, label: "Manufacturing" },
                { icon: BuildingIcon, label: "Education" },
                { icon: UsersIcon, label: "Accounting Firms" },
                { icon: ShieldCheckIcon, label: "Transportation" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why businesses trust us */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Why Jamaican Businesses Choose PayrollJamaica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Jamaica-Specific Compliance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pre-configured with 2026 PAYE, NIS, NHT, and Education Tax rates.
                  Automatically updated when TAJ changes rates — no manual adjustments needed.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Run Payroll in Under 30 Minutes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most businesses complete monthly payroll in under 30 minutes.
                  Automated calculations, one-click payslip generation, bank file export.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Zero TAJ Penalties for Users</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our deadline reminders and compliance calendar ensure you never miss
                  the March 31 SO1 deadline or monthly PAYE remittance dates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-700 py-16 px-4 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Join Hundreds of Jamaican Businesses
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Start your free trial today. No credit card required. Get your first payroll done in under an hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/calculator"
                className="bg-white text-green-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-green-50 transition-colors text-center"
              >
                Try Free — No Credit Card
              </Link>
              <Link
                href="/pricing"
                className="border border-green-400 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-colors text-center"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-green-200 text-sm">
              Questions?{" "}
              <a href={siteConfig.links.whatsapp} className="underline hover:text-white">
                WhatsApp us
              </a>{" "}
              or{" "}
              <a href={siteConfig.links.email} className="underline hover:text-white">
                email hello@payrolljamaica.com
              </a>
            </p>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-600 mb-6 font-medium">Explore PayrollJamaica</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/payroll-software-jamaica", label: "Software Overview" },
                { href: "/payroll-services", label: "Managed Services" },
                { href: "/partners", label: "Partner Program" },
                { href: "/calculator", label: "Free Calculator" },
                { href: "/faq", label: "FAQ" },
                { href: "/blog", label: "Compliance Blog" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg hover:border-green-300 hover:text-green-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
