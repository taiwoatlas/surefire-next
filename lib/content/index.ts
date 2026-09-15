import { sermons } from "@/data/sermons";
import { events, recurringGatherings } from "@/data/events";
import { ministries } from "@/data/ministries";
import { empowerment, getDepartment } from "@/data/empowerment";
import type { Sermon } from "@/types/sermon";
import type { ChurchEvent, RecurringGathering } from "@/types/event";
import type { Ministry } from "@/types/ministry";

/**
 * The only module UI components should import content through.
 * Today these functions just read the local TypeScript data files;
 * swapping to a CMS later means rewriting these function bodies only —
 * no component that calls getSermons()/getEvents() needs to change. See 00M/00N.
 */
export function getSermons(): readonly Sermon[] {
  return sermons;
}

export function getSermonBySlug(slug: string): Sermon | undefined {
  return sermons.find((s) => s.slug === slug);
}

export function getUpcomingEvents(now: Date = new Date()): readonly ChurchEvent[] {
  return events.filter((e) => new Date(e.startDate) >= now).sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getRecurringGatherings(): readonly RecurringGathering[] {
  return recurringGatherings;
}

export function getMinistries(): readonly Ministry[] {
  return ministries;
}

export function getEmpowermentDepartment(slug: string) {
  return getDepartment(slug);
}

export function getEmpowermentContent() {
  return empowerment;
}
