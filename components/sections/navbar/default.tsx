// using plain <img> for natural aspect ratio
import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import Navigation from "../../ui/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = (<img src="/logo.png" alt="Payroll Jamaica" className="w-[170px] h-auto" />),
  name = "Payroll Jamaica",
  homeUrl = siteConfig.url,
  mobileLinks = [
    { text: "Features", href: "/features" },
    { text: "Industries", href: "/industries/hospitality" },
    { text: "Pricing", href: "/pricing" },
    { text: "Calculator", href: "/calculator" },
    { text: "Partners", href: "/partners" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ],
  actions = [
    { text: "Features", href: "/features", isButton: false },
    { text: "Pricing", href: "/pricing", isButton: false },
    { text: "Calculator", href: "/calculator", isButton: false },
    { text: "Partners", href: "/partners", isButton: false },
    { text: "Blog", href: "/blog", isButton: false },
    { text: "Contact", href: "/contact", isButton: false },
    { text: "Try Calculator", href: "/calculator", isButton: true, variant: "default" },
  ],
  showNavigation = false,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header className={cn("sticky top-0 z-50 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href={homeUrl} className="flex items-center gap-2">
              {logo}
            </a>
            {showNavigation && (customNavigation || <Navigation />)}
          </NavbarLeft>
          <NavbarRight>
            {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : action.href && action.href !== "#" ? (
                <a
                  key={index}
                  href={action.href}
                  className="hidden text-sm md:block"
                >
                  {action.text}
                </a>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  data-open-fillout="true"
                  className="hidden text-sm md:block"
                >
                  {action.text}
                </a>
              ),
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) =>
                    link.href === "#" ? (
                      <a
                        key={index}
                        href="#"
                        data-open-fillout="true"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <a
                        key={index}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {link.text}
                      </a>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
