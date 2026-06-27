import { MessageCircle } from "lucide-react";

const PHONE = "5491164253686";
const MESSAGE = "Hola! Me interesa solicitar una visita para reparación.";
// El link real a WhatsApp
export const whatsappLink = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const WORKER_URL = "https://ga-proxy.gordilloezequiel.workers.dev";
const MEASUREMENT_ID = "G-1TFNV7GXKY";
const API_SECRET = "gHLfvut6QcGzj47fQ0tKgA";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getClientId(): string {
  if (typeof document === "undefined") return "";
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === "_ga") {
      const parts = value.split(".");
      if (parts.length >= 4) return `${parts[2]}.${parts[3]}`;
    }
  }
  return `${Math.random().toString(36).slice(2)}.${Date.now()}`;
}

export async function trackWhatsAppClick(location: string) {
  // 1. Intentar con gtag tradicional
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_whatsapp", {
      event_category: "engagement",
      event_label: location,
    });
    window.gtag("event", "conversion", {
      send_to: "AW-18156593357/fT_CCIKqy68cEM3B3tFD",
    });
  }

  // 2. Enviar via Measurement Protocol como backup
  try {
    const client_id = getClientId();
    // Usamos el "keepalive: true" para que la petición no se cancele si el usuario cambia de pestaña
    await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true, 
      body: JSON.stringify({
        client_id,
        measurement_id: MEASUREMENT_ID,
        api_secret: API_SECRET,
        events: [{
          name: "click_whatsapp",
          params: {
            event_category: "engagement",
            event_label: location,
          },
        }],
      }),
    });
  } catch (e) {
    console.error("Measurement Protocol error:", e);
  }
}

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink} // <--- Ahora sí va a WhatsApp directamente
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-4 font-semibold text-white shadow-[var(--shadow-elegant)] transition-[var(--transition-bounce)] hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="absolute inset-0 -z-10 rounded-full opacity-75 animate-ping" style={{ backgroundColor: "var(--whatsapp)" }} />
    </a>
  );
}
