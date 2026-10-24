"use client";

import { useWhatsAppForm } from "@/hooks/useWhatsAppForm";
import { WhatsAppReadyPanel } from "@/components/forms/WhatsAppReadyPanel";

const TEMPLATE =
  "Hello,\n\nI would like to share a testimony.\n\nName: {{name}}\nPhone: {{phone}}\n\nTestimony:\n{{testimony}}\n\nOkay to publish: {{consent}}";

export function TestimonyForm() {
  const { status, waLink, handleSubmit } = useWhatsAppForm("church", TEMPLATE);

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-[#454545] bg-[#191919] p-5 text-white sm:p-8">
      <div>
        <label htmlFor="tName" className="text-xs text-white/75">
          Name
        </label>
        <input id="tName" name="name" type="text" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      <div className="mt-4">
        <label htmlFor="tPhone" className="text-xs text-gray">
          Phone
        </label>
        <input id="tPhone" name="phone" type="tel" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      <div className="mt-4">
        <label htmlFor="tTestimony" className="text-xs text-gray">
          Share what God has done
        </label>
        <textarea id="tTestimony" name="testimony" required rows={6} className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      <label className="mt-4 flex items-start gap-2 text-sm text-white/75">
        <input name="consent" type="hidden" value="No" />
        <input name="consent" type="checkbox" value="Yes" className="mt-1" />
        I&apos;m okay with the church sharing this testimony publicly (on the website or in service).
      </label>

      {status === "idle" && (
        <button type="submit" className="mt-6 w-full rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Prepare Testimony
        </button>
      )}
      {status === "ready" && <WhatsAppReadyPanel waLink={waLink} />}
    </form>
  );
}
