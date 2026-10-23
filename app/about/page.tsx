import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church } from "@/data/church";
import { ScriptureReader } from "@/components/scripture/ScriptureReader";

export const metadata: Metadata = {
  title: "About",
  description: "The Surefire Christian Church of God — our vision, mission, values, and history.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Who we are" title="Faith with conviction. Purpose with impact." lede="A church committed to spiritual growth, empowered people and stronger communities." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-[1fr_.92fr] md:items-center md:gap-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Our story & calling</p>
            <h2 className="mt-2 text-3xl font-black leading-[1.04] tracking-[-.045em] text-[#101010] sm:text-4xl">A house of faith.<br /><span className="text-[#c8192e]">A force for good.</span></h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#686563]">The Surefire Christian Church of God exists to help people encounter Christ, discover their God-given purpose and carry that purpose into their homes, workplaces and communities.</p>
            <div className="mt-5 border-l-[3px] border-[#c8192e] bg-white px-4 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8192e]">Our mission</p>
              <p className="mt-1.5 text-base font-bold leading-snug text-[#171717]">To develop surefire leaders who champion positive change in their families, workplaces, and society.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3"><Link href="/plan-your-visit" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#c8192e] px-4 text-sm font-bold text-white hover:bg-[#a81023]">Visit the church <ArrowUpRight size={15} /></Link><Link href="/ministries" className="inline-flex min-h-11 items-center gap-2 border border-[#d8d4d1] px-4 text-sm font-bold text-[#171717] hover:border-[#c8192e]">Explore ministries</Link></div>
          </div>
          <div className="grid grid-cols-[1.15fr_.85fr] items-end gap-3">
            <div className="relative h-[280px] overflow-hidden rounded-sm bg-[#191919] sm:h-[340px]"><Image src="/images/church/building-chapel-facade.jpg" alt="The Surefire Christian Church chapel" fill sizes="(min-width: 768px) 36vw, 65vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 right-4 text-white"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Established</p><p className="mt-1 text-lg font-black">{church.established}</p></div></div>
            <div className="relative mb-8 h-[190px] overflow-hidden rounded-sm border-b-4 border-[#c8192e] bg-[#191919] sm:h-[230px]"><Image src="/images/church/building-gate-daylight.jpg" alt="The church grounds" fill sizes="(min-width: 768px) 26vw, 45vw" className="object-cover" /><div className="absolute inset-0 bg-black/15" /><div className="absolute inset-x-0 bottom-0 bg-black/75 p-3 text-white"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#ff7a88]">Founder & pastor</p><p className="mt-1 text-sm font-extrabold">{church.founder}</p></div></div>
          </div>
        </div>
      </Section>
      <Section tone="stone">
        <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:items-center md:gap-8">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">What shapes us</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Our values in action.</h2><p className="mt-2 text-sm leading-6 text-[#686563]">Principles that shape how we worship, lead, serve and treat people.</p></div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#dedad7] bg-[#dedad7] sm:grid-cols-4">{church.values.map((value, i) => <article key={value} className="bg-white p-4 sm:p-5"><p className="text-[10px] font-bold tracking-[.16em] text-[#c8192e]">0{i + 1}</p><h3 className="mt-2 text-lg font-black text-[#171717]">{value}</h3></article>)}</div>
        </div>
      </Section>
      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-[.7fr_1.3fr] md:items-start">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Our foundation</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Grounded in the Word.</h2><p className="mt-2 text-sm leading-6 text-[#686563]">Scripture remains central to our faith, decisions and everyday walk with God.</p><div className="mt-5 flex gap-3 border-t border-[#e4e1df] pt-4"><Quote size={20} className="shrink-0 text-[#c8192e]" /><p className="text-sm font-semibold leading-6 text-[#171717]">We believe transformed lives become a testimony that reaches far beyond the church walls.</p></div></div>
          <div className="rounded-xl border border-[#e4e1df] bg-white p-4 sm:p-5"><ScriptureReader /></div>
        </div>
      </Section>
    </>
  );
}
