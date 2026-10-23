import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import { church, services } from "@/data/church";

export function Hero() {
  const nextService = services[0]!;

  return (
    <section className="relative isolate overflow-hidden bg-[#10291f] text-white">
      <Image
        src="/images/church/building-gate-daylight.jpg"
        alt="The Surefire Christian Church of God"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,27,19,.94)_0%,rgba(8,27,19,.82)_42%,rgba(8,27,19,.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10291f]/90 via-transparent to-[#10291f]/15" />

      <div className="relative mx-auto grid min-h-[540px] max-w-[1320px] items-center gap-8 px-5 pb-16 pt-14 sm:px-8 md:min-h-[590px] md:grid-cols-[1.2fr_.8fr] md:px-10 md:pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e7cb87]/40 bg-[#10291f]/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.18em] text-[#e7cb87] backdrop-blur">
            <span className="size-1.5 rounded-full bg-[#e7cb87]" /> {church.slogan}
          </div>
          <h1 className="mt-5 max-w-[650px] font-display text-[clamp(2.6rem,6vw,5.3rem)] font-medium leading-[.99] tracking-[-.045em]">
            A place to grow in faith. <span className="text-[#e7cb87]">A people called to impact.</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
            {church.churchName} — {church.motto.toLowerCase()}. Find your community, strengthen your faith, and discover how God can work through your life.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/plan-your-visit" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#d8bb76] px-5 text-sm font-semibold text-[#10291f] transition hover:bg-[#ecd9a7]">
              Plan your visit <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/watch-live" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              <Play size={14} aria-hidden="true" /> Watch live
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs text-white/65">
            <ArrowDownRight size={16} className="text-[#e7cb87]" aria-hidden="true" />
            <span>Faith • Community • Empowerment • Impact</span>
          </div>
        </div>

        <aside className="self-end md:justify-self-end">
          <div className="w-full max-w-[330px] rounded-2xl border border-white/20 bg-[#10291f]/75 p-5 shadow-2xl backdrop-blur-md sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7cb87]">Gather with us</p>
            <h2 className="mt-3 font-display text-2xl leading-tight">{nextService.name}</h2>
            <p className="mt-1 text-sm text-white/65">Our main Sunday gathering</p>
            <div className="my-4 h-px bg-white/15" />
            <p className="text-sm font-semibold">{nextService.day}</p>
            <p className="mt-1 text-sm text-white/70">{nextService.time}</p>
            <p className="mt-3 text-xs leading-5 text-white/55">{church.address}</p>
            <Link href="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e7cb87] hover:text-white">
              All service times <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
