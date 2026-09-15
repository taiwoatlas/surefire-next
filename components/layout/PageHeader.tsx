import * as React from "react";
import Link from "next/link";
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
    <header className="bg-ink pb-20 pt-40 text-paper">
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-onInk">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.href ? <Link href={crumb.href} className="hover:text-paper">{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                  {i < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        {lede && <p className="mt-6 max-w-lg text-lg text-gray-onInk">{lede}</p>}
      </Container>
    </header>
  );
}
