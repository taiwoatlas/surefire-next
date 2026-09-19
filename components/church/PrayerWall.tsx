import { publicPrayers } from "@/data/publicPrayers";
import { EmptyState } from "@/components/church/EmptyState";

export function PrayerWall() {
  if (publicPrayers.length === 0) {
    return (
      <EmptyState
        badge="Coming Soon"
        title="A place to pray for one another"
        description="Once a way to share prayer requests publicly (with permission) is in place, they'll appear here so the church can stand together in prayer."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {publicPrayers.map((p, i) => (
        <div key={i} className="rounded-sm border border-line bg-charcoal p-6">
          <p className="text-sm text-gray">{p.request}</p>
          <p className="mt-3 text-xs text-gray">— {p.name}</p>
        </div>
      ))}
    </div>
  );
}
