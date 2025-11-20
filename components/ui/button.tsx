"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground shadow-sm bg-linear-to-b from-primary/60 to-primary/100 dark:from-primary/100 dark:to-primary/70 border-t-primary",
        destructive:
          "bg-destructive/30 text-destructive-foreground shadow-xs",
        outline:
          "border border-input bg-background shadow-xs",
        glow: "glass-4 shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs",
        ghost: "",
        link: "text-foreground underline-offset-4",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded-md px-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  onClick,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  if (asChild) {
    // Do NOT pass onClick to Slot to avoid RSC issues.
    const { onClick: _discard, ...rest } = props as any;
    return (
      <Slot
        data-slot="button"
        data-open-fillout="true"
        className={cn(buttonVariants({ variant, size, className }))}
        {...rest}
      />
    );
  }

  return (
    <button
      data-slot="button"
      data-open-fillout="true"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
