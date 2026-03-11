import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";
import PayrollCalculator from "@/components/sections/calculator/default";

const baseDescription =
  "Use our free Jamaica payroll calculator to instantly compute PAYE income tax, NIS, NHT and Education Tax deductions for any gross monthly salary. Updated for 2025 rates set by the Ministry of Finance. Calculate your net take-home pay and see the full employer cost breakdown — no signup required. Supports monthly, fortnightly and weekly pay frequencies.";

export const metadata: Metadata = {
  title:
    "Jamaica Payroll Calculator 2025 — Free PAYE, NIS, NHT & Education Tax Calculator | Payroll Jamaica",
  description: ensureMinDescription(
    "Free Jamaica payroll calculator for 2025. Instantly compute PAYE income tax, NIS (3%), NHT (2%) and Education Tax (2.25%) deductions from any gross monthly salary. See your net take-home pay and employer cost breakdown — no signup needed.",
    baseDescription
  ),
  applicationName: siteConfig.name,
  keywords: ensureMinKeywords([
    "Jamaica payroll calculator",
    "PAYE calculator Jamaica",
    "NIS calculator Jamaica",
    "NHT calculator Jamaica",
    "Jamaica income tax calculator",
    "Jamaica salary calculator 2025",
    "PAYE calculation Jamaica 2025",
    "Education Tax Jamaica",
    "net pay calculator Jamaica",
    "take-home pay Jamaica",
    "employer cost calculator Jamaica",
    "statutory deductions Jamaica calculator",
    "Jamaica tax calculator",
    "payroll tax Jamaica",
    "Jamaica payroll deductions",
  ]),
  alternates: {
    canonical: canonical("/calculator"),
    languages: {
      "en-JM": canonical("/calculator"),
      en: canonical("/calculator"),
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
    title: "Jamaica Payroll Calculator 2025 — Free PAYE, NIS & NHT Calculator",
    description: baseDescription,
    url: canonical("/calculator"),
    type: "website",
    siteName: siteConfig.name,
    locale: "en_JM",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Jamaica Payroll Calculator — Payroll Jamaica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Jamaica Payroll Calculator 2025 — PAYE, NIS, NHT",
    description: baseDescription,
    images: [siteConfig.ogImage],
    site: "@payrolljamaica",
    creator: "@payrolljamaica",
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1">
        <PayrollCalculator />
      </main>
      <Footer />
    </div>
  );
}
