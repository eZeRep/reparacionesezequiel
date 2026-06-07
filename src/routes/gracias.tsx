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
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-1TFNV7GXKY",
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1TFNV7GXKY');
          gtag('config', 'AW-18156593357');
        `,
      },
    ],
  }),

  component: Gracias,
});

function Gracias() {
  useEffect(() => {
    const fireAndRedirect = () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18156593357/6NGRCIy5r6scEM3B3tFD",
        });
      }
      setTimeout(() => {
        window.location.href = whatsappLink;
      }, 1500);
    };

    const t = setTimeout(fireAndRedirect, 300);
    return () => clearTimeout(t);
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
