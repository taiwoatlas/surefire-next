import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, MapPin } from "lucide-react";
import { church, services } from "@/data/church";

export function Hero() {
  const mainService = services[0]!;
  return (
    <section className="relative isolate overflow-hidden bg-[#111] text-white">
      <div className="absolute inset-0">
        <Image src="/images/church/building-gate-daylight.jpg" alt="The Surefire Christian Church of God grounds" fill priority sizes="100vw" className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#101010_0%,rgba(16,16,16,.96)_25%,rgba(16,16,16,.72)_57%,rgba(16,16,16,.2)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-[#101010]/25" />
      </div>
      <div className="relative mx-auto grid min-h-[500px] max-w-[1400px] items-center gap-8 px-5 py-10 sm:px-8 md:min-h-[550px] md:grid-cols-[1.08fr_.92fr] md:gap-10 md:px-10 lg:py-12">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 border-l-[3px] border-[#c8192e] bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-white/85">
            <span className="size-1.5 rounded-full bg-[#e32b42]" /> {church.slogan} · Est. {church.established}
          </div>
          <h1 className="mt-5 max-w-[700px] text-[clamp(2.7rem,6.1vw,5.5rem)] font-black leading-[.94] tracking-[-.065em]">
            Faith that moves <span className="text-[#e52b43]">people.</span><br />Purpose that changes <span className="text-white/65">communities.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            A Christ-centred community building faith, character and practical impact. Find your place, grow in purpose, and be part of what God is doing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/plan-your-visit" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#c8192e] px-5 text-sm font-bold text-white transition hover:bg-[#a81023]">Plan your visit <ArrowUpRight size={16} /></Link>
            <Link href="/watch-live" className="inline-flex min-h-11 items-center gap-2 border border-white/35 bg-white/[.04] px-5 text-sm font-semibold text-white transition hover:bg-white/10"><Play size={14} /> Watch live</Link>
          </div>
          <div className="mt-7 flex max-w-xl items-start gap-2 text-xs leading-5 text-white/55"><MapPin size={15} className="mt-0.5 shrink-0 text-[#e52b43]" /><span>{church.address}</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px] md:justify-self-end">
          <div className="relative ml-auto h-[245px] w-[82%] overflow-hidden rounded-sm border border-white/15 sm:h-[310px] md:h-[350px]">
            <Image src="/images/church/sanctuary-interior.jpg" alt="Worship gathering inside the Surefire church sanctuary" fill sizes="(min-width: 768px) 40vw, 80vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Our house. Your family.</p><p className="mt-1 text-xl font-extrabold sm:text-2xl">Come as you are.</p></div>
          </div>
          <div className="relative -mt-9 w-[76%] border-l-4 border-[#c8192e] bg-white p-4 text-[#111] shadow-2xl sm:-mt-12 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Sunday gathering</p>
            <p className="mt-1 text-lg font-black">{mainService.name}</p>
            <p className="mt-1 text-sm font-semibold">{mainService.day} · {mainService.time}</p>
          </div>
          <div className="absolute -right-1 top-5 hidden h-16 w-16 border-r-2 border-t-2 border-[#c8192e] sm:block" />
        </div>
      </div>
      <div className="relative h-1 bg-gradient-to-r from-[#c8192e] via-[#c8192e]/60 to-transparent" />
    </section>
  );
}
