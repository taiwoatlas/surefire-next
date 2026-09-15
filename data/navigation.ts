import type { NavItem } from "@/types/navigation";

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Watch Live", href: "/watch-live" },
  { label: "Partner", href: "/partner" },
  { label: "Leadership", href: "/leadership" },
  { label: "Empowerment", href: "/empowerment" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerConnect: readonly NavItem[] = [
  { label: "Prayer Request", href: "/prayer-request" },
  { label: "Share a Testimony", href: "/testimony" },
  { label: "Request Counselling", href: "/counselling" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
];
