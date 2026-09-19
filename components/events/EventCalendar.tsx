"use client";

import * as React from "react";
import { getLastFriday } from "@/lib/dates";
import { events } from "@/data/events";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function EventCalendar() {
  const [cursor, setCursor] = React.useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const { year, month } = cursor;
  const firstOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay();
  const nightVigilDate = getLastFriday(year, month).getDate();

  const eventDatesThisMonth = new Set(
    events
      .map((e) => new Date(e.startDate))
      .filter((d) => d.getFullYear() === year && d.getMonth() === month)
      .map((d) => d.getDate()),
  );

  const cells: (number | null)[] = [...Array(startWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  function prevMonth() {
    setCursor((c) => (c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }));
  }
  function nextMonth() {
    setCursor((c) => (c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }));
  }

  return (
    <div className="rounded-sm border border-line bg-charcoal p-6">
      <div className="flex items-center justify-between">
        <button type="button" onClick={prevMonth} aria-label="Previous month" className="rounded-sm px-3 py-1 text-sm hover:bg-stone">
          ←
        </button>
        <h3 className="font-display text-lg">
          {firstOfMonth.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
        </h3>
        <button type="button" onClick={nextMonth} aria-label="Next month" className="rounded-sm px-3 py-1 text-sm hover:bg-stone">
          →
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-gray">
        {WEEKDAY_LABELS.map((d) => (
          <div key={d} className="py-1 font-semibold">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          const isVigil = day === nightVigilDate;
          const hasEvent = day !== null && eventDatesThisMonth.has(day);
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-sm text-sm ${
                day === null ? "" : isVigil ? "bg-red text-paper" : hasEvent ? "bg-gold text-ink" : "text-ink"
              }`}
              title={isVigil ? "Night Vigil" : undefined}
            >
              {day ?? ""}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-red" /> Night Vigil
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-gold" /> Confirmed event
        </span>
      </div>
    </div>
  );
}
