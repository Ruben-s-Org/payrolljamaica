import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import { safeJsonLd } from "@/lib/jsonld";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";

const baseDescription =
  "Step-by-step guide to registering for PAYE (Pay As You Earn) as an employer in Jamaica. Learn how to register with Tax Administration Jamaica (TAJ), get your TRN, set up your employer account, and start deducting and remitting PAYE correctly from day one. Includes forms required, deadlines, and common mistakes to avoid.";

export const metadata: Metadata = {
  title: "How to Register for PAYE in Jamaica — Employer Guide 2026",
  description: ensureMinDescription(
    "How to register for PAYE in Jamaica as an employer. Step-by-step guide: TRN registration, TAJ employer account setup, PAYE deduction rules, and first remittance deadline.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "how to register for PAYE Jamaica",
    "PAYE registration Jamaica",
    "register as employer Jamaica TAJ",
    "Jamaica PAYE employer registration",
    "TAJ employer registration Jamaica",
    "PAYE employer account Jamaica",
    "how to set up PAYE Jamaica",
    "new employer PAYE Jamaica",
    "TRN registration Jamaica employer",
    "Jamaica payroll registration",
    "employer tax registration Jamaica",
    "PAYE setup Jamaica 2026",
    "TAJ registration Jamaica",
    "Jamaica employer statutory registration",
    "SO1 registration Jamaica",
  ]),
  alternates: {
    canonical: canonical("/paye-registration-jamaica"),
    languages: {
      "en-JM": canonical("/paye-registration-jamaica"),
      en: canonical("/paye-registration-jamaica"),
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
    title: "How to Register for PAYE in Jamaica — Employer Guide 2026",
    description: baseDescription,
    url: canonical("/paye-registration-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "PAYE Registration Jamaica 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Register for PAYE Jamaica — Employer Guide",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function PayeRegistrationJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full px-4 pb-24">
        <div className="max-w-3xl mx-auto py-14">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
              <li><Link href="/" className="underline hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">PAYE Registration Jamaica</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Updated for 2026 — TAJ registration requirements
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            How to Register for PAYE in Jamaica
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            A complete step-by-step guide for new Jamaican employers. From getting your TRN to
            submitting your first PAYE remittance to Tax Administration Jamaica (TAJ).
          </p>

          {/* Who needs to register */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">Who must register for PAYE in Jamaica?</h2>
            <p>
              Every employer in Jamaica is legally required to register for PAYE as soon as they{" "}
              <strong className="text-foreground">hire their first employee</strong>. This applies to:
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Limited liability companies (Ltd)</li>
              <li>Sole traders with at least one employee</li>
              <li>Partnerships with paid staff</li>
              <li>Non-profit organisations and NGOs with employees</li>
              <li>Government agencies and statutory bodies</li>
            </ul>
            <p>
              PAYE registration is separate from registering the business itself with the Companies
              Office of Jamaica. You may already have a TRN (Taxpayer Registration Number) for your
              business — but you still need to register specifically as a <em>PAYE employer</em>
              with TAJ.
            </p>
          </section>

          {/* Step by step */}
          <section className="mb-10 space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">PAYE registration — step by step</h2>

            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Get a Taxpayer Registration Number (TRN)",
                  content: (
                    <>
                      <p>
                        Before registering for PAYE, your business must have a{" "}
                        <strong className="text-foreground">TRN</strong> — a unique 9-digit identifier
                        issued by TAJ. If your company is incorporated, you receive a TRN automatically
                        during company registration with the Companies Office. Sole traders apply directly
                        at a TAJ office.
                      </p>
                      <p className="mt-2">
                        <strong className="text-foreground">Where to apply:</strong> Any TAJ office
                        (Kingston, Montego Bay, Ocho Rios, Mandeville, etc.) or online at the TAJ portal
                        (eservices.taj.gov.jm).
                      </p>
                    </>
                  ),
                },
                {
                  step: "Step 2",
                  title: "Complete the Employer Registration Form (S02)",
                  content: (
                    <>
                      <p>
                        The <strong className="text-foreground">S02 form</strong> (Employer&apos;s
                        Registration) is the primary PAYE registration form. You will need:
                      </p>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Business TRN</li>
                        <li>Registered business name and address</li>
                        <li>Nature of business / industry code</li>
                        <li>Expected number of employees</li>
                        <li>Pay frequency (monthly, fortnightly, weekly)</li>
                        <li>Director/owner TRN and identification</li>
                        <li>Bank account details for direct debit (optional but recommended)</li>
                      </ul>
                    </>
                  ),
                },
                {
                  step: "Step 3",
                  title: "Submit to TAJ and receive your Employer Number",
                  content: (
                    <p>
                      Submit the completed S02 form to any TAJ Taxpayer Services office. TAJ will issue
                      your{" "}
                      <strong className="text-foreground">Employer Registration Number</strong>, which
                      you will use on all PAYE remittance forms, payslips, and annual returns. Registration
                      typically takes 1–3 business days at a TAJ office or can be done online via the
                      TAJ e-Services portal.
                    </p>
                  ),
                },
                {
                  step: "Step 4",
                  title: "Register each employee and collect P6 forms",
                  content: (
                    <>
                      <p>
                        Once registered as an employer, obtain a{" "}
                        <strong className="text-foreground">P6 form</strong> (Tax Deduction Card) for
                        each employee. The P6 tells you how much PAYE to deduct from each employee based
                        on their tax code and exemptions. New employees who have never worked in Jamaica
                        before will be issued a P6 showing the standard threshold; employees with prior
                        employment will transfer their P6 from the previous employer.
                      </p>
                      <p className="mt-2">
                        Each employee must also have their own personal TRN — it is the employer&apos;s
                        responsibility to collect TRN numbers from all staff before the first payroll.
                      </p>
                    </>
                  ),
                },
                {
                  step: "Step 5",
                  title: "Calculate and deduct PAYE from the first payroll",
                  content: (
                    <>
                      <p>
                        From your very first payroll run, you must deduct PAYE, NIS, NHT, and Education
                        Tax from each employee&apos;s gross salary. The current rates are:
                      </p>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>PAYE: 25% on income above J$1,500,096/year; 30% above J$6,000,000/year</li>
                        <li>NIS employee: 3% (ceiling J$5,000,000/year)</li>
                        <li>NHT employee: 2% (no ceiling)</li>
                        <li>Education Tax employee: 2.25% (no ceiling)</li>
                      </ul>
                      <p className="mt-2">
                        Use our{" "}
                        <Link href="/paye-calculator-jamaica" className="text-foreground underline hover:no-underline">
                          free PAYE calculator
                        </Link>{" "}
                        to compute deductions instantly, or{" "}
                        <Link href="/calculator" className="text-foreground underline hover:no-underline">
                          our full payroll calculator
                        </Link>{" "}
                        for all four deductions simultaneously.
                      </p>
                    </>
                  ),
                },
                {
                  step: "Step 6",
                  title: "Remit PAYE to TAJ by the 14th of the following month",
                  content: (
                    <>
                      <p>
                        PAYE must be remitted to TAJ by the{" "}
                        <strong className="text-foreground">14th of the month following the pay period</strong>.
                        Use the <strong className="text-foreground">P45 form</strong> (Monthly PAYE
                        Remittance) to report and pay each month&apos;s deductions.
                      </p>
                      <p className="mt-2">
                        Late payment incurs a 50% penalty on the unpaid tax plus interest. First-time
                        employers who miss the deadline should contact TAJ immediately — penalties can
                        sometimes be waived or reduced for genuine first-time errors.
                      </p>
                    </>
                  ),
                },
                {
                  step: "Step 7",
                  title: "File the annual SO1 return by March 31",
                  content: (
                    <p>
                      At the end of each tax year (Jamaica&apos;s tax year runs April 1 – March 31),
                      employers must file the{" "}
                      <strong className="text-foreground">SO1 annual employer return</strong> by March 31.
                      The SO1 summarises all PAYE deducted and remitted throughout the year for each
                      employee. Each employee also receives a{" "}
                      <strong className="text-foreground">P24 (P45 equivalent)</strong> showing their
                      annual earnings and deductions. See our{" "}
                      <Link href="/payroll-year-end-jamaica" className="text-foreground underline hover:no-underline">
                        Jamaica payroll year-end guide
                      </Link>{" "}
                      for the full March 31 checklist.
                    </p>
                  ),
                },
              ].map(({ step, title, content }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 pt-0.5">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {step}
                    </span>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-foreground font-semibold text-base">{title}</h3>
                    <div className="text-muted-foreground">{content}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents checklist */}
          <section className="mb-10 p-6 rounded-xl border border-border bg-muted/10">
            <h2 className="text-foreground text-xl font-semibold mb-4">Documents needed for PAYE registration</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Completed <strong className="text-foreground">S02 Employer Registration Form</strong></li>
              <li>Business <strong className="text-foreground">TRN</strong> (Taxpayer Registration Number)</li>
              <li>Certificate of Incorporation (for companies)</li>
              <li>Valid government-issued ID for all directors/owners</li>
              <li>Personal TRN for all directors/owners</li>
              <li>Business address proof (utility bill or lease agreement)</li>
              <li>Bank account details (for remittance payments)</li>
            </ul>
          </section>

          {/* Common mistakes */}
          <section className="mb-10 space-y-4 text-sm leading-7 text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold">Common PAYE registration mistakes in Jamaica</h2>
            <ol className="space-y-3 list-decimal list-inside">
              <li>
                <strong className="text-foreground">Waiting too long to register.</strong>{" "}
                PAYE deductions are required from the first payday. Late registration does not
                exempt you from back-paying deductions with interest.
              </li>
              <li>
                <strong className="text-foreground">Using the wrong TRN.</strong>{" "}
                Personal and business TRNs are different. Make sure you register using the
                <em> business</em> TRN, not the owner&apos;s personal TRN.
              </li>
              <li>
                <strong className="text-foreground">Not collecting P6 forms from employees.</strong>{" "}
                Without a P6, you must deduct PAYE at the emergency rate (25% on all earnings above
                the threshold) until the form is received.
              </li>
              <li>
                <strong className="text-foreground">Forgetting NIS, NHT, and Education Tax.</strong>{" "}
                PAYE registration is just the start. All four statutory deductions must be calculated,
                deducted, and remitted from day one.
              </li>
              <li>
                <strong className="text-foreground">Missing the monthly remittance deadline.</strong>{" "}
                The 14th of the following month is a hard deadline. Set a monthly payroll reminder
                immediately after registration.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="mb-10 p-8 rounded-xl border border-border bg-muted/10 text-center space-y-4">
            <h2 className="text-foreground text-xl font-semibold">Automate PAYE from day one</h2>
            <p className="text-sm text-muted-foreground">
              Payroll Jamaica calculates every statutory deduction — PAYE, NIS, NHT, and Education Tax —
              automatically. Get correct deductions from your very first payroll run, with TAJ-compliant
              remittance reports generated every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                data-open-fillout="true"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get started free
              </a>
              <Link
                href="/paye-calculator-jamaica"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold hover:bg-muted transition-colors text-foreground"
              >
                Try the PAYE calculator →
              </Link>
            </div>
          </section>

          {/* Related resources */}
          <section className="text-sm text-muted-foreground">
            <h2 className="text-foreground text-xl font-semibold mb-4">Related guides</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><Link href="/paye-calculator-jamaica" className="text-foreground underline hover:no-underline">PAYE Calculator Jamaica 2026</Link></li>
              <li><Link href="/new-business-payroll-checklist-jamaica" className="text-foreground underline hover:no-underline">New Business Payroll Checklist Jamaica</Link></li>
              <li><Link href="/payroll-year-end-jamaica" className="text-foreground underline hover:no-underline">Jamaica Payroll Year-End Guide (March 31 deadline)</Link></li>
              <li><Link href="/blog/how-to-register-for-paye-as-employer-jamaica-2026" className="text-foreground underline hover:no-underline">How to Register for PAYE as an Employer — Jamaica 2026</Link></li>
              <li><Link href="/payroll-software-jamaica" className="text-foreground underline hover:no-underline">Payroll Software Jamaica — Automate PAYE from Day One</Link></li>
              <li><Link href="/small-business-payroll-jamaica" className="text-foreground underline hover:no-underline">Small Business Payroll Jamaica</Link></li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />

      <FloatingCTA
        headline="Register for PAYE, then automate it"
        text="Once you're registered with TAJ, let Payroll Jamaica handle every PAYE, NIS, NHT, and Education Tax deduction automatically."
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
              { "@type": "ListItem", position: 2, name: "PAYE Registration Jamaica", item: canonical("/paye-registration-jamaica") },
            ],
          }),
        }}
      />

      {/* JSON-LD: HowTo — step-by-step PAYE registration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Register for PAYE in Jamaica (2026)",
            description: "Step-by-step guide for Jamaican employers to register for PAYE with Tax Administration Jamaica (TAJ).",
            step: [
              { "@type": "HowToStep", name: "Get a TRN", text: "Obtain a Taxpayer Registration Number (TRN) for your business from TAJ. Companies receive this automatically upon incorporation." },
              { "@type": "HowToStep", name: "Complete the S02 Employer Registration Form", text: "Fill in the S02 (Employer's Registration) form with your business TRN, registered name, address, industry code, expected number of employees, and pay frequency." },
              { "@type": "HowToStep", name: "Submit to TAJ", text: "Submit the S02 form to any TAJ Taxpayer Services office or via the TAJ e-Services portal. Receive your Employer Registration Number within 1–3 business days." },
              { "@type": "HowToStep", name: "Collect P6 forms from employees", text: "Obtain P6 (Tax Deduction Card) forms for each employee. Collect TRN numbers from all staff before the first payroll run." },
              { "@type": "HowToStep", name: "Calculate and deduct PAYE on first payroll", text: "Deduct PAYE, NIS, NHT, and Education Tax from each employee's gross salary from the first pay period. Use the current 2026 rates." },
              { "@type": "HowToStep", name: "Remit PAYE by the 14th", text: "Submit the P45 Monthly PAYE Remittance form and payment to TAJ by the 14th of the following month." },
              { "@type": "HowToStep", name: "File the annual SO1 return by March 31", text: "At fiscal year-end (March 31), file the SO1 annual employer return summarising all PAYE deducted and remitted throughout the year." },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I register for PAYE in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To register for PAYE in Jamaica: (1) Get a business TRN from TAJ. (2) Complete the S02 Employer Registration Form. (3) Submit to any TAJ Taxpayer Services office or online at eservices.taj.gov.jm. (4) Receive your Employer Registration Number. (5) Collect P6 forms from employees. Registration typically takes 1–3 business days.",
                },
              },
              {
                "@type": "Question",
                name: "What form do I use to register for PAYE in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The main form is the S02 (Employer's Registration Form), available from TAJ offices or the TAJ e-Services portal. You also need employee P6 (Tax Deduction Card) forms for each worker, and will use the P45 form for monthly PAYE remittances.",
                },
              },
              {
                "@type": "Question",
                name: "When must I register for PAYE in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You must register for PAYE as soon as you hire your first employee in Jamaica. PAYE deductions are required from the very first payroll run. There is no grace period — failing to register and deduct from day one results in penalties and back-payment obligations.",
                },
              },
              {
                "@type": "Question",
                name: "When must PAYE be paid to TAJ in Jamaica?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PAYE must be remitted to Tax Administration Jamaica (TAJ) by the 14th of the month following each pay period. Use the P45 Monthly PAYE Remittance form. Late payment attracts a 50% penalty plus interest.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a separate registration for NIS and NHT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NIS and NHT contributions are remitted using the same C7 form submitted to TAJ alongside Education Tax — quarterly for NIS/NHT/Education Tax. Once registered as a PAYE employer with TAJ, you use the same employer number for all statutory deduction filings. Some employers also register directly with the NIS office for maternity/injury claims processing.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
