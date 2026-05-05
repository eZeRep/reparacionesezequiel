import { createFileRoute } from "@tanstack/react-router";
import { Snowflake, Wrench, ShieldCheck, Clock, MapPin, Award, Phone, CheckCircle2, Sparkles, Zap } from "lucide-react";
import heroImg from "@/assets/hero-tecnico.jpg";
import heladeraComercial from "@/assets/heladera-comercial.jpg";
import lavarropasImg from "@/assets/lavarropas.jpg";
import cavaImg from "@/assets/cava-vinos.jpg";
import antes1 from "@/assets/antes-1.jpg";
import despues1 from "@/assets/despues-1.jpg";
import antes2 from "@/assets/antes-2.jpg";
import despues2 from "@/assets/despues-2.jpg";
import logoImg from "@/assets/logo.png";
import { WhatsAppFloating, whatsappLink } from "@/components/WhatsAppButton";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reparación de Heladeras y Lavarropas en Lanús — +20 años de experiencia" },
      { name: "description", content: "Servicio técnico de heladeras familiares y comerciales, lavarropas, exhibidoras, cámaras de frío y cavas de vino. Visita sin cargo en Lanús y alrededores. 3 meses de garantía." },
      { property: "og:title", content: "Reparación de Electrodomésticos en Lanús — Visita sin cargo" },
      { property: "og:description", content: "Más de 20 años reparando heladeras, lavarropas, cámaras de frío y exhibidoras. 3 meses de garantía." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <WhatsAppFloating />

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3">
            <img src={logoImg} alt="Reparaciones Ezequiel — Comercial y Familiar" className="h-12 md:h-14 w-auto" width={200} height={200} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 md:px-5 md:py-2.5 text-sm font-bold text-white shadow-md transition-[var(--transition-smooth)] hover:scale-105"
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Pedí tu visita</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1536} height={1024} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.32 0.16 255 / 0.88) 0%, oklch(0.45 0.18 240 / 0.78) 60%, oklch(0.32 0.16 255 / 0.85) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.25 0.14 255 / 0.5) 100%)" }} />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm font-medium border border-white/20">
                  <Sparkles className="h-4 w-4" />
                  Más de 20 años de experiencia
                </div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold border-2 animate-pulse" style={{ backgroundColor: "oklch(0.65 0.22 35)", borderColor: "oklch(0.85 0.18 50)", color: "white" }}>
                  <Zap className="h-4 w-4 fill-current" />
                  URGENCIAS · Reparación en el día
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Reparación de<br/>
                <span style={{ background: "linear-gradient(90deg, oklch(0.92 0.06 225), oklch(0.78 0.13 230))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  electrodomésticos
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Heladeras familiares y comerciales, lavarropas, bateas, exhibidoras, cámaras de frío y cavas de vino. Servicio técnico profesional con garantía.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white shadow-[var(--shadow-elegant)] transition-[var(--transition-bounce)] hover:scale-105"
                  style={{ backgroundColor: "var(--whatsapp)" }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Pedí tu visita sin cargo
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-[var(--transition-smooth)] hover:bg-white/20"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.16_140)]" /> Visita sin cargo</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.16_140)]" /> 3 meses de garantía</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.16_140)]" /> Reparación en el día</div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl" style={{ background: "var(--gradient-cta)" }} />
                <img src={heroImg} alt="Técnico reparando heladera" className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full h-auto" width={1536} height={1024} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS (justo después del hero) */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-deep)" }}>
              TESTIMONIOS REALES
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Lo que dicen nuestros clientes</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: MapPin, title: "Visita sin costo", text: "En Lanús y alrededores" },
            { icon: ShieldCheck, title: "3 meses de garantía", text: "En todas las reparaciones" },
            { icon: Award, title: "+20 años", text: "De experiencia comprobable" },
            { icon: Zap, title: "Urgencias 24hs", text: "Reparación en el día" },
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-sky)" }}>
                <b.icon className="h-6 w-6" style={{ color: "var(--brand-deep)" }} />
              </div>
              <div>
                <div className="font-bold text-foreground">{b.title}</div>
                <div className="text-sm text-muted-foreground">{b.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-deep)" }}>
              NUESTROS SERVICIOS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Reparamos todo tipo de equipos</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Especialistas en frío y línea blanca, para hogares y comercios.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: heroImg, icon: Snowflake, title: "Heladeras familiares", text: "Reparación de heladeras de todas las marcas y modelos. Cambio de gas, motor, termostato y más." },
              { img: heladeraComercial, icon: Snowflake, title: "Heladeras comerciales", text: "Exhibidoras, cámaras de frío, freezers comerciales. Servicio para comercios y gastronomía." },
              { img: lavarropasImg, icon: Wrench, title: "Lavarropas y bateas", text: "Reparación de lavarropas automáticos y bateas. Cambio de bomba, plaqueta, rulemanes." },
              { img: cavaImg, icon: Snowflake, title: "Cavas de vino", text: "Mantenimiento y reparación de cavas climatizadas. Control de temperatura y humedad." },
              { img: heladeraComercial, icon: Snowflake, title: "Cámaras de frío", text: "Instalación y reparación de cámaras frigoríficas para carnicerías, verdulerías y depósitos." },
              { img: heladeraComercial, icon: Snowflake, title: "Exhibidoras", text: "Service de exhibidoras refrigeradas para kioscos, almacenes y supermercados." },
            ].map((s, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={1024} height={1024} />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: "var(--gradient-cta)" }}>
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold mb-4" style={{ backgroundColor: "oklch(0.65 0.22 35)", color: "white" }}>
            <Zap className="h-4 w-4 fill-current" /> ATENCIÓN DE URGENCIAS
          </div>
          <h2 className="text-3xl md:text-5xl font-black">¿Tu equipo no funciona?</h2>
          <p className="mt-4 text-lg md:text-xl text-white/90">Escribinos por WhatsApp y coordinamos una visita sin cargo. Reparamos en el día.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-bold text-white shadow-[var(--shadow-elegant)] transition-[var(--transition-bounce)] hover:scale-105"
            style={{ backgroundColor: "var(--whatsapp)" }}
          >
            <Phone className="h-6 w-6" /> Pedí tu visita sin costo
          </a>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "var(--brand-light)", color: "var(--brand-deep)" }}>
              NUESTRO TRABAJO
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground">Antes y después</h2>
            <p className="mt-4 text-lg text-muted-foreground">Arrastrá el control para ver la diferencia</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div>
              <BeforeAfter before={antes1} after={despues1} alt="Compresor de heladera" />
              <h3 className="mt-4 text-xl font-bold text-foreground text-center">Compresor de heladera</h3>
            </div>
            <div>
              <BeforeAfter before={antes2} after={despues2} alt="Tambor de lavarropas" />
              <h3 className="mt-4 text-xl font-bold text-foreground text-center">Tambor de lavarropas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ZONA DE COBERTURA */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <MapPin className="mx-auto h-12 w-12 mb-4" style={{ color: "var(--brand-primary)" }} />
          <h2 className="text-3xl md:text-4xl font-black text-foreground">Zona de cobertura</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Visita técnica <strong className="text-foreground">sin cargo</strong> en Lanús, Avellaneda, Lomas de Zamora y toda la zona sur del GBA.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Lanús", "Lanús Oeste", "Lanús Este", "Avellaneda", "Banfield", "Lomas de Zamora", "Remedios de Escalada", "Valentín Alsina", "Gerli", "Wilde", "Sarandí", "Dock Sud", "Piñeyro", "Villa Domínico", "Crucecita", "Monte Chingolo", "Temperley", "Turdera", "Llavallol", "Quilmes", "Bernal", "Ezpeleta", "Don Bosco", "Adrogué", "Burzaco", "Rafael Calzada", "Claypole", "Florencio Varela"].map((z) => (
              <span key={z} className="rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground border border-border shadow-sm">{z}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="relative overflow-hidden text-white py-16">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black mb-3">Servicio Técnico</h3>
            <p className="text-white/80">Más de 20 años reparando los electrodomésticos de tu casa y tu comercio.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contacto</h4>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp directo</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lanús y alrededores</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Lun a Sáb · 8 a 20 hs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">¿Necesitás ayuda?</h4>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-[var(--transition-smooth)] hover:scale-105"
              style={{ backgroundColor: "var(--whatsapp)" }}
            >
              <Phone className="h-5 w-5" /> Escribinos
            </a>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Servicio Técnico de Electrodomésticos · Todos los derechos reservados
        </div>
      </footer>
    </main>
  );
}
