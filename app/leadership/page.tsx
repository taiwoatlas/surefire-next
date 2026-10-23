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
      <PageHeader eyebrow="Leadership" title="The people who serve and lead." lede="Meet the pastoral team entrusted with guiding the church community." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Leadership" }]} />

      {lead && (
        <Section tone="paper">
          <div className="grid overflow-hidden rounded-2xl border border-[#e4e1df] bg-white md:grid-cols-[.8fr_1.2fr]">
            {lead.photo && <div className="relative min-h-[300px] bg-[#fbe9ec] sm:min-h-[380px]"><Image src={lead.photo} alt={lead.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-top" priority /></div>}
            <div className="flex flex-col justify-center p-6 sm:p-9 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Senior leadership</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-[#101010] sm:text-4xl">{lead.name}</h2>
              <p className="mt-2 text-sm font-semibold text-[#c8192e]">{lead.role}</p>
              <div className="mt-5 h-px w-14 bg-[#c8192e]" />
              <p className="mt-5 max-w-md text-sm leading-6 text-[#686563]">Serving the church through spiritual leadership, teaching, and the work of building a faith-filled community.</p>
            </div>
          </div>
        </Section>
      )}

      {others.length > 0 && <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Pastoral team</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Serving together</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">The team supports the spiritual life and ministry of the congregation.</p></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {others.map((pastor) => <article key={pastor.name} className="grid overflow-hidden rounded-2xl border border-[#e2dfd5] bg-white sm:grid-cols-[.8fr_1.2fr]">
            {pastor.photo && <div className="relative min-h-[210px] bg-[#fbe9ec]"><Image src={pastor.photo} alt={pastor.name} fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover object-top" /></div>}
            <div className="flex flex-col justify-center p-5"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#c8192e]">{pastor.role}</p><h3 className="mt-2 font-display text-xl text-[#101010]">{pastor.name}</h3></div>
          </article>)}
        </div>
      </Section>}
    </>
  );
}
