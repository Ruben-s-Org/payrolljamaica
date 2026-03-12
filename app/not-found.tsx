import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar/default";
import Footer from "@/components/sections/footer/default";

export const metadata: Metadata = {
  title: "Page Not Found — Payroll Jamaica",
  description:
    "The page you are looking for does not exist. Try our free Jamaica payroll calculator or browse our blog for PAYE, NIS, NHT, and payroll compliance guides.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            404 — Page not found
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">
            This page doesn&apos;t exist
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you&apos;re looking for may have been moved or no longer exists.
            Try our calculator or browse our blog for Jamaica payroll guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              Free Payroll Calculator
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Browse Blog
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
