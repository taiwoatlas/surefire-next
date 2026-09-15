import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { readonly className?: string; readonly children: React.ReactNode }) {
  return (
    <div className={cn("rounded-sm border border-line bg-charcoal p-8 shadow-sm transition-transform duration-300 ease-church hover:-translate-y-1.5", className)}>
      {children}
    </div>
  );
}
