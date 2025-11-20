import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Everything Jamaican payroll needs. Built in.",
  items = [
    {
      title: "Automatic statutory deductions",
      description:
        "Accurate PAYE, NIS, NHT, Education Tax and more—calculated automatically for every run",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Payslips and reports",
      description:
        "Professional payslips, P24, SO1 and remittance reports generated in one click",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
    {
      title: "Employee self-service",
      description:
        "Staff can securely view payslips, leave balances and personal details",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Leave and benefits",
      description: "Track vacation, sick leave and benefits with customizable policies",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Bank-ready payments",
      description: "Export bank files and payment summaries for seamless payouts",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Secure and compliant",
      description: "Robust security with Jamaican tax compliance best practices",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Multi-location support",
      description: "Manage multiple branches, departments and cost centres",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Fast onboarding",
      description: "Migrate from spreadsheets or legacy tools with guided setup",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
