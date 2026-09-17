import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church } from "@/data/church";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${church.churchName} website.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <Section tone="paper">
        <div className="prose max-w-2xl">
          <p className="text-gray">
            These are general terms for using this website. This page is not a substitute for legal advice — the
            church may wish to have it reviewed by a legal professional for its specific jurisdiction.
          </p>

          <h2 className="mt-8 font-display text-2xl">Using this site</h2>
          <p className="mt-3 text-gray">
            This website is provided as an informational and ministry resource for {church.churchName}. Content is
            provided in good faith, but we make no guarantee that every detail is free of error — if you notice
            something incorrect, please let us know.
          </p>

          <h2 className="mt-8 font-display text-2xl">Grants and financial programmes</h2>
          <p className="mt-3 text-gray">
            Nothing on this site — including the Empowerment Assessment or the Grant application — constitutes a
            guarantee of funding, employment, or any specific outcome. Every application is subject to the
            Empowerment Ministry&apos;s own eligibility, assessment, and approval process.
          </p>

          <h2 className="mt-8 font-display text-2xl">External links</h2>
          <p className="mt-3 text-gray">
            This site links to external services such as WhatsApp and Facebook. We&apos;re not responsible for the
            content or privacy practices of those platforms once you leave this site.
          </p>

          <h2 className="mt-8 font-display text-2xl">Contact</h2>
          <p className="mt-3 text-gray">
            Questions about these terms can be directed to us through the{" "}
            <a href="/contact" className="text-red underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
