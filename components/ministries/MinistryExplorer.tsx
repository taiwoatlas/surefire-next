"use client";

import * as React from "react";
import Link from "next/link";
import { ministries } from "@/data/ministries";
import { ministryHref } from "@/types/ministry";

export function MinistryExplorer() {
  const [query, setQuery] = React.useState("");

  const filtered = ministries.filter(
    (m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.desc.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search ministries…"
        className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <Link key={m.name} href={ministryHref(m)} className="rounded-sm border border-line bg-charcoal p-6 transition-transform hover:-translate-y-1">
            <h3 className="font-display text-xl">{m.name}</h3>
            <p className="mt-2 text-sm text-gray">{m.desc}</p>
          </Link>
        ))}
        {filtered.length === 0 && <p className="text-sm text-gray">No ministries match &ldquo;{query}&rdquo;.</p>}
      </div>
    </div>
  );
}
