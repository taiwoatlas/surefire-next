import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { AssessmentFlow } from "@/components/assessment/AssessmentFlow";

export const metadata: Metadata = {
  title: "Empowerment Needs Assessment",
  description: "Answer a few honest questions and discover which Empowerment Ministry pathway fits where you are right now.",
};

export default function EmpowermentAssessmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Understand Where You Are"
        title="What are you hoping to build?"
        lede="A few honest questions — about two minutes — to help place you on the empowerment pathway that fits you best."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Empowerment", href: "/empowerment" }, { label: "Needs Assessment" }]}
      />

      <Section tone="ink">
        <div className="mx-auto max-w-lg">
          <AssessmentFlow />
        </div>
      </Section>
    </>
  );
}
