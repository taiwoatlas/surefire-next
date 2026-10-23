import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { services } from "@/data/church";

export function ServicesFeature() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Make time for faith</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-[#18382b] sm:text-4xl">Gather with us</h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-1.5 pb-1 text-sm font-semibold text-[#315d43] hover:text-[#8b6b2c]">
            View all services <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.key} className="group rounded-2xl border border-[#e6e2d8] bg-[#fbfaf6] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#c7ad6d] hover:shadow-[0_12px_32px_rgba(24,56,43,.08)] sm:p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-9 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43]">
                  {index === 0 ? <CalendarDays size={17} /> : <Clock3 size={17} />}
                </span>
                <span className="font-mono text-[10px] tracking-[.16em] text-[#9a8b6b]">0{index + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-xl text-[#18382b]">{service.name}</h3>
              <p className="mt-1.5 text-sm font-semibold text-[#315d43]">{service.day}</p>
              <p className="mt-1 text-sm text-[#756f63]">{service.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
