import { describe, it, expect } from "vitest";
import { getLastFriday, nextServiceOccurrence } from "@/lib/dates";
import { services } from "@/data/church";

describe("getLastFriday", () => {
  it("finds the last Friday of September 2026", () => {
    const d = getLastFriday(2026, 8); // month is 0-indexed: 8 = September
    expect(d.getDate()).toBe(25);
    expect(d.getDay()).toBe(5);
  });

  it("finds the last Friday of a leap-year February", () => {
    const d = getLastFriday(2024, 1);
    expect(d.getDate()).toBe(23);
    expect(d.getDay()).toBe(5);
  });
});

describe("nextServiceOccurrence", () => {
  it("returns a future Sunday for the In His Presence service", () => {
    const presence = services.find((s) => s.key === "presence")!;
    const now = new Date("2026-09-15T10:00:00"); // a Tuesday
    const occurrence = nextServiceOccurrence(presence, now);
    expect(occurrence).not.toBeNull();
    expect(occurrence!.start.getDay()).toBe(0); // Sunday
    expect(occurrence!.start.getTime()).toBeGreaterThan(now.getTime());
  });

  it("marks the Night Vigil as live when `now` falls inside its window", () => {
    const vigil = services.find((s) => s.key === "vigil")!;
    const lastFridayNight = new Date("2026-09-25T23:30:00"); // inside 11pm–4am
    const occurrence = nextServiceOccurrence(vigil, lastFridayNight);
    expect(occurrence?.isLive).toBe(true);
  });
});
