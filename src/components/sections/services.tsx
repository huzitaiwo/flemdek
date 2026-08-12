import { Container, Section } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction } from "@/lib/navigation";

/**
 * Services overview.
 *
 * The reference's first design is cropped after its "Why Choose Us" band, so
 * it has no services composition to clone. What it does have is a consistent
 * visual language, and that is what is translated here: an accent eyebrow over
 * a two-line display heading, a second column carrying the supporting copy and
 * the quiet action, generous whitespace, dotted-grid texture, and the accent
 * used only on ordinals and links.
 *
 * Presented as a ruled schedule rather than twelve cards. Twelve identical
 * bordered tiles would read as a SaaS feature grid; hairline rules with
 * tabular ordinals read as an engineering scope of works, which is what this
 * list actually is. It also keeps the band clearly distinct from Trust
 * directly above it, which already uses filled accent chips for its 01/02/03.
 *
 * What was deliberately NOT carried across:
 *
 * - Per-service icons. Twelve new glyphs would have to be invented for this
 *   one section, and the brief's own standard is that icons must not exist to
 *   fill space. The ordinals carry the rhythm instead, so the only glyph used
 *   is the existing arrow on the closing link.
 * - Photography. The Hero and Trust bands immediately above are both
 *   photographic; a third would flatten the page's rhythm rather than extend
 *   it. Twelve stock photographs would also put twelve images on the page that
 *   are not FLEMDEK installations, next to the names of services FLEMDEK
 *   sells — the one adjacency most likely to be read as a portfolio. The
 *   section communicates scope typographically instead.
 *
 * Every service name is reproduced exactly as approved, in the approved order,
 * so the ordinals are a faithful index rather than a ranking. The supporting
 * line under each one defines the service category in general terms; none of
 * them claims a project, a client, a count, a certification or an outcome.
 *
 * Mounted as `#services`: the shell's navigation already points there and,
 * until now, at nothing.
 */

interface Service {
  name: string;
  summary: string;
}

const services: readonly Service[] = [
  {
    name: "Electrical & Mechanical Engineering",
    summary:
      "The combined discipline the rest of this list sits under — a building's electrical and mechanical services taken together rather than separately.",
  },
  {
    name: "Building Management Systems (BMS)",
    summary:
      "Centralised control and monitoring of the mechanical and electrical plant a building runs on.",
  },
  {
    name: "UPS Wiring",
    summary:
      "Wiring for uninterruptible power supplies, from the unit through to the circuits it is there to protect.",
  },
  {
    name: "Lighting Systems",
    summary:
      "Internal and external lighting — circuits, fittings and the controls that switch and dim them.",
  },
  {
    name: "Data Systems",
    summary:
      "Structured cabling, containment and termination for a building's data network.",
  },
  {
    name: "Public Address Systems",
    summary: "Speech, announcement and paging systems covering a building or a site.",
  },
  {
    name: "Fire Alarm Systems",
    summary:
      "Detection, sounder and panel wiring for a building's fire alarm installation.",
  },
  {
    name: "Power Transformer Installation",
    summary:
      "Positioning, terminating and connecting transformers into a site's distribution.",
  },
  {
    name: "Gantry Installation",
    summary: "Structural gantry and support systems carrying services and equipment runs.",
  },
  {
    name: "Building Wiring",
    summary:
      "First and second fix wiring through a building's circuits, distribution boards and outlets.",
  },
  {
    name: "Power Systems Installation",
    summary:
      "Distribution boards, submains and the supply routes that carry power around a site.",
  },
  {
    name: "Project Management",
    summary:
      "Programme, co-ordination and handover across the engineering scope of a project.",
  },
] as const;

export function Services() {
  return (
    <Section
      id="services"
      spacing="base"
      tone="canvas"
      aria-labelledby="services-heading"
      // Clips the dotted grid to the band, as the Hero and Trust clip theirs.
      className="overflow-clip"
    >
      {/* Dotted-grid accent, bottom-left — alternating with Trust's, which
          sits top-right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden size-40 translate-y-1/3 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <Container className="relative z-10"> motion-reveal
        {/* Editorial header ---------------------------------------------
            The reference's two-column heading block: display type on the
            left, supporting copy and the quiet action on the right, baselines
            aligned at the bottom so the two columns read as one row. */}
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-label text-accent uppercase">What we do</p>

            <h2
              id="services-heading"
              className="text-h2 font-display text-ink mt-[var(--stack-sm)] max-w-[20ch]"
            >
              From the incoming supply to the systems it runs.
            </h2>
          </div>

          <div className="mt-[var(--stack-md)] lg:col-span-5 lg:mt-0">
            <p className="text-body-lg text-ink-muted max-w-[46ch]">
              These are the twelve categories {company.shortName} works in, across both the
              electrical and the mechanical side of a project. Speak to the office about the scope
              yours requires.
            </p>

            <a
              href={primaryAction.href}
              // `min-h-11` keeps the hit area at 44px on touch without padding
              // the link out into something that reads as a second button:
              // the Hero already carries the page's one accent action.
              className="text-nav text-accent hover:text-accent-hover transition-interactive mt-[var(--stack-sm)] inline-flex min-h-11 items-center gap-2 rounded-xs"
            >
              {primaryAction.label}
              <ArrowRightIcon aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        {/* Schedule ------------------------------------------------------
            One column on a phone, two from `md`, three from `lg`. Twelve
            divides evenly into all three, so no tier ends on an orphan row.
            The rule sits on each item rather than between rows, which keeps
            the tops aligned across a row at every width. */}
        <ol className="mt-[var(--stack-xl)] grid gap-x-8 gap-y-[var(--stack-lg)] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.name}
              className="border-border flex gap-4 border-t pt-[var(--stack-md)] sm:gap-5"
            >
              {/* Decorative: the list element already conveys order, and the
                  ordinal is an index into the approved list, not a ranking. */}
              <span
                aria-hidden="true"
                className="text-label text-accent tabular shrink-0 pt-1"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex min-w-0 flex-col gap-1.5">
                <h3 className="text-h4 font-display text-ink">{service.name}</h3>
                <p className="text-body-sm text-ink-muted max-w-[44ch]">{service.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
