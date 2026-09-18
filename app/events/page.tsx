import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { BulbString } from "@/components/decor/BulbString";
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
      <PageHeader
        eyebrow="What's Happening"
        title="Events"
        lede="There is more to come — an editorial calendar of what's ahead at Surefire."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Recurring</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {recurring.map((g) => (
            <div key={g.key} className="relative spotlight-card rounded-sm border border-line bg-charcoal p-6">
              <h3 className="font-display text-xl">{g.title}</h3>
              <p className="mt-2 text-sm text-gray">{g.time}</p>
              <p className="mt-1 text-sm text-gray">{g.location}</p>
              <p className="mt-3 text-sm text-gray">{g.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-ink px-6">
        <div className="mx-auto max-w-[1240px]">
          <BulbString count={11} />
        </div>
      </div>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Upcoming</p>
        <div className="mt-6">
          {events.length === 0 ? (
            <EmptyState
              title="No dated events confirmed yet"
              description="Follow us or reach out on WhatsApp to be notified as new events are announced."
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {events.map((e) => (
                <div key={e.slug} className="relative spotlight-card rounded-sm border border-line bg-charcoal p-6">
                  <h3 className="font-display text-xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-gray">{e.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
