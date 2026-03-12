"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const DEADLINE = new Date("2026-03-31T23:59:59-05:00");

function getTimeLeft() {
  const total = DEADLINE.getTime() - Date.now();
  if (total <= 0) return null;
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export function DeadlineBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("banner-march31-dismissed")) {
      setDismissed(true);
      return;
    }
    setTime(getTimeLeft());
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem("banner-march31-dismissed", "1");
  }

  if (dismissed || !time) return null;

  const urgency = time.days <= 7 ? "bg-red-600" : time.days <= 14 ? "bg-orange-600" : "bg-amber-600";

  return (
    <div className={`${urgency} text-white text-sm font-medium py-2 px-4 flex items-center justify-center gap-2 sm:gap-3 relative`}>
      <span className="hidden sm:inline text-lg" aria-hidden="true">⚠️</span>
      <span className="hidden sm:inline">
        March 31 deadline:
      </span>
      <div className="flex items-center gap-1 font-bold tabular-nums">
        <span className="bg-black/20 rounded px-1.5 py-0.5">{time.days}d</span>
        <span>:</span>
        <span className="bg-black/20 rounded px-1.5 py-0.5">{String(time.hours).padStart(2, "0")}h</span>
        <span>:</span>
        <span className="bg-black/20 rounded px-1.5 py-0.5">{String(time.minutes).padStart(2, "0")}m</span>
        <span>:</span>
        <span className="bg-black/20 rounded px-1.5 py-0.5">{String(time.seconds).padStart(2, "0")}s</span>
      </div>
      <span className="hidden md:inline">
        to file SO1, NIS &amp; NHT returns
      </span>
      <a
        href="/calculator"
        className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity ml-1"
      >
        Check now →
      </a>
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
