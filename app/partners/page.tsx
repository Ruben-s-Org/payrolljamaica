import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import {
  HandshakeIcon,
  TrendingUpIcon,
  UsersIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  BarChart3Icon,
} from "lucide-react";

const baseDescription =
  "Join the PayrollJamaica Partner Program. Accounting firms and bookkeepers earn 15–25% recurring commission by referring clients to Jamaica's purpose-built payroll software. Free to join, no minimums.";

export const metadata: Metadata = {
  title: "Partner Program — Accountants & Bookkeepers",
  description: ensureMinDescription(
    "Earn recurring commission as a PayrollJamaica partner. Accounting firms and bookkeepers in Jamaica earn 15% referral or 25% reseller commission. Free to.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "payroll partner program Jamaica",
    "accounting firm referral Jamaica",
    "bookkeeper payroll partnership Jamaica",
    "payroll reseller Jamaica",
    "accountant payroll commission Jamaica",
    "payroll referral program Jamaica",
    "Jamaica accountant partner",
    "payroll software referral Jamaica",
    "ICAJ payroll partner",
    "Jamaica bookkeeper payroll",
    "payroll affiliate Jamaica",
    "accounting payroll integration Jamaica",
    "payroll software Jamaica",
    "payroll partner Jamaica",
    "accountant payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/partners"),
    languages: { "en-JM": canonical("/partners"), en: canonical("/partners") },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Partner Program for Accountants & Bookkeepers",
    description: baseDescription,
    url: canonical("/partners"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "PayrollJamaica Partner Program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Program — Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const tiers = [
  {
    name: "Referral Partner",
    commission: "15%",
    period: "on first 12 months",
    description: "Refer clients and earn passive income. No cost, no minimums.",
    features: [
      "Unique referral tracking link",
      "15% commission on referred client subscriptions",
      "White-label marketing materials",
      "Co-branded email templates",
      "Listed as Trusted Partner on our website",
    ],
    cta: "Become a Referral Partner",
    highlight: false,
  },
  {
    name: "Reseller Partner",
    commission: "25%",
    period: "recurring",
    description: "Manage your clients' payroll through PayrollJamaica and earn more.",
    features: [
      "Master dashboard for all client payrolls",
      "25% recurring commission for life of client",
      "Priority direct phone support",
      "Quarterly business reviews",
      'Featured in "Find an Accountant" directory',
    ],
    cta: "Apply as Reseller Partner",
    highlight: true,
  },
  {
    name: "Integration Partner",
    commission: "Custom",
    period: "arrangement",
    description: "For firms using QuickBooks, Xero, or other accounting software.",
    features: [
      "Custom QuickBooks / Xero integration support",
      "Co-developed compliance content",
      "Speaking opportunities at PayrollJamaica events",
      "Joint webinars and case studies",
      "Early access to new features",
    ],
    cta: "Discuss Integration Partnership",
    highlight: false,
  },
];

const benefits = [
  {
    icon: <TrendingUpIcon className="size-6 stroke-1" />,
    title: "Recurring revenue",
    description:
      "Earn commission every month your referred clients stay active. A single client with 20 employees generates approximately J$9,000/year in partner income.",
  },
  {
    icon: <ShieldCheckIcon className="size-6 stroke-1" />,
    title: "Reduce your compliance risk",
    description:
      "Stop manually calculating PAYE, NIS, NHT, and Education Tax for clients. PayrollJamaica handles statutory accuracy so you don't carry the liability.",
  },
  {
    icon: <UsersIcon className="size-6 stroke-1" />,
    title: "Better client relationships",
    description:
      "Recommend a tool that genuinely helps your clients. Automated payroll reduces their admin burden and ensures they never miss a TAJ deadline.",
  },
  {
    icon: <HeadphonesIcon className="size-6 stroke-1" />,
    title: "Dedicated partner support",
    description:
      "Reseller partners get priority support with a direct line — no ticket queue. Your clients get fast answers when they need them.",
  },
  {
    icon: <BarChart3Icon className="size-6 stroke-1" />,
    title: "Partner dashboard",
    description:
      "Track referrals, monitor client activity, and view commission earnings in real time from your partner dashboard.",
  },
  {
    icon: <HandshakeIcon className="size-6 stroke-1" />,
    title: "No cost to join",
    description:
      "Zero setup fees, no minimum referrals, no commitment. Sign up, share your link, and start earning when your referrals convert.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Partner Program
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Earn recurring income from Jamaica payroll
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Accounting firms and bookkeepers: refer clients to PayrollJamaica and earn 15–25% commission on every subscription. Free to join — no minimums required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
              >
                Join the Partner Program
              </a>
              <a
                href="#tiers"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-muted transition-colors"
              >
                See Commission Tiers
              </a>
            </div>
          </div>
        </section>

        {/* Social proof numbers */}
        <section className="w-full px-4 pb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "15–25%", label: "Commission rate" },
              { value: "J$0", label: "Cost to join" },
              { value: "800+", label: "Jamaica accounting firms" },
              { value: "J$9K+", label: "Avg annual per referral" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why partner */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">Why accountants partner with PayrollJamaica</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 border border-border rounded-xl">
                  <div className="text-foreground">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission tiers */}
        <section id="tiers" className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-6xl mx-auto py-16 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold">Partner tiers</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Choose the partnership level that fits your practice. Upgrade any time as your referral volume grows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`flex flex-col p-8 rounded-xl border ${
                    tier.highlight
                      ? "border-foreground bg-background shadow-lg"
                      : "border-border bg-background"
                  }`}
                >
                  {tier.highlight && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">{tier.commission}</span>
                    <span className="text-muted-foreground ml-2 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="text-foreground mt-0.5 shrink-0">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    data-open-fillout="true"
                    className={`inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-opacity ${
                      tier.highlight
                        ? "bg-foreground text-background hover:opacity-90"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl font-semibold text-center">How it works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Sign up for free",
                  desc: "Complete the partner application. No cost, no commitment. We review and approve most applications within 24 hours.",
                },
                {
                  step: "2",
                  title: "Get your referral link",
                  desc: "Access your partner dashboard with a unique tracking link and marketing materials to share with your clients.",
                },
                {
                  step: "3",
                  title: "Refer clients",
                  desc: "Share your link with clients who need payroll. When they subscribe, your commission starts automatically.",
                },
                {
                  step: "4",
                  title: "Earn every month",
                  desc: "Track your referrals and commission in real time. Payments are made monthly via bank transfer.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="shrink-0 size-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue calculator */}
        <section className="w-full px-4 pb-24 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 space-y-8">
            <h2 className="text-3xl font-semibold text-center">Partner revenue potential</h2>
            <p className="text-muted-foreground text-center">
              Based on average subscription of J$45,000/month per client at 15% referral commission.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Clients referred</th>
                    <th className="text-left py-3 px-4 font-semibold">Monthly commission</th>
                    <th className="text-left py-3 px-4 font-semibold">Annual income</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    { clients: "3", monthly: "J$20,250", annual: "J$243,000" },
                    { clients: "10", monthly: "J$67,500", annual: "J$810,000" },
                    { clients: "25", monthly: "J$168,750", annual: "J$2,025,000" },
                    { clients: "50", monthly: "J$337,500", annual: "J$4,050,000" },
                  ].map((row) => (
                    <tr key={row.clients} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground font-medium">{row.clients}</td>
                      <td className="py-3 px-4">{row.monthly}</td>
                      <td className="py-3 px-4">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 pb-24">
          <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
            <h2 className="text-3xl font-semibold">Ready to partner with PayrollJamaica?</h2>
            <p className="text-muted-foreground text-lg">
              Join Jamaica&apos;s growing network of accounting professionals who earn recurring income while giving their clients better payroll.
            </p>
            <a
              href="#"
              data-open-fillout="true"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now — It&apos;s Free
            </a>
            <p className="text-sm text-muted-foreground">
              Questions? Email{" "}
              <a href="mailto:partnerships@payrolljamaica.com" className="underline">
                partnerships@payrolljamaica.com
              </a>
            </p>
          </div>
        </section>

        {/* SEO content */}
        <div className="w-full px-4 pb-16">
          <div className="max-w-3xl mx-auto space-y-8 text-sm leading-7 text-muted-foreground">
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                Why should Jamaica accountants partner with a payroll software company?
              </h2>
              <p>
                Most Jamaican businesses still process payroll manually in Excel or use software designed for the US or UK that requires constant manual adjustment for PAYE, NIS, NHT, and Education Tax. Accountants who recommend PayrollJamaica help their clients eliminate compliance risk while earning recurring commission income — a win for both parties. The partner program costs nothing to join and requires no minimum referrals.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                How does the PayrollJamaica referral tracking work?
              </h2>
              <p>
                Each partner receives a unique referral link. When a business signs up through your link and subscribes, the system automatically tracks the referral and calculates your commission. You can monitor all referrals, conversions, and earnings in your partner dashboard. Commissions are paid monthly via bank transfer.
              </p>
            </section>
            <section>
              <h2 className="text-foreground text-xl font-semibold mb-3">
                What is the difference between a referral partner and a reseller partner?
              </h2>
              <p>
                Referral partners share their unique link and earn 15% commission for 12 months on each referred client. Reseller partners manage payroll for their clients directly through PayrollJamaica&apos;s platform, earning 25% recurring commission for as long as each client remains active. Reseller partners also get a master dashboard, priority support, and directory listing.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA
        headline="Partner with PayrollJamaica"
        text="Earn 15–25% recurring commission. Free to join, no minimum referrals."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "PayrollJamaica Partner Program",
            description: baseDescription,
            url: `${siteConfig.url}/partners`,
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "Partners", item: `${siteConfig.url}/partners` },
            ],
          }),
        }}
      />
    </div>
  );
}
