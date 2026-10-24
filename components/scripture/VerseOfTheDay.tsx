"use client";

import * as React from "react";
import { verses } from "@/data/scripture";

/**
 * A date-based reading plan: the local calendar day advances to the next
 * curated passage, so the featured scripture changes every day and stays
 * stable throughout that day.
 */
function dailyVerseIndex(date: Date): number {
  const dayNumber = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
  return ((dayNumber % verses.length) + verses.length) % verses.length;
}

export function VerseOfTheDay() {
  const [dailyIndex, setDailyIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    setDailyIndex(dailyVerseIndex(new Date()));
  }, []);

  if (dailyIndex === null) return null;
  const verse = verses[dailyIndex];
  if (!verse) return null;

  return (
    <div className="rounded-xl border border-white/15 bg-[#191919] p-6 text-center text-white shadow-[0_12px_36px_rgba(0,0,0,.12)] sm:p-8">
      <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7a88]">
        Scripture for Today
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[.16em] text-white/55">
        {verse.theme}
      </p>
      <p className="mx-auto mt-4 max-w-2xl font-display text-xl italic leading-relaxed text-white sm:text-2xl">
        &ldquo;{verse.text}&rdquo;
      </p>
      <p className="mt-4 text-sm font-semibold text-white/75">{verse.reference} (KJV)</p>

      <div className="mx-auto mt-7 max-w-2xl rounded-lg border border-[#ff7a88]/25 bg-white/[0.04] p-5 text-left sm:p-6">
        <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7a88]">
          A Moment of Meditation
        </p>
        <p className="mt-3 text-sm leading-7 text-white/85">{verse.meditation}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[.12em] text-white/55">
          Reflect · Pray · Put the Word into action
        </p>
      </div>
    </div>
  );
}
