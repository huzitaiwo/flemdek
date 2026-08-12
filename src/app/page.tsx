import { Container, Section } from "@/components/layout";
import { About, Capabilities, Contact, Hero, Projects, QuoteCta, Services, Trust } from "@/components/sections";
import { company } from "@/lib/company";

/**
 * Home page.
 *
 * The Hero is the page. Everything below it is the foundation specimen sheet —
 * a development surface that renders every token in the system so the
 * foundation can be verified in a browser. The specimen is NOT part of the
 * FLEMDEK website and is displaced section by section as page composition
 * proceeds.
 */

const colorGroups = [
  {
    title: "Canvas & surface",
    swatches: [
      { name: "canvas", value: "#F6F8FA", className: "bg-canvas" },
      { name: "canvas-sunken", value: "#EEF2F6", className: "bg-canvas-sunken" },
      { name: "surface", value: "#FFFFFF", className: "bg-surface" },
    ],
  },
  {
    title: "Ink",
    swatches: [
      { name: "ink", value: "#0E1C2F", className: "bg-ink" },
      { name: "ink-strong", value: "#08131F", className: "bg-ink-strong" },
      { name: "ink-muted", value: "#4E6076", className: "bg-ink-muted" },
      { name: "ink-subtle", value: "#5E6C83", className: "bg-ink-subtle" },
    ],
  },
  {
    title: "Accent",
    swatches: [
      { name: "accent", value: "#0F4C81", className: "bg-accent" },
      { name: "accent-hover", value: "#0C3D68", className: "bg-accent-hover" },
      { name: "accent-active", value: "#092E4F", className: "bg-accent-active" },
      { name: "accent-soft", value: "#EAF1F8", className: "bg-accent-soft" },
      { name: "accent-border", value: "#C9DDEF", className: "bg-accent-border" },
    ],
  },
  {
    title: "Line & state",
    swatches: [
      { name: "border", value: "#E1E7ED", className: "bg-border" },
      { name: "border-strong", value: "#C8D2DC", className: "bg-border-strong" },
      { name: "focus", value: "#1A6FB5", className: "bg-focus" },
      { name: "success", value: "#1E7A4D", className: "bg-success" },
      { name: "danger", value: "#B02A2A", className: "bg-danger" },
    ],
  },
] as const;

const typeSpecimens = [
  { token: "text-display", spec: "40 → 88px · Manrope 700", className: "font-display text-display" },
  { token: "text-h1", spec: "32 → 60px · Manrope 700", className: "font-display text-h1" },
  { token: "text-h2", spec: "26 → 44px · Manrope 700", className: "font-display text-h2" },
  { token: "text-h3", spec: "21 → 30px · Manrope 600", className: "font-display text-h3" },
  { token: "text-h4", spec: "18 → 22px · Manrope 600", className: "font-display text-h4" },
  { token: "text-body-lg", spec: "17 → 20px · Inter 400", className: "text-body-lg" },
  { token: "text-body", spec: "16 → 17px · Inter 400", className: "text-body" },
  { token: "text-body-sm", spec: "15px · Inter 400", className: "text-body-sm" },
  { token: "text-nav", spec: "15px · Inter 500", className: "text-nav" },
  { token: "text-meta", spec: "13px · Inter 400", className: "text-meta" },
] as const;

const radii = [
  { token: "rounded-sm", px: "3px", className: "rounded-sm" },
  { token: "rounded-md", px: "4px", className: "rounded-md" },
  { token: "rounded-lg", px: "6px", className: "rounded-lg" },
  { token: "rounded-xl", px: "8px", className: "rounded-xl" },
  { token: "rounded-2xl", px: "12px", className: "rounded-2xl" },
  { token: "rounded-3xl", px: "16px", className: "rounded-3xl" },
] as const;

const shadows = [
  { token: "shadow-xs", className: "shadow-xs" },
  { token: "shadow-sm", className: "shadow-sm" },
  { token: "shadow-md", className: "shadow-md" },
  { token: "shadow-lg", className: "shadow-lg" },
  { token: "shadow-xl", className: "shadow-xl" },
] as const;

const spacingTokens = [
  { token: "--gutter", note: "page padding", range: "20 → 48px", varName: "var(--gutter)" },
  { token: "--section-y-sm", note: "tight band", range: "40 → 88px", varName: "var(--section-y-sm)" },
  { token: "--section-y", note: "default band", range: "64 → 144px", varName: "var(--section-y)" },
  { token: "--section-y-lg", note: "opening band", range: "80 → 176px", varName: "var(--section-y-lg)" },
  { token: "--pad-card", note: "card padding", range: "24 → 40px", varName: "var(--pad-card)" },
  { token: "--stack-lg", note: "text group gap", range: "32px", varName: "var(--stack-lg)" },
] as const;

const containers = [
  { token: "measure", px: "704px", width: "var(--container-measure)" },
  { token: "narrow", px: "960px", width: "var(--container-narrow)" },
  { token: "page", px: "1320px", width: "var(--container-page)" },
  { token: "wide", px: "1536px", width: "var(--container-wide)" },
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-label text-accent uppercase">{children}</p>;
}

function SheetHeading({ index, title, note }: { index: string; title: string; note: string }) {
  return (
    <div className="mb-[var(--stack-lg)] flex flex-col gap-[var(--stack-xs)] border-t border-border-strong pt-[var(--stack-md)] sm:flex-row sm:items-baseline sm:gap-6">
      <span className="text-label text-ink-subtle tabular shrink-0">{index}</span>
      <h2 className="text-h3 grow">{title}</h2>
      <p className="text-meta text-ink-subtle sm:text-right">{note}</p>
    </div>
  );
}

export default function FoundationPage() {
  return (
    // `main` now lives in the root layout, so this is a plain wrapper: two
    // nested main landmarks would be invalid.
    <div className="bg-canvas">
      {/* ---- Hero ------------------------------------------------------ */}
      <Hero />

      {/* ---- Trust / credibility --------------------------------------- */}
      <Trust />

      {/* ---- Services overview ----------------------------------------- */}
      <Services />

      {/* ---- Engineering capabilities ----------------------------------- */}
      <Capabilities />

      {/* ---- Projects / case studies ------------------------------------ */}
      <Projects />

      {/* ---- About / company story --------------------------------------
          Sixth in the document, though the navigation lists About second: the
          band is deliberately placed after the work it refers to, and
          reordering the shell's navigation is not this stage's work. */}
      <About />
      {/* ---- Contact / final CTA --------------------------------------- */}
      <Contact />
      {/* ---- Quote CTA / enquiry conversion -------------------------- */}
      <QuoteCta />

    </div>
  );
}
