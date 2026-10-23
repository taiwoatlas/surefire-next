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
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Regular gatherings</p>
            <h2 className="mt-2 font-display text-3xl text-[#18382b]">Make time to connect</h2>
            <div className="mt-5 grid gap-3">
              {recurring.map((g) => (
                <article key={g.key} className="rounded-2xl border border-[#e6e2d8] bg-white p-5">
                  <div className="flex items-start gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43]"><CalendarDays size={17} aria-hidden="true" /></span><div><h3 className="font-display text-xl text-[#18382b]">{g.title}</h3><p className="mt-1 text-sm font-semibold text-[#315d43]">{g.time}</p><p className="mt-1 flex items-start gap-1.5 text-xs leading-5 text-[#756f63]"><MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />{g.location}</p><p className="mt-3 text-sm leading-6 text-[#756f63]">{g.description}</p></div></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-[#e6e2d8] bg-[#f5f1e7] p-4 sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Calendar</p>
            <h2 className="mt-2 font-display text-2xl text-[#18382b]">Browse dates</h2>
            <div className="mt-4"><EventCalendar /></div>
          </aside>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Upcoming</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Confirmed events</h2></div><p className="max-w-md text-sm leading-6 text-[#756f63]">Only dated events that have been confirmed appear here.</p></div>
        <div className="mt-5">
          {events.length === 0 ? (
            <div className="rounded-2xl border border-[#e2dfd5] bg-white p-5 sm:p-6"><EmptyState title="No dated events confirmed yet" description="Follow the church or contact us to hear when new events are announced." /></div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e) => <article key={e.slug} className="rounded-2xl border border-[#e2dfd5] bg-white p-5"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#8b6b2c]">Confirmed event</p><h3 className="mt-3 font-display text-xl text-[#18382b]">{e.title}</h3><p className="mt-2 text-sm leading-6 text-[#756f63]">{e.summary}</p></article>)}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
