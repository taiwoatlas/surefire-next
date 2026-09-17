"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { search, type SearchItem } from "@/lib/search";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: SearchItem[] = React.useMemo(() => search(query, 8), [query]);

  const go = React.useCallback(
    (item: SearchItem) => {
      setOpen(false);
      setQuery("");
      router.push(item.href);
    },
    [router],
  );

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    function onTrigger() {
      setOpen(true);
    }
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onTrigger);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onTrigger);
    };
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setActiveIndex(0);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        go(results[activeIndex]!);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [open, results, activeIndex, go]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Search" className="fixed inset-0 z-50 flex items-start justify-center bg-ink/80 px-4 pt-24">
      <div className="w-full max-w-lg overflow-hidden rounded-sm border border-lineOnInk bg-ink shadow-2xl">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search sermons, ministries, services…"
          className="w-full border-b border-lineOnInk bg-transparent px-5 py-4 text-paper placeholder:text-gray-onInk focus:outline-none"
        />
        {results.length > 0 && (
          <ul className="max-h-80 overflow-y-auto py-2">
            {results.map((item, i) => (
              <li key={item.href + item.title}>
                <button
                  type="button"
                  onClick={() => go(item)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-3 text-left ${i === activeIndex ? "bg-white/10" : ""}`}
                >
                  <span>
                    <span className="block text-sm text-paper">{item.title}</span>
                    {item.description && <span className="block text-xs text-gray-onInk">{item.description}</span>}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-gold">{item.type}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && <p className="px-5 py-6 text-sm text-gray-onInk">No results for &ldquo;{query}&rdquo;.</p>}
        {!query && (
          <p className="px-5 py-6 text-xs text-gray-onInk">
            Try &ldquo;prayer&rdquo;, &ldquo;grants&rdquo;, or &ldquo;youth&rdquo; — press <kbd>Esc</kbd> to close.
          </p>
        )}
      </div>
    </div>
  );
}
