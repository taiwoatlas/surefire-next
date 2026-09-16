import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { getSermons } from "@/lib/content";
import { EmptyState } from "@/components/church/EmptyState";

export const metadata: Metadata = {
  title: "Sermons",
  description: "The Surefire sermon library — messages by speaker, topic, series and Scripture.",
};

export default function SermonsPage() {
  const sermons = getSermons();

  return (
    <>
      <PageHeader
        eyebrow="Grow Through the Word"
        title="Sermons"
        lede="A digital teaching archive — searchable by speaker, topic, series and Scripture, as messages are added."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sermons" }]}
      />

      <Section tone="paper">
        {sermons.length === 0 ? (
          <EmptyState
            title="No sermons published yet"
            description="Messages from the Surefire pulpit will be archived here as they're added — with search by speaker, topic, series, Scripture and date."
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {sermons.map((sermon) => (
              <div key={sermon.slug} className="rounded-sm border border-line bg-charcoal p-6">
                <h3 className="font-display text-xl">{sermon.title}</h3>
                <p className="mt-2 text-sm text-gray">{sermon.speaker}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
