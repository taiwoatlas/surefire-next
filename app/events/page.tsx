import type { Metadata } from "next";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { EventCalendar } from "@/components/events/EventCalendar";
import { getUpcomingEvents, getRecurringGatherings } from "@/lib/content";
import { EmptyState } from "@/components/church/EmptyState";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at The Surefire Christian Church of God, including our monthly Night Vigil.",
};

export default function EventsPage() {
  const events = getUpcomingEvents();
  const recurring = getRecurringGatherings();

  return (
    <>
      <PageHeader eyebrow="Church calendar" title="Make room for what matters." lede="Stay connected to our regular gatherings and confirmed church events." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]} />
      <Section tone="paper">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white">
            <div className="flex items-center gap-3 bg-[#171717] px-5 py-4 text-white"><span className="grid size-10 place-items-center rounded-md bg-[#c8192e]"><CalendarDays size={19} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Weekly & monthly</p><h2 className="mt-0.5 text-lg font-black">Regular gatherings</h2></div></div>
            {recurring.map((g, i) => <article key={g.key} className="grid gap-2 border-t border-[#E6E6E6] px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#c8192e]">0{i + 1} / Gathering</p><h3 className="mt-1 text-base font-extrabold text-[#171717]">{g.title}</h3><p className="mt-1 flex items-start gap-1.5 text-xs leading-5 text-[#686563]"><MapPin size={13} className="mt-0.5 shrink-0" />{g.location}</p></div><div className="sm:text-right"><p className="text-sm font-bold text-[#c8192e]">{g.time}</p><p className="mt-1 max-w-xs text-xs leading-5 text-[#686563] sm:max-w-[190px]">{g.description}</p></div></article>)}
          </div>
          <aside className="rounded-xl border border-[#E0E0E0] bg-[#EEEEEE] p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Plan ahead</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em] text-[#101010]">Browse the calendar.</h2><p className="mt-2 text-sm leading-6 text-[#686563]">Check dates and explore upcoming church gatherings.</p><div className="mt-4 rounded-lg border border-[#E0E0E0] bg-white p-3 sm:p-4"><EventCalendar /></div></aside>
        </div>
      </Section>
      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">What&apos;s next</p><h2 className="mt-1.5 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Confirmed events</h2></div><p className="max-w-sm text-sm leading-6 text-[#686563]">Only dated events confirmed by the church are listed here.</p></div>
        <div className="mt-5">{events.length === 0 ? <div className="rounded-xl border border-[#E0E0E0] bg-white p-5 sm:p-6"><EmptyState title="No dated events confirmed yet" description="Follow church announcements or contact us to hear when new events are announced." /></div> : <div className="divide-y divide-[#E0E0E0] border-y border-[#E0E0E0] bg-white">{events.map((e, i) => <article key={e.slug} className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-5"><div className="flex items-start gap-3"><span className="pt-1 text-xs font-bold text-[#c8192e]">0{i + 1}</span><div><h3 className="text-base font-extrabold text-[#171717]">{e.title}</h3><p className="mt-1 text-sm leading-5 text-[#686563]">{e.summary}</p></div></div><Link href="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-[#c8192e]">Enquire <ArrowUpRight size={13} /></Link></article>)}</div>}</div>
      </Section>
    </>
  );
}
