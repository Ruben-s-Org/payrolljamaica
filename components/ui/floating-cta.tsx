'use client';

import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/plausible";

interface FloatingCTAProps {
  headline?: string;
  text?: string;
}

export default function FloatingCTA({ headline, text }: FloatingCTAProps) {
  const defaultHeadline = "Ready to modernize your payroll?";
  const defaultText = "Run payroll in minutes with the most advanced payroll software in Jamaica.";

  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className={`${isBlog ? "max-w-2xl" : "max-w-container"} mx-auto`}>
        <div className="rounded-xl border bg-background/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-base font-semibold">
                {headline || defaultHeadline}
              </div>
              <div className="text-sm text-muted-foreground">
                {text || defaultText}
              </div>
            </div>
            <div className="flex shrink-0 gap-3">
              <a
                href="/calculator"
                onClick={() => trackEvent("Floating CTA Clicked", { page: pathname || "/" })}
                className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
              >
                Try Free Calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
