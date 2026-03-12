import Link from "next/link";

interface RelatedPage {
  title: string;
  href: string;
  description?: string;
}

const defaultPages: RelatedPage[] = [
  { title: "Free Payroll Calculator", href: "/calculator", description: "Calculate PAYE, NIS, NHT instantly" },
  { title: "Payroll Software Jamaica", href: "/payroll-software-jamaica", description: "Automate your entire payroll" },
  { title: "Minimum Wage Jamaica", href: "/minimum-wage-jamaica", description: "2026 rates and statutory impact" },
  { title: "New Business Checklist", href: "/new-business-payroll-checklist-jamaica", description: "First-time employer setup guide" },
  { title: "Payroll Glossary", href: "/glossary", description: "25+ Jamaica payroll terms defined" },
  { title: "Compare vs QuickBooks", href: "/compare/quickbooks", description: "See why Jamaica businesses choose us" },
];

interface RelatedPagesProps {
  pages?: RelatedPage[];
  title?: string;
  exclude?: string;
}

export default function RelatedPages({
  pages = defaultPages,
  title = "Explore More",
  exclude,
}: RelatedPagesProps) {
  const filtered = exclude ? pages.filter((p) => p.href !== exclude) : pages;
  if (filtered.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group border rounded-lg p-3 hover:bg-muted/50 transition"
          >
            <div className="text-sm font-medium group-hover:text-primary transition-colors">
              {page.title}
            </div>
            {page.description && (
              <div className="text-xs text-muted-foreground mt-0.5">
                {page.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
