import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church } from "@/data/church";

export const metadata: Metadata = {
  title: "About",
  description: "The Surefire Christian Church of God — our vision, mission, values, and history.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title={church.churchName}
        lede={church.motto}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Our Vision</p>
        <p className="mt-4 max-w-2xl font-display text-2xl italic leading-relaxed">
          Transforming lives, transforming communities — a church where people find hope, healing, and empowerment
          spiritually, socially, and economically to reach their full potential in Christ, and in a surefire way
          transform society.
        </p>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Our Mission</p>
        <p className="mt-4 max-w-2xl font-display text-2xl italic leading-relaxed">
          To develop surefire leaders who will champion positive change in their families, workplaces, and society.
        </p>
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Our Values</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {church.values.map((value, i) => (
            <div key={value} className="rounded-sm border border-line bg-charcoal p-6">
              <p className="font-mono text-xs text-red">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl">{value}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-gold">Our History</p>
            <h2 className="mt-3 font-display text-3xl">Where it began</h2>
            <p className="mt-4 max-w-xl text-gray-onInk">
              One confirmed milestone so far — further chapters of the church&apos;s story will be added here as
              they&apos;re documented.
            </p>
            <div className="mt-8 max-w-xl rounded-sm border border-lineOnInk p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-gold">{church.established} · Founding</p>
              <p className="mt-3 text-sm text-gray-onInk">
                The Surefire Christian Church of God was established under the leadership of {church.founder}, at{" "}
                {church.address}.
              </p>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-sm">
            <Image
              src="/images/church/building-chapel-facade.jpg"
              alt="Living Wonders Chapel, home of The Surefire Christian Church of God"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
