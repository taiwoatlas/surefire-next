"use client";

import { useWhatsAppForm } from "@/hooks/useWhatsAppForm";
import { WhatsAppReadyPanel } from "@/components/forms/WhatsAppReadyPanel";

const TEMPLATE = "Hello,\n\nI would like to share a prayer request.\n\nName: {{name}}\nPhone: {{phone}}\n\nRequest:\n{{request}}";

export function PrayerRequestForm() {
  const { status, waLink, handleSubmit } = useWhatsAppForm("seniorPastor", TEMPLATE);

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-lineOnInk bg-white/5 p-8">
      <div>
        <label htmlFor="pName" className="text-xs text-gray-onInk">
          Name
        </label>
        <input id="pName" name="name" type="text" required className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      <div className="mt-4">
        <label htmlFor="pPhone" className="text-xs text-gray-onInk">
          Phone
        </label>
        <input id="pPhone" name="phone" type="tel" required className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      <div className="mt-4">
        <label htmlFor="pRequest" className="text-xs text-gray-onInk">
          What would you like us to pray for?
        </label>
        <textarea id="pRequest" name="request" required rows={6} className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      {status === "idle" && (
        <button type="submit" className="mt-6 w-full rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Prepare Prayer Request
        </button>
      )}
      {status === "ready" && <WhatsAppReadyPanel waLink={waLink} />}

      <p className="mt-4 text-xs text-gray-onInk">
        Your request is shared with our pastoral team. We handle every request with care, though we can&apos;t promise
        confidentiality beyond what&apos;s appropriate for prayer and pastoral support.
      </p>
    </form>
  );
}
