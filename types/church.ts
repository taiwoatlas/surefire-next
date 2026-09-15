/** Church-wide identity, contact, and configuration types. */

export interface ChurchConfig {
  readonly churchName: string;
  readonly slogan: string;
  readonly motto: string;
  readonly values: readonly string[];
  readonly established: string; // human-readable verified founding date, e.g. "16 April 2011"
  readonly founder: string;
  readonly address: string;
  readonly whatsapp: WhatsAppNumbers;
  readonly phone: PhoneNumbers;
  readonly facebook: string;
  readonly facebookLabel: string;
  readonly giving: BankDetails;
}

export interface WhatsAppNumbers {
  readonly seniorPastor: string; // digits only, international format, no leading +
  readonly church: string;
}

export interface PhoneNumbers {
  readonly church: string; // display format
  readonly seniorPastor: string;
}

export interface BankDetails {
  readonly bank: string;
  readonly accountName: string;
  readonly accountNumber: string;
}

/** A single recurring worship gathering. Recurrence is computed, never hardcoded — see lib/dates.ts */
export interface Service {
  readonly key: string;
  readonly num: string;
  readonly name: string;
  readonly day: ServiceDay;
  readonly time: string; // display range, e.g. "8:00 AM – 10:30 AM"
}

export type ServiceDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Last Friday of Every Month";

/** Computed occurrence of a Service, produced by lib/dates.ts — never stored. */
export interface ServiceOccurrence {
  readonly service: Service;
  readonly start: Date;
  readonly end: Date | null;
  readonly isLive: boolean;
}
