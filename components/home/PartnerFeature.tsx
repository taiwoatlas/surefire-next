import Link from "next/link";
import { ArrowUpRight, HeartHandshake } from "lucide-react";

export function PartnerFeature() {
  return (
    <section className="bg-[#18382b] py-11 text-white sm:py-14">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#e7cb87]/30 bg-white/5 text-[#e7cb87]">
            <HeartHandshake size={22} aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7cb87]">Be part of the mission</p>
            <h2 className="mt-1 font-display text-2xl sm:text-3xl">Help carry the work forward.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">Partner through prayer, giving, and practical service as we build lives and strengthen communities.</p>
          </div>
        </div>
        <Link href="/partner" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#d8bb76] px-5 text-sm font-semibold text-[#10291f] transition hover:bg-[#ecd9a7] md:self-center">
          Partner with us <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
