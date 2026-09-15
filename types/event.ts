export type EventCategory = "worship" | "outreach" | "empowerment" | "youth" | "general";

/** A one-off, dated event (as opposed to a recurring Service). None are confirmed yet — see data/events.ts. */
export interface ChurchEvent {
  readonly slug: string;
  readonly title: string;
  readonly startDate: string; // ISO 8601
  readonly endDate?: string;
  readonly location: string;
  readonly category: EventCategory;
  readonly summary: string;
  readonly description?: string;
}

/** A recurring pattern-based gathering, e.g. Night Vigil (last Friday of every month). */
export interface RecurringGathering {
  readonly key: string;
  readonly title: string;
  readonly recurrence: "last-friday-monthly";
  readonly time: string;
  readonly location: string;
  readonly description: string;
}
