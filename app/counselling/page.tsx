import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { CounsellingForm } from "@/components/counselling/CounsellingForm";

export const metadata: Metadata = {
  title: "Counselling",
  description: "Request counselling with a pastor at The Surefire Christian Church of God.",
};

export default function CounsellingPage() {
  return (
    <>
      <PageHeader
        eyebrow="A Safe Place"
        title="Counselling"
        lede="Sometimes you just need to talk to someone who'll listen without judgment."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Counselling" }]}
      />

      <Section tone="ink">
        <div className="mx-auto max-w-lg">
          <CounsellingForm />
        </div>
      </Section>
    </>
  );
}
