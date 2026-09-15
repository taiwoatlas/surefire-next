import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionTone = "paper" | "ink" | "stone";

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  stone: "bg-stone text-ink",
};

interface SectionProps {
  readonly tone?: SectionTone;
  readonly className?: string;
  readonly children: React.ReactNode;
  readonly as?: "section" | "div";
  readonly id?: string;
}

export function Section({ tone = "paper", className, children, as: Tag = "section", id }: SectionProps) {
  return (
    <Tag id={id} className={cn("py-20 md:py-28", toneClasses[tone], className)}>
      <Container>{children}</Container>
    </Tag>
  );
}
