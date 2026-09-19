import { announcements } from "@/data/announcements";

export function AnnouncementTicker() {
  if (announcements.length === 0) return null;

  return (
    <div className="overflow-hidden border-y border-lineOnInk bg-ink py-2 text-paper">
      <div className="flex animate-[ticker_30s_linear_infinite] gap-12 whitespace-nowrap">
        {[...announcements, ...announcements].map((a, i) =>
          a.href ? (
            <a key={i} href={a.href} className="text-sm hover:text-gold">
              {a.text}
            </a>
          ) : (
            <span key={i} className="text-sm">
              {a.text}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
