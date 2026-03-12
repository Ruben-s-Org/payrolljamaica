declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export function isAnalyticsEnabled(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}

/** Send a custom GA4 event */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (!isAnalyticsEnabled() || typeof window === "undefined" || !window.gtag)
    return;
  window.gtag("event", eventName, params);
}

// ── Conversion events ──────────────────────────────────────────────

/** Calculator: user submits a calculation */
export function trackCalculatorUsage(params: {
  grossSalary: number;
  frequency: string;
}) {
  trackEvent("calculator_submit", {
    gross_salary: params.grossSalary,
    pay_frequency: params.frequency,
  });
}

/** Fillout form opened (CTA click) */
export function trackFilloutOpen(source?: string) {
  trackEvent("fillout_form_open", {
    source: source ?? "unknown",
  });
}

/** Blog post read — fired on scroll depth milestones */
export function trackBlogRead(params: {
  slug: string;
  scrollDepth: number;
}) {
  trackEvent("blog_read", {
    blog_slug: params.slug,
    scroll_depth: params.scrollDepth,
  });
}

/** Partners page view */
export function trackPartnersView() {
  trackEvent("partners_page_view");
}

/** Pricing section engagement */
export function trackPricingEngagement(action: string) {
  trackEvent("pricing_engagement", { action });
}

// ── UTM handling ───────────────────────────────────────────────────

/** Persist UTM params from URL into sessionStorage for attribution */
export function captureUtmParams() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];
  const utmData: Record<string, string> = {};
  let hasUtm = false;
  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) {
      utmData[key] = value;
      hasUtm = true;
    }
  }
  if (hasUtm) {
    sessionStorage.setItem("utm_params", JSON.stringify(utmData));
  }
}

/** Get stored UTM params for appending to events */
export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("utm_params");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
