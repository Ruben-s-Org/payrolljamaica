import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll Jamaica is built for Jamaica's hospitality industry — hotels, resorts, restaurants, and tourism businesses. Automate service charge distribution, tip and gratuity calculations, shift overtime compliance, seasonal staff payroll, PAYE, NIS, and NHT for tipped workers. Our software handles the unique payroll challenges facing Jamaican hotel and hospitality employers, from union deductions to part-time staff scheduling. Trusted by properties across Kingston, Montego Bay, Negril, and Ocho Rios.";

export const metadata: Metadata = {
  title: "Hotel & Hospitality Payroll Jamaica | Software",
  description: ensureMinDescription(
    "Payroll software built for Jamaica's hotels, resorts, and restaurants. Automate service charge distribution, overtime compliance, seasonal staff payroll.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "hotel payroll software Jamaica",
    "hospitality payroll Jamaica",
    "tourism payroll Jamaica",
    "resort payroll Jamaica",
    "restaurant payroll Jamaica",
    "service charge distribution Jamaica",
    "tip calculation Jamaica payroll",
    "gratuity payroll Jamaica",
    "seasonal staff payroll Jamaica",
    "hospitality overtime Jamaica",
    "hotel PAYE Jamaica",
    "tipped worker NIS NHT Jamaica",
    "hotel staff payroll compliance",
    "Montego Bay hotel payroll",
    "Jamaica hospitality HR software",
  ]),
  alternates: {
    canonical: canonical("/industries/hospitality"),
    languages: {
      "en-JM": canonical("/industries/hospitality"),
      en: canonical("/industries/hospitality"),
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
    title: "Hotel & Hospitality Payroll Software Jamaica",
    description: baseDescription,
    url: canonical("/industries/hospitality"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Hotel & Hospitality Payroll Software Jamaica — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel & Hospitality Payroll Software Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

const features = [
  {
    title: "Service Charge Distribution",
    description:
      "Automatically calculate and distribute service charge pools across eligible staff based on your property's policy — whether split equally, by role, or by hours worked.",
  },
  {
    title: "Tip & Gratuity Calculations",
    description:
      "Track tips and gratuities separately from base wages. Our system handles the tax treatment of tipped income under Jamaican law, including correct PAYE and NIS treatment.",
  },
  {
    title: "Shift & Overtime Compliance",
    description:
      "Hotel and resort operations run 24/7. Automatically apply Jamaica's overtime rules for workers on split shifts, night shifts, and public holiday rosters.",
  },
  {
    title: "Seasonal & Part-Time Staff",
    description:
      "Easily onboard and offboard seasonal workers during peak tourism periods. Manage variable hours, contract end dates, and pro-rated statutory contributions.",
  },
  {
    title: "PAYE for Hospitality Workers",
    description:
      "Calculate PAYE accurately for staff with variable income — base wage, service charge, and overtime all factored in. Remittance reports ready for Tax Administration Jamaica.",
  },
  {
    title: "NIS & NHT for Tipped Workers",
    description:
      "NIS and NHT contributions must be calculated on total remuneration including service charge and gratuity. Payroll Jamaica handles this automatically so you stay compliant.",
  },
  {
    title: "Union Deductions",
    description:
      "Manage union dues for Bustamante Industrial Trade Union (BITU), National Workers Union (NWU), and other unions with automatic deduction and reporting.",
  },
  {
    title: "Multi-Department Payroll",
    description:
      "Run separate payroll for front desk, housekeeping, food & beverage, maintenance, and management — with consolidated reports for your finance team.",
  },
];

const challenges = [
  {
    title: "Complex wage structures",
    description:
      "Hospitality workers earn base wages, service charge allocations, tips, overtime, and allowances — all in the same pay period. Manual calculations create errors and compliance risk.",
  },
  {
    title: "High staff turnover",
    description:
      "The tourism industry sees significant staff movement, especially between high and low seasons. Payroll software that handles quick onboarding and accurate final pay calculations saves time and prevents disputes.",
  },
  {
    title: "Public holiday pay",
    description:
      "Jamaican law requires double time for work on public holidays. With Jamaica's 13 national holidays, hotels and restaurants must track holiday work carefully to avoid underpayment claims.",
  },
  {
    title: "Statutory remittance deadlines",
    description:
      "PAYE, NIS, NHT, and Education Tax must be remitted on time every month. Missing deadlines triggers penalties. Payroll Jamaica generates remittance schedules and payment summaries automatically.",
  },
];

export default function HospitalityPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: canonical("/industries") },
      { "@type": "ListItem", position: 3, name: "Hospitality", item: canonical("/industries/hospitality") },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hotel & Hospitality Payroll Software Jamaica",
    description:
      "Payroll software for Jamaican hotels, resorts, restaurants, and tourism businesses. Automates service charge distribution, overtime compliance, PAYE, NIS, and NHT for hospitality workers.",
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
    url: canonical("/industries/hospitality"),
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
              Payroll software built for Jamaica&apos;s hospitality industry
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From service charge distribution to seasonal staff management, Payroll Jamaica handles every
              payroll complexity that hotels, resorts, and restaurants face. Stay fully compliant with
              PAYE, NIS, NHT, and Jamaican labour law — without the manual work.
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
              Everything hospitality payroll needs, built in
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Payroll Jamaica is purpose-built to handle the wage structures, statutory requirements,
              and compliance demands of Jamaica&apos;s tourism and hospitality sector.
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

        {/* Industry Challenges */}
        <section className="w-full px-4 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Unique payroll challenges in Jamaican hospitality
            </h2>
            <p className="text-muted-foreground mb-10">
              Running payroll for a hotel, resort, or restaurant in Jamaica involves complexities that
              generic payroll software simply wasn&apos;t designed for. Here&apos;s what Payroll Jamaica solves.
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
                How is service charge taxed in Jamaica?
              </h2>
              <p>
                Under Jamaican law, service charges collected from guests and distributed to employees
                are treated as part of the employee&apos;s gross remuneration for tax purposes. This means
                service charge income is subject to PAYE income tax at the same rates as regular wages —
                25% on income above the annual income tax threshold of JMD $1,500,096, and 30% on
                amounts above JMD $6,000,000.
              </p>
              <p className="mt-3">
                Service charge must also be included in the gross earnings used to calculate NIS (3%),
                NHT (2%), and Education Tax (2.25%) employee deductions. Employers must also pay their
                matching NIS (3%), NHT (3%), and Education Tax (3.5%) contributions on service charge
                income. Hotels that exclude service charge from statutory contribution calculations
                are non-compliant and risk penalties from Tax Administration Jamaica (TAJ).
              </p>
              <p className="mt-3">
                Payroll Jamaica automatically includes service charge in all statutory calculations,
                so your remittance reports are always accurate and compliant — no manual adjustments needed.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Overtime rules for hotel staff in Jamaica
              </h2>
              <p>
                Jamaica&apos;s Employment (Termination and Redundancy Payments) Act and associated labour
                regulations set out overtime entitlements for workers. For most hospitality workers,
                overtime is payable at <strong className="text-foreground">1.5 times the regular rate</strong>{" "}
                for hours worked beyond the standard working week (typically 40 hours). Work performed
                on public holidays — of which Jamaica has 13 — is generally paid at{" "}
                <strong className="text-foreground">double time</strong>.
              </p>
              <p className="mt-3">
                Hotels and restaurants operate around the clock, meaning staff regularly work nights,
                split shifts, and public holidays. Tracking and calculating these premiums manually is
                error-prone. Payroll Jamaica applies the correct overtime multipliers automatically
                based on your pay structure and the hours logged, giving employees accurate payslips
                and protecting your business from underpayment claims.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How to calculate payroll for seasonal workers in Jamaica
              </h2>
              <p>
                Jamaica&apos;s tourism industry has distinct peak seasons — winter (December to April) when
                North American and European visitors are most active, and summer (July to August).
                Many hotels and attractions rely on seasonal staff to manage these surges. Calculating
                payroll for seasonal workers in Jamaica requires careful attention to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Pro-rated NIS contributions based on actual earnings during the employment period</li>
                <li>NHT contributions on all earnings regardless of contract length</li>
                <li>PAYE withheld correctly even for short-tenure employees</li>
                <li>Correct calculation of any accrued vacation leave pay on termination</li>
                <li>Final pay processing that includes all outstanding wages and entitlements</li>
              </ul>
              <p className="mt-3">
                Payroll Jamaica handles seasonal contracts from start to finish — onboarding, payroll
                processing during the season, and clean final pay calculations when the contract ends.
                Your HR records stay up to date and your statutory filings remain accurate.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Union deductions for hospitality workers in Jamaica
              </h2>
              <p>
                Many hotel and hospitality workers in Jamaica are members of trade unions, most commonly
                the Bustamante Industrial Trade Union (BITU) or the National Workers Union (NWU).
                Collective bargaining agreements negotiated by these unions govern wages, overtime,
                leave entitlements, and other benefits at many major properties.
              </p>
              <p className="mt-3">
                As an employer, you are typically required to deduct union dues from the wages of
                union members and remit them to the union on a scheduled basis. Payroll Jamaica
                supports configurable union deductions per employee, with remittance summaries
                generated each pay period so you always have documentation of dues collected.
              </p>
            </div>

            <div>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Ready to simplify hospitality payroll in Jamaica?
              </h2>
              <p>
                Payroll Jamaica is used by hotels, all-inclusive resorts, restaurants, tour operators,
                and hospitality management groups across Jamaica. Whether you manage 10 staff at a
                boutique guesthouse or 500 employees at a large resort property, our software scales
                to fit your operation.
              </p>
              <p className="mt-3">
                Explore our <a href="/features" className="text-foreground underline hover:no-underline">full feature set</a> or
                learn about our <a href="/payroll-services" className="text-foreground underline hover:no-underline">managed payroll services</a> if
                you&apos;d prefer to outsource your payroll entirely.
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
              Stop doing hospitality payroll manually
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Service charge, overtime, seasonal staff, union dues — Payroll Jamaica handles it all.
              Get compliant, accurate payroll every cycle.
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
        headline="Hospitality payroll made simple"
        text="Automate service charge, overtime, PAYE, NIS, and NHT for your hotel or restaurant. Built for Jamaica."
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
