"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function DeadlineBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    // Check if dismissed this session
    if (sessionStorage.getItem("banner-march31-dismissed")) {
      setDismissed(true);
      return;
    }
    // Calculate days until March 31 2026
    const deadline = new Date("2026-03-31T23:59:59-05:00");
    const now = new Date();
    const diff = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff > 0 ? diff : 0);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem("banner-march31-dismissed", "1");
  }

  if (dismissed || daysLeft === null || daysLeft <= 0) return null;

  const urgency = daysLeft <= 7 ? "bg-red-600" : daysLeft <= 14 ? "bg-orange-600" : "bg-amber-600";

  return (
    <div className={`${urgency} text-white text-sm font-medium py-2.5 px-4 flex items-center justify-center gap-3 relative`}>
      <span className="text-lg" aria-hidden="true">⚠️</span>
      <span>
        Jamaica Tax Year ends <strong>March 31</strong> — only{" "}
        <strong>{daysLeft} day{daysLeft !== 1 ? "s" : ""}</strong> to file your SO1, NIS, and NHT returns.
      </span>
      <a
        href="/calculator"
        className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity ml-1"
      >
        Check your payroll now →
      </a>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
