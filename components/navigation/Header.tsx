import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { church } from "@/data/church";
import { MobileNav } from "./MobileNav";

/**
 * Server Component by default (00AW). Only the mobile drawer needs
 * client-side state, so it's isolated in its own "use client" module —
 * the header itself ships zero client JS beyond that boundary.
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-lg text-paper">
          {church.churchName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {primaryNav.slice(0, 8).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs uppercase tracking-wide text-paper/80 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
