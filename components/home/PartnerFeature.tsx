import { Button } from "@/components/ui/Button";

export function PartnerFeature() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Partner</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl md:text-4xl">Partner with the mission</h2>
        <p className="mt-4 max-w-md text-gray-onInk">
          Partnership — through giving and through prayer — helps carry forward the church&apos;s ministry and its
          Empowerment work. It&apos;s participation, not a transaction.
        </p>
        <Button href="/partner" variant="primary" className="mt-8">
          Partner with Surefire
        </Button>
      </div>
    </section>
  );
}
