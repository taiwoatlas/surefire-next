import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Breadcrumb } from "@/types/navigation";
import { Container } from "./Container";

interface PageHeaderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly lede?: string;
  readonly breadcrumbs?: readonly Breadcrumb[];
}

export function PageHeader({ eyebrow, title, lede, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-[#10291f] py-10 text-white sm:py-12 md:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border border-[#d8bb76]/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-20 size-56 rounded-full border border-[#d8bb76]/10" />
      <Container className="relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="transition hover:text-[#e7cb87]">{crumb.label}</Link> : <span aria-current="page" className="text-white/80">{crumb.label}</span>}
                  {i < breadcrumbs.length - 1 && <ArrowRight size={11} aria-hidden="true" className="text-[#d8bb76]/70" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="font-mono text-[10px] uppercase tracking-[.22em] text-[#e7cb87]">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
        {lede && <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">{lede}</p>}
      </Container>
    </header>
  );
}
