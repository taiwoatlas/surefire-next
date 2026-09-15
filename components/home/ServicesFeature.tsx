import { services } from "@/data/church";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ServicesFeature() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Services</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Join us this week</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.key}>
              <p className="font-mono text-xs text-red">{service.num}</p>
              <h3 className="mt-2 font-display text-xl">{service.name}</h3>
              <p className="mt-2 text-sm text-gray">{service.day}</p>
              <p className="text-sm text-gray">{service.time}</p>
            </Card>
          ))}
        </div>

        <Button href="/services" variant="text" className="mt-8 inline-block">
          See all services →
        </Button>
      </div>
    </section>
  );
}
