import * as React from "react";
import { cn } from "@/lib/utils";

/** The one place page content width is capped — see 00BE: never let text stretch across ultrawide viewports. */
export function Container({ className, children }: { readonly className?: string; readonly children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-10", className)}>{children}</div>;
}
