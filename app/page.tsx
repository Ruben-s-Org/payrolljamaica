import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ensureMinDescription, ensureMinKeywords, canonical } from "@/lib/seo";

const homeBaseDescription = "Payroll Jamaica provides reliable, secure HR and payroll software built specifically for Jamaican businesses. Automate payroll calculations, PAYE, NIS, NHT, and other statutory deductions with confidence, generate compliant payslips, and stay up to date with local tax rules. Our platform streamlines employee management, leave tracking, and statutory reporting so you can save time, reduce errors, and focus on growing your business. Whether you are a small team or a scaling company, Payroll Jamaica gives you simple setup, guided workflows, and clear reporting designed for Jamaica’s regulatory environment. With local-first features, accurate contributions, and clear documentation, you get peace of mind every pay cycle. Explore integrations, role-based access, and audit-friendly reports that help you stay compliant and efficient.";

export const metadata: Metadata = {
  title: "Payroll Jamaica | HR and Payroll Software for Jamaican Businesses",
  description: ensureMinDescription(
    "Reliable, secure HR and payroll software for Jamaican businesses. Automate PAYE, NIS, NHT and statutory reporting with confidence.",
    homeBaseDescription
  ),
  keywords: ensureMinKeywords([
    "Payroll Jamaica",
    "Jamaica payroll software",
    "HR software Jamaica",
    "PAYE NIS NHT",
    "statutory compliance Jamaica",
    "Jamaica tax payroll",
    "Jamaica payslips",
    "Jamaica payroll calculations",
    "leave management Jamaica",
    "payroll automation Jamaica",
    "NHT contributions",
    "NIS deductions",
    "P45 P24 Jamaica",
    "small business payroll Jamaica",
    "employee management Jamaica",
  ]),
  alternates: { canonical: canonical("/") },
  openGraph: {
    title: "Payroll Jamaica | HR and Payroll Software for Jamaican Businesses",
    description: homeBaseDescription,
    url: canonical("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Jamaica | HR and Payroll Software for Jamaican Businesses",
    description: homeBaseDescription,
  },
};
 

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero />
      <Items />
      

      <Stats />
      

      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
