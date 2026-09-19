"use client";

import * as React from "react";
import Link from "next/link";
import { sermons } from "@/data/sermons";
import { EmptyState } from "@/components/church/EmptyState";

export function SermonSearch() {
  const [query, setQuery] = React.useState("");

  const filtered = sermons.filter((s) => {
    const q = query.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.speaker.toLowerCase().includes(q) ||
      (s.series ?? "").toLowerCase().includes(q) ||
      (s.scripture ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by speaker, series, or Scripture…"
        className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm"
      />

      <div className="mt-6">
        {sermons.length === 0 ? (
          <EmptyState
            title="No sermons published yet"
            description="Messages from the Surefire pulpit will be searchable here — by speaker, series, Scripture, and date — once they're added."
          />
        ) : filtered.length === 0 ? (
          <p className="text-sm text-gray">No sermons match &ldquo;{query}&rdquo;.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {filtered.map((s) => (
              <Link key={s.slug} href={`/sermons/${s.slug}`} className="rounded-sm border border-line bg-charcoal p-6">
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-gray">{s.speaker}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
