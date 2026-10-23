import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SermonSearch } from "@/components/sermons/SermonSearch";

export const metadata: Metadata = {
  title: "Sermons",
  description: "The Surefire sermon library — messages by speaker, topic, series and Scripture.",
};

export default function SermonsPage() {
  return (
    <>
      <PageHeader eyebrow="Grow through the Word" title="Messages for your walk with God." lede="Explore the teaching archive and find messages by speaker, topic, series, or Scripture as recordings are added." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sermons" }]} />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-[.6fr_1.4fr] md:items-start">
          <div className="rounded-2xl bg-[#101010] p-5 text-white sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl border border-[#c8192e]/25 bg-white/[.05] text-[#ff7a88]"><BookOpen size={19} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-2xl">The sermon library</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Search teachings by topic, speaker, series, or Bible passage.</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[.16em] text-[#ff7a88]">Learn · Reflect · Grow</p>
          </div>
          <div className="min-w-0 rounded-2xl border border-[#E0E0E0] bg-white p-4 sm:p-6"><SermonSearch /></div>
        </div>
      </Section>
    </>
  );
}
