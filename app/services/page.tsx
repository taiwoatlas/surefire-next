import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { services } from "@/data/church";
import { ServiceCard } from "@/components/church/ServiceCard";
import { ServiceSelector } from "@/components/church/ServiceSelector";

export const metadata: Metadata = {
  title: "Services",
  description: "Worship gathering times at The Surefire Christian Church of God.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Join us" title="Make room for worship." lede="Find a gathering that fits your week. You are welcome to join us in person." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <Section tone="paper">
        <div className="flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Weekly and monthly</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Gathering times</h2></div><span className="hidden size-11 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43] sm:grid"><CalendarDays size={19} aria-hidden="true" /></span></div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">{services.map((service) => <ServiceCard key={service.key} service={service} />)}</div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-start">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Quick look</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Choose a service</h2><p className="mt-3 text-sm leading-6 text-[#756f63]">Select a gathering to see its schedule at a glance.</p></div>
          <ServiceSelector />
        </div>
      </Section>
    </>
  );
}
