"use client";

import { useEffect, useRef } from "react";
import { trackBlogRead, isAnalyticsEnabled } from "@/lib/analytics";

export default function BlogScrollTracker({ slug }: { slug: string }) {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const thresholds = [25, 50, 75, 100];

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const t of thresholds) {
        if (pct >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          trackBlogRead({ slug, scrollDepth: t });
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  return null;
}
