/**
 * Plausible Analytics custom event helper.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/plausible";
 *   trackEvent("Calculator Used", { frequency: "monthly", gross: 150000 });
 *
 * Events are no-ops when Plausible hasn't loaded (e.g. ad-blockers, SSR).
 */
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  // Plausible injects `window.plausible` once the script loads
  const plausible = (window as any).plausible;
  if (typeof plausible === "function") {
    plausible(name, { props });
  } else {
    // Queue events before the script has loaded
    ((window as any).plausible =
      (window as any).plausible ||
      function (...args: unknown[]) {
        ((window as any).plausible.q = (window as any).plausible.q || []).push(
          args,
        );
      })(name, { props });
  }
}
