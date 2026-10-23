import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { readonly className?: string; readonly children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "spotlight-card relative rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-200 ease-church hover:-translate-y-0.5 hover:border-gold hover:shadow-soft sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
