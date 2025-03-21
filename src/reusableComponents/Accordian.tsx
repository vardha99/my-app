import {
  Accordion,
  AccordionHeader,
  AccordionPanel,
  FlowLayout,
  AccordionProps,
} from "@salt-ds/core";
import { SyntheticEvent, ReactElement, ReactNode } from "react";

interface ReusableAccordionProps extends AccordionProps {
  value: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  indicatorSide?: "left" | "right";
  onToggle?: (event: SyntheticEvent<HTMLButtonElement, Event>) => void;
  disabled?: boolean;
  status?: "error" | "warning" | "success";
  children?: ReactNode;
}

export const ReusableAccordion = ({
  value,
  expanded,
  defaultExpanded,
  indicatorSide = "left",
  onToggle,
  disabled,
  status,
  children,
  ...props
}: ReusableAccordionProps): ReactElement => (
  <Accordion
    value={value}
    expanded={expanded}
    defaultExpanded={defaultExpanded}
    indicatorSide={indicatorSide}
    onToggle={onToggle}
    disabled={disabled}
    status={status}
    {...props}
  >
    <AccordionHeader>{value}</AccordionHeader>
    <AccordionPanel>
      <FlowLayout>{children}</FlowLayout>
    </AccordionPanel>
  </Accordion>
);