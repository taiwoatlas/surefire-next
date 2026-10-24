import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { church } from "@/data/church";
import { primaryNav, footerConnect } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1.25fr_.75fr_.8fr] md:px-10 md:py-10">
        <div>
          <Link href="/" aria-label={church.churchName} className="inline-flex items-center gap-3"><Image src="/images/church-logo.jpg" alt="" aria-hidden="true" width={80} height={80} className="size-10 shrink-0 rounded-md object-contain" /><span><span className="block text-sm font-extrabold">The Surefire Christian Church of God</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[.22em] text-[#ff7a88]">Living Wonders</span></span></Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{church.motto}.</p><p className="mt-1 max-w-sm text-sm leading-6 text-white/60">A community of faith, empowerment, and practical impact.</p>
          <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/55"><MapPin size={15} className="mt-0.5 shrink-0 text-[#ff7a88]" /><span>{church.address}</span></div>
          <a href={`tel:${church.phone.church.replaceAll(" ", "")}`} className="mt-2 inline-flex items-center gap-2 text-xs text-white/65 transition hover:text-white"><Phone size={14} />{church.phone.church}</a>
        </div>
        <nav aria-label="Explore"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Explore</p><ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/60">{primaryNav.slice(0, 10).map(item => <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>)}</ul></nav>
        <nav aria-label="Connect"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Connect</p><ul className="mt-3 flex flex-col gap-2 text-xs text-white/60">{footerConnect.map(item => <li key={item.href}><Link href={item.href} className="transition hover:text-white">{item.label}</Link></li>)}<li><a href={church.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">Facebook <ArrowUpRight size={13} /></a></li></ul><Link href="/plan-your-visit" className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-xs font-bold transition hover:border-[#c8192e] hover:bg-[#c8192e]">Plan your visit <ArrowUpRight size={14} /></Link></nav>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-5 py-3 text-[10px] text-white/40 sm:px-8 md:px-10"><span>© {new Date().getFullYear()} {church.churchName}. Est. {church.established}.</span><span className="flex gap-4"><Link href="/privacy" className="hover:text-white">Privacy</Link><Link href="/terms" className="hover:text-white">Terms</Link></span></div></div>
    </footer>
  );
}
