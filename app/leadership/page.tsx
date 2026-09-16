import type { Metadata } from "next";
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
          <div className="max-w-md">
            <p className="font-mono text-xs uppercase tracking-wide text-red">{lead.role}</p>
            <h2 className="mt-3 font-display text-3xl">{lead.name}</h2>
          </div>
        </Section>
      )}

      <Section tone="stone">
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((pastor) => (
            <div key={pastor.name} className="rounded-sm border border-line bg-charcoal p-8">
              <p className="font-mono text-xs uppercase tracking-wide text-red">{pastor.role}</p>
              <h3 className="mt-3 font-display text-2xl">{pastor.name}</h3>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
