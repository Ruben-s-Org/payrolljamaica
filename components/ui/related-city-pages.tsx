import Link from "next/link";

interface CityPage {
  name: string;
  href: string;
  parish: string;
}

const allCityPages: CityPage[] = [
  { name: "Kingston", href: "/payroll-kingston-jamaica", parish: "Kingston & St. Andrew" },
  { name: "Montego Bay", href: "/payroll-montego-bay-jamaica", parish: "St. James" },
  { name: "Portmore", href: "/payroll-portmore-jamaica", parish: "St. Catherine" },
  { name: "Spanish Town", href: "/payroll-spanish-town-jamaica", parish: "St. Catherine" },
  { name: "May Pen", href: "/payroll-may-pen-jamaica", parish: "Clarendon" },
  { name: "Mandeville", href: "/payroll-mandeville-jamaica", parish: "Manchester" },
  { name: "Ocho Rios", href: "/payroll-ocho-rios-jamaica", parish: "St. Ann" },
  { name: "Savanna-la-Mar", href: "/payroll-savanna-la-mar-jamaica", parish: "Westmoreland" },
  { name: "Falmouth", href: "/payroll-falmouth-jamaica", parish: "Trelawny" },
  { name: "Negril", href: "/payroll-negril-jamaica", parish: "Westmoreland" },
  { name: "Port Antonio", href: "/payroll-port-antonio-jamaica", parish: "Portland" },
  { name: "Morant Bay", href: "/payroll-morant-bay-jamaica", parish: "St. Thomas" },
];

interface RelatedCityPagesProps {
  /** The current page's href to exclude from the list */
  currentHref: string;
}

export default function RelatedCityPages({ currentHref }: RelatedCityPagesProps) {
  const cities = allCityPages.filter((c) => c.href !== currentHref);

  return (
    <section className="w-full px-4 py-16 bg-muted/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Payroll Services Across Jamaica
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-sm">
          We serve businesses in every parish. Find payroll services for your city.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="group rounded-lg border border-border bg-background p-4 hover:bg-muted/50 transition-colors"
            >
              <p className="font-medium text-sm group-hover:text-primary transition-colors">
                Payroll {city.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{city.parish}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
