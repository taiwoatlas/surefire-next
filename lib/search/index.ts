import { primaryNav, footerConnect } from "@/data/navigation";
import { ministries } from "@/data/ministries";
import { empowerment } from "@/data/empowerment";
import { services } from "@/data/church";
import { normalize } from "./normalize";

export type SearchItemType = "Page" | "Ministry" | "Empowerment" | "Service";

export interface SearchItem {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly type: SearchItemType;
}

const PAGE_DESCRIPTIONS: Record<string, string> = {
  "/": "The homepage — vision, services, and how to get involved.",
  "/about": "Our vision, mission, values, and history.",
  "/ministries": "Every ministry at Surefire — find where you fit.",
  "/sermons": "The sermon library, by speaker, topic, and Scripture.",
  "/watch-live": "Join a Surefire service online.",
  "/partner": "Partner with the mission — financially or in prayer.",
  "/leadership": "The pastoral leadership of Surefire.",
  "/empowerment": "The Empowerment ecosystem — nine departments, one ministry.",
  "/services": "Worship gathering times.",
  "/events": "What's happening, including the monthly Night Vigil.",
  "/gallery": "Photography from church life.",
  "/contact": "Reach the church directly.",
  "/prayer-request": "Share a prayer request.",
  "/testimony": "Share what God has done in your life.",
  "/counselling": "Request counselling with a pastor.",
  "/plan-your-visit": "Everything you need to know before you visit.",
};

function pagesIndex(): SearchItem[] {
  const all = [...primaryNav, ...footerConnect];
  const seen = new Set<string>();
  const items: SearchItem[] = [];
  for (const item of all) {
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    items.push({
      title: item.label,
      description: PAGE_DESCRIPTIONS[item.href] ?? "",
      href: item.href,
      type: "Page",
    });
  }
  return items;
}

function ministriesIndex(): SearchItem[] {
  return ministries.map((m) => ({
    title: m.name,
    description: m.desc,
    href: m.slug ? `/ministries/${m.slug}` : "/ministries",
    type: "Ministry" as const,
  }));
}

function empowermentIndex(): SearchItem[] {
  return empowerment.departments.map((d) => ({
    title: d.name,
    description: d.summary,
    href: `/${d.slug}`,
    type: "Empowerment" as const,
  }));
}

function servicesIndex(): SearchItem[] {
  return services.map((s) => ({
    title: s.name,
    description: `${s.day} · ${s.time}`,
    href: "/services",
    type: "Service" as const,
  }));
}

export const searchIndex: readonly SearchItem[] = [
  ...pagesIndex(),
  ...ministriesIndex(),
  ...empowermentIndex(),
  ...servicesIndex(),
];

export function search(query: string, limit = 20): SearchItem[] {
  const q = normalize(query);
  if (!q) return [];
  return searchIndex.filter((item) => normalize(item.title).includes(q) || normalize(item.description).includes(q)).slice(0, limit);
}
