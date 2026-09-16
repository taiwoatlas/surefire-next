export interface GalleryImage {
  readonly src: string;
  readonly alt: string;
  readonly category: "worship" | "ministry" | "community" | "leadership" | "church-life" | "events";
}

export const galleryImages: readonly GalleryImage[] = [];
