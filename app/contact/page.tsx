import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Clock3 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { church, services } from "@/data/church";
import { ContactForm } from "@/components/forms/ContactForm";
import { ChurchLocator } from "@/components/church/ChurchLocator";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${church.churchName} — ${church.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get in touch" title="We are here to connect." lede="Have a question, need prayer, or want to know more about the church? Reach out." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <Section tone="paper">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e4e1df] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#fbe9ec] text-[#c8192e]"><MapPin size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#101010]">Visit us</h2>
            <p className="mt-2 text-sm leading-6 text-[#686563]">{church.address}</p>
          </article>
          <article className="rounded-2xl border border-[#e4e1df] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#fbe9ec] text-[#c8192e]"><Phone size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#101010]">Call the church</h2>
            <a href={`tel:${church.phone.church.replace(/\s/g, "")}`} className="mt-2 inline-block text-sm font-semibold text-[#c8192e]">{church.phone.church}</a>
            <p className="mt-1 text-xs text-[#686563]">For enquiries and general information</p>
          </article>
          <article className="rounded-2xl border border-[#e4e1df] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#fbe9ec] text-[#c8192e]"><MessageCircle size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#101010]">WhatsApp</h2>
            <a href={`https://wa.me/${church.whatsapp.church}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-[#c8192e]">Start a conversation →</a>
            <p className="mt-1 text-xs text-[#686563]">Send us a message anytime</p>
          </article>
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
          <div className="rounded-2xl border border-[#e2dfd5] bg-white p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Send a message</p>
            <h2 className="mt-2 font-display text-2xl text-[#101010]">How can we help?</h2>
            <div className="mt-5"><ContactForm /></div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Gather with us</p>
            <h2 className="mt-2 font-display text-2xl text-[#101010]">Service times</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-[#e2dfd5] bg-white">
              {services.map((s) => <div key={s.key} className="flex items-start justify-between gap-4 border-b border-[#e4e1df] p-4 last:border-0"><div><p className="text-sm font-semibold text-[#101010]">{s.name}</p><p className="mt-1 text-xs text-[#686563]">{s.day}</p></div><p className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#c8192e]"><Clock3 size={13} aria-hidden="true" />{s.time}</p></div>)}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c8192e]">Location</p><h2 className="mt-2 font-display text-3xl text-[#101010]">Find the church</h2></div><p className="max-w-md text-sm leading-6 text-[#686563]">{church.address}</p></div>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#e4e1df]"><ChurchLocator /></div>
      </Section>
    </>
  );
}
