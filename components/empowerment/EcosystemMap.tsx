"use client";

import * as React from "react";
import Link from "next/link";
import { empowerment } from "@/data/empowerment";

export function EcosystemMap() {
  const [activeKey, setActiveKey] = React.useState(empowerment.departments[0]!.key);
  const active = empowerment.departments.find((d) => d.key === activeKey)!;

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-9">
        {empowerment.departments.map((d) => (
          <button
            key={d.key}
            type="button"
            onClick={() => setActiveKey(d.key)}
            onFocus={() => setActiveKey(d.key)}
            aria-pressed={d.key === activeKey}
            className={`rounded-sm border px-2 py-3 text-center text-xs font-semibold transition-colors ${
              d.key === activeKey ? "border-red bg-red text-paper" : "border-lineOnInk bg-white/5 text-gray-onInk hover:bg-white/10"
            }`}
          >
            <span className="block font-mono text-[10px] opacity-70">{d.num}</span>
            {d.name}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-sm border border-lineOnInk bg-white/5 p-8" aria-live="polite">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Department {active.num}</p>
        <h3 className="mt-3 font-display text-2xl text-paper">{active.name}</h3>
        <p className="mt-2 font-display italic text-gold">&ldquo;{active.theme}&rdquo;</p>
        <p className="mt-4 max-w-xl text-sm text-gray-onInk">{active.summary}</p>
        <Link href={`/${active.slug}`} className="mt-6 inline-block rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Explore {active.name} →
        </Link>
      </div>
    </div>
  );
}
