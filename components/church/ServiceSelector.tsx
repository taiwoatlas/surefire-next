"use client";

import * as React from "react";
import { services } from "@/data/church";

export function ServiceSelector() {
  const [activeKey, setActiveKey] = React.useState(services[0]!.key);
  const active = services.find((s) => s.key === activeKey)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Services">
        {services.map((s) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={s.key === activeKey}
            type="button"
            onClick={() => setActiveKey(s.key)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
              s.key === activeKey ? "border-red bg-red text-paper" : "border-line bg-charcoal text-ink hover:bg-stone"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-6 rounded-sm border border-line bg-charcoal p-6">
        <p className="font-mono text-xs text-red">{active.num}</p>
        <h3 className="mt-2 font-display text-xl">{active.name}</h3>
        <p className="mt-2 text-sm text-gray">{active.day}</p>
        <p className="text-sm text-gray">{active.time}</p>
      </div>
    </div>
  );
}
