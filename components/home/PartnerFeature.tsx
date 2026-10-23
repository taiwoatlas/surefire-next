import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

export function PartnerFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-[#151515] py-8 text-white sm:py-10">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(120deg,transparent,rgba(200,25,46,.22))]" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-start gap-4"><span className="grid size-11 shrink-0 place-items-center rounded-md bg-[#c8192e] text-white"><HeartHandshake size={21} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#ff7a88]">Move the mission forward</p><h2 className="mt-1 text-xl font-black tracking-[-.03em] sm:text-2xl">There is a place for you here.</h2><p className="mt-1.5 max-w-xl text-sm leading-6 text-white/60">Partner through prayer, giving and practical service as we build lives and strengthen communities.</p></div></div>
        <Link href="/partner" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-md bg-[#c8192e] px-5 text-sm font-bold text-white transition hover:bg-[#a81023] md:self-center">Partner with us <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
