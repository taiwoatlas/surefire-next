import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, Heart, Music2 } from "lucide-react";
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
  const lead = featured[0];
  const supporting = featured.slice(1);

  return (
    <>
      <PageHeader eyebrow="Find your place" title="Belong to something bigger." lede="Discover people, purpose and practical ways to serve. Your place in the community starts here." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ministries" }]} />
      <Section tone="paper">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:items-stretch">
          <div className="grid min-h-[350px] grid-cols-2 gap-2 sm:min-h-[430px] sm:gap-3">
            {lead && <Link href={ministryHref(lead)} className="group relative col-span-2 row-span-2 min-h-[220px] overflow-hidden rounded-sm bg-[#191919] sm:col-span-1 sm:min-h-0">
              <Image src={lead.photo!} alt={lead.name} fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Featured community</p><h2 className="mt-1 text-xl font-black text-white sm:text-2xl">{lead.name}</h2><p className="mt-1 max-w-xs text-xs leading-5 text-white/75">{lead.desc}</p></div>
            </Link>}
            {supporting.map((ministry) => <Link key={ministry.name} href={ministryHref(ministry)} className="group relative min-h-[145px] overflow-hidden rounded-sm bg-[#191919] sm:min-h-0">
              <Image src={ministry.photo!} alt={ministry.name} fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4"><h3 className="text-sm font-extrabold text-white">{ministry.name}</h3><span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-[#ff7a88]">Explore <ArrowUpRight size={12} /></span></div>
            </Link>)}
          </div>
          <div className="flex flex-col justify-between rounded-sm bg-[#171717] p-5 text-white sm:p-7">
            <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Faith in action</p><h2 className="mt-3 text-3xl font-black leading-[1.02] tracking-[-.045em] sm:text-4xl">Your gifts have a place here.</h2><p className="mt-4 text-sm leading-6 text-white/65">From children and youth to worship, outreach and practical care, our ministries create room to grow and serve side by side.</p></div>
            <div className="my-6 grid grid-cols-3 gap-2 border-y border-white/10 py-4"><div><Users size={18} className="text-[#ff7a88]" /><p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-white/65">Belong</p></div><div><Heart size={18} className="text-[#ff7a88]" /><p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-white/65">Serve</p></div><div><Music2 size={18} className="text-[#ff7a88]" /><p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-white/65">Worship</p></div></div>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-[#c8192e] px-4 text-sm font-bold text-white hover:bg-[#a81023]">Find your place <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </Section>
      <Section tone="stone">
        <div className="grid gap-5 md:grid-cols-[.65fr_1.35fr] md:items-start">
          <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Ministry directory</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#101010] sm:text-3xl">Find the right team.</h2><p className="mt-2 text-sm leading-6 text-[#686563]">Search all ministries and find a group that fits your season, interests and gifts.</p></div>
          <div className="rounded-xl border border-[#E0E0E0] bg-white p-4 sm:p-5"><MinistryExplorer /></div>
        </div>
      </Section>
    </>
  );
}
