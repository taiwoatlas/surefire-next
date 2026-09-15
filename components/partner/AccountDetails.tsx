"use client";

import * as React from "react";
import { church } from "@/data/church";
import { copyToClipboard } from "@/lib/clipboard";

function CopyField({ label, value }: { readonly label: string; readonly value: string }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-lineOnInk py-4 last:border-b-0">
      <span className="text-xs text-gray-onInk">{label}</span>
      <div className="flex items-center gap-3">
        <strong className="font-display text-lg text-paper">{value}</strong>
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className="rounded-sm bg-red px-3 py-1.5 text-xs font-semibold text-paper transition-colors hover:bg-gold hover:text-ink"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

/** The one place bank details are rendered — sourced from data/church.ts, never hardcoded per-page. */
export function AccountDetails() {
  return (
    <div className="rounded-sm border border-lineOnInk bg-white/5 p-8">
      <CopyField label="Bank" value={church.giving.bank} />
      <CopyField label="Account Name" value={church.giving.accountName} />
      <CopyField label="Account Number" value={church.giving.accountNumber} />
      <p className="mt-6 border-t border-dashed border-lineOnInk pt-4 text-xs text-gray-onInk">
        Sending a gift is entirely your decision. If you&apos;d like a confirmation of a transfer, or have a question
        first, reach the church directly.
      </p>
    </div>
  );
}
