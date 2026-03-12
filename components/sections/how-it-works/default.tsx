import { Section } from "../../ui/section";
import { UserPlusIcon, CalculatorIcon, FileCheckIcon } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: <UserPlusIcon className="size-6 stroke-[1.5]" />,
    title: "Add your employees",
    description:
      "Import from a spreadsheet or enter details manually. Set salary structures, allowances, and deductions in minutes.",
  },
  {
    number: "2",
    icon: <CalculatorIcon className="size-6 stroke-[1.5]" />,
    title: "Run payroll",
    description:
      "PAYE, NIS, NHT, and Education Tax are calculated automatically. Review the summary, then approve with one click.",
  },
  {
    number: "3",
    icon: <FileCheckIcon className="size-6 stroke-[1.5]" />,
    title: "Export and file",
    description:
      "Download payslips, bank files, and statutory returns (SO1, P24). Ready for TAJ and your bank — no reformatting.",
  },
];

export default function HowItWorks({ className }: { className?: string }) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-10">
        <div className="text-center max-w-xl">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Payroll in three simple steps
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            From setup to filing — run compliant Jamaica payroll in minutes, not
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl border bg-card"
            >
              <span className="absolute -top-4 inline-flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                {step.number}
              </span>
              <div className="mt-4 mb-4 text-primary">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
