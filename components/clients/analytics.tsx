"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  isAnalyticsEnabled,
  captureUtmParams,
} from "@/lib/analytics";

export default function GoogleAnalytics() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  if (!isAnalyticsEnabled()) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}
