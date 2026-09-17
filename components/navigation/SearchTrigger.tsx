"use client";

import { Search } from "lucide-react";

export function SearchTrigger() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
      aria-label="Search (Ctrl+K)"
      className="hidden items-center gap-2 rounded-sm border border-lineOnInk px-3 py-1.5 text-xs text-paper/70 transition-colors hover:text-gold md:flex"
    >
      <Search size={14} aria-hidden="true" />
      <span>Search</span>
      <kbd className="rounded-sm border border-lineOnInk px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
    </button>
  );
}
