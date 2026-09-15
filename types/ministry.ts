export interface Ministry {
  readonly name: string;
  readonly desc: string;
  /** Present only for ministries with a dedicated page. Absent ministries link to the hub instead. */
  readonly slug?: string;
  readonly photo?: string;
  readonly eyebrow?: string;
  readonly copy?: string;
}

export function ministryHref(ministry: Ministry): string {
  return ministry.slug ? `/ministries/${ministry.slug}` : "/ministries";
}
