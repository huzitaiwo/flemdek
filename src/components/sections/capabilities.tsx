import { Container, Section } from "@/components/layout";
import { company } from "@/lib/company";

/**
 * Engineering capabilities — the detailed presentation of the service scope
 * that `services.tsx` indexes.
 *
 * The reference's first design is cropped directly below its "Why Choose Us"
 * band, so as with the services overview there is no capability composition in
 * it to clone. What is translated instead is its visual language: an accent
 * eyebrow over a display heading, a supporting column carrying the copy and the
 * quiet action, elevated white surfaces lifted off a tinted plane, accent used
 * only on ordinals and links, dotted-grid texture, and generous whitespace.
 *
 * Where the overview is a flat index of all twelve services on hairline rules,
 * this band groups them into the four areas the work actually divides into and
 * gives each one room — so the two sections progress from "what we do" to "how
 * the work breaks down" rather than restating one another. The grouping is a
 * reorganisation of the approved list, not an extension of it: every service
 * name is reproduced exactly as approved, and no group introduces a service the
 * list does not contain.
 *
 * "Electrical & Mechanical Engineering" deliberately sits in no group. It is the
 * combined discipline the other eleven sit beneath rather than a peer of them,
 * so it is named in the band's opening copy instead of being forced into a
 * column to even out a grid.
 *
 * Runs on the sunken plane: the hero and the services overview sit on canvas,
 * the trust band on surface, and the footer is already the page's dark band, so
 * an ink band here would merge into it. Sunken is the one remaining plane, and
 * it lets the white capability cards lift the way the reference's cards lift.
 *
 * What was deliberately NOT carried across:
 *
 * - Photography. This is the one band where an image would sit directly beside
 *   a specific technical claim, and four generic equipment photographs next to
 *   four named capabilities read as four completed jobs — the portfolio
 *   implication the brief forbids, and one no caption reliably undoes. The
 *   capability copy is fully legible without them, so photography is not
 *   needed here; the hero and trust bands already carry the page's imagery,
 *   where neither photograph is tied to a claim about specific work.
 * - Per-capability icons. Four glyphs would have to be invented for this one
 *   section, against the standard that icons must not exist to fill space. The
 *   ordinals carry the rhythm, as they do in the overview.
 * - Any count, duration, certification, standard or outcome. Each group's copy
 *   defines what the category covers in general engineering terms; none of it
 *   claims what the company has installed, how long it has traded, or what it
 *   is accredited to.
 */

interface Capability {
  /** Group name — descriptive of the category, not a service name itself. */
  title: string;
  /** What the category covers, in general terms. Claims nothing. */
  summary: string;
  /** Approved service names, reproduced exactly as they appear in the overview. */
  services: readonly string[];
}

const capabilities: readonly Capability[] = [
  {
    title: "Power distribution",
    summary:
      "The route power takes through a site: transformed at the intake, protected where it has to stay on, then distributed to the boards and circuits that carry it.",
    services: [
      "Power Transformer Installation",
      "Power Systems Installation",
      "Building Wiring",
      "UPS Wiring",
    ],
  },
  {
    title: "Lighting and building control",
    summary:
      "What makes installed plant usable — the lighting a building is worked in and the central controls the mechanical and electrical services are run from.",
    services: ["Lighting Systems", "Building Management Systems (BMS)"],
  },
  {
    title: "Life safety and communications",
    summary:
      "The systems a building has to be able to detect with, speak through and move data across — each with its own panels, cabling and terminations.",
    services: ["Fire Alarm Systems", "Public Address Systems", "Data Systems"],
  },
  {
    title: "Support structure and delivery",
    summary:
      "The steelwork that carries services through a building, and the co-ordination that takes an engineering scope from programme through to handover.",
    services: ["Gantry Installation", "Project Management"],
  },
] as const;

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      spacing="base"
      tone="sunken"
      aria-labelledby="capabilities-heading"
      // Clips the dotted grid to the band, as every band above it clips its own.
      className="overflow-clip"
    >
      {/* Dotted-grid accent, top-right — alternating with the services
          overview's, which sits bottom-left. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 hidden size-40 -translate-y-1/4 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <Container className="relative z-10 motion-reveal">
        {/* Editorial header ---------------------------------------------
            A single measure-capped column rather than the overview's
            two-column header. The two bands are adjacent, and repeating that
            split immediately would read as one long section rather than two. */}
        <div className="max-w-[var(--container-measure)]">
          <p className="text-label text-accent uppercase">Engineering capabilities</p>

          <h2
            id="capabilities-heading"
            className="text-h2 font-display text-ink mt-[var(--stack-sm)]"
          >
            Four areas of work, under one engineering scope.
          </h2>

          <p className="text-body-lg text-ink-muted mt-[var(--stack-md)]">
            Electrical &amp; Mechanical Engineering is the discipline the rest of it sits under.
            Within that, the work {company.shortName} takes on divides into four areas — each one
            covering several of the services listed above.
          </p>
        </div>

        {/* Capability panels ---------------------------------------------
            Two columns from `md` and held at two rather than four: each panel
            carries a paragraph and a ruled list, and four across would
            compress both into a feature grid. Grid items stretch, so panels
            in a row share a height regardless of how many services they name. */}
        <ol className="mt-[var(--stack-xl)] grid gap-[var(--stack-md)] md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <li
              key={capability.title}
              className="border-border bg-surface flex h-full flex-col rounded-2xl border p-[var(--pad-card)] shadow-sm"
            >
              <div className="flex items-center gap-3">
                {/* Decorative: the list element already conveys order, and the
                    ordinal indexes the four areas rather than ranking them.
                    A soft chip rather than the trust band's filled square or
                    the overview's bare numeral — a third position in the same
                    accent family, so the three bands stay distinguishable. */}
                <span
                  aria-hidden="true"
                  className="bg-accent-soft border-accent-border text-accent text-meta tabular flex size-9 shrink-0 items-center justify-center rounded-lg border font-semibold"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-h4 font-display text-ink min-w-0">{capability.title}</h3>
              </div>

              <p className="text-body-sm text-ink-muted mt-[var(--stack-sm)] max-w-[48ch]">
                {capability.summary}
              </p>

              {/* The approved service names this area covers. Hairline rules
                  rather than chips: these are the same entries the overview
                  lists, and styling them as tags would read as a second,
                  competing taxonomy. */}
              {/* `mt-auto` bottom-aligns the lists across a row. The areas name
                  different numbers of services, and grid rows share a height,
                  so without this the shorter panels trail dead space under
                  their last rule. Bottom-aligned, the slack collects above the
                  first rule as breathing room and the lists share a baseline. */}
              <ul className="mt-auto flex flex-col pt-[var(--stack-md)]">
                {capability.services.map((service) => (
                  <li
                    key={service}
                    className="border-border text-body-sm text-ink flex items-baseline gap-3 border-t py-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="bg-accent size-1.5 shrink-0 translate-y-[-0.15em] rounded-full"
                    />
                    <span className="min-w-0 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
