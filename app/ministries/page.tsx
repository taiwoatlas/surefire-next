import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ministries } from "@/data/ministries";
import { ministryHref } from "@/types/ministry";
import { MinistryExplorer } from "@/components/ministries/MinistryExplorer";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Every ministry at The Surefire Christian Church of God.",
};

export default function MinistriesPage() {
  const featured = ministries.filter((m) => m.photo);

  return (
    <>
      <PageHeader
        eyebrow="Find Your Place"
        title="Ministries"
        lede="Every ministry is a door into deeper community — find where you fit."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ministries" }]}
      />

      <Section tone="paper">
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((ministry) => (
            <Link
              key={ministry.name}
              href={ministryHref(ministry)}
              className="group relative spotlight-card overflow-hidden rounded-sm border border-line bg-charcoal transition-transform hover:-translate-y-1"
            >
              <div className="relative h-56 w-full">
                <Image src={ministry.photo!} alt={ministry.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{ministry.name}</h3>
                <p className="mt-2 text-sm text-gray">{ministry.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Every Ministry</p>
        <h2 className="mt-3 font-display text-2xl">Search the full list</h2>
        <div className="mt-8">
          <MinistryExplorer />
        </div>
      </Section>
    </>
  );
}
