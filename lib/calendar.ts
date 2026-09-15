import { church } from "@/data/church";
import type { ServiceOccurrence } from "@/types/church";

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function formatIcsDate(d: Date): string {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
}

/** Builds a downloadable .ics data URL for a single service occurrence. Mirrors the previous static site's icsFor(). */
export function buildIcsDataUrl(occurrence: ServiceOccurrence): string {
  const end = occurrence.end ?? new Date(occurrence.start.getTime() + 2 * 60 * 60 * 1000);
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Surefire Christian Church of God//Service//EN",
    "BEGIN:VEVENT",
    `UID:${occurrence.service.key}-${occurrence.start.getTime()}@surefirechristianchurch.org`,
    `DTSTART:${formatIcsDate(occurrence.start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${occurrence.service.name} — ${church.churchName}`,
    `LOCATION:${church.address}`,
    `DESCRIPTION:Join us for ${occurrence.service.name} at ${church.churchName}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
