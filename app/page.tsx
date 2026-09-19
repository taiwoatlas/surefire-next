import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { VisionStatement } from "@/components/home/VisionStatement";
import { ServicesFeature } from "@/components/home/ServicesFeature";
import { PartnerFeature } from "@/components/home/PartnerFeature";
import { VerseOfTheDay } from "@/components/scripture/VerseOfTheDay";
import { AnnouncementTicker } from "@/components/church/AnnouncementTicker";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnnouncementTicker />
      <VisionStatement />
      <Section tone="ink">
        <VerseOfTheDay />
      </Section>
      <ServicesFeature />
      <PartnerFeature />
    </>
  );
}
