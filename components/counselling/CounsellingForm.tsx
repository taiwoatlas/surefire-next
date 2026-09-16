"use client";

import { useWhatsAppForm } from "@/hooks/useWhatsAppForm";
import { WhatsAppReadyPanel } from "@/components/forms/WhatsAppReadyPanel";

const TEMPLATE =
  "Hello,\n\nI would like to request counselling.\n\nName: {{name}}\nPhone: {{phone}}\nPreferred contact time: {{time}}\n\nWhat this is about:\n{{about}}";

export function CounsellingForm() {
  const { status, waLink, handleSubmit } = useWhatsAppForm("seniorPastor", TEMPLATE);

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-lineOnInk bg-white/5 p-8">
      <div>
        <label htmlFor="cName" className="text-xs text-gray-onInk">
          Name
        </label>
        <input id="cName" name="name" type="text" required className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      <div className="mt-4">
        <label htmlFor="cPhone" className="text-xs text-gray-onInk">
          Phone
        </label>
        <input id="cPhone" name="phone" type="tel" required className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      <div className="mt-4">
        <label htmlFor="cTime" className="text-xs text-gray-onInk">
          Best time to reach you (optional)
        </label>
        <input id="cTime" name="time" type="text" className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      <div className="mt-4">
        <label htmlFor="cAbout" className="text-xs text-gray-onInk">
          What would you like to talk about?
        </label>
        <textarea id="cAbout" name="about" required rows={5} className="mt-1 w-full rounded-sm border border-lineOnInk bg-ink px-3 py-2 text-sm text-paper" />
      </div>

      {status === "idle" && (
        <button type="submit" className="mt-6 w-full rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Prepare Request
        </button>
      )}
      {status === "ready" && <WhatsAppReadyPanel waLink={waLink} buttonLabel="Open WhatsApp to Send" />}

      <p className="mt-4 text-xs text-gray-onInk">
        A pastor will reach out to arrange a time to talk, in person, by call, or on WhatsApp — whatever feels most
        comfortable for you.
      </p>
    </form>
  );
}
