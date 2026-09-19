"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function ScrollReveal({ children, className, delayMs = 0 }: { readonly children: React.ReactNode; readonly className?: string; readonly delayMs?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn("translate-y-4 opacity-0 transition-all duration-700 ease-church", visible && "translate-y-0 opacity-100", className)}
    >
      {children}
    </div>
  );
}
