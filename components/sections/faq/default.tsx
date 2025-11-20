import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently asked questions",
  items = [
    {
      question: "What is Payroll Jamaica?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Payroll Jamaica is modern payroll software tailored for Jamaican businesses. It is built on a proven open‑source payroll engine and adapted for local tax rules, reporting and banking formats.
          </p>
        </>
      ),
    },
    {
      question: "Is my data secure?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes. We use TLS encryption in transit, encrypted storage at rest, role‑based access controls, audit trails, and automated backups. Access can be limited by role and we provide least‑privilege defaults.
          </p>
        </>
      ),
    },
    {
      question: "Which statutory calculations are supported?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We support PAYE, NIS, NHT, and Education Tax out of the box, including thresholds and current rates. Deductions and allowances are configurable as salary components.
          </p>
        </>
      ),
    },
    {
      question: "What reports and remittances can I generate?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Generate payslips, payroll summaries, and statutory remittance files required by MOF/TAJ. Exports are ready for submission and can be archived for audits.
          </p>
        </>
      ),
    },
    {
      question: "Which banks are supported?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We export payment files compatible with major local banks, including NCB, JN, Scotiabank, Sagicor Bank, and FirstCaribbean. If you need a new format, we can add it quickly.
          </p>
        </>
      ),
    },
    {
      question: "Can I import from Excel or migrate existing data?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes. Use CSV templates to import employees, salary structures, and historical payroll. Our team can help you map columns and validate before going live.
          </p>
        </>
      ),
    },
    {
      question: "How long does it take to run payroll?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            After initial setup, you can run payroll in minutes using bulk actions, recurring components, and automated calculations.
          </p>
        </>
      ),
    },
    {
      question: "Does it handle overtime, allowances, and deductions?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Yes. Create salary components and rules for overtime, allowances, deductions, loans, and more. Configure per employee or per salary structure.
          </p>
        </>
      ),
    },
    {
      question: "Is there an employee self‑service portal?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Employees can securely access payslips and personal details, and you can optionally enable requests like leave or updates for HR review.
          </p>
        </>
      ),
    },
    {
      question: "Cloud or self‑hosted?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We provide a fully managed cloud service. Because we build on open‑source, a self‑hosted option is also possible for teams that require it.
          </p>
        </>
      ),
    },
    {
      question: "How is pricing handled?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Pricing depends on team size and support needs. Contact us and we\'ll recommend the most cost‑effective plan for your stage.
          </p>
        </>
      ),
    },
    {
      question: "What support do you offer?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            We offer business‑hours email support and guided onboarding. SLAs and premium support options are available upon request.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
