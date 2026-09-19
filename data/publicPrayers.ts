export interface PublicPrayer {
  readonly name: string;
  readonly request: string;
  readonly date: string;
}

export const publicPrayers: readonly PublicPrayer[] = [];
