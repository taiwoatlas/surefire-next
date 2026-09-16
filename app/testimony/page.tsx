import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { TestimonyForm } from "@/components/testimony/TestimonyForm";

export const metadata: Metadata = {
  title: "Testimony",
  description: "Share what God has done in your life with The Surefire Christian Church of God.",
};

export default function TestimonyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Share the Good News"
        title="Testimony"
        lede="Your story could be exactly what someone else needs to hear."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimony" }]}
      />

      <Section tone="paper">
        <div className="mx-auto max-w-lg">
          <TestimonyForm />
        </div>
      </Section>
    </>
  );
}
