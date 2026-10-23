import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
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
      <PageHeader eyebrow="Church life" title="Moments from our community." lede="A glimpse of worship, ministry, and the people who make this church family." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <Section tone="paper">
        {galleryImages.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-[#e6e2d8] bg-white p-6 text-center sm:p-8">
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#e9eddf] text-[#315d43]"><Camera size={22} aria-hidden="true" /></span>
            <div className="mt-4"><EmptyState title="Photography coming soon" description="Confirmed photos from worship, ministry and community life will appear here as they are added." /></div>
          </div>
        ) : (
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
            {galleryImages.map((img) => (
              <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${img.alt}`} className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-2xl bg-[#e9eddf]">
                <div className="relative aspect-[4/3]"><Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
              </a>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
