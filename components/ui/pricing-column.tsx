import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
        "glow-brand":
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  badge?: string;
  description: string;
  price: number | null;
  priceNote: string;
  currency?: string;
  pricePeriod?: string;
  priceLabel?: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
    dataAttributes?: Record<string, string>;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  badge,
  description,
  price,
  priceNote,
  currency = "$",
  pricePeriod,
  priceLabel,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-brand",
        )}
      />
      {badge && (
        <div className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
          {badge}
        </div>
      )}
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold">
            {icon && (
              <div className="text-muted-foreground flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[220px] text-sm">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
          {price !== null ? (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-muted-foreground text-2xl font-bold">
                  {currency}
                </span>
                <span className="text-6xl font-bold">
                  {price.toLocaleString()}
                </span>
              </div>
              <div className="flex min-h-[40px] flex-col">
                {pricePeriod && <span className="text-sm">{pricePeriod}</span>}
                {priceLabel && (
                  <span className="text-muted-foreground text-sm">
                    {priceLabel}
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="flex min-h-[72px] items-center">
              <span className="text-4xl font-bold">
                {priceLabel || "Contact us"}
              </span>
            </div>
          )}
        </div>
        <Button variant={cta.variant} size="lg" asChild>
          <Link href={cta.href} {...cta.dataAttributes}>
            {cta.label}
          </Link>
        </Button>
        <p className="text-muted-foreground min-h-[40px] max-w-[220px] text-sm">
          {priceNote}
        </p>
        <hr className="border-input" />
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CircleCheckBig className="text-muted-foreground size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { pricingColumnVariants };
