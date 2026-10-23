import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church } from "@/data/church";
import { ScriptureReader } from "@/components/scripture/ScriptureReader";

export const metadata: Metadata = {
  title: "About",
  description: "The Surefire Christian Church of God — our vision, mission, values, and history.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Who We Are" title="Faith that transforms lives." lede={church.motto} breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start md:gap-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Our vision</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-tight text-[#18382b] sm:text-4xl">Transforming lives. Transforming communities.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#756f63]">
              A church where people find hope, healing, and empowerment spiritually, socially, and economically to reach their full potential in Christ and help transform society.
            </p>
            <div className="mt-6 rounded-2xl bg-[#e9eddf] p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#315d43]">Our mission</p>
              <p className="mt-2 font-display text-xl leading-snug text-[#18382b]">To develop surefire leaders who champion positive change in their families, workplaces, and society.</p>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[#10291f] sm:min-h-[330px]">
            <Image src="/images/church/building-chapel-facade.jpg" alt="Living Wonders Chapel, home of The Surefire Christian Church of God" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10291f]/90 to-transparent p-5 pt-16 text-white">
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#e7cb87]">Established {church.established}</p>
              <p className="mt-1 font-display text-xl">{church.founder}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">What guides us</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Our values</h2></div>
          <p className="max-w-md text-sm leading-6 text-[#756f63]">The principles that shape our worship, relationships, service, and community impact.</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {church.values.map((value, i) => (
            <article key={value} className="rounded-2xl border border-[#e2dfd5] bg-white p-5">
              <p className="font-mono text-[10px] tracking-[.16em] text-[#8b6b2c]">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl text-[#18382b]">{value}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-start">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Our foundation</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Grounded in the Word</h2><p className="mt-3 text-sm leading-6 text-[#756f63]">Explore Scripture as part of your walk of faith.</p></div>
          <div className="rounded-2xl border border-[#e6e2d8] bg-white p-4 sm:p-6"><ScriptureReader /></div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#10291f] p-5 text-white sm:p-6">
          <div><p className="font-display text-xl">Find your place in the community.</p><p className="mt-1 text-sm text-white/65">Join us for a service or get to know our ministries.</p></div>
          <Link href="/plan-your-visit" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#d8bb76] px-4 text-sm font-semibold text-[#10291f]">Plan your visit <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </Section>
    </>
  );
}
