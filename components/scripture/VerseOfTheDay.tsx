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
    <div className="rounded-sm border border-lineOnInk bg-white/5 p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-gold">Verse of the Day</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-xl italic leading-relaxed text-paper">&ldquo;{verse.text}&rdquo;</p>
      <p className="mt-4 text-sm text-gray-onInk">{verse.reference} (KJV)</p>
    </div>
  );
}
