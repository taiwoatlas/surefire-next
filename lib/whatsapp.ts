import { church } from "@/data/church";

export type WhatsAppRecipient = "church" | "seniorPastor";

/**
 * The one place a wa.me link is ever constructed. No component should
 * hardcode a WhatsApp number or hand-roll URL encoding — see 00S/00BZ.
 */
export function buildWhatsAppLink(recipient: WhatsAppRecipient, message: string): string {
  const number = church.whatsapp[recipient];
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Fills a `{{field}}` template with values, then builds the link.
 * Mirrors the previous static site's data-wa-template convention so the
 * same mental model carries over for anyone maintaining both.
 */
export function buildWhatsAppMessage(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] ?? "");
}

export function buildWhatsAppLinkFromTemplate(
  recipient: WhatsAppRecipient,
  template: string,
  values: Record<string, string>,
): string {
  return buildWhatsAppLink(recipient, buildWhatsAppMessage(template, values));
}
