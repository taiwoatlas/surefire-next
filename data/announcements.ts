export interface Announcement {
  readonly text: string;
  readonly href?: string;
}

export const announcements: readonly Announcement[] = [];
