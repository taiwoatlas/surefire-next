import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { galleryImages } from "@/data/gallery";
import { EmptyState } from "@/components/church/EmptyState";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photography from life at The Surefire Christian Church of God.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Church Life"
        title="Gallery"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <Section tone="paper">
        {galleryImages.length === 0 ? (
          <EmptyState
            title="Photography coming soon"
            description="Images from worship, ministry and community life will be added here as they're confirmed."
          />
        ) : (
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-stone"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
