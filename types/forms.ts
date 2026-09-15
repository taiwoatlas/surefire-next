export type FormStatus = "idle" | "validating" | "ready" | "submitting" | "success" | "error";

/**
 * The generic shape every multi-step form in the app (Grant application,
 * Empowerment Assessment) reduces to: collect → review → hand off.
 * WhatsApp hand-off never fires until the visitor takes the final,
 * explicit action — see lib/whatsapp.ts.
 */
export interface WhatsAppFormResult<T> {
  readonly data: T;
  readonly recipient: "church" | "seniorPastor";
  readonly waLink: string;
}
