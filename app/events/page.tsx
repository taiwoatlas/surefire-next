import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
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
      <PageHeader eyebrow="What's happening" title="Gather, connect, and grow." lede="Keep track of regular gatherings and confirmed church events." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]} />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Regular gatherings</p>
            <h2 className="mt-2 font-display text-3xl text-[#101010]">Make time to connect</h2>
            <div className="mt-5 grid gap-3">
              {recurring.map((g) => (
                <article key={g.key} className="rounded-2xl border border-[#e4e1df] bg-white p-5">
                  <div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fbe9ec] text-[#c8192e]"><CalendarDays size={17} aria-hidden="true" /></span><div><h3 className="font-display text-xl text-[#101010]">{g.title}</h3><p className="mt-1 text-sm font-semibold text-[#c8192e]">{g.time}</p><p className="mt-1 flex items-start gap-1.5 text-xs leading-5 text-[#686563]"><MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{g.location}</p><p className="mt-3 text-sm leading-6 text-[#686563]">{g.description}</p></div></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-[#e4e1df] bg-[#f6f5f3] p-4 sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Calendar</p>
            <h2 className="mt-2 font-display text-2xl text-[#101010]">Browse dates</h2>
            <div className="mt-4"><EventCalendar /></div>
          </aside>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Upcoming</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Confirmed events</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">Only dated events that have been confirmed appear here.</p></div>
        <div className="mt-5">
          {events.length === 0 ? (
            <div className="rounded-2xl border border-[#e2dfd5] bg-white p-5 sm:p-6"><EmptyState title="No dated events confirmed yet" description="Follow the church or contact us to hear when new events are announced." /></div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e) => <article key={e.slug} className="rounded-2xl border border-[#e2dfd5] bg-white p-5"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#c8192e]">Confirmed event</p><h3 className="mt-3 font-display text-xl text-[#101010]">{e.title}</h3><p className="mt-2 text-sm leading-6 text-[#686563]">{e.summary}</p></article>)}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
