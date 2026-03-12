import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";
import FilloutProvider from "@/components/clients/fillout-provider";
import FilloutListener from "@/components/clients/fillout-listener";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { DeadlineBanner } from "@/components/ui/deadline-banner";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Payroll Jamaica",
    "Jamaica payroll software",
    "HR software Jamaica",
    "PAYE NIS NHT",
    "Statutory compliance Jamaica",
    "PAYE calculator Jamaica",
    "NIS calculator Jamaica",
    "NHT contributions Jamaica",
    "payroll software Jamaica",
    "Jamaica payroll taxes",
    "payslips Jamaica",
    "small business payroll Jamaica",
    "leave management Jamaica",
    "employee management Jamaica",
    "payroll automation Jamaica",
    "education tax Jamaica",
    "statutory deductions Jamaica",
    "cloud payroll Jamaica",
    "HRIS Jamaica",
  ],
  authors: [
    {
      name: "Payroll Jamaica",
      url: siteConfig.url,
    },
  ],
  creator: "Payroll Jamaica",
  openGraph: {
    type: "website",
    locale: "en_JM",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@payrolljamaica",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-JM" style={{ colorScheme: "dark" }} className="dark">
      <head>
        <Script
          defer
          data-domain="payrolljamaica.com"
          src="https://plausible.io/js/script.file-downloads.outbound-links.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>
          <FilloutProvider>
            <DeadlineBanner />
            {children}
            <FilloutListener />
            <WhatsAppButton />
          </FilloutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
