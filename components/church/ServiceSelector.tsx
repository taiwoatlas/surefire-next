"use client";

import * as React from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import { services } from "@/data/church";

export function ServiceSelector() {
  const [activeKey, setActiveKey] = React.useState(services[0]!.key);
  const active = services.find((s) => s.key === activeKey)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Services">
        {services.map((s) => (
          <button key={s.key} role="tab" aria-selected={s.key === activeKey} type="button" onClick={() => setActiveKey(s.key)}
            className={`min-h-10 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${s.key === activeKey ? "border-[#c8192e] bg-[#c8192e] text-white" : "border-[#E0E0E0] bg-white text-[#101010] hover:border-[#c8192e]"}`}>
            {s.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#E0E0E0] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#FCEBED] text-[#c8192e]"><CalendarDays size={18} aria-hidden="true" /></span>
          <div><p className="font-display text-xl text-[#101010]">{active.name}</p><p className="mt-1 text-sm text-[#686563]">{active.day}</p></div>
        </div>
        <p className="flex items-center gap-2 text-sm font-semibold text-[#c8192e]"><Clock3 size={16} aria-hidden="true" />{active.time}</p>
      </div>
    </div>
  );
}
