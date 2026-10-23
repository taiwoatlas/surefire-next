import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <PageHeader eyebrow="Faith that builds" title="Empowerment with purpose." lede={empowerment.motto} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Empowerment" }]} />

      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Our vision</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Faith that becomes practical impact.</h2></div>
          <p className="text-base leading-7 text-[#756f63]">{empowerment.vision}</p>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">The journey</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">A pathway to growth</h2></div><p className="max-w-md text-sm leading-6 text-[#756f63]">Each stage builds on the last, helping people develop capacity and move toward meaningful contribution.</p></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {empowerment.journey.map((stage) => <article key={stage.num} className="rounded-2xl border border-[#e2dfd5] bg-white p-5"><p className="font-mono text-[10px] tracking-[.16em] text-[#8b6b2c]">0{stage.num}</p><h3 className="mt-3 font-display text-xl text-[#18382b]">{stage.name}</h3><p className="mt-2 text-sm leading-6 text-[#756f63]">{stage.strap}</p></article>)}
        </div>
      </Section>

      <Section tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7cb87]">The ecosystem</p><h2 className="mt-2 font-display text-3xl text-white">Nine departments. One mission.</h2></div><p className="max-w-md text-sm leading-6 text-white/65">Select a department to explore its work and how each strand supports the wider empowerment ministry.</p></div>
        <div className="mt-6"><EcosystemMap /></div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Governance</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Built with structure</h2></div>
          <div className="divide-y divide-[#e6e2d8] rounded-2xl border border-[#e6e2d8] bg-white px-5">
            {governance.map((g) => <div key={g.level} className="py-4"><h3 className="font-display text-lg text-[#18382b]">{g.level}</h3><p className="mt-1 text-sm leading-6 text-[#756f63]">{g.desc}</p></div>)}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#f5f1e7] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#8b6b2c]">Find your next step</p><h2 className="mt-2 font-display text-xl text-[#18382b]">Not sure where to start?</h2><p className="mt-1 text-sm text-[#756f63]">Take the short assessment to help identify a suitable pathway.</p></div><Link href="/empowerment-assessment" className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#315d43] px-5 text-sm font-semibold text-white transition hover:bg-[#10291f]">Start assessment <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </Section>
    </>
  );
}
