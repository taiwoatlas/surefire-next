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
          <div className="rounded-2xl bg-[#101010] p-5 text-white sm:p-6">
            <span className="grid size-11 place-items-center rounded-xl border border-[#c8192e]/25 bg-white/[.05] text-[#ff7a88]"><HeartHandshake size={21} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-2xl">We will stand with you in prayer.</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">Share only what you are comfortable sharing. Use the form to send your request to the church prayer team.</p>
            <p className="mt-5 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[.16em] text-[#ff7a88]">Faith · Hope · Support</p>
          </div>
          <div className="rounded-2xl border border-[#E0E0E0] bg-white p-4 sm:p-6"><PrayerRequestForm /></div>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Praying together</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Shared prayer</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">Where shared requests are available, this space helps the community pray together.</p></div>
        <div className="mt-5 rounded-2xl border border-[#E0E0E0] bg-white p-4 sm:p-6"><PrayerWall /></div>
      </Section>
    </>
  );
}
