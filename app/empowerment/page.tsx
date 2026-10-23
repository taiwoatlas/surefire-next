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
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Our vision</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Faith that becomes practical impact.</h2></div>
          <p className="text-base leading-7 text-[#686563]">{empowerment.vision}</p>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">The journey</p><h2 className="mt-2 font-display text-3xl text-[#101010]">A pathway to growth</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">Each stage builds on the last, helping people develop capacity and move toward meaningful contribution.</p></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {empowerment.journey.map((stage) => <article key={stage.num} className="rounded-2xl border border-[#e2dfd5] bg-white p-5"><p className="font-mono text-[10px] tracking-[.16em] text-[#c8192e]">0{stage.num}</p><h3 className="mt-3 font-display text-xl text-[#101010]">{stage.name}</h3><p className="mt-2 text-sm leading-6 text-[#686563]">{stage.strap}</p></article>)}
        </div>
      </Section>

      <Section tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#ff7a88]">The ecosystem</p><h2 className="mt-2 font-display text-3xl text-white">Nine departments. One mission.</h2></div><p className="max-w-md text-sm leading-6 text-white/65">Select a department to explore its work and how each strand supports the wider empowerment ministry.</p></div>
        <div className="mt-6"><EcosystemMap /></div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Governance</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Built with structure</h2></div>
          <div className="divide-y divide-[#e4e1df] rounded-2xl border border-[#e4e1df] bg-white px-5">
            {governance.map((g) => <div key={g.level} className="py-4"><h3 className="font-display text-lg text-[#101010]">{g.level}</h3><p className="mt-1 text-sm leading-6 text-[#686563]">{g.desc}</p></div>)}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-[#f6f5f3] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#c8192e]">Find your next step</p><h2 className="mt-2 font-display text-xl text-[#101010]">Not sure where to start?</h2><p className="mt-1 text-sm text-[#686563]">Take the short assessment to help identify a suitable pathway.</p></div><Link href="/empowerment-assessment" className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[#c8192e] px-5 text-sm font-semibold text-white transition hover:bg-[#101010]">Start assessment <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </Section>
    </>
  );
}
