"use client";

import { useState, FormEvent } from "react";
import { MailIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { trackEvent } from "@/lib/plausible";

export default function BlogEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), tag: "blog-subscriber" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");

      trackEvent("Blog Email Captured");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="my-10 rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-950/30">
        <CheckCircle2Icon className="mx-auto size-8 text-green-600 dark:text-green-400 mb-3" />
        <p className="font-semibold text-green-800 dark:text-green-300">
          You&apos;re subscribed!
        </p>
        <p className="text-sm text-green-700 dark:text-green-400 mt-1">
          We&apos;ll send you payroll tips and compliance updates for Jamaica.
        </p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border bg-muted/30 p-6 sm:p-8">
      <div className="flex items-start gap-3 mb-3">
        <MailIcon className="size-5 text-primary mt-0.5 shrink-0" />
        <div>
          <h4 className="font-semibold text-base">
            Get Jamaica payroll updates in your inbox
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            Tax rate changes, compliance deadlines, and practical guides —
            written for Jamaican employers. Free, no spam.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-4">
        <label htmlFor="blog-email-capture" className="sr-only">
          Email address
        </label>
        <input
          id="blog-email-capture"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      {status === "error" && errorMsg && (
        <p className="text-sm text-red-600 dark:text-red-400 mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
