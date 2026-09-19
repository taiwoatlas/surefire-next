import type { Metadata } from "next";
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
      <PageHeader
        eyebrow="Join Us"
        title="Services"
        lede="Every gathering has its own purpose and rhythm — find the one that fits where you are."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section tone="paper">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Quick Look</p>
        <h2 className="mt-3 font-display text-2xl">Choose a service</h2>
        <div className="mt-8">
          <ServiceSelector />
        </div>
      </Section>
    </>
  );
}
