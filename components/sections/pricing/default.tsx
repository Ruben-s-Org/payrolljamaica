import { Building2, Rocket, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Simple, transparent pricing for every team",
  description = "Choose the plan that fits your business. No hidden fees — just accurate payroll for Jamaica.",
  plans = [
    {
      name: "Starter",
      icon: <Rocket className="size-4" />,
      description: "For small businesses with up to 10 employees",
      price: 3500,
      currency: "JMD $",
      pricePeriod: "per month",
      priceLabel: "Up to 10 employees",
      priceNote:
        "Everything you need to run payroll accurately and stay compliant.",
      cta: {
        variant: "glow",
        label: "Get Started",
        href: "#",
        dataAttributes: { "data-open-fillout": "true" },
      },
      features: [
        "Automated PAYE, NIS, NHT calculations",
        "Digital payslips",
        "Monthly statutory reports",
        "Email support",
      ],
      variant: "default",
    },
    {
      name: "Business",
      icon: <Users className="size-4" />,
      description: "For growing teams with up to 50 employees",
      price: 7500,
      currency: "JMD $",
      pricePeriod: "per month",
      priceLabel: "Up to 50 employees",
      priceNote:
        "Most popular — everything in Starter plus team management tools.",
      cta: {
        variant: "default",
        label: "Get Started",
        href: "#",
        dataAttributes: { "data-open-fillout": "true" },
      },
      features: [
        "Everything in Starter",
        "Multi-user access (up to 5 admin seats)",
        "Leave management",
        "HR document storage",
        "Priority support",
      ],
      variant: "glow-brand",
    },
    {
      name: "Enterprise",
      icon: <Building2 className="size-4" />,
      description: "For large organisations with 50+ employees",
      price: null,
      priceLabel: "Contact us",
      priceNote: "Custom pricing tailored to your organisation's needs.",
      cta: {
        variant: "glow",
        label: "Contact Sales",
        href: "mailto:sales@payrolljamaica.com",
      },
      features: [
        "Everything in Business",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "On-site training",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section id="pricing" className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                currency={plan.currency}
                pricePeriod={plan.pricePeriod}
                priceLabel={plan.priceLabel}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
