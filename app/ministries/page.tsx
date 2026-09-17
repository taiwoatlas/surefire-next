import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ministries } from "@/data/ministries";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Every ministry at The Surefire Christian Church of God.",
};

export default function MinistriesPage() {
  const featured = ministries.filter((m) => m.photo);
  const rest = ministries.filter((m) => !m.photo);

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
            <div key={ministry.name} className="overflow-hidden rounded-sm border border-line bg-charcoal">
              <div className="relative h-56 w-full">
                <Image src={ministry.photo!} alt={ministry.name} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{ministry.name}</h3>
                <p className="mt-2 text-sm text-gray">{ministry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((ministry) => (
            <div key={ministry.name} className="rounded-sm border border-line bg-charcoal p-6">
              <h3 className="font-display text-xl">{ministry.name}</h3>
              <p className="mt-2 text-sm text-gray">{ministry.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
