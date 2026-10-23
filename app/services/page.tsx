import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { services, church } from "@/data/church";

export const metadata: Metadata = {
  title: "Services",
  description: "Worship gathering times at The Surefire Christian Church of God.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Worship & fellowship" title="One church. A week of encounters." lede="Join us for worship, prayer and the Word. There is a place for you at every gathering." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-start">
          <div className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-[0_12px_35px_rgba(0,0,0,.05)]">
            <div className="flex items-center gap-3 bg-[#171717] px-5 py-4 text-white sm:px-6"><span className="grid size-10 place-items-center rounded-md bg-[#c8192e]"><CalendarDays size={19} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Weekly & monthly</p><h2 className="mt-0.5 text-lg font-extrabold">All service times</h2></div></div>
            {services.map((service, i) => <div key={service.key} className="grid gap-2 border-t border-[#E6E6E6] px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#c8192e]">0{i + 1} / Gathering</p><h3 className="mt-1 text-base font-extrabold text-[#151515]">{service.name}</h3><p className="mt-1 text-sm text-[#686563]">{service.day}</p></div><p className="flex items-center gap-2 text-sm font-bold text-[#171717]"><Clock3 size={15} className="text-[#c8192e]" />{service.time}</p></div>)}
            <div className="border-t border-[#E6E6E6] bg-[#F4F4F4] px-5 py-4 text-xs leading-5 text-[#686563] sm:px-6">Service schedules may occasionally change for special programmes. Follow church announcements for updates.</div>
          </div>
          <aside className="overflow-hidden rounded-xl bg-[#171717] text-white">
            <div className="relative h-48 sm:h-56"><Image src="/images/church/building-chapel-facade.jpg" alt="The Surefire Christian Church chapel" fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" /><p className="absolute bottom-4 left-5 text-xl font-black">We look forward to welcoming you.</p></div>
            <div className="p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Find us</p><p className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/75"><MapPin size={16} className="mt-1 shrink-0 text-[#f05a69]" />{church.address}</p><Link href="/plan-your-visit" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#c8192e] px-4 text-sm font-bold text-white hover:bg-[#a81023]">Plan your visit <ArrowUpRight size={15} /></Link></div>
          </aside>
        </div>
      </Section>
    </>
  );
}
