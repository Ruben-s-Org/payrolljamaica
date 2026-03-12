"use client";

import { useEffect, useState } from "react";
import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import { ArrowRightIcon, AlertTriangle, Clock, FileText, Calculator } from "lucide-react";

const DEADLINE = new Date("2026-03-31T23:59:59-05:00");

function getDaysLeft() {
  const total = DEADLINE.getTime() - Date.now();
  if (total <= 0) return 0;
  return Math.floor(total / (1000 * 60 * 60 * 24));
}

const filingItems = [
  {
    icon: FileText,
    title: "SO1 Annual Return",
    description: "Statutory declaration of all employee earnings and deductions for the tax year",
  },
  {
    icon: Calculator,
    title: "NIS & NHT Reconciliation",
    description: "Final quarter contributions must match cumulative totals filed with TAJ",
  },
  {
    icon: FileText,
    title: "P24 Employer's Annual Return",
    description: "Summary of all PAYE income tax deducted and remitted during the tax year",
  },
];

export default function DeadlineUrgency() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    setDaysLeft(getDaysLeft());
  }, []);

  if (daysLeft === null || daysLeft <= 0) return null;

  const urgencyColor =
    daysLeft <= 7
      ? "from-red-600/20 to-red-900/10 border-red-500/30"
      : daysLeft <= 14
        ? "from-orange-600/20 to-orange-900/10 border-orange-500/30"
        : "from-amber-600/20 to-amber-900/10 border-amber-500/30";

  const badgeColor =
    daysLeft <= 7 ? "bg-red-600" : daysLeft <= 14 ? "bg-orange-600" : "bg-amber-600";

  return (
    <Section className="py-16 sm:py-20">
      <div className="max-w-container mx-auto px-4">
        <div className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${urgencyColor} p-8 sm:p-12`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Left: Countdown */}
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:min-w-[200px]">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Tax Year-End Deadline
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl sm:text-7xl font-bold text-foreground tabular-nums">
                  {daysLeft}
                </span>
                <span className="text-xl text-muted-foreground font-medium">days left</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>March 31, 2026</span>
              </div>
            </div>

            {/* Right: What needs filing */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Is your payroll ready for year-end?
              </h2>
              <p className="text-muted-foreground mb-6">
                Every Jamaican employer must file these returns by March 31. Late filing triggers penalties from TAJ.
              </p>
              <div className="space-y-3 mb-6">
                {filingItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="/calculator">
                    Check Your Numbers Free
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/march-31-payroll-deadline-jamaica">
                    Year-End Filing Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        </div>
      </div>
    </Section>
  );
}
