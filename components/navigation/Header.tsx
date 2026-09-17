import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { church } from "@/data/church";
import { MobileNav } from "./MobileNav";
import { SearchTrigger } from "./SearchTrigger";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-4 md:px-10">
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

        <div className="flex items-center gap-3">
          <SearchTrigger />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
