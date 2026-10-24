"use client";

import * as React from "react";
import { verses } from "@/data/scripture";

function dayOfYear(d: Date): number {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  return Math.floor(diff / 86_400_000);
}

export function VerseOfTheDay() {
  const [index, setIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    setIndex(dayOfYear(new Date()) % verses.length);
  }, []);

  if (index === null) return null;
  const verse = verses[index]!;

  return (
    <div className="rounded-xl border border-white/15 bg-[#191919] p-6 text-center text-white shadow-[0_12px_36px_rgba(0,0,0,.12)] sm:p-8">
      <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#ff7a88]">Verse of the Day</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-xl italic leading-relaxed text-white sm:text-2xl">&ldquo;{verse.text}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-white/75">{verse.reference} (KJV)</p>
    </div>
  );
}
