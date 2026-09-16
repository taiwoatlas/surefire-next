"use client";

import * as React from "react";
import { church } from "@/data/church";
import { buildWhatsAppLinkFromTemplate } from "@/lib/whatsapp";

const TEMPLATE =
  "Hello,\n\nI am reaching out through the {{churchName}} website.\n\nName: {{name}}\nPhone: {{phone}}\nEmail: {{email}}\n\nMessage:\n{{message}}";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "ready">("idle");
  const [waLink, setWaLink] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const link = buildWhatsAppLinkFromTemplate("church", TEMPLATE, {
      churchName: church.churchName,
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setWaLink(link);
    setStatus("ready");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-line bg-charcoal p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ctName" className="text-xs text-gray">
            Name
          </label>
          <input id="ctName" name="name" type="text" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="ctPhone" className="text-xs text-gray">
            Phone
          </label>
          <input id="ctPhone" name="phone" type="tel" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="ctEmail" className="text-xs text-gray">
          Email (optional)
        </label>
        <input id="ctEmail" name="email" type="email" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      <div className="mt-4">
        <label htmlFor="ctMsg" className="text-xs text-gray">
          Message
        </label>
        <textarea id="ctMsg" name="message" required rows={4} className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm" />
      </div>

      {status === "idle" && (
        <button type="submit" className="mt-6 w-full rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper">
          Prepare Message
        </button>
      )}

      {status === "ready" && (
        <div className="mt-6 rounded-sm border border-line bg-stone p-4">
          <p className="text-sm text-ink">Your message is ready — nothing has been sent yet.</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper"
          >
            Open WhatsApp to Send
          </a>
        </div>
      )}
    </form>
  );
}
