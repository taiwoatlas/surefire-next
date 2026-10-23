import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Radio, CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church, services } from "@/data/church";

export const metadata: Metadata = {
  title: "Watch Live",
  description: "Watch The Surefire Christian Church of God services live online.",
};

export default function WatchLivePage() {
  return (
    <>
      <PageHeader eyebrow="Join remotely" title="Worship with us from anywhere." lede="When a broadcast is available, this page will point you to the live service. You can also follow the church online for updates." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Watch Live" }]} />

      <Section tone="paper">
        <div className="grid gap-5 md:grid-cols-[1.35fr_.65fr]">
          <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl bg-[#101010] p-5 text-white sm:min-h-[330px] sm:p-7">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full border border-[#c8192e]/20" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-12 size-48 rounded-full border border-[#c8192e]/15" />
            <div className="relative flex items-center gap-2"><span className="size-2 rounded-full bg-[#c8192e]" /><span className="font-mono text-[10px] uppercase tracking-[.2em] text-[#ff7a88]">Live broadcast</span></div>
            <div className="relative mt-12">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/5 text-[#ff7a88]"><Radio size={22} aria-hidden="true" /></span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl">No live stream at the moment</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/65">Check the church Facebook page for service broadcasts and announcements. This website will be updated when a dedicated live-stream link is available.</p>
              <a href={church.facebook} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#c8192e] px-5 text-sm font-semibold text-[#101010]">Visit Facebook <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className="rounded-2xl border border-[#E0E0E0] bg-[#F4F4F4] p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-white text-[#c8192e]"><CalendarDays size={18} aria-hidden="true" /></span>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[.18em] text-[#c8192e]">Next gathering</p>
            <h2 className="mt-2 font-display text-xl text-[#101010]">{services[0]!.name}</h2>
            <p className="mt-1 text-sm font-semibold text-[#c8192e]">{services[0]!.day}</p>
            <p className="mt-1 text-sm text-[#686563]">{services[0]!.time}</p>
            <Link href="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c8192e] hover:text-[#c8192e]">All service times <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
