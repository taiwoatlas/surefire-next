export interface Pastor {
  readonly name: string;
  readonly role: string;
  /** Digits only, no leading +. Used to build tel: links. */
  readonly phone: string;
  readonly photo?: string;
  readonly bio?: string;
  readonly lead?: boolean;
}
