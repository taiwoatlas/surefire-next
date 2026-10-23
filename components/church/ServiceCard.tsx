"use client";

import * as React from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import type { Service } from "@/types/church";
import { nextServiceOccurrence, formatCountdown } from "@/lib/dates";
import { buildIcsDataUrl } from "@/lib/calendar";

export function ServiceCard({ service }: { readonly service: Service }) {
  const [occurrence, setOccurrence] = React.useState<ReturnType<typeof nextServiceOccurrence>>(null);

  React.useEffect(() => {
    setOccurrence(nextServiceOccurrence(service));
    const id = window.setInterval(() => setOccurrence(nextServiceOccurrence(service)), 60_000);
    return () => window.clearInterval(id);
  }, [service]);

  return (
    <article className="group rounded-2xl border border-[#e4e1df] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#c8192e] hover:shadow-[0_12px_32px_rgba(24,56,43,.08)] sm:p-6">
      <div className="flex items-center justify-between">
        <span className="grid size-10 place-items-center rounded-xl bg-[#fbe9ec] text-[#c8192e]"><CalendarDays size={18} aria-hidden="true" /></span>
        <span className="font-mono text-[10px] tracking-[.16em] text-[#9a8b6b]">{service.num}</span>
      </div>
      <h3 className="mt-4 font-display text-xl text-[#101010]">{service.name}</h3>
      <p className="mt-1.5 text-sm font-semibold text-[#c8192e]">{service.day}</p>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-[#686563]"><Clock3 size={14} aria-hidden="true" />{service.time}</p>

      {occurrence && (
        <div className="mt-4 border-t border-[#e4e1df] pt-4">
          {occurrence.isLive ? <p className="text-xs font-semibold text-[#c8192e]">Happening now</p> : (
            <p className="text-xs text-[#686563]">Next: {occurrence.start.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })} · in {formatCountdown(occurrence.start.getTime() - Date.now())}</p>
          )}
          <a href={buildIcsDataUrl(occurrence)} download={`${service.key}.ics`} className="mt-3 inline-flex min-h-9 items-center text-xs font-semibold text-[#c8192e] underline decoration-[#c8192e] decoration-2 underline-offset-4 hover:text-[#101010]">Add to calendar</a>
        </div>
      )}
    </article>
  );
}
