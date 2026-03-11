import Link from "next/link";

interface Resource {
  href: string;
  label: string;
  description: string;
  icon: string;
}

const CALCULATOR_RESOURCE: Resource = {
  href: "/calculator",
  label: "Jamaica Payroll Calculator",
  description: "Calculate PAYE, NIS, NHT & Education Tax instantly — free, no signup",
  icon: "🧮",
};

const SOFTWARE_RESOURCE: Resource = {
  href: "/payroll-software-jamaica",
  label: "Payroll Software for Jamaica",
  description: "Automate payroll. Built for Jamaica's statutory rules — PAYE, NIS, NHT included",
  icon: "⚙️",
};

const HR_RESOURCE: Resource = {
  href: "/hr-software-jamaica",
  label: "HR Software for Jamaican Businesses",
  description: "Manage employees, leave, and payroll from one dashboard",
  icon: "👥",
};

const OUTSOURCING_RESOURCE: Resource = {
  href: "/payroll-outsourcing-jamaica",
  label: "Payroll Outsourcing Jamaica",
  description: "Let us handle your payroll — fully managed, TAJ-compliant",
  icon: "🤝",
};

const COMPANY_RESOURCE: Resource = {
  href: "/payroll-company-jamaica",
  label: "Jamaica's Leading Payroll Company",
  description: "Trusted by businesses across Jamaica for accurate, compliant payroll",
  icon: "🏢",
};

// Keyword-to-resource mapping
const KEYWORD_RESOURCE_MAP: { keywords: string[]; resource: Resource }[] = [
  {
    keywords: ["paye", "income tax", "tax threshold", "statutory deduction", "deduction", "calculate", "calculation", "net pay", "take-home", "salary", "nis ", "nht ", "education tax", "overtime"],
    resource: CALCULATOR_RESOURCE,
  },
  {
    keywords: ["software", "system", "automate", "automation", "cloud", "digital", "app", "application", "tool"],
    resource: SOFTWARE_RESOURCE,
  },
  {
    keywords: ["hr ", "human resource", "employee management", "staff management", "leave", "onboarding"],
    resource: HR_RESOURCE,
  },
  {
    keywords: ["outsourc", "managed payroll", "bureau", "third party"],
    resource: OUTSOURCING_RESOURCE,
  },
];

function pickResources(keywords: string[], title: string): Resource[] {
  const text = (keywords.join(" ") + " " + title).toLowerCase();
  const picked = new Set<Resource>();

  for (const { keywords: kws, resource } of KEYWORD_RESOURCE_MAP) {
    if (kws.some((kw) => text.includes(kw))) {
      picked.add(resource);
      if (picked.size >= 3) break;
    }
  }

  // Always include calculator if fewer than 2 resources
  if (!picked.has(CALCULATOR_RESOURCE) && picked.size < 2) {
    picked.add(CALCULATOR_RESOURCE);
  }

  // Ensure we always show at least 2
  if (picked.size < 2) {
    picked.add(SOFTWARE_RESOURCE);
  }

  return [...picked].slice(0, 3);
}

interface BlogRelatedResourcesProps {
  keywords: string[];
  title: string;
}

export default function BlogRelatedResources({ keywords, title }: BlogRelatedResourcesProps) {
  const resources = pickResources(keywords, title);

  return (
    <aside className="my-12 rounded-xl border border-border bg-muted/40 p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
        Related Resources
      </p>
      <ul className="space-y-3">
        {resources.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="flex items-start gap-3 group rounded-lg p-3 -m-3 hover:bg-muted/80 transition-colors"
            >
              <span className="text-2xl leading-none mt-0.5 shrink-0">{r.icon}</span>
              <div>
                <span className="font-medium text-foreground group-hover:underline">{r.label}</span>
                <p className="text-sm text-muted-foreground mt-0.5">{r.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
