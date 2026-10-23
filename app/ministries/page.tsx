import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <PageHeader eyebrow="Find your place" title="There is a place for you here." lede="Explore the ministries, meet people with shared purpose, and find a practical way to serve." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ministries" }]} />

      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Featured ministries</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Grow through community</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">Discover spaces to build relationships, grow in faith, and put your gifts to work.</p></div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {featured.map((ministry) => (
            <Link key={ministry.name} href={ministryHref(ministry)} className="group grid overflow-hidden rounded-2xl border border-[#e4e1df] bg-white transition hover:-translate-y-0.5 hover:border-[#c8192e] hover:shadow-[0_12px_32px_rgba(24,56,43,.08)] sm:grid-cols-[.85fr_1.15fr]">
              <div className="relative min-h-[190px] overflow-hidden bg-[#fbe9ec] sm:min-h-[220px]"><Image src={ministry.photo!} alt={ministry.name} fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="flex flex-col justify-center p-5 sm:p-6"><h3 className="font-display text-xl text-[#101010]">{ministry.name}</h3><p className="mt-2 text-sm leading-6 text-[#686563]">{ministry.desc}</p><span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#c8192e]">Explore ministry <ArrowUpRight size={14} aria-hidden="true" /></span></div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:items-start">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Full directory</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Find your ministry</h2><p className="mt-3 text-sm leading-6 text-[#686563]">Search the directory to find the group or team that matches your interests.</p></div>
          <div className="rounded-2xl border border-[#e2dfd5] bg-white p-4 sm:p-5"><MinistryExplorer /></div>
        </div>
      </Section>
    </>
  );
}
