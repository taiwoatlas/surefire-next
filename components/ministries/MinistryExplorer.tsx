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
        aria-label="Search ministries"
        className="w-full rounded-sm border border-[#454545] bg-[#191919] px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#c8192e] focus:outline-none"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <Link key={m.name} href={ministryHref(m)} className="rounded-sm border border-[#454545] bg-[#191919] p-5 text-white transition hover:-translate-y-1 hover:border-[#c8192e] hover:bg-[#222]">
            <h3 className="font-display text-xl font-bold leading-snug text-white">{m.name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{m.desc}</p>
            <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[.16em] text-[#ff7a88]">Explore ministry ↗</span>
          </Link>
        ))}
        {filtered.length === 0 && <p className="text-sm text-[#686563]">No ministries match &ldquo;{query}&rdquo;.</p>}
      </div>
    </div>
  );
}
