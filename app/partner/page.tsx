import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PartnershipPathways } from "@/components/partner/PartnershipPathways";
import { AccountDetails } from "@/components/partner/AccountDetails";
import { PartnershipFAQ } from "@/components/partner/PartnershipFAQ";

export const metadata: Metadata = {
  title: "Partner",
  description: "Partner with The Surefire Christian Church of God — financially or in prayer — and take part in its mission of transformation.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shared Mission"
        title="Partner with the mission"
        lede="Surefire exists to help people find hope, healing and empowerment — spiritually, socially and economically. Partnership is how members and friends of the church take an active part in carrying that mission forward."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partner" }]}
      />

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Ways to Partner</p>
        <h2 className="mt-3 font-display text-3xl">Two ways to take part today</h2>
        <p className="mt-3 max-w-xl text-gray">
          Other forms of partnership may open up as the church formalises them. For now, here is what&apos;s directly
          available.
        </p>
        <div className="mt-10">
          <PartnershipPathways />
        </div>
      </Section>

      <Section tone="ink" id="give-by-transfer">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Bank Transfer</p>
        <h2 className="mt-3 font-display text-2xl">Give by direct transfer</h2>
        <p className="mt-3 max-w-md text-gray-onInk">
          This is currently the only method of financial partnership the church has confirmed.
        </p>
        <div className="mt-8 max-w-lg">
          <AccountDetails />
        </div>
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Questions</p>
        <h2 className="mt-3 font-display text-3xl">Partnership FAQ</h2>
        <div className="mt-8 max-w-xl">
          <PartnershipFAQ />
        </div>
      </Section>
    </>
  );
}
