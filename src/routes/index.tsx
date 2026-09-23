import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Linkedin, MapPin, ArrowUpRight, Lock, Menu, X } from "lucide-react";

const TITLE = "Ricardo Manuel Español Rowe — AI Operations & Automation Specialist";
const DESCRIPTION =
  "Especialista en automatización de procesos con IA en Madrid. 24+ años en operaciones y negocio B2B, con dos herramientas propias en producción construidas con Claude Code.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CV_URL = "/cv-ricardo-espanol-rowe.pdf";
const LINKEDIN = "https://www.linkedin.com/in/ricardo-español-rowe";
const EMAIL = "richiespa@gmail.com";

const nav = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Tecnologías" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const tools = [
  "Claude Code",
  "PostgreSQL",
  "OpenAI API",
  "Grok API",
  "Google AI Studio",
  "Prompt Engineering",
  "Automatización No-Code/Low-Code",
  "Intercom",
];

const projects = [
  {
    title: "Herramienta de gestión de bajas y reembolsos",
    body: "Aplicación web construida desde cero con Claude Code, integrada con PostgreSQL (Data Warehouse institucional) y con control de acceso por 4 roles. Automatiza la validación de solicitudes y el cruce de datos de reembolsos.",
    stats: [
      { k: "En producción", v: "+1 año" },
      { k: "Volumen", v: "~150 solicitudes/mes" },
      { k: "Alcance", v: "Toda la organización" },
    ],
  },
  {
    title: "Sustituto de Intercom impulsado por IA",
    body: "Web app de atención al alumno con la API de Grok, integrada con el Data Warehouse para personalizar respuestas según el contexto real de cada estudiante.",
    stats: [
      { k: "En producción", v: "9 meses" },
      { k: "Volumen", v: "~2.000 tickets/mes" },
      { k: "Ahorro potencial", v: "~42.000 €/año en licencias" },
    ],
  },
];

const experience = [
  {
    company: "thePower",
    years: "2020 – 2026",
    role: "Student Success & Operaciones",
  },
  {
    company: "Ayming",
    years: "2007 – 2018",
    role: "Senior Account Manager",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 md:px-6 md:py-4">
          <a href="#top" className="min-w-0 truncate font-serif text-base font-semibold">
            Ricardo Español Rowe
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:px-4"
            >
              <Download className="size-4" /> CV
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-2 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/60 py-3 text-base last:border-b-0 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 size-[34rem] rounded-full bg-accent/50 blur-3xl"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
            <p className="eyebrow">Disponibilidad inmediata · Híbrido o remoto</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] font-semibold md:text-6xl">
              Ricardo Manuel
              <br />
              Español Rowe
            </h1>
            <p className="mt-5 text-xl text-primary md:text-2xl">
              AI Operations &amp; Automation Specialist
            </p>
            <p className="mt-7 max-w-2xl font-serif text-xl leading-relaxed text-foreground/85 md:text-2xl">
              “No soy un desarrollador teórico de IA — soy el puente entre las necesidades del
              negocio y la tecnología.”
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="size-4" /> Descargar CV
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-surface px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                <Mail className="size-4" /> Contactar
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" /> Madrid, España
              </span>
              <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                {EMAIL}
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Section id="sobre-mi" eyebrow="Sobre mí" title="Operaciones primero, IA después.">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                Más de 24 años de trayectoria en operaciones, atención al cliente y al estudiante, y
                desarrollo de negocio B2B.
              </p>
              <p>
                En el último año me he especializado en automatización de procesos con IA
                Generativa: he diseñado y llevado a producción dos herramientas propias con Claude
                Code, adoptadas por toda mi organización.
              </p>
              <p>
                Actualmente completando el Máster AI Maker &amp; Automatizaciones (thePower Tech
                School), con finalización prevista en diciembre de 2026.
              </p>
            </div>
            <dl className="h-fit space-y-4 rounded-lg border border-border bg-surface p-6">
              {[
                ["Ubicación", "Madrid, España"],
                ["Disponibilidad", "Inmediata"],
                ["Modalidad", "Híbrida o remota"],
                ["Formación en curso", "Máster AI Maker & Automatizaciones"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="proyectos" eyebrow="Proyectos destacados" title="Dos herramientas en producción">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-lg border border-border bg-surface p-7"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                <dl className="mt-6 space-y-3 border-t border-border pt-5">
                  {p.stats.map((s) => (
                    <div key={s.k} className="flex items-baseline justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">{s.k}</dt>
                      <dd className="text-right text-sm font-semibold text-primary">{s.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5" /> Repositorio disponible próximamente
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="stack" eyebrow="Herramientas" title="Tecnologías con las que trabajo">
          <ul className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experiencia" eyebrow="Experiencia" title="Trayectoria en resumen">
          <ul className="divide-y divide-border border-y border-border">
            {experience.map((e) => (
              <li
                key={e.company}
                className="flex flex-wrap items-baseline justify-between gap-2 py-5"
              >
                <div>
                  <p className="text-lg font-semibold">{e.company}</p>
                  <p className="text-sm text-muted-foreground">{e.role}</p>
                </div>
                <span className="text-sm text-muted-foreground">{e.years}</span>
              </li>
            ))}
          </ul>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-surface px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            <Download className="size-4" /> Ver CV completo
          </a>
        </Section>

        <Section id="contacto" eyebrow="Contacto" title="Hablemos">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Si buscas a alguien que entienda el proceso antes de automatizarlo, escríbeme. Respondo
            a todos los mensajes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <span className="text-sm font-medium">{EMAIL}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex items-center gap-3">
                <Linkedin className="size-5 text-primary" />
                <span className="text-sm font-medium">LinkedIn</span>
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ricardo Manuel Español Rowe · Madrid, España
        </div>
      </footer>
    </div>
  );
}
