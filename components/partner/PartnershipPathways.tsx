import Link from "next/link";
import { partnershipPathways } from "@/data/partnership";

export function PartnershipPathways() {
  return (
    <div className="grid gap-px overflow-hidden rounded-sm border border-lineOnInk bg-lineOnInk md:grid-cols-2">
      {partnershipPathways.map((pathway) => (
        <div key={pathway.tag} className="flex flex-col gap-3 bg-ink p-8 text-paper">
          <span className="font-mono text-xs uppercase tracking-wide text-red">{pathway.tag}</span>
          <h3 className="font-display text-xl">{pathway.title}</h3>
          <p className="text-sm text-gray-onInk">{pathway.description}</p>
          <Link href={pathway.ctaHref} className="mt-auto pt-2 text-sm font-semibold text-gold hover:underline">
            {pathway.ctaLabel} →
          </Link>
        </div>
      ))}
    </div>
  );
}
