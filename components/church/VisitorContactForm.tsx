"use client";

import { useWhatsAppForm } from "@/hooks/useWhatsAppForm";
import { WhatsAppReadyPanel } from "@/components/forms/WhatsAppReadyPanel";

const TEMPLATE = "Hello,\n\nI'm planning to visit Surefire and wanted to let you know.\n\nName: {{name}}\nPhone: {{phone}}\nPlanning to visit: {{when}}";

export function VisitorContactForm() {
  const { status, waLink, handleSubmit } = useWhatsAppForm("church", TEMPLATE);

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-line bg-charcoal p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vName" className="text-xs text-gray">
            Name
          </label>
          <input id="vName" name="name" type="text" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="vPhone" className="text-xs text-gray">
            Phone
          </label>
          <input id="vPhone" name="phone" type="tel" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="vWhen" className="text-xs text-gray">
          When are you planning to visit? (optional)
        </label>
        <input id="vWhen" name="when" type="text" placeholder="e.g. This Sunday" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      {status === "idle" && (
        <button type="submit" className="mt-6 w-full rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Let Us Know You&apos;re Coming
        </button>
      )}
      {status === "ready" && <WhatsAppReadyPanel waLink={waLink} buttonLabel="Open WhatsApp to Send" />}
    </form>
  );
}
