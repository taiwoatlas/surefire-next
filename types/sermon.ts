/**
 * No sermon has been published by the church as of this build.
 * The type exists so the sermon library, search index, and feature
 * component are ready the moment real content is confirmed — the
 * empty array in data/sermons.ts is the source of truth, not a
 * placeholder object with invented fields.
 */
export interface Sermon {
  readonly slug: string;
  readonly title: string;
  readonly speaker: string;
  readonly date: string; // ISO 8601
  readonly series?: string;
  readonly scripture?: string;
  readonly description: string;
  readonly mediaUrl?: string;
  readonly durationSeconds?: number;
  readonly transcriptUrl?: string;
}
