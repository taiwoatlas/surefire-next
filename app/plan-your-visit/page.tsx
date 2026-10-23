import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, MessageCircle, Users } from "lucide-react";
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
      <PageHeader eyebrow="Your first visit" title="You are welcome here." lede="Know where to go, when to arrive, and what to expect before you join us." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Plan Your Visit" }]} />

      <Section tone="paper">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-[#e6e2d8] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43]"><MapPin size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#18382b]">Find us</h2>
            <p className="mt-2 text-sm leading-6 text-[#756f63]">{church.address}</p>
          </article>
          <article className="rounded-2xl border border-[#e6e2d8] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43]"><CalendarDays size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#18382b]">Choose a service</h2>
            <div className="mt-2 flex flex-col gap-3">
              {services.map((s) => <div key={s.key}><p className="text-sm font-semibold text-[#315d43]">{s.name}</p><p className="mt-0.5 text-xs leading-5 text-[#756f63]">{s.day} · {s.time}</p></div>)}
            </div>
          </article>
          <article className="rounded-2xl border border-[#e6e2d8] bg-white p-5 sm:p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-[#e9eddf] text-[#315d43]"><Users size={18} aria-hidden="true" /></span>
            <h2 className="mt-4 font-display text-xl text-[#18382b]">Come as you are</h2>
            <p className="mt-2 text-sm leading-6 text-[#756f63]">Casual or formal, whether you are visiting for the first time or returning, you are welcome. Our ushers can help you find a seat.</p>
          </article>
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#8b6b2c]">Make it easy</p><h2 className="mt-2 font-display text-3xl text-[#18382b]">Before you arrive</h2><p className="mt-3 text-sm leading-6 text-[#756f63]">A few simple steps help you settle in and make the most of your visit.</p></div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {["Arrive a few minutes early", "Ask an usher if you need help", "Join in at your own pace", "Stay after to meet someone"].map((step, i) => <li key={step} className="flex gap-3 rounded-2xl border border-[#e2dfd5] bg-white p-4"><span className="font-mono text-xs text-[#8b6b2c]">0{i + 1}</span><span className="text-sm leading-5 text-[#18382b]">{step}</span></li>)}
          </ol>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <Link href="/ministries" className="inline-flex items-center gap-1 font-semibold text-[#315d43] hover:text-[#8b6b2c]">Explore ministries <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <Link href="/prayer-request" className="inline-flex items-center gap-1 font-semibold text-[#315d43] hover:text-[#8b6b2c]">Request prayer <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <Link href="/contact" className="inline-flex items-center gap-1 font-semibold text-[#315d43] hover:text-[#8b6b2c]">Contact the church <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#e7cb87]">Let us know</p><h2 className="mt-2 font-display text-3xl text-white">We can help you feel at home.</h2><p className="mt-3 text-sm leading-6 text-white/65">Tell us when you plan to visit. This is optional, but it helps us welcome you.</p><a href={`https://wa.me/${church.whatsapp.church}?text=${encodeURIComponent("Hello, I am planning to visit The Surefire Christian Church of God.")}`} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e7cb87] hover:text-white"><MessageCircle size={16} aria-hidden="true" /> Message us on WhatsApp</a></div>
          <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4 sm:p-6"><VisitorContactForm /></div>
        </div>
      </Section>
    </>
  );
}
