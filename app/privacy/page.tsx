import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church } from "@/data/church";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${church.churchName} handles information shared through this website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />

      <Section tone="paper">
        <div className="prose max-w-2xl">
          <p className="text-gray">
            This page describes how {church.churchName} handles information shared through this website — in plain
            terms, describing what actually happens rather than generic legal boilerplate.
          </p>

          <h2 className="mt-8 font-display text-2xl">What we collect</h2>
          <p className="mt-3 text-gray">
            Forms on this site (Prayer Request, Testimony, Counselling, Contact, Plan Your Visit, and the Grant
            application) ask for information like your name, phone number, and whatever you choose to share in a
            message. This site does not use tracking cookies, analytics scripts, or any third-party advertising
            technology.
          </p>

          <h2 className="mt-8 font-display text-2xl">How it&apos;s used</h2>
          <p className="mt-3 text-gray">
            Every form on this site works the same way: it prepares a WhatsApp message with what you&apos;ve entered,
            and opens WhatsApp for you to review and send yourself. Nothing is submitted to a database or stored on
            a server when you fill out a form — the information goes directly to the church&apos;s WhatsApp, only when
            you press Send.
          </p>

          <h2 className="mt-8 font-display text-2xl">Prayer requests and counselling</h2>
          <p className="mt-3 text-gray">
            Requests shared through Prayer Request or Counselling are handled by our pastoral team with care. We
            can&apos;t promise confidentiality beyond what&apos;s appropriate for pastoral support and prayer.
          </p>

          <h2 className="mt-8 font-display text-2xl">Testimonies</h2>
          <p className="mt-3 text-gray">
            A testimony is only shared publicly if you explicitly indicate you&apos;re okay with that on the form.
          </p>

          <h2 className="mt-8 font-display text-2xl">Questions</h2>
          <p className="mt-3 text-gray">
            If you have any questions about how your information is handled, please{" "}
            <a href="/contact" className="text-red underline">
              contact us
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
