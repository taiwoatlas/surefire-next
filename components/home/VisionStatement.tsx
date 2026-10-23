import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function VisionStatement() {
  return (
    <section className="bg-[#f5f1e7] text-[#18382b]">
      <div className="mx-auto grid max-w-[1320px] gap-5 px-5 py-12 sm:px-8 md:grid-cols-[.65fr_1.35fr] md:items-center md:gap-12 md:px-10 md:py-16">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Why we exist</p>
          <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight sm:text-4xl">Our vision</h2>
        </div>
        <div>
          <p className="max-w-3xl font-display text-xl leading-snug sm:text-2xl md:text-[1.8rem]">
            Transforming lives and communities through the hope, healing, and empowerment found in Christ.
          </p>
          <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#315d43] hover:text-[#8b6b2c]">
            Get to know us <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
