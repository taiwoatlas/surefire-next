"use client";

import * as React from "react";
import { formatCountdown } from "@/lib/dates";

export function Countdown({ target, label = "Starts in" }: { readonly target: Date; readonly label?: string }) {
  const [now, setNow] = React.useState<number | null>(null);

  React.useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) return null;

  const diff = target.getTime() - now;
  if (diff <= 0) {
    return <span className="font-mono text-xs uppercase tracking-wide text-red">Happening now</span>;
  }

  return (
    <span className="font-mono text-xs text-gray-onInk">
      {label} {formatCountdown(diff)}
    </span>
  );
}
