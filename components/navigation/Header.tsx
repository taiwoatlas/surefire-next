import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { church } from "@/data/church";
import { MobileNav } from "./MobileNav";
import { SearchTrigger } from "./SearchTrigger";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101010] text-white shadow-[0_5px_22px_rgba(0,0,0,.18)]">
      <div className="mx-auto flex min-h-[68px] max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={church.churchName} className="group flex min-w-0 items-center gap-3">
          <Image src="/images/church-logo.jpg" alt="" aria-hidden="true" width={80} height={80} priority className="size-10 shrink-0 rounded-md object-contain" />
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold leading-tight tracking-[-.02em] sm:text-base">The Surefire Christian Church of God</span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[.24em] text-[#f05a69]">Living Wonders</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-5 2xl:gap-6">
            {primaryNav.slice(1, 7).map((item) => <li key={item.href}><Link href={item.href} className="whitespace-nowrap text-[11px] font-semibold text-white/70 transition-colors hover:text-white">{item.label}</Link></li>)}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/plan-your-visit" className="hidden items-center gap-2 rounded-md bg-[#c8192e] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#a80f23] lg:inline-flex">Plan a visit <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <SearchTrigger /><MobileNav />
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-[#c8192e] via-[#c8192e]/60 to-transparent" />
    </header>
  );
}
