import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { empowerment, governance } from "@/data/empowerment";
import { EcosystemMap } from "@/components/empowerment/EcosystemMap";

export const metadata: Metadata = {
  title: "Empowerment",
  description: empowerment.motto,
};

export default function EmpowermentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Faith That Builds"
        title="Empowerment"
        lede={empowerment.motto}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Empowerment" }]}
      />

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Vision</p>
        <p className="mt-4 max-w-2xl font-display text-xl italic leading-relaxed">{empowerment.vision}</p>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">The Journey</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {empowerment.journey.map((stage) => (
            <div key={stage.num} className="relative spotlight-card rounded-sm border border-line bg-charcoal p-6">
              <p className="font-mono text-xs text-red">0{stage.num}</p>
              <h3 className="mt-2 font-display text-xl">{stage.name}</h3>
              <p className="mt-2 text-sm text-gray">{stage.strap}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">The Ecosystem</p>
        <h2 className="mt-3 font-display text-3xl">Nine departments. One ministry.</h2>
        <p className="mt-4 max-w-2xl text-gray-onInk">
          Select a department to explore what it does — every strand feeds the same capacity.
        </p>
        <div className="mt-10">
          <EcosystemMap />
        </div>
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Governance</p>
        <div className="mt-6 flex flex-col gap-4">
          {governance.map((g) => (
            <div key={g.level} className="border-b border-line pb-4">
              <h3 className="font-display text-lg">{g.level}</h3>
              <p className="mt-1 text-sm text-gray">{g.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <div className="max-w-md text-center mx-auto">
          <p className="font-mono text-xs uppercase tracking-wide text-red">Not Sure Where to Start?</p>
          <h2 className="mt-3 font-display text-2xl">Take the Empowerment Assessment</h2>
          <p className="mt-3 text-sm text-gray">A short, step-based assessment to help place you on the right pathway.</p>
        </div>
      </Section>
    </>
  );
}
