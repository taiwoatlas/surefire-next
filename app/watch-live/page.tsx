import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { StageCurtain } from "@/components/decor/StageCurtain";
import { AudioVisualizer } from "@/components/decor/AudioVisualizer";
import { church, services } from "@/data/church";

export const metadata: Metadata = {
  title: "Watch Live",
  description: "Watch The Surefire Christian Church of God services live online.",
};

export default function WatchLivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Join Remotely"
        title="Watch Live"
        lede="Can't be with us in person? Join the Surefire service online."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Watch Live" }]}
      />

      <Section tone="paper">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm bg-ink text-center text-paper">
          <StageCurtain side="left" />
          <StageCurtain side="right" />
          <div className="relative z-10 px-6">
            <p className="font-mono text-xs uppercase tracking-wide text-gold">Offline</p>
            <h2 className="mt-4 font-display text-2xl md:text-3xl">No live stream at the moment</h2>
            <div className="mt-6 flex justify-center">
              <AudioVisualizer bars={16} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Where We&apos;ll Stream</p>
        <h2 className="mt-3 font-display text-2xl">Watch on your platform of choice</h2>
        <div className="relative spotlight-card mt-8 max-w-md rounded-sm border border-line bg-charcoal p-6">
          <h3 className="font-display text-xl">Facebook</h3>
          <p className="mt-2 text-sm text-gray">
            Follow <strong>{church.churchName}</strong> on Facebook for live broadcasts.
          </p>
          <a
            href={church.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-red underline decoration-red decoration-2 underline-offset-4"
          >
            Find us on Facebook →
          </a>
        </div>
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">In the Meantime</p>
        <h2 className="mt-3 font-display text-2xl">Next gathering</h2>
        <p className="mt-4 max-w-sm text-gray">
          {services[0]!.name} — {services[0]!.day}, {services[0]!.time}
        </p>
      </Section>
    </>
  );
}
