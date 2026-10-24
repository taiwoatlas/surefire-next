"use client";

import * as React from "react";
import { verses } from "@/data/scripture";

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86_400_000);
}

/** A deterministic daily selection, with an option to explore another verse. */
export function VerseOfTheDay() {
  const [dailyIndex, setDailyIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const day = dayOfYear(new Date());
    // A simple day-based permutation makes the selection vary daily without
    // changing during renders or hydration.
    const index = (day * 7 + Math.floor(day / verses.length) * 11) % verses.length;
    setDailyIndex(index);
    setSelectedIndex(index);
  }, []);

  if (selectedIndex === null || dailyIndex === null) return null;
  const verse = verses[selectedIndex];

  function showAnotherVerse() {
    setSelectedIndex((current) => {
      if (current === null || verses.length < 2) return dailyIndex;
      const offset = 1 + Math.floor(Math.random() * (verses.length - 1));
      return (current + offset) % verses.length;
    });
  }

  const isDailyVerse = selectedIndex === dailyIndex;

  return (
    <div className="rounded-xl border border-white/15 bg-[#191919] p-6 text-center text-white shadow-[0_12px_36px_rgba(0,0,0,.12)] sm:p-8">
      <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7a88]">
        {isDailyVerse ? "Scripture for Today" : "Scripture for Reflection"}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[.16em] text-white/55">
        {verse.theme}
      </p>
      <p className="mx-auto mt-4 max-w-2xl font-display text-xl italic leading-relaxed text-white sm:text-2xl">
        &ldquo;{verse.text}&rdquo;
      </p>
      <p className="mt-4 text-sm font-semibold text-white/75">{verse.reference} (KJV)</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/65">
        Grounded in our vision, <span className="font-semibold text-white/85">Living Wonders</span>,
        and our mission to empower lives and build the Kingdom.
      </p>
      <button
        type="button"
        onClick={showAnotherVerse}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#ff7a88] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff7a88]"
      >
        Show another scripture
      </button>
    </div>
  );
}
