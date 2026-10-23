import * as React from "react";
import { cn } from "@/lib/utils";

/** Shared page width and gutters keep content aligned across routes and screen sizes. */
export function Container({ className, children }: { readonly className?: string; readonly children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10", className)}>{children}</div>;
}
