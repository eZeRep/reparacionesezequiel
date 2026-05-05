import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import c1 from "@/assets/cliente-1.jpg";
import c3 from "@/assets/cliente-3.jpg";
import c5 from "@/assets/cliente-5.jpg";
import c4 from "@/assets/cliente-4.jpg";

const reviews = [
  { name: "María González", location: "Lanús", photo: c1, text: "Excelente servicio. Vinieron el mismo día, diagnosticaron rápido y me arreglaron la heladera por mucho menos de lo que pensaba. Súper recomendable.", rating: 5 },
  { name: "Lucía Fernández", location: "Banfield", photo: c3, text: "Mi lavarropas hacía un ruido horrible. Lo dejaron como nuevo y con 3 meses de garantía. Gente honesta y trabajadora.", rating: 5 },
  { name: "Ana Martínez", location: "Lanús Oeste", photo: c5, text: "Visita sin cargo, me explicó todo con paciencia y arregló la heladera en el momento. 20 años de experiencia se notan.", rating: 5 },
  { name: "Roberto Sánchez", location: "Lomas de Zamora", photo: c4, text: "Reparó la cámara de frío de mi carnicería el mismo día que llamé. Atención impecable y precio justo. Ya es mi técnico de confianza.", rating: 5 },
];

export function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl bg-card p-8 md:p-12 shadow-[var(--shadow-elegant)]">
        <div className="flex justify-center mb-5">
          <div className="relative">
            <img
              src={reviews[idx].photo}
              alt={reviews[idx].name}
              className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-4 shadow-lg"
              style={{ borderColor: "var(--brand-light)" }}
              width={512}
              height={512}
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-center text-lg md:text-xl text-foreground leading-relaxed italic mb-6 min-h-[120px]">
          "{reviews[idx].text}"
        </p>
        <div className="text-center">
          <div className="font-bold text-foreground">{reviews[idx].name}</div>
          <div className="text-sm text-muted-foreground">{reviews[idx].location}</div>
        </div>
      </div>
      <button onClick={prev} aria-label="Anterior" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-110">
        <ChevronLeft className="h-6 w-6" style={{ color: "var(--brand-primary)" }} />
      </button>
      <button onClick={next} aria-label="Siguiente" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-110">
        <ChevronRight className="h-6 w-6" style={{ color: "var(--brand-primary)" }} />
      </button>
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Reseña ${i + 1}`} className="h-2 rounded-full transition-all" style={{ width: i === idx ? 32 : 8, backgroundColor: i === idx ? "var(--brand-primary)" : "var(--brand-light)" }} />
        ))}
      </div>
    </div>
  );
}
