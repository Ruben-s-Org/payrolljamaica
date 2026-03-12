import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll Jamaica is built for Jamaica's retail businesses — supermarkets, pharmacies, clothing stores, hardware shops, and multi-branch retail chains. Manage part-time and full-time staff payroll, commission calculations, peak-period overtime, and statutory compliance with PAYE, NIS, and NHT. Consolidate payroll across multiple store locations into a single platform. Trusted by retail employers across Kingston, Spanish Town, Portmore, and Montego Bay.";

export const metadata: Metadata = {
  title: "Retail Payroll Software Jamaica | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's retail stores, supermarkets, and shops. Manage part-time staff, commission pay, peak-period overtime, and PAYE, NIS, NHT.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "retail payroll Jamaica",
    "retail store payroll software Jamaica",
    "supermarket payroll Jamaica",
    "shop payroll Jamaica",
    "retail staff payroll Jamaica",
    "commission payroll Jamaica",
    "part-time staff payroll Jamaica",
    "multi-branch payroll Jamaica",
    "retail overtime Jamaica",
    "Christmas payroll Jamaica retail",
    "retail PAYE NIS NHT Jamaica",
    "payroll software for shops Jamaica",
    "retail HR software Jamaica",
    "payroll for small retail Jamaica",
    "Jamaica retail compliance payroll",
  ]),
  alternates: {
    canonical: canonical("/industries/retail"),
    languages: {
      "en-JM": canonical("/industries/retail"),
      en: canonical("/industries/retail"),
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
    title: "Retail Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/industries/retail"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Retail Payroll Software Jamaica — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail Payroll Software Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const features = [
  {
    title: "Part-Time & Full-Time Staff",
    description:
      "Run payroll for both part-time hourly staff and salaried full-timers in the same cycle. Statutory deductions calculated correctly for each employment type.",
  },
  {
    title: "Commission Pay Calculations",
    description:
      "Automatically calculate commission-based earnings for sales staff. Add commission to base wages and apply correct PAYE and statutory contributions on total remuneration.",
  },
  {
    title: "Peak Period Overtime",
    description:
      "Christmas, Easter, and back-to-school seasons mean longer hours. Payroll Jamaica applies Jamaican overtime rules automatically so staff are paid correctly during your busiest periods.",
  },
  {
    title: "Multi-Branch Consolidation",
    description:
      "Manage payroll for every store location from a single account. Generate branch-level reports and consolidated company-wide summaries for your finance team.",
  },
  {
    title: "PAYE Compliance",
    description:
      "Accurate PAYE calculation for all retail staff — including those with variable commission income. Remittance summaries ready for Tax Administration Jamaica every month.",
  },
  {
    title: "NIS & NHT Deductions",
    description:
      "NIS (3%), NHT (2%), and Education Tax (2.25%) calculated on total gross earnings including commission. Employer matching contributions tracked and reported automatically.",
  },
  {
    title: "Statutory Leave Management",
    description:
      "Track vacation leave, sick leave, and maternity/paternity leave entitlements for all staff. Automatic leave pay calculations included in payslips.",
  },
  {
    title: "Employee Self-Service",
    description:
      "Give retail staff access to their own payslips and leave balances online. Reduce payslip queries to your HR team and improve transparency across the workforce.",
  },
];

const challenges = [
  {
    title: "Variable hours and income",
    description:
      "Retail workers often have irregular hours, especially part-timers. Calculating PAYE correctly when income varies week to week is complex — Payroll Jamaica handles it automatically.",
  },
  {
    title: "Commission compliance",
    description:
      "Commission-based salespeople need their commissions taxed correctly alongside base wages. Many retail employers miscalculate PAYE on commission income, creating liability.",
  },
  {
    title: "Peak season staffing surges",
    description:
      "Christmas and Easter bring large temporary workforce additions. Onboarding seasonal staff, processing their payroll correctly, and managing final pay calculations require a system built for scale.",
  },
  {
    title: "Multi-location payroll complexity",
    description:
      "Running payroll across several store branches manually leads to inconsistencies, missed deductions, and consolidated reporting headaches. A centralised platform eliminates these problems.",
  },
];

export default function RetailPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: canonical("/industries") },
      { "@type": "ListItem", position: 3, name: "Retail", item: canonical("/industries/retail") },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Retail Payroll Software Jamaica",
    description:
      "Payroll software for Jamaican retail stores, supermarkets, and multi-branch retail businesses. Handles commission pay, part-time staff, overtime, PAYE, NIS, and NHT compliance.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Jamaica",
    },
    serviceType: "Payroll Software",
    url: canonical("/industries/retail"),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">

        {/* Hero */}
        <section className="w-full px-4 pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Industry Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Payroll software for Jamaica&apos;s retail businesses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you run a single shop or a chain of supermarkets, Payroll Jamaica handles
              commission pay, part-time staff, peak-season overtime, and full statutory compliance —
              PAYE, NIS, NHT, and Education Tax — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/calculator"
                className="inline-block bg-foreground text-background font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <a
                href="/calculator"
                className="inline-block border border-border font-semibold px-8 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                Calculate payroll deductions
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Built for how retail businesses pay their people
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Retail payroll involves combinations of hourly, salaried, and commission-based pay
              across multiple staff types. Payroll Jamaica handles all of it — compliantly and automatically.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-muted/40 rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Payroll challenges unique to Jamaican retail
            </h2>
            <p className="text-muted-foreground mb-10">
              Generic payroll tools weren&apos;t designed for the realities of retail in Jamaica.
              Here&apos;s what makes retail payroll complicated — and how Payroll Jamaica solves it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((c) => (
                <div key={c.title} className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="w-full px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-10 text-sm leading-7 text-muted-foreground">

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How to manage payroll for a retail store in Jamaica
              </h2>
              <p>
                Managing payroll for a retail store in Jamaica involves more than simply paying
                wages. Every pay cycle, employers must correctly calculate and withhold PAYE income
                tax, NIS contributions (3% employee, 3% employer), NHT contributions (2% employee,
                3% employer), and Education Tax (2.25% employee, 3.5% employer) for every employee
                on staff — whether full-time, part-time, or temporary.
              </p>
              <p className="mt-3">
                For staff who earn commission, the commission must be added to base wages before
                calculating statutory deductions. This is where many retail employers make mistakes
                — applying deductions only to the base wage and ignoring commission income, which
                creates underpayment of PAYE and NIS and exposes the business to penalties.
              </p>
              <p className="mt-3">
                Payroll Jamaica automates the entire process. You enter basic pay and commission
                amounts, and the system calculates all deductions, generates payslips, and produces
                statutory remittance reports for Tax Administration Jamaica (TAJ), NHT, and NIS.
                Use our <a href="/calculator" className="text-foreground underline hover:no-underline">payroll calculator</a> to
                see an instant breakdown of deductions for any salary level.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Overtime rules for retail workers in Jamaica
              </h2>
              <p>
                Under Jamaican labour law, non-managerial employees are entitled to overtime pay
                when they work beyond their contracted hours or beyond 40 hours per week. The
                standard overtime rate is <strong className="text-foreground">1.5 times the regular hourly rate</strong>.
                For work on public holidays, the rate is typically{" "}
                <strong className="text-foreground">double time (2x)</strong>.
              </p>
              <p className="mt-3">
                For retail stores, this is particularly important during the Christmas shopping
                season (November to January), Easter weekend, and back-to-school periods when
                extended trading hours are common. Many retail employers also bring in temporary
                staff for these peaks, who are equally entitled to overtime if they exceed standard
                hours.
              </p>
              <p className="mt-3">
                Payroll Jamaica tracks hours worked per employee and automatically flags and
                calculates overtime. Your payslips will accurately reflect regular and overtime
                hours, protecting you from disputes and compliance issues.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Payroll for part-time staff in Jamaica
              </h2>
              <p>
                Part-time retail workers in Jamaica are entitled to the same statutory deductions
                and protections as full-time employees, proportionate to their earnings. PAYE is
                calculated on an annualised basis — if a part-time worker&apos;s income exceeds the
                annual income tax threshold of JMD $1,500,096 when annualised, PAYE must be withheld.
              </p>
              <p className="mt-3">
                NIS contributions are required on all employment income with no minimum threshold
                — so even workers earning low part-time wages will have NIS deducted. NHT
                contributions similarly apply to all earnings.
              </p>
              <p className="mt-3">
                Payroll Jamaica handles part-time payroll correctly regardless of pay frequency —
                weekly, fortnightly, or monthly. The system annualises income to determine the
                correct PAYE withholding and applies NIS, NHT, and Education Tax to actual earnings
                in each period.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Multi-branch payroll for Jamaican retail chains
              </h2>
              <p>
                Retail chains with multiple locations across Jamaica face an additional challenge:
                consolidating payroll data from different branches while maintaining location-level
                reporting for management purposes. Without a centralised system, this typically
                means collecting spreadsheets from each branch manager, manually reconciling figures,
                and hoping no errors crept in.
              </p>
              <p className="mt-3">
                Payroll Jamaica allows you to manage all branches under a single account with
                department or location tags applied to each employee. Run payroll for all locations
                simultaneously, or process branches individually. View branch-level cost reports
                and company-wide summaries from the same dashboard.
              </p>
              <p className="mt-3">
                Learn more about our <a href="/features" className="text-foreground underline hover:no-underline">full platform features</a> or
                explore our <a href="/payroll-services" className="text-foreground underline hover:no-underline">managed payroll services</a> for
                retailers who prefer to outsource payroll processing entirely.
              </p>
              <a
                href="/calculator"
                className="inline-block mt-4 text-foreground font-semibold underline hover:no-underline"
              >
                Get started with Payroll Jamaica →
              </a>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full px-4 py-16 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Payroll your retail team can count on
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Part-time staff, commission pay, peak-season overtime, multiple branches — Payroll
              Jamaica handles every scenario. Compliant, accurate, and automatic.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-block bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book a free demo
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingCTA
        headline="Retail payroll made simple"
        text="Commission pay, part-time staff, multi-branch management — all handled automatically. Built for Jamaica."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
    </div>
  );
}
