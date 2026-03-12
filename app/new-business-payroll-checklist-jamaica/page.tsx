import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/config/site";
import { CheckCircle2Icon } from "lucide-react";

const baseDescription =
  "Complete payroll setup checklist for new Jamaican businesses. Step-by-step guide to registering with TAJ, NIS, and NHT, setting up PAYE, hiring your first employee, and running your first payroll — all compliant with Jamaica's statutory requirements.";

export const metadata: Metadata = {
  title: "New Business Payroll Checklist Jamaica — First-Time Employer Guide 2026",
  description: ensureMinDescription(
    "Starting a business in Jamaica? Complete payroll checklist for first-time employers: register with TAJ, NIS, NHT, set up PAYE, hire your first employee, and run compliant payroll. Step-by-step 2026 guide.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "new business payroll Jamaica",
    "first-time employer Jamaica",
    "payroll setup Jamaica",
    "register employer TAJ",
    "register employer NIS Jamaica",
    "register employer NHT Jamaica",
    "how to set up payroll Jamaica",
    "new company payroll Jamaica",
    "start business payroll Jamaica",
    "employer registration Jamaica",
  ]),
  alternates: { canonical: canonical("/new-business-payroll-checklist-jamaica") },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "New Business Payroll Checklist Jamaica 2026",
    description: baseDescription,
    url: canonical("/new-business-payroll-checklist-jamaica"),
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "New Business Payroll Checklist",
      item: `${siteConfig.url}/new-business-payroll-checklist-jamaica`,
    },
  ],
};

const steps = [
  {
    number: 1,
    title: "Register your business with TAJ",
    items: [
      "Apply for a Taxpayer Registration Number (TRN) for your business at any Tax Administration Jamaica office or online",
      "Register as an employer with TAJ — this activates your PAYE and Education Tax filing obligations",
      "You'll receive an employer reference number for all future payroll filings",
    ],
  },
  {
    number: 2,
    title: "Register with NIS",
    items: [
      "Register as an employer with the National Insurance Scheme at the Ministry of Labour and Social Security",
      "You'll receive an NIS employer number",
      "All employees must be registered with NIS before their first day of work",
    ],
  },
  {
    number: 3,
    title: "Register with NHT",
    items: [
      "Register as an employer with the National Housing Trust",
      "You'll receive an NHT employer number",
      "NHT contributions begin immediately for all employees",
    ],
  },
  {
    number: 4,
    title: "Set up your payroll system",
    items: [
      "Choose payroll software built for Jamaica (like PayrollJamaica) that handles PAYE, NIS, NHT, and Education Tax automatically",
      "Configure your pay frequency (monthly, fortnightly, or weekly)",
      "Set up your bank account details for employee payments",
      "Enter the current statutory rates (or use software that has them pre-loaded)",
    ],
  },
  {
    number: 5,
    title: "Prepare for your first hire",
    items: [
      "Collect the employee's TRN (Taxpayer Registration Number)",
      "Collect the employee's NIS number (or register them if they don't have one)",
      "Have the employee complete a TD1 form for PAYE withholding",
      "Prepare an employment contract specifying salary, pay frequency, job title, and start date",
      "Determine the gross salary and calculate statutory deductions",
    ],
  },
  {
    number: 6,
    title: "Run your first payroll",
    items: [
      "Enter the employee's gross salary into your payroll system",
      "Verify the system correctly calculates: PAYE (25% above J$1,500,096/year threshold), NIS (3% employee + 3% employer), NHT (2% employee + 3% employer), Education Tax (2.25% employee + 3.5% employer)",
      "Generate the payslip showing gross pay, all deductions, and net pay",
      "Process payment to the employee's bank account",
    ],
  },
  {
    number: 7,
    title: "Remit statutory contributions",
    items: [
      "File and pay PAYE + Education Tax to TAJ by the 14th of the following month",
      "File and pay NIS contributions by the 14th of the following month",
      "File and pay NHT contributions by the 14th of the following month",
      "Keep copies of all remittance receipts for at least 7 years",
    ],
  },
  {
    number: 8,
    title: "Set up ongoing compliance",
    items: [
      "Set calendar reminders for the 14th of each month (remittance deadline)",
      "Set a reminder for March 31 (SO1 Annual Return deadline)",
      "Issue P24/TD4 certificates to employees at tax year-end",
      "Maintain organised payroll records for TAJ audits",
    ],
  },
];

export default function NewBusinessChecklistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Set Up Payroll for a New Business in Jamaica",
            description:
              "Step-by-step guide to setting up compliant payroll for a new Jamaican business — from TAJ registration to running your first payroll.",
            totalTime: "P7D",
            step: steps.map((s) => ({
              "@type": "HowToStep",
              position: s.number,
              name: s.title,
              text: s.items.join(". "),
            })),
          }),
        }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-28">
        <div className="max-w-3xl mx-auto py-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li>
                <Link href="/" className="underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">New Business Payroll Checklist</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            New Business Payroll Checklist — Jamaica 2026
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Starting a business in Jamaica and hiring your first employee?
            Follow this step-by-step checklist to set up compliant payroll from
            day one.
          </p>

          {/* Quick Reference */}
          <div className="border rounded-xl p-6 mb-10 bg-muted/30">
            <h2 className="font-semibold mb-3">
              Quick Reference: 2026 Statutory Rates
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">PAYE Threshold</div>
                <div className="font-semibold">J$1,500,096/yr</div>
              </div>
              <div>
                <div className="text-muted-foreground">NIS</div>
                <div className="font-semibold">3% + 3%</div>
              </div>
              <div>
                <div className="text-muted-foreground">NHT</div>
                <div className="font-semibold">2% + 3%</div>
              </div>
              <div>
                <div className="text-muted-foreground">Education Tax</div>
                <div className="font-semibold">2.25% + 3.5%</div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {step.number}
                  </span>
                  <h2 className="text-lg font-semibold">{step.title}</h2>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2Icon className="size-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center dark:from-emerald-950/30 dark:to-teal-950/30">
            <h2 className="text-xl font-semibold mb-3">
              Skip the manual setup
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              PayrollJamaica comes pre-loaded with all 2026 statutory rates.
              Add your first employee, run payroll, and generate compliant
              payslips — in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/calculator"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
              >
                Try Free Calculator
              </Link>
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
              >
                Get Started Free
              </a>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-10 border-t pt-8">
            <h3 className="font-semibold mb-4">Related Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/calculator" className="text-sm text-primary underline">
                Free Payroll Calculator
              </Link>
              <Link href="/minimum-wage-jamaica" className="text-sm text-primary underline">
                Jamaica Minimum Wage 2026
              </Link>
              <Link href="/glossary" className="text-sm text-primary underline">
                Payroll Glossary
              </Link>
              <Link href="/payroll-software-jamaica" className="text-sm text-primary underline">
                Payroll Software Jamaica
              </Link>
              <Link href="/blog" className="text-sm text-primary underline">
                Payroll Blog & Guides
              </Link>
              <Link href="/pricing" className="text-sm text-primary underline">
                Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
