import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/blocks"],
      },
    ],
    sitemap: "https://payrolljamaica.com/sitemap.xml",
  };
}
