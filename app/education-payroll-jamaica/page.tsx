import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import FloatingCTA from "@/components/ui/floating-cta";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Link from "next/link";
import { safeJsonLd } from "@/lib/jsonld";

const baseDescription =
  "Payroll Jamaica is built for Jamaica's education sector — private schools, preparatory schools, early childhood institutions, HEART Trust training centers, tutoring businesses, and universities. Handle teacher salary scales, term-based contracts, part-time lecturer pay, pension contributions, and full PAYE, NIS, NHT, and Education Tax compliance. Built for Jamaican educational employers.";

export const metadata: Metadata = {
  title: "Education Sector Payroll Software Jamaica — Schools & Colleges | Payroll Jamaica",
  description: ensureMinDescription(
    "Payroll software for Jamaica's schools, colleges, and training centres. Handle teacher salary scales, term contracts, pension contributions, PAYE, NIS, NHT. Built for Jamaican educational employers.",
    baseDescription
  ),
  keywords: ensureMinKeywords([
    "education payroll Jamaica",
    "school payroll software Jamaica",
    "teacher payroll Jamaica",
    "private school payroll Jamaica",
    "university payroll Jamaica",
    "Jamaica education sector payroll",
    "HEART Trust payroll Jamaica",
    "preparatory school payroll Jamaica",
    "early childhood payroll Jamaica",
    "lecturer payroll Jamaica",
    "payroll for schools Jamaica",
    "teacher salary Jamaica payroll",
    "education employer payroll compliance Jamaica",
    "school PAYE NIS NHT Jamaica",
    "term contract payroll Jamaica",
  ]),
  alternates: {
    canonical: canonical("/education-payroll-jamaica"),
    languages: {
      "en-JM": canonical("/education-payroll-jamaica"),
      en: canonical("/education-payroll-jamaica"),
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Education Sector Payroll Software Jamaica — Schools & Colleges | Payroll Jamaica",
    description: baseDescription,
    url: canonical("/education-payroll-jamaica"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Education Payroll Software Jamaica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Payroll Software Jamaica | Payroll Jamaica",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
  },
};

const educationPainPoints = [
  {
    problem: "Teacher contracts vary — term-based, annual, and part-time",
    solution:
      "Jamaican schools employ full-time teachers, term-contract staff, and part-time tutors — each with different payroll treatment. Payroll Jamaica handles all contract types in one system with the correct PAYE and NIS treatment for each.",
  },
  {
    problem: "Salary scales and increments are a manual nightmare",
    solution:
      "Education sector employers in Jamaica use complex salary scales that increment annually. Payroll Jamaica stores each employee's scale position and automatically calculates the correct gross pay — no manual updates.",
  },
  {
    problem: "Academic year employment creates March 31 year-end complexity",
    solution:
      "Schools operating on academic-year contracts still face a March 31 tax year-end. Payroll Jamaica handles the mismatch — correct TD4 generation and SO1 filing for employees who may have worked only part of the tax year.",
  },
  {
    problem: "Pension contributions for education staff",
    solution:
      "Many private schools and educational institutions offer pension schemes. Payroll Jamaica tracks both employee and employer pension contributions, applies the correct tax treatment, and includes them in year-end returns.",
  },
];

const educationFeatures = [
  {
    title: "Salary scale management",
    desc: "Store salary bands and step increments for teaching and non-teaching staff. Payroll Jamaica calculates gross pay from the scale automatically — end of manual salary tables.",
  },
  {
    title: "Term and contract-based payroll",
    desc: "Process payroll for full-year teachers, summer-term only staff, and part-time lecturers. Each employment type gets the correct PAYE, NIS, and NHT treatment.",
  },
  {
    title: "Pension contribution tracking",
    desc: "Track employee and employer pension contributions alongside PAYE, NIS, NHT, and Education Tax. Payroll Jamaica includes pension in year-end reconciliation reports.",
  },
  {
    title: "TD4 certificates for all education staff",
    desc: "Generate compliant TD4 Annual Earnings Statements for every teacher, lecturer, and support staff member — including those who left mid-year.",
  },
  {
    title: "Non-teaching staff payroll",
    desc: "Administrators, groundskeepers, canteen workers, and security staff all handled in one payroll. Different pay structures, one compliant system.",
  },
  {
    title: "March 31 year-end filing",
    desc: "SO1 Annual Returns, TD4 summaries, and NHT reconciliation are generated automatically. Meet every March 31 deadline without last-minute stress.",
  },
];

const educationSectors = [
  {
    name: "Private & Preparatory Schools",
    desc: "Independent schools across Kingston, St. Andrew, and all parishes — from early childhood to grade 6",
  },
  {
    name: "High Schools & Sixth Forms",
    desc: "Private high schools, sixth form colleges, and CXC/CAPE preparation institutions",
  },
  {
    name: "Tertiary Institutions",
    desc: "Private colleges, community colleges, and vocational training centres affiliated with UWI or UTech",
  },
  {
    name: "HEART Trust / NTA",
    desc: "HEART Trust affiliated training organisations and vocational skills programmes",
  },
  {
    name: "Early Childhood Institutions",
    desc: "Basic schools, infant schools, day care centres, and nurseries registered with MOEYI",
  },
  {
    name: "Tutoring & Extra-Curricular",
    desc: "After-school tutoring businesses, music schools, sports academies, and extracurricular learning centres",
  },
];

const educationFaqs = [
  {
    q: "How does Payroll Jamaica handle teachers paid on salary scales?",
    a: "You set each teacher&apos;s salary scale and step in Payroll Jamaica. The system calculates their gross pay at each payroll run based on the scale. When a teacher increments, update their step and the new salary is applied automatically.",
  },
  {
    q: "We have part-time lecturers paid by the hour — can Payroll Jamaica handle this?",
    a: "Yes. Payroll Jamaica supports hourly, daily, and sessional pay structures. Enter the hours worked each pay period and the system calculates PAYE, NIS, NHT, and Education Tax correctly for part-time employment.",
  },
  {
    q: "Our school year doesn&apos;t match the Jamaica tax year — how does year-end work?",
    a: "Payroll Jamaica handles the academic year vs. tax year mismatch automatically. Regardless of when your school year starts or ends, the system correctly calculates each employee&apos;s full-year earnings for the April–March tax year and generates accurate TD4s and SO1 returns.",
  },
  {
    q: "Do we need to contribute to NHT for teachers?",
    a: "Yes. All employed Jamaican workers under pension age are subject to NHT contributions — 2% employee, 3% employer. Teachers are not exempt. Payroll Jamaica calculates and tracks NHT for every educator on your payroll.",
  },
  {
    q: "Can we manage pension deductions alongside statutory contributions?",
    a: "Yes. Payroll Jamaica supports occupational pension deductions as a pay component. Employee contributions are deducted pre-tax (within limits), employer contributions are tracked, and both are included in year-end reports.",
  },
];

export default function EducationPayrollJamaicaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1 w-full">
        {/* Hero */}
        <section className="w-full px-4 pt-24 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-sm text-muted-foreground mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
              Built for Jamaica&apos;s education sector
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-balance">
              Payroll for Jamaica&apos;s<br />schools & colleges
            </h1>
            <p className="text-xl text-muted-foreground font-medium text-balance max-w-2xl mx-auto">
              Salary scales, term contracts, pension contributions, PAYE, NIS, NHT — Payroll Jamaica handles every complexity of education sector payroll in Jamaica. So you can focus on teaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Start free for your school
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                Calculate teacher payroll
              </Link>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Education payroll challenges — solved
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {educationPainPoints.map((item) => (
                <div key={item.problem} className="rounded-xl border border-border bg-background p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✗</span>
                    <p className="font-semibold text-foreground">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="w-full px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Built for education sector payroll
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From early childhood institutions to tertiary colleges — Payroll Jamaica handles every pay structure in Jamaica&apos;s education sector.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationFeatures.map((f) => (
                <div key={f.title} className="rounded-xl border border-border p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education sectors */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Every type of Jamaica educational employer
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Private schools, colleges, training centres, early childhood — all covered.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {educationSectors.map((sector) => (
                <div key={sector.name} className="rounded-lg border border-border bg-background p-5">
                  <p className="font-semibold mb-1">{sector.name}</p>
                  <p className="text-sm text-muted-foreground">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* March 31 urgency for education */}
        <section className="w-full px-4 py-16 border-y border-amber-100 bg-amber-50/50">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 text-sm text-amber-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
              March 31, 2026 — Jamaica tax year-end
            </div>
            <h2 className="text-3xl font-semibold">Year-end filings for schools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even though your school year ends in July, Jamaica&apos;s tax year ends March 31. Schools must file SO1 Annual Returns, issue TD4 certificates, and complete NHT reconciliation by March 31 — for all staff paid between April 1, 2025 and March 31, 2026.
            </p>
            <Link
              href="/payroll-year-end-jamaica"
              className="inline-flex items-center justify-center rounded-lg bg-amber-600 text-white px-6 py-3 text-base font-medium hover:bg-amber-700 transition-colors mt-2"
            >
              See full March 31 checklist
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">Trusted across Jamaica&apos;s education sector</h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "285+", label: "Jamaica payroll and compliance guides published" },
                { stat: "100%", label: "Jamaica tax compliance built-in" },
                { stat: "1 day", label: "Setup time for most Jamaica schools" },
              ].map((s) => (
                <div key={s.stat} className="rounded-xl border border-border p-6">
                  <p className="text-4xl font-bold text-primary">{s.stat}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full px-4 py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10">
              Education payroll FAQ
            </h2>
            <div className="space-y-6">
              {educationFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="w-full px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Explore more of Payroll Jamaica</h2>
            <div className="grid sm:grid-cols-4 gap-4 text-sm text-center">
              <Link href="/calculator" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Calculator
              </Link>
              <Link href="/payroll-software-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Software Jamaica
              </Link>
              <Link href="/pricing" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Pricing Plans
              </Link>
              <Link href="/payroll-kingston-jamaica" className="p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                Payroll Kingston
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-semibold">
              Run payroll for your Jamaica school today
            </h2>
            <p className="text-muted-foreground">
              Teachers, lecturers, administrators, and support staff — all in one compliant payroll. Set up in less than a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={siteConfig.links.app}
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Get started free
              </Link>
              <Link
                href="/industries/healthcare"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              >
                See all industry solutions
              </Link>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "FAQPage",
                  mainEntity: educationFaqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.q,
                    acceptedAnswer: { "@type": "Answer", text: faq.a },
                  })),
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                    { "@type": "ListItem", position: 2, name: "Payroll Jamaica", item: `${siteConfig.url}/payroll-company-jamaica` },
                    { "@type": "ListItem", position: 3, name: "Education Payroll Jamaica", item: `${siteConfig.url}/education-payroll-jamaica` },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
