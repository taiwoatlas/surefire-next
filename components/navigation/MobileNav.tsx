"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { primaryNav, footerConnect } from "@/data/navigation";
import { church } from "@/data/church";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      (previouslyFocused ?? fallbackFocusTarget)?.focus();
    };
  }, [open]);

  const panel = open && (
    <div
      id="mobile-nav-panel"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink px-6 py-8 text-paper"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg">{church.churchName}</span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="rounded-sm p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          <X aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Primary" className="mt-10 flex-1">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block min-h-[48px] py-3 font-display text-2xl leading-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Get in touch" className="mt-10 border-t border-lineOnInk pt-6">
        <ul className="flex flex-col gap-1">
          {footerConnect.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block min-h-[44px] py-2 text-sm text-gray-onInk">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="rounded-sm p-2 text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {mounted && panel && createPortal(panel, document.body)}
    </div>
  );
}
