import type { Service, ServiceOccurrence } from "@/types/church";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

/**
 * Returns the last Friday of the given month as a Date at local midnight.
 * The single source of this calculation — see 00V. Never hardcode a list
 * of future Night Vigil dates; always derive it from here.
 */
export function getLastFriday(year: number, month: number /* 0-indexed */): Date {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const lastDay = lastDayOfMonth.getDate();
  const dayOfWeek = lastDayOfMonth.getDay(); // 0 = Sunday .. 6 = Saturday
  const diffToFriday = (dayOfWeek - 5 + 7) % 7; // 5 = Friday
  return new Date(year, month, lastDay - diffToFriday);
}

function parseTimeToken(token: string): { hour: number; minute: number } | null {
  const match = token.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return null;
  const [, hStr, mStr, meridiem] = match;
  let hour = parseInt(hStr!, 10);
  const minute = parseInt(mStr!, 10);
  if (/pm/i.test(meridiem!) && hour !== 12) hour += 12;
  if (/am/i.test(meridiem!) && hour === 12) hour = 0;
  return { hour, minute };
}

function computeEnd(candidateStart: Date, end: { hour: number; minute: number } | null): Date | null {
  if (!end) return null;
  const endDate = new Date(candidateStart.getFullYear(), candidateStart.getMonth(), candidateStart.getDate(), end.hour, end.minute, 0, 0);
  if (endDate <= candidateStart) endDate.setDate(endDate.getDate() + 1); // overnight (e.g. Night Vigil, 11pm–4am)
  return endDate;
}

/**
 * Computes the next occurrence of a recurring Service relative to `now`,
 * including whether it is happening live right now. Handles the monthly
 * "Last Friday of Every Month" pattern via getLastFriday, and ordinary
 * weekly services via their named weekday.
 *
 * An occurrence only rolls forward to the next period once it has fully
 * ENDED — comparing against start alone would incorrectly roll an
 * in-progress overnight vigil to next month while it's still live.
 */
export function nextServiceOccurrence(service: Service, now: Date = new Date()): ServiceOccurrence | null {
  const [startToken, endToken] = service.time.split(/[–-]/);
  const start = startToken ? parseTimeToken(startToken) : null;
  const end = endToken ? parseTimeToken(endToken) : null;
  if (!start) return null;

  let candidate: Date;
  let endDate: Date | null;

  if (service.day === "Last Friday of Every Month") {
    candidate = getLastFriday(now.getFullYear(), now.getMonth());
    candidate.setHours(start.hour, start.minute, 0, 0);
    endDate = computeEnd(candidate, end);
    const passed = endDate ? now > endDate : now > candidate;
    if (passed) {
      const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      candidate = getLastFriday(next.getFullYear(), next.getMonth());
      candidate.setHours(start.hour, start.minute, 0, 0);
      endDate = computeEnd(candidate, end);
    }
  } else {
    const weekdayIndex = WEEKDAYS.findIndex((w) => w === service.day);
    if (weekdayIndex === -1) return null;
    candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), start.hour, start.minute, 0, 0);
    const diff = (weekdayIndex - now.getDay() + 7) % 7;
    candidate.setDate(candidate.getDate() + diff);
    endDate = computeEnd(candidate, end);
    const passed = endDate ? now > endDate : now > candidate;
    if (passed) {
      candidate.setDate(candidate.getDate() + 7);
      endDate = computeEnd(candidate, end);
    }
  }

  const isLive = endDate ? now >= candidate && now <= endDate : false;
  return { service, start: candidate, end: endDate, isLive };
}

/** Picks the single most relevant occurrence across all services — live takes priority, else soonest. */
export function pickNextOccurrence(services: readonly Service[], now: Date = new Date()): ServiceOccurrence | null {
  let best: ServiceOccurrence | null = null;
  for (const service of services) {
    const occurrence = nextServiceOccurrence(service, now);
    if (!occurrence) continue;
    if (occurrence.isLive) return occurrence;
    if (!best || occurrence.start < best.start) best = occurrence;
  }
  return best;
}

export function formatCountdown(ms: number): string {
  const mins = Math.max(0, Math.round(ms / 60000));
  const days = Math.floor(mins / 1440);
  const hrs = Math.floor((mins % 1440) / 60);
  const remMins = mins % 60;
  if (days > 0) return `${days}d ${hrs}h`;
  if (hrs > 0) return `${hrs}h ${remMins}m`;
  return `${remMins}m`;
}
