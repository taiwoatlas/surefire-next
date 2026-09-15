import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <p className="font-mono text-xs uppercase tracking-wide text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl">This page hasn&apos;t been built yet</h1>
      <p className="mt-4 max-w-sm text-gray-onInk">
        Whatever you were looking for isn&apos;t here — but the rest of the church is.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Return home
      </Button>
    </section>
  );
}
