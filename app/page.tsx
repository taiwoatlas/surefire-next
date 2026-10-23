import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { VisionStatement } from "@/components/home/VisionStatement";
import { ServicesFeature } from "@/components/home/ServicesFeature";
import { CommunityFeature } from "@/components/home/CommunityFeature";
import { PartnerFeature } from "@/components/home/PartnerFeature";
import { VerseOfTheDay } from "@/components/scripture/VerseOfTheDay";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Home",
  description: "Join The Surefire Christian Church of God in Sango-Ota, Ogun State. Find service times, plan your visit, and connect with a community of faith and empowerment.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisionStatement />
      <ServicesFeature />
      <CommunityFeature />
      <Section tone="ink" className="py-8 md:py-10">
        <VerseOfTheDay />
      </Section>
      <PartnerFeature />
    </>
  );
}
