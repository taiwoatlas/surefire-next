import type { MetadataRoute } from "next";
import { empowerment } from "@/data/empowerment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://surefirechristianchurch.org";

const staticRoutes = [
  "",
  "about",
  "leadership",
  "ministries",
  "services",
  "sermons",
  "events",
  "gallery",
  "prayer-request",
  "testimony",
  "counselling",
  "plan-your-visit",
  "watch-live",
  "empowerment",
  "empowerment-assessment",
  "partner",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const departmentRoutes = empowerment.departments.map((d) => d.slug);

  return [...staticRoutes, ...departmentRoutes].map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/$/, "") || siteUrl,
    lastModified: new Date(),
  }));
}
