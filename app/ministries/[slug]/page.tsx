import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ministries } from "@/data/ministries";

export function generateStaticParams() {
  return ministries.filter((m) => m.slug).map((m) => ({ slug: m.slug! }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);
  return { title: ministry?.name ?? "Ministry", description: ministry?.desc };
}

export default async function MinistryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = ministries.find((m) => m.slug === slug);
  if (!ministry) notFound();

  const others = ministries.filter((m) => m.slug && m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Ministry"
        title={ministry.name}
        lede={ministry.eyebrow}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ministries", href: "/ministries" }, { label: ministry.name }]}
      />

      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {ministry.photo && (
            <div className="relative h-80 w-full overflow-hidden rounded-sm">
              <Image src={ministry.photo} alt={ministry.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
          )}
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-red">About</p>
            <p className="mt-4 font-display text-xl leading-relaxed">{ministry.copy ?? ministry.desc}</p>
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="stone">
          <p className="font-mono text-xs uppercase tracking-wide text-red">Other Ministries</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((m) => (
              <a key={m.slug} href={`/ministries/${m.slug}`} className="rounded-sm border border-line bg-charcoal p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-display text-lg">{m.name}</h3>
              </a>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
