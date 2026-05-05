import { MessageCircle } from "lucide-react";

const PHONE = "5491164253686";
const MESSAGE = "Hola! Me interesa solicitar una visita para reparación.";

export const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-4 font-semibold text-white shadow-[var(--shadow-elegant)] transition-[var(--transition-bounce)] hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="absolute inset-0 -z-10 rounded-full opacity-75 animate-ping" style={{ backgroundColor: "var(--whatsapp)" }} />
    </a>
  );
}
