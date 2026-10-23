import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Clock3, ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
      <PageHeader eyebrow="Contact the church" title="Let's start a conversation." lede="Need information, prayer or help planning a visit? Reach the team using the details below." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <Section tone="paper">
        <div className="grid overflow-hidden rounded-xl border border-[#e4e1df] bg-white md:grid-cols-3">
          <div className="flex gap-3 p-4 sm:p-5"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#fbe9ec] text-[#c8192e]"><MapPin size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8192e]">Visit us</p><p className="mt-1 text-sm font-semibold leading-5 text-[#171717]">{church.address}</p></div></div>
          <div className="flex gap-3 border-t border-[#e4e1df] p-4 sm:p-5 md:border-l md:border-t-0"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#fbe9ec] text-[#c8192e]"><Phone size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8192e]">Call the church</p><a href={`tel:${church.phone.church.replace(/\s/g, "")}`} className="mt-1 block text-sm font-extrabold text-[#171717]">{church.phone.church}</a><p className="mt-1 text-xs text-[#686563]">General enquiries</p></div></div>
          <div className="flex gap-3 border-t border-[#e4e1df] p-4 sm:p-5 md:border-l md:border-t-0"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#fbe9ec] text-[#c8192e]"><MessageCircle size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8192e]">WhatsApp</p><a href={`https://wa.me/${church.whatsapp.church}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-extrabold text-[#171717]">Message the team <ArrowUpRight size={13} /></a><p className="mt-1 text-xs text-[#686563]">Reach out at any time</p></div></div>
        </div>
      </Section>
      <Section tone="stone">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div className="rounded-xl border border-[#dedad7] bg-white p-5 sm:p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#c8192e]">Send an enquiry</p><h2 className="mt-1.5 text-2xl font-black tracking-[-.04em] text-[#101010]">How can we help?</h2><p className="mt-2 text-sm leading-6 text-[#686563]">Complete the form and share what you need. Our team will follow up using the details you provide.</p><div className="mt-5"><ContactForm /></div></div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-[#dedad7] bg-white"><div className="flex items-center justify-between gap-3 bg-[#171717] px-4 py-3 text-white"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#ff7a88]">Gather with us</p><h2 className="mt-0.5 text-base font-extrabold">Service schedule</h2></div><Clock3 size={18} className="text-[#ff7a88]" /></div>{services.map(s => <div key={s.key} className="flex items-start justify-between gap-3 border-t border-[#e9e6e4] px-4 py-3"><div><p className="text-sm font-bold text-[#171717]">{s.name}</p><p className="mt-0.5 text-xs text-[#686563]">{s.day}</p></div><p className="shrink-0 text-right text-xs font-bold text-[#c8192e]">{s.time}</p></div>)}<Link href="/services" className="flex items-center justify-between border-t border-[#e9e6e4] bg-[#faf9f8] px-4 py-3 text-xs font-bold text-[#c8192e]">Full service details <ArrowUpRight size={14} /></Link></div>
            <div className="overflow-hidden rounded-xl border border-[#dedad7] bg-white"><div className="border-b border-[#e4e1df] px-4 py-3"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#c8192e]">Location</p><h2 className="mt-0.5 text-base font-extrabold text-[#171717]">Find the church</h2></div><ChurchLocator /></div>
          </div>
        </div>
      </Section>
    </>
  );
}
