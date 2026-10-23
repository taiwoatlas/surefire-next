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
    <header className="relative isolate overflow-hidden bg-[#151515] py-8 text-white sm:py-10 md:py-12">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[36%] bg-[linear-gradient(135deg,transparent_30%,rgba(200,25,46,.22)_100%)]" />
      <div aria-hidden="true" className="absolute right-[12%] top-0 h-full w-px rotate-[24deg] bg-white/[.07]" />
      <Container className="relative">
        {breadcrumbs && breadcrumbs.length > 0 && <nav aria-label="Breadcrumb" className="mb-4 text-[11px] text-white/50"><ol className="flex flex-wrap items-center gap-2">{breadcrumbs.map((crumb, i) => <li key={crumb.label} className="flex items-center gap-2">{crumb.href ? <Link href={crumb.href} className="transition hover:text-white">{crumb.label}</Link> : <span aria-current="page" className="text-white/80">{crumb.label}</span>}{i < breadcrumbs.length - 1 && <ArrowRight size={11} aria-hidden="true" className="text-[#f05a69]" />}</li>)}</ol></nav>}
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[.22em] text-[#f05a69]">{eyebrow}</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-black leading-[1.02] tracking-[-.045em] sm:text-4xl md:text-5xl">{title}</h1>
        {lede && <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">{lede}</p>}
      </Container>
    </header>
  );
}
