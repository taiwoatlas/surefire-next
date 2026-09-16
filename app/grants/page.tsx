import type { Metadata } from "next";
import { DepartmentPage } from "@/components/empowerment/DepartmentPage";
import { GrantApplicationForm } from "@/components/grants/GrantApplicationForm";
import { Section } from "@/components/layout/Section";
import { getEmpowermentDepartment } from "@/lib/content";

const dept = getEmpowermentDepartment("grants")!;
export const metadata: Metadata = { title: dept.name, description: dept.summary };

const FRAMEWORK = [
  "Membership",
  "Character",
  "Training",
  "Proposal",
  "Mentorship",
  "Monitoring",
  "Assessment",
  "Approval",
  "Resource Availability",
];

export default function Page() {
  return (
    <>
      <DepartmentPage slug="grants" />

      <Section tone="ink">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Eligibility Framework</p>
        <h2 className="mt-3 font-display text-2xl">What the programme looks at</h2>
        <p className="mt-3 max-w-xl text-gray-onInk">
          Applying does not guarantee funding — every application moves through the same stages, honestly and
          transparently.
        </p>
        <div className="mt-8 grid gap-2 sm:grid-cols-3">
          {FRAMEWORK.map((item, i) => (
            <div key={item} className="rounded-sm border border-lineOnInk bg-white/5 p-4">
              <p className="font-mono text-xs text-gold">0{i + 1}</p>
              <h3 className="mt-2 font-display text-base">{item}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" id="apply">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Express Interest</p>
        <h2 className="mt-3 font-display text-2xl">Start an application</h2>
        <p className="mt-3 max-w-lg text-gray">
          A short, three-step form — not a giant application all at once. You&apos;ll review everything before
          anything is sent.
        </p>
        <div className="mt-8 max-w-lg">
          <GrantApplicationForm />
        </div>
      </Section>
    </>
  );
}
