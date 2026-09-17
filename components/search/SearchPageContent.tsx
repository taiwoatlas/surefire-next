"use client";

import * as React from "react";
import Link from "next/link";
import { search, type SearchItem } from "@/lib/search";

export function SearchPageContent() {
  const [query, setQuery] = React.useState("");
  const results: SearchItem[] = React.useMemo(() => search(query, 50), [query]);

  return (
    <div>
      <label htmlFor="siteSearch" className="sr-only">
        Search the site
      </label>
      <input
        id="siteSearch"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search sermons, ministries, services, empowerment programmes…"
        className="w-full rounded-sm border border-line bg-charcoal px-5 py-4 text-lg"
        autoFocus
      />

      <div className="mt-8">
        {query && results.length === 0 && (
          <p className="text-gray">No results for &ldquo;{query}&rdquo;. Try a different word, or browse from the main menu.</p>
        )}

        {results.length > 0 && (
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {results.map((item) => (
              <li key={item.href + item.title}>
                <Link href={item.href} className="flex items-center justify-between gap-4 py-5">
                  <span>
                    <span className="block font-display text-lg">{item.title}</span>
                    {item.description && <span className="mt-1 block text-sm text-gray">{item.description}</span>}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-red">{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
