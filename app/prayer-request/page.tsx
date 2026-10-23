import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PrayerRequestForm } from "@/components/prayer/PrayerRequestForm";
import { PrayerWall } from "@/components/church/PrayerWall";

export const metadata: Metadata = {
  title: "Prayer Request",
  description: "Share a prayer request with The Surefire Christian Church of God.",
};

export default function PrayerRequestPage() {
  return (
    <>
      <PageHeader eyebrow="You are not alone" title="Let us pray with you." lede="Share what is on your heart. You can ask for prayer without having to find the right words." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Prayer Request" }]} />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-start">
          <div className="rounded-2xl bg-[#10291f] p-5 text-white sm:p-6">
            <span className="grid size-11 place-items-center rounded-xl border border-[#d8bb76]/25 bg-white/[.05] text-[#e7cb87]"><HeartHandshake size={21} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-2xl">We will stand with you in prayer.</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Share only what you are comfortable sharing. Use the form to send your request to the church prayer team.</p>
            <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#e7cb87]">Faith · Hope · Support</p>
          </div>
          <div className="rounded-2xl border border-[#e6e2d8] bg-white p-4 sm:p-6"><PrayerRequestForm /></div>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Praying together</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Shared prayer</h2></div><p className="max-w-md text-sm leading-6 text-[#756f63]">Where shared requests are available, this space helps the community pray together.</p></div>
        <div className="mt-5 rounded-2xl border border-[#e2dfd5] bg-white p-4 sm:p-6"><PrayerWall /></div>
      </Section>
    </>
  );
}
