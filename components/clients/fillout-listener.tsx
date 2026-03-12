"use client";

import { useEffect } from "react";
import { useFillout } from "@/components/clients/fillout-provider";
import { trackEvent } from "@/lib/plausible";
import { trackFilloutOpen } from "@/lib/analytics";

export default function FilloutListener() {
  const { open } = useFillout();

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest('[data-open-fillout="true"]') as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      // Stop Next/Link navigation
      (e as any).stopImmediatePropagation?.();
      (e as any).stopPropagation?.();
      const source = el.getAttribute("data-fillout-source") ?? el.textContent?.trim().slice(0, 50) ?? "cta";
      trackFilloutOpen(source);
      open();
      trackEvent("Signup Form Opened", {
        source: el.textContent?.trim().slice(0, 50) || "unknown",
      });
    };

    document.addEventListener("click", handler, true);
    document.addEventListener("pointerdown", handler, true);
    document.addEventListener("touchstart", handler, true);
    document.addEventListener("keydown", (e: any) => {
      if (e.key === "Enter" || e.key === " ") handler(e);
    }, true);
    return () => {
      document.removeEventListener("click", handler, true);
      document.removeEventListener("pointerdown", handler, true);
      document.removeEventListener("touchstart", handler, true);
      document.removeEventListener("keydown", handler as any, true);
    };
  }, [open]);

  return null;
}
