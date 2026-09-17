export interface GalleryImage {
  readonly src: string;
  readonly alt: string;
  readonly category: "worship" | "ministry" | "community" | "leadership" | "church-life" | "events";
}

export const galleryImages: readonly GalleryImage[] = [
  { src: "/images/church/building-gate-daylight.jpg", alt: "Living Wonders Chapel exterior", category: "church-life" },
  { src: "/images/church/building-chapel-facade.jpg", alt: "The chapel facade", category: "church-life" },
  { src: "/images/church/sanctuary-interior.jpg", alt: "Worship in the sanctuary", category: "worship" },
  { src: "/images/church/pastor-couple.jpg", alt: "Pastor Dapo and Pastor Mrs. Olubummi Shoetan", category: "leadership" },
  { src: "/images/ministries/ministry-children.jpg", alt: "Children's Ministry", category: "ministry" },
  { src: "/images/ministries/ministry-youth.jpg", alt: "Youth Ministry", category: "ministry" },
  { src: "/images/ministries/ministry-men.jpg", alt: "Men's Ministry", category: "ministry" },
  { src: "/images/ministries/ministry-women.jpg", alt: "Women's Ministry", category: "ministry" },
];
