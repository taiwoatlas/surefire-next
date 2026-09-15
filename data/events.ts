import type { ChurchEvent, RecurringGathering } from "@/types/event";

/**
 * No one-off, dated event has been confirmed by the church as of this
 * build. Stays empty until real events are provided — see data/sermons.ts
 * for the same rule applied to sermons.
 */
export const events: readonly ChurchEvent[] = [];

/** The one confirmed recurring gathering outside the regular weekly services. */
export const recurringGatherings: readonly RecurringGathering[] = [
  {
    key: "night-vigil",
    title: "Night Vigil",
    recurrence: "last-friday-monthly",
    time: "11:00 PM – 4:00 AM",
    location: "The Surefire Christian Church of God",
    description: "A dedicated night of prayer and watch — held monthly at the church.",
  },
];
