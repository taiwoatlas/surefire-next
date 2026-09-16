"use client";

import * as React from "react";
import { buildWhatsAppLinkFromTemplate, type WhatsAppRecipient } from "@/lib/whatsapp";

export function useWhatsAppForm(recipient: WhatsAppRecipient, template: string) {
  const [status, setStatus] = React.useState<"idle" | "ready">("idle");
  const [waLink, setWaLink] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values: Record<string, string> = {};
    data.forEach((value, key) => {
      values[key] = value === "on" ? "Yes" : String(value);
    });
    setWaLink(buildWhatsAppLinkFromTemplate(recipient, template, values));
    setStatus("ready");
  }

  function reset() {
    setStatus("idle");
    setWaLink("");
  }

  return { status, waLink, handleSubmit, reset };
}
