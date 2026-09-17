import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church, services } from "@/data/church";
import { VisitorContactForm } from "@/components/church/VisitorContactForm";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Everything you need to know before visiting The Surefire Christian Church of God.",
};

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="First Time Here?"
        title="Plan Your Visit"
        lede="Here's everything you need to know before you arrive."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Plan Your Visit" }]}
      />

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Before You Arrive</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">Where</p>
            <p className="mt-2 text-sm text-gray">{church.address}</p>
          </div>
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">When</p>
            <div className="mt-2 flex flex-col gap-1">
              {services.map((s) => (
                <p key={s.key} className="text-sm text-gray">
                  {s.name} — {s.day}, {s.time}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">What to Expect</p>
            <p className="mt-2 text-sm text-gray">Come as you are — casual or formal, everyone is welcome.</p>
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Arrival</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["Arrive a few minutes early", "Look for an usher — they'll help you find a seat", "Relax and enjoy the service", "Stay after to connect with someone"].map(
            (step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-line bg-charcoal px-4 py-2 text-sm">{step}</span>
                {i < arr.length - 1 && <span className="text-gray">→</span>}
              </div>
            ),
          )}
        </div>
      </Section>

      <Section tone="paper">
        <p className="font-mono text-xs uppercase tracking-wide text-red">After Service</p>
        <p className="mt-4 max-w-xl text-gray">
          Want to connect further? Explore our <Link href="/ministries" className="text-red underline">ministries</Link>,{" "}
          <Link href="/prayer-request" className="text-red underline">request prayer</Link>, or{" "}
          <Link href="/contact" className="text-red underline">reach out to us directly</Link>.
        </p>
      </Section>

      <Section tone="ink">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Let Us Know You&apos;re Coming</p>
        <p className="mt-4 max-w-md text-gray-onInk">Optional — but it helps us welcome you properly.</p>
        <div className="mt-8 max-w-lg">
          <VisitorContactForm />
        </div>
      </Section>
    </>
  );
}
