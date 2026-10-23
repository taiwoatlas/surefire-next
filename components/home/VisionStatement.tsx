import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function VisionStatement() {
  return (
    <section className="bg-white text-[#101010]">
      <div className="mx-auto grid max-w-[1400px] gap-5 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-[.62fr_1.38fr] md:items-center md:gap-12 md:px-10">
        <div className="border-l-[3px] border-[#c8192e] pl-4">
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#c8192e]">Our mandate</p>
          <h2 className="mt-2 text-2xl font-black tracking-[-.04em] sm:text-3xl">Empowering Lives.<br />Building Kingdom.</h2>
        </div>
        <div className="md:border-l md:border-[#e4e1df] md:pl-10">
          <p className="max-w-3xl text-lg font-semibold leading-snug tracking-[-.025em] sm:text-xl md:text-2xl">We are here to help people find hope in Christ, grow into their purpose, and create meaningful change in their families and communities.</p>
          <Link href="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#c8192e] hover:text-[#9f1022]">Discover who we are <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
