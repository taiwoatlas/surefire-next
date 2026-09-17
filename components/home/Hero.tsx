import Image from "next/image";
import { church, services } from "@/data/church";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const nextService = services[0]!;

  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden bg-ink pb-16 pt-40 text-paper">
      <Image
        src="/images/church/building-gate-daylight.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="relative mx-auto w-full max-w-[1240px] px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">{church.slogan}</p>
        <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.02] md:text-7xl">{church.churchName}</h1>
        <p className="mt-6 max-w-md text-lg text-gray-onInk">{church.motto}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/plan-your-visit" variant="primary">
            Plan Your Visit
          </Button>
          <Button href="/about" variant="ghost" className="border-lineOnInk text-paper hover:bg-white/5">
            Discover Surefire
          </Button>
          <Button href="/watch-live" variant="text" className="text-paper decoration-gold">
            Watch Live
          </Button>
        </div>

        <div className="mt-14 inline-flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-lineOnInk pt-6 text-sm text-gray-onInk">
          <span className="font-mono text-xs uppercase tracking-wide text-gold">Next Gathering</span>
          <span>{nextService.name}</span>
          <span>{nextService.day}</span>
          <span>{nextService.time}</span>
        </div>
      </div>
    </section>
  );
}
