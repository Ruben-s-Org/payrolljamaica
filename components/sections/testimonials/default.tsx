import { Section } from "../../ui/section";

const testimonials = [
  {
    quote:
      "Before PayrollJamaica, I spent two full days every month doing payroll by hand in Excel. Now it takes me under an hour. The PAYE and NIS calculations are spot-on every time.",
    name: "Andrea Campbell",
    role: "Managing Director",
    company: "Kingston Manufacturing Ltd",
    rating: 5,
  },
  {
    quote:
      "We were always worried about compliance — getting the NHT or Education Tax wrong and facing penalties from TAJ. PayrollJamaica keeps everything current so we can focus on running the business.",
    name: "Marcus Brown",
    role: "Finance Manager",
    company: "Montego Bay Resort Group",
    rating: 5,
  },
  {
    quote:
      "Setting up was simple and the support team actually understands Jamaican payroll. We migrated 85 employees from spreadsheets in less than a week. Best decision we made this year.",
    name: "Shanice Edwards",
    role: "HR Director",
    company: "Caribbean Fresh Foods Ltd",
    rating: 5,
  },
  {
    quote:
      "The bank file exports alone save us hours. We used to manually prepare NCB payment files — now it's one click. Our accountant loves the audit-ready reports too.",
    name: "David Chen",
    role: "Operations Manager",
    company: "Island Logistics & Haulage",
    rating: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < count ? "text-yellow-500" : "text-muted-foreground/30"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section className="py-16 sm:py-24">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Trusted by businesses across Jamaica
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            See why companies from Kingston to Montego Bay choose PayrollJamaica
            to handle their payroll and HR.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl border bg-card p-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary/15 mb-4"
              >
                <path d="M11.3 2.5C6.4 4.2 2.9 8.5 2.9 13.4c0 3 1.7 5.1 4.1 5.1 2.1 0 3.8-1.6 3.8-3.7 0-2-1.5-3.5-3.4-3.6.5-2.7 2.5-5.1 5.1-6.4L11.3 2.5zm10 0c-4.9 1.7-8.4 6-8.4 10.9 0 3 1.7 5.1 4.1 5.1 2.1 0 3.8-1.6 3.8-3.7 0-2-1.5-3.5-3.4-3.6.5-2.7 2.5-5.1 5.1-6.4L21.3 2.5z" />
              </svg>
              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-4 border-t pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                </div>
                <Stars count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
