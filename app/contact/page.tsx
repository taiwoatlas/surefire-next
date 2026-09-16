import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church, services } from "@/data/church";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${church.churchName} — ${church.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Surefire"
        lede="We'd love to hear from you — reach out with any question."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="paper">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">Address</p>
            <h3 className="mt-2 font-display text-lg">Visit Us</h3>
            <p className="mt-2 text-sm text-gray">{church.address}</p>
          </div>
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">Phone</p>
            <h3 className="mt-2 font-display text-lg">Call Us</h3>
            <a href={`tel:${church.phone.church.replace(/\s/g, "")}`} className="mt-2 inline-block text-sm font-semibold text-ink">
              {church.phone.church}
            </a>
          </div>
          <div className="rounded-sm border border-line bg-charcoal p-6">
            <p className="font-mono text-xs text-red">WhatsApp</p>
            <h3 className="mt-2 font-display text-lg">Message Us</h3>
            <a
              href={`https://wa.me/${church.whatsapp.church}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-red"
            >
              Start a WhatsApp chat →
            </a>
          </div>
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-red">Service Times</p>
            <div className="mt-4 flex flex-col gap-3">
              {services.map((s) => (
                <div key={s.key} className="flex items-center justify-between gap-4 border-b border-line pb-3">
                  <span className="text-sm text-gray">
                    {s.name} · {s.day}
                  </span>
                  <strong className="text-sm">{s.time}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
