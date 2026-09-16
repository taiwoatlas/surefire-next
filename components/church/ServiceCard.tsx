"use client";

import * as React from "react";
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
    <div className="rounded-sm border border-line bg-charcoal p-6">
      <p className="font-mono text-xs text-red">{service.num}</p>
      <h3 className="mt-2 font-display text-xl">{service.name}</h3>
      <p className="mt-2 text-sm text-gray">{service.day}</p>
      <p className="text-sm text-gray">{service.time}</p>

      {occurrence && (
        <div className="mt-4 border-t border-line pt-4">
          {occurrence.isLive ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-red">Happening now</p>
          ) : (
            <p className="text-xs text-gray">
              Next: {occurrence.start.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}
              {" · in "}
              {formatCountdown(occurrence.start.getTime() - Date.now())}
            </p>
          )}
          <a
            href={buildIcsDataUrl(occurrence)}
            download={`${service.key}.ics`}
            className="mt-3 inline-block text-xs font-semibold text-red underline decoration-red decoration-2 underline-offset-4"
          >
            Add to calendar
          </a>
        </div>
      )}
    </div>
  );
}
