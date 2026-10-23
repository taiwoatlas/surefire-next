import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, MessageCircle, Clock3 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church, services } from "@/data/church";
import { VisitorContactForm } from "@/components/church/VisitorContactForm";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Everything you need to know before visiting The Surefire Christian Church of God.",
};

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHeader eyebrow="Your first visit" title="Come in. You are welcome." lede="Everything you need to plan your first gathering with The Surefire Christian Church of God." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Plan Your Visit" }]} />
      <Section tone="paper">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr] lg:items-stretch">
          <div className="relative min-h-[260px] overflow-hidden rounded-sm bg-[#171717] sm:min-h-[340px]"><Image src="/images/church/building-gate-daylight.jpg" alt="Entrance to The Surefire Christian Church of God" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" priority /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" /><div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Your place is ready</p><h2 className="mt-2 max-w-md text-2xl font-black leading-tight sm:text-3xl">A warm welcome. A meaningful encounter.</h2><p className="mt-2 flex items-start gap-2 text-xs leading-5 text-white/75"><MapPin size={14} className="mt-0.5 shrink-0 text-[#ff7a88]" />{church.address}</p></div></div>
          <div className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white"><div className="flex items-center gap-3 bg-[#171717] px-4 py-4 text-white"><span className="grid size-10 place-items-center rounded-md bg-[#c8192e]"><CalendarDays size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Plan your time</p><h2 className="text-lg font-black">Service schedule</h2></div></div>{services.map(s => <div key={s.key} className="border-t border-[#E6E6E6] px-4 py-4"><h3 className="text-sm font-extrabold text-[#171717]">{s.name}</h3><div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-xs"><span className="text-[#686563]">{s.day}</span><span className="flex items-center gap-1.5 font-bold text-[#c8192e]"><Clock3 size={13} />{s.time}</span></div></div>)}<div className="border-t border-[#E6E6E6] bg-[#F4F4F4] p-4"><Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8192e]">View service information <ArrowUpRight size={13} /></Link></div></div>
        </div>
      </Section>
      <Section tone="stone">
        <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:items-start"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Feel at home</p><h2 className="mt-1.5 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Your first visit, made simple.</h2><p className="mt-2 text-sm leading-6 text-[#686563]">No special preparation is needed. Come ready to worship and meet people.</p></div><ol className="grid gap-px overflow-hidden border border-[#E0E0E0] bg-[#E0E0E0] sm:grid-cols-2">{["Arrive a few minutes early","Ask an usher if you need help","Join in at your own pace","Stay after to meet someone"].map((step,i)=><li key={step} className="flex gap-3 bg-white p-4"><span className="text-xs font-black text-[#c8192e]">0{i+1}</span><span className="text-sm font-semibold text-[#171717]">{step}</span></li>)}</ol></div>
        <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold"><Link href="/ministries" className="inline-flex items-center gap-1 text-[#c8192e]">Explore ministries <ArrowUpRight size={13} /></Link><Link href="/prayer-request" className="inline-flex items-center gap-1 text-[#c8192e]">Request prayer <ArrowUpRight size={13} /></Link><Link href="/contact" className="inline-flex items-center gap-1 text-[#c8192e]">Contact the church <ArrowUpRight size={13} /></Link></div>
      </Section>
      <Section tone="ink">
        <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Let us know you are coming</p><h2 className="mt-1.5 text-2xl font-black tracking-[-.04em] text-white sm:text-3xl">We will help you settle in.</h2><p className="mt-2 text-sm leading-6 text-white/65">Let us know when you plan to visit. This is optional and helps the team welcome you.</p><a href={`https://wa.me/${church.whatsapp.church}?text=${encodeURIComponent("Hello, I am planning to visit The Surefire Christian Church of God.")}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a88] hover:text-white"><MessageCircle size={15} /> Message us on WhatsApp</a></div>
          <div className="rounded-xl border border-white/10 bg-white/[.04] p-4 sm:p-5"><VisitorContactForm /></div>
        </div>
      </Section>
    </>
  );
}
