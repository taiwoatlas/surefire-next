import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { pastors } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The pastoral leadership of The Surefire Christian Church of God.",
};

export default function LeadershipPage() {
  const lead = pastors.find((p) => p.lead);
  const others = pastors.filter((p) => !p.lead);

  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Our Pastorate"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]}
      />

      {lead && (
        <Section tone="paper">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {lead.photo && (
              <div className="relative h-80 w-64 flex-shrink-0 overflow-hidden rounded-sm">
                <Image src={lead.photo} alt={lead.name} fill sizes="256px" className="object-cover" priority />
              </div>
            )}
            <div className="max-w-md">
              <p className="font-mono text-xs uppercase tracking-wide text-red">{lead.role}</p>
              <h2 className="mt-3 font-display text-3xl">{lead.name}</h2>
            </div>
          </div>
        </Section>
      )}

      <Section tone="stone">
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((pastor) => (
            <div key={pastor.name} className="overflow-hidden rounded-sm border border-line bg-charcoal">
              {pastor.photo && (
                <div className="relative h-64 w-full">
                  <Image src={pastor.photo} alt={pastor.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                </div>
              )}
              <div className="p-8">
                <p className="font-mono text-xs uppercase tracking-wide text-red">{pastor.role}</p>
                <h3 className="mt-3 font-display text-2xl">{pastor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
