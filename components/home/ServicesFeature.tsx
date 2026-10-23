import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { services } from "@/data/church";

export function ServicesFeature() {
  return (
    <section className="bg-[#EEEEEE] py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c8192e]">Worship & fellowship</p><h2 className="mt-1.5 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Make time to gather.</h2></div>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8192e] hover:text-[#9f1022]">Service details <ArrowUpRight size={14} /></Link>
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-[0_8px_28px_rgba(0,0,0,.04)]">
          <div className="grid bg-[#171717] px-4 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/55 sm:grid-cols-[1.1fr_.8fr_1fr] sm:px-6">
            <span>Gathering</span><span className="hidden sm:block">Day</span><span className="hidden sm:block">Time</span>
          </div>
          {services.map((service, index) => (
            <div key={service.key} className="grid gap-2 border-t border-[#E6E6E6] px-4 py-4 sm:grid-cols-[1.1fr_.8fr_1fr] sm:items-center sm:px-6">
              <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#FCEBED] text-[#c8192e]"><CalendarDays size={16} /></span><div><p className="text-sm font-extrabold text-[#171717]">{service.name}</p><p className="mt-0.5 text-[11px] text-[#77716e] sm:hidden">{service.day}</p></div></div>
              <p className="hidden text-sm font-semibold text-[#4e4a48] sm:block">{service.day}</p>
              <p className="flex items-center gap-2 pl-12 text-xs font-bold text-[#c8192e] sm:pl-0 sm:text-sm"><Clock3 size={14} />{service.time}</p>
            </div>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E6E6E6] bg-[#faf9f8] px-4 py-3 sm:px-6"><p className="text-xs text-[#77716e]">Every gathering is an opportunity to encounter God and grow together.</p><Link href="/plan-your-visit" className="text-xs font-bold text-[#171717] underline decoration-[#c8192e] decoration-2 underline-offset-4">Get directions</Link></div>
        </div>
      </div>
    </section>
  );
}
