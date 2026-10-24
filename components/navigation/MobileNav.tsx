"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { primaryNav, footerConnect } from "@/data/navigation";
import { church } from "@/data/church";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => { setMounted(true); }, []);

  React.useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const fallbackFocusTarget = triggerRef.current;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      (previouslyFocused ?? fallbackFocusTarget)?.focus();
    };
  }, [open]);

  const panel = open && (
    <div id="mobile-nav-panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#101010] px-5 py-5 text-white sm:px-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-[#c8192e] font-display text-xl font-semibold text-white">S</span>
          <span><span className="block font-display text-base font-semibold">Surefire Christian Church</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[.22em] text-[#ff7a88]">Living Wonders</span></span>
        </Link>
        <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full border border-white/20 p-2.5 transition hover:border-[#c8192e] hover:text-[#ff7a88]"><X aria-hidden="true" /></button>
      </div>

      <nav aria-label="Primary" className="flex-1 py-5">
        <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {primaryNav.map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="group flex min-h-12 items-center justify-between border-b border-white/[.07] py-3 font-display text-xl transition hover:text-[#ff7a88] sm:px-2">
                <span className="flex items-center gap-3"><span className="font-mono text-[9px] text-[#c8192e]/70">{"0".repeat(Math.max(0, 2 - String(i + 1).length))}{i + 1}</span>{item.label}</span>
                <ArrowUpRight size={15} className="text-white/25 transition group-hover:text-[#ff7a88]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-2xl border border-[#c8192e]/20 bg-white/[.04] p-4">
        <p className="font-mono text-[9px] uppercase tracking-[.2em] text-[#c8192e]">Connect with us</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {footerConnect.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-xs text-white/70 hover:text-white">{item.label}</Link>)}
        </div>
        <p className="mt-4 text-[10px] text-white/40">{church.address}</p>
      </div>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="mobile-nav-panel" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/20 p-2.5 text-white transition hover:border-[#c8192e] hover:text-[#ff7a88]">
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {mounted && panel && createPortal(panel, document.body)}
    </div>
  );
}
