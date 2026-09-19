import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { sermons } from "@/data/sermons";
import { SermonPlayer } from "@/components/sermons/SermonPlayer";

export function generateStaticParams() {
  return sermons.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);
  return { title: sermon?.title ?? "Sermon", description: sermon?.description };
}

export default async function SermonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = sermons.find((s) => s.slug === slug);
  if (!sermon) notFound();

  return (
    <>
      <PageHeader
        eyebrow={sermon.speaker}
        title={sermon.title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sermons", href: "/sermons" }, { label: sermon.title }]}
      />
      <Section tone="paper">
        <SermonPlayer sermon={sermon} />
        <p className="mt-8 max-w-2xl text-gray">{sermon.description}</p>
      </Section>
    </>
  );
}
