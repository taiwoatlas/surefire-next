import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PrayerRequestForm } from "@/components/prayer/PrayerRequestForm";

export const metadata: Metadata = {
  title: "Prayer Request",
  description: "Share a prayer request with The Surefire Christian Church of God.",
};

export default function PrayerRequestPage() {
  return (
    <>
      <PageHeader
        eyebrow="We're With You"
        title="Prayer Request"
        lede="Whatever you're carrying, you don't have to carry it alone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Prayer Request" }]}
      />

      <Section tone="ink">
        <div className="mx-auto max-w-lg">
          <PrayerRequestForm />
        </div>
      </Section>
    </>
  );
}
