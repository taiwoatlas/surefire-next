import { church } from "@/data/church";

export function ChurchLocator() {
  const query = encodeURIComponent(church.address);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-sm border border-line bg-charcoal p-8">
        <p className="font-mono text-xs uppercase tracking-wide text-red">Find Us</p>
        <h3 className="mt-3 font-display text-xl">{church.churchName}</h3>
        <p className="mt-3 text-sm text-gray">{church.address}</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper"
        >
          Get Directions
        </a>
      </div>
      <div className="overflow-hidden rounded-sm border border-line">
        <iframe
          title={`Map to ${church.churchName}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="h-64 w-full md:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
