import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ChurchChat() {
  const link = buildWhatsAppLink("church", "Hello, I have a question for The Surefire Christian Church of God.");

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-red text-paper shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
