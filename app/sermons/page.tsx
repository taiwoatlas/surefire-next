import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { SermonSearch } from "@/components/sermons/SermonSearch";

export const metadata: Metadata = {
  title: "Sermons",
  description: "The Surefire sermon library — messages by speaker, topic, series and Scripture.",
};

export default function SermonsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Grow Through the Word"
        title="Sermons"
        lede="A digital teaching archive — searchable by speaker, topic, series and Scripture, as messages are added."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sermons" }]}
      />

      <Section tone="paper">
        <SermonSearch />
      </Section>
    </>
  );
}
