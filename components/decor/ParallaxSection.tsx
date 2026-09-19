"use client";

import * as React from "react";

export function ParallaxSection({ children, strength = 20 }: { readonly children: React.ReactNode; readonly strength?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const viewportCenter = window.innerHeight / 2;
          const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
          const offset = Math.max(-strength, Math.min(strength, distanceFromCenter * -0.05));
          el.style.transform = `translateY(${offset}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
