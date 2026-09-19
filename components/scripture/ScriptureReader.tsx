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
    <div className="rounded-sm border border-line bg-charcoal p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-red">{verse.reference} (KJV)</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-2xl italic leading-relaxed">&ldquo;{verse.text}&rdquo;</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" onClick={prev} aria-label="Previous verse" className="rounded-full border border-line px-4 py-2 text-sm hover:bg-stone">
          ← Prev
        </button>
        <span className="font-mono text-xs text-gray">
          {index + 1} / {verses.length}
        </span>
        <button type="button" onClick={next} aria-label="Next verse" className="rounded-full border border-line px-4 py-2 text-sm hover:bg-stone">
          Next →
        </button>
      </div>
    </div>
  );
}
