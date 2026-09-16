export function WhatsAppReadyPanel({ waLink, buttonLabel = "Open WhatsApp to Send" }: { readonly waLink: string; readonly buttonLabel?: string }) {
  return (
    <div className="mt-6 rounded-sm border border-line bg-stone p-4">
      <p className="text-sm text-ink">Your message is ready — nothing has been sent yet.</p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block rounded-sm bg-red px-6 py-3 text-sm font-semibold text-paper"
      >
        {buttonLabel}
      </a>
    </div>
  );
}
