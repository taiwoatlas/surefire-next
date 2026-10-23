import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { church } from "@/data/church";
import { primaryNav, footerConnect } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#10291f] text-white">
      <div className="mx-auto grid max-w-[1320px] gap-9 px-5 py-10 sm:px-8 md:grid-cols-[1.3fr_.7fr_.8fr] md:px-10 md:py-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[#d8bb76] font-display text-xl font-semibold text-[#10291f]">S</span>
            <span>
              <span className="block font-display text-base font-semibold">Surefire Christian Church</span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[.22em] text-[#d8bb76]">Living Wonders</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">{church.motto}. A community of faith, empowerment, and practical impact.</p>
          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-white/60">
            <MapPin size={15} className="mt-0.5 shrink-0 text-[#d8bb76]" aria-hidden="true" />
            <span>{church.address}</span>
          </div>
          <a href={`tel:${church.phone.church.replaceAll(" ", "")}`} className="mt-2 inline-flex items-center gap-2 text-xs text-white/70 transition hover:text-[#e7cb87]">
            <Phone size={14} aria-hidden="true" /> {church.phone.church}
          </a>
        </div>

        <nav aria-label="Explore">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#d8bb76]">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/65">
            {primaryNav.slice(0, 10).map((item) => (
              <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#d8bb76]">Connect with us</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-white/65">
            {footerConnect.map((item) => (
              <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>
            ))}
            <li><a href={church.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">Facebook <ArrowUpRight size={13} aria-hidden="true" /></a></li>
          </ul>
          <Link href="/plan-your-visit" className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:border-[#d8bb76] hover:text-[#e7cb87]">
            Plan your visit <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 px-5 py-4 text-[11px] text-white/45 sm:px-8 md:px-10">
          <span>© {new Date().getFullYear()} {church.churchName}. Est. {church.established}.</span>
          <span className="flex gap-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></span>
        </div>
      </div>
    </footer>
  );
}
