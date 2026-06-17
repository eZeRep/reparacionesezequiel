import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { whatsappLink } from "@/components/WhatsAppButton";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "Gracias — Reparaciones Ezequiel" },
      { name: "description", content: "Gracias por contactarnos. Te estamos redirigiendo a WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Gracias,
});

function Gracias() {
  useEffect(() => {
    let redirected = false;
    const redirect = () => {
      if (redirected) return;
      redirected = true;
      window.location.href = whatsappLink;
    };

    // Failsafe: si gtag no carga o tarda demasiado, igual redirigimos.
    const failsafe = setTimeout(redirect, 2500);

    const fire = () => {
      if (typeof window.gtag !== "function") return false;
      window.gtag("event", "conversion", {
        send_to: "AW-18156593357/6NGRCIy5r6scEM3B3tFD",
        event_callback: () => {
          clearTimeout(failsafe);
          redirect();
        },
      });
      return true;
    };

    // Esperar a que gtag esté disponible (lo carga __root.tsx)
    if (!fire()) {
      const poll = setInterval(() => {
        if (fire()) clearInterval(poll);
      }, 100);
      setTimeout(() => clearInterval(poll), 2400);
    }

    return () => clearTimeout(failsafe);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          ¡Gracias por contactarnos!
        </h1>
        <p className="mt-2 text-muted-foreground">
          Te estamos redirigiendo a WhatsApp …
        </p>
        <a
          href={whatsappLink}
          className="mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--whatsapp)" }}
        >
          <MessageCircle className="h-4 w-4" />
          Abrir WhatsApp
        </a>
      </div>
    </main>
  );
}
