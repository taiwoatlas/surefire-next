import type { Sermon } from "@/types/sermon";

/**
 * No sermon has been confirmed by the church as of this build.
 * This stays an empty array — never a placeholder entry — until real
 * sermon metadata is provided. Every component that reads from this
 * (SermonGrid, SermonFeature, the search index) must render its
 * designed empty state when this array is empty. See components/church/EmptyState.tsx.
 */
export const sermons: readonly Sermon[] = [];
