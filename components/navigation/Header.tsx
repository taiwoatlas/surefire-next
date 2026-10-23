import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { church } from "@/data/church";
import { MobileNav } from "./MobileNav";
import { SearchTrigger } from "./SearchTrigger";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#10291f] text-white shadow-[0_8px_24px_rgba(0,0,0,.12)]">
      <div className="mx-auto flex min-h-[70px] max-w-[1320px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={church.churchName} className="group flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#d8bb76]/60 bg-[#d8bb76] font-display text-xl font-semibold text-[#10291f]">S</span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold leading-tight sm:text-base">Surefire Christian Church</span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[.22em] text-[#d8bb76]">Living Wonders</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {primaryNav.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="whitespace-nowrap text-[11px] font-medium text-white/75 transition-colors hover:text-[#e7cb87]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/plan-your-visit" className="hidden items-center gap-1.5 rounded-full bg-[#d8bb76] px-4 py-2.5 text-xs font-semibold text-[#10291f] transition hover:bg-[#ecd9a7] lg:inline-flex">
            Visit us <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <SearchTrigger />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
