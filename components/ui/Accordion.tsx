import * as React from "react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  readonly id: string;
  readonly title: React.ReactNode;
  readonly content: React.ReactNode;
  readonly defaultOpen?: boolean;
}

/**
 * Built on native <details>/<summary> rather than a JS-driven pattern —
 * works with zero JavaScript, is keyboard-operable by default, and needs
 * no ARIA beyond what the browser already provides (00BL: prefer native
 * HTML semantics over ARIA).
 */
export function Accordion({ items, className }: { readonly items: readonly AccordionItemData[]; readonly className?: string }) {
  return (
    <div className={cn("divide-y divide-line border-t border-line", className)}>
      {items.map((item) => (
        <details key={item.id} className="group py-1" open={item.defaultOpen}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg text-ink">
            <span>{item.title}</span>
            <span className="relative h-5 w-5 flex-shrink-0" aria-hidden="true">
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-red" />
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-red transition-transform duration-300 ease-church group-open:rotate-90 group-open:scale-x-0" />
            </span>
          </summary>
          <div className="max-w-xl pb-5 text-sm text-gray">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
