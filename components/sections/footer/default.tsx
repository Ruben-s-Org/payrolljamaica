import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
  openFillout?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = (<img src="/logo.png" alt="Payroll Jamaica" className="w-[170px] h-auto" />),
  name = "",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "/features" },
        { text: "Payroll Services", href: "/payroll-services" },
        { text: "Payroll Calculator", href: "/calculator" },
        { text: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Payroll Software Jamaica", href: "/payroll-software-jamaica" },
        { text: "Small Business Payroll", href: "/small-business-payroll-jamaica" },
        { text: "Payroll Outsourcing", href: "/payroll-outsourcing-jamaica" },
        { text: "HR Software Jamaica", href: "/hr-software-jamaica" },
        { text: "Payroll Company Jamaica", href: "/payroll-company-jamaica" },
      ],
    },
    {
      title: "Industries",
      links: [
        { text: "Hotel Payroll Jamaica", href: "/payroll-jamaica-hotels" },
        { text: "Restaurant Payroll Jamaica", href: "/payroll-jamaica-restaurants" },
        { text: "Church Payroll Jamaica", href: "/payroll-jamaica-churches" },
        { text: "Security Company Payroll", href: "/payroll-jamaica-security" },
        { text: "Construction", href: "/industries/construction" },
        { text: "Healthcare", href: "/industries/healthcare" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Partner Program", href: "/partners" },
        { text: "Statutory Deductions Jamaica", href: "/statutory-deductions-jamaica" },
        { text: "SO1 Return Guide", href: "/so1-return-jamaica" },
        { text: "March 31 Deadline", href: "/march-31-payroll-deadline-jamaica" },
        { text: "Minimum Wage Jamaica", href: "/minimum-wage-jamaica" },
        { text: "Payroll Glossary", href: "/glossary" },
        { text: "Compare Payroll Software", href: "/compare/payroll-software-jamaica" },
        { text: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "Email", href: siteConfig.links.email },
        { text: "Request Demo", href: "#", openFillout: true },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { text: "LinkedIn", href: siteConfig.links.linkedin },
        { text: "Facebook", href: siteConfig.links.facebook },
        { text: "Instagram", href: siteConfig.links.instagram },
        { text: "X / Twitter", href: siteConfig.links.twitter },
        { text: "WhatsApp Us", href: siteConfig.links.whatsapp },
      ],
    },
  ],
  copyright = "© 2026 Payroll Jamaica. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: siteConfig.url + "/privacy" },
    { text: "Terms of Service", href: siteConfig.url + "/terms" },
  ],
  showModeToggle = false,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)} role="contentinfo">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">{logo}</div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                    data-open-fillout={link.openFillout ? "true" : undefined}
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
