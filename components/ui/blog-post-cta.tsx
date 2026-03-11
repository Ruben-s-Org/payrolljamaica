import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface BlogPostCTAProps {
  variant?: "calculator" | "signup";
}

export default function BlogPostCTA({ variant = "calculator" }: BlogPostCTAProps) {
  if (variant === "signup") {
    return (
      <div className="mt-12 rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center dark:from-blue-950/30 dark:to-indigo-950/30">
        <h3 className="text-xl font-semibold">
          Stop doing payroll the hard way
        </h3>
        <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
          Join Jamaican businesses using PayrollJamaica to automate PAYE, NIS,
          NHT, payslips, and statutory reports — in minutes, not hours.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            data-open-fillout="true"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
          >
            Start Free — No Credit Card
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-2xl border bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center dark:from-emerald-950/30 dark:to-teal-950/30">
      <h3 className="text-xl font-semibold">
        See exactly what your employees take home
      </h3>
      <p className="text-muted-foreground mt-3 text-base max-w-lg mx-auto">
        Use our free Jamaica Payroll Calculator to instantly compute PAYE, NIS,
        NHT, and Education Tax for any salary — updated for 2025/2026 rates.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/calculator"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
        >
          Calculate Your Payroll Free
          <ArrowRightIcon className="size-4" />
        </Link>
        <a
          href="#"
          data-open-fillout="true"
          className="inline-flex h-11 items-center gap-2 rounded-lg border px-6 text-sm font-medium hover:bg-muted transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
