import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { VisionStatement } from "@/components/home/VisionStatement";
import { ServicesFeature } from "@/components/home/ServicesFeature";
import { PartnerFeature } from "@/components/home/PartnerFeature";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisionStatement />
      <ServicesFeature />
      <PartnerFeature />
    </>
  );
}
