"use client";

import * as React from "react";
import { verses } from "@/data/scripture";

export function ScriptureReader() {
  const [index, setIndex] = React.useState(0);
  const verse = verses[index]!;

  function next() {
    setIndex((i) => (i + 1) % verses.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + verses.length) % verses.length);
  }

  return (
    <div className="rounded-xl border border-[#303030] bg-[#191919] p-6 text-center text-white sm:p-8">
      <p className="font-mono text-xs font-bold uppercase tracking-wide text-[#ff7a88]">{verse.reference} (KJV)</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-2xl italic leading-relaxed text-white">&ldquo;{verse.text}&rdquo;</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" onClick={prev} aria-label="Previous verse" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#c8192e] hover:bg-[#c8192e]">
          ← Prev
        </button>
        <span className="font-mono text-xs text-white/65">
          {index + 1} / {verses.length}
        </span>
        <button type="button" onClick={next} aria-label="Next verse" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#c8192e] hover:bg-[#c8192e]">
          Next →
        </button>
      </div>
    </div>
  );
}
