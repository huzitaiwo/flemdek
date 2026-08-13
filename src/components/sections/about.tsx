import { Container, Section } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

/**
 * About / company story.
 *
 * The band the shell's "About" navigation item points at. It is written as a
 * record rather than as a story, because a record is what exists: the company
 * file this site is built from carries a registered name, a registration
 * number, a declared field of work and two office addresses, and nothing else.
 * A founding date, a trading tenure, a headcount, a project count, a client
 * list, an award or a certification would each have to be invented to fill a
 * timeline — and the section where a reader decides whether to believe the rest
 * of the page is the worst place on the site to invent anything. So this band
 * states what is documented, says in visible copy that it is only stating what
 * is documented, and stops there.
 *
 * Nothing here restates the three points the trust band makes. That band
 * already argues the combined discipline, the registration and the two offices
 * as reasons to choose the company; making the same three arguments again as
 * "about" copy would read as one case put twice. This band's material is the
 * register entry itself, the closed scope, and the page's own candour.
 *
 * Composition — a fourth opening shape, so that no two consecutive bands read
 * the same way: Services splits 7/5 and carries its action in the header,
 * Capabilities is one measure-capped column, Projects splits evenly and closes
 * on a colophon, and this one is a masthead — eyebrow and heading alone, a
 * full-width rule under them, then an asymmetric spread of prose against a
 * record plate held flush to the right edge. The plate is the band's one
 * object: a ruled definition list on white, headed like a drawing's title
 * block, which is what a company record should look like in a section about an
 * engineering company.
 *
 * What was deliberately NOT built:
 *
 * - A history, a timeline, a founder's note, a mission statement or a values
 *   list. Every one of them needs facts the record does not carry.
 * - Photography. All six photographs in `public/images` are already spent on
 *   the hero, trust and projects bands, and printing one of them twice on one
 *   page would be worse than printing none. A new one would be worse again:
 *   beside the words "who we are", a stock frame of technicians or of a
 *   facility reads as this company's staff and this company's premises — a
 *   claim about people and property that nothing in the record supports and
 *   that no caption reliably undoes. Projects directly above is photograph-led,
 *   so a documentary band here also gives the page a change of pace rather than
 *   an eighth image.
 * - The office addresses and the contact routes. The hero carries both, the
 *   trust band carries the offices again, and the footer carries all of it on
 *   every page; a fourth printing would be filler. The record's offices row
 *   summarises the two verified addresses at city level instead — both are in
 *   Abuja, in the Federal Capital Territory — and leaves the addresses
 *   themselves to the places already showing them.
 * - The trust band's big-figure credential treatment. `RC {rcNumber}` is
 *   already set as a display number over that band's photograph, and setting it
 *   as one again here would be the same component twice. Here it is one ruled
 *   row among four, which is how it reads on a register.
 * - A second accent action. Projects closes on the shell's primary action, so
 *   an identical call here would put the same button twice in one scroll. This
 *   band's single link points back up to the scope its copy refers to.
 *
 * Mounted as `#about`. The trust band held that anchor while it was the only
 * section answering to it; this is the section the navigation item actually
 * names, so the id moved here and the trust band took `#why-us`. The navigation
 * lists About second while the band sits sixth in the document — the link
 * resolves correctly either way, and reordering the shell's navigation is not
 * this stage's work.
 */

interface RecordRow {
  /** What the row documents. Never a claim in itself. */
  label: string;
  value: string;
  /** A qualifier under the value, where the record needs one. */
  note?: string;
  /** Lining figures, for values that are numbers. */
  tabular?: boolean;
}

/**
 * The register entry, and only the register entry. Every value is read from
 * `company.ts` except the offices row, which states the city both verified
 * addresses sit in rather than reprinting the addresses for the fourth time on
 * this page; its note is derived from the same record, so it stays true if the
 * office list ever changes.
 */
const companyRecord: readonly RecordRow[] = [
  { label: "Registered name", value: company.registeredName },
  { label: "Registration number", value: `RC ${company.rcNumber}`, tabular: true },
  { label: "Field of work", value: company.tagline },
  {
    label: "Offices",
    value: "Abuja, Federal Capital Territory",
    note: company.offices.map((office) => office.label).join(" · "),
  },
] as const;

export function About() {
  return (
    <Section
      id="about"
      spacing="base"
      tone="canvas"
      aria-labelledby="about-heading"
      // Clips the dotted grid to the band, as every band above it clips its own.
      className="overflow-clip"
    >
      {/* Dotted-grid accent, top-right — alternating with Projects', which sits
          bottom-left. */}
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
        {/* Masthead ------------------------------------------------------
            The heading stands alone above the rule, with no supporting column
            beside it: the bands above have used every other arrangement of a
            two-column header, and a title over a rule is the one shape none of
            them has taken. */}
        <p className="text-label text-accent uppercase">About {company.shortName}</p>

        <h2
          id="about-heading"
          className="text-h2 font-display text-ink mt-[var(--stack-sm)] max-w-[24ch]"
        >
          Who we are, and what is on record.
        </h2>

        {/* The rule is the wrapper's own top border rather than a separate
            element, which is how every other rule on the page is drawn. */}
        <div className="border-border-strong mt-[var(--stack-lg)] border-t pt-[var(--stack-xl)] lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Statement ---------------------------------------------------- */}
          <div className="lg:col-span-7">
            {/* The lead sits in full ink rather than muted: it is the band's
                statement of what the company is, not support for a heading. */}
            <p className="text-body-lg text-ink max-w-[52ch]">
              {company.shortName} is a Nigerian engineering company working on the electrical and
              mechanical services a building or a plant runs on: the supply that feeds it, the
              lighting and control it is operated through, the life-safety and communications it has
              to carry, and the structure those services are hung from.
            </p>

            <p className="text-body text-ink-muted mt-[var(--stack-md)] max-w-[54ch]">
              An about section is usually a history. This one keeps to what the record documents —
              how the company is registered, the field it works in, and the scope of work it takes
              on. No figures, dates or accreditations are listed here, and nothing has been written
              in to stand in for them.
            </p>

            <p className="text-body text-ink-muted mt-[var(--stack-md)] max-w-[54ch]">
              The work itself is set out above in full: twelve service categories, four areas of
              work, and the four shapes a project scope arrives in. That list is the scope, and
              where a project falls outside it the office will say so.
            </p>

            {/* Points back up to the scope this copy refers to, rather than
                repeating the primary action Projects closes on. `min-h-11`
                keeps the hit area at 44px on touch without padding the link
                into something that reads as a second button. */}
            <a
              href="#services"
              className="text-nav text-accent hover:text-accent-hover transition-interactive mt-[var(--stack-md)] inline-flex min-h-11 items-center gap-2 rounded-xs"
            >
              The full scope of services
              <ArrowRightIcon aria-hidden="true" className="size-4" />
            </a>
          </div>

          {/* Record plate -------------------------------------------------
              `self-start` at `lg` so the plate keeps its own height instead of
              stretching to the statement column and leaving white space under
              its last rule. */}
          <div className="border-border bg-surface mt-[var(--stack-xl)] overflow-hidden rounded-2xl border shadow-sm lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-start">
            {/* Title-block header. The line under it is the first row's own
                top border, so the strip carries no border of its own. */}
            <p className="text-label text-ink-subtle bg-canvas-sunken px-[var(--pad-card)] py-3 uppercase">
              Company record
            </p>

            <dl>
              {companyRecord.map((row) => (
                <div
                  key={row.label}
                  // Three intentional tiers: stacked on a phone, where there is
                  // no room for two columns; label beside value from `sm`, where
                  // the plate runs the full width of the band and a spec-table
                  // row uses that width; stacked again at `lg`, where the plate
                  // narrows into its own column.
                  className="border-border flex flex-col gap-1 border-t px-[var(--pad-card)] py-4 sm:flex-row sm:items-baseline sm:gap-6 lg:flex-col lg:gap-1"
                >
                  <dt className="text-label text-ink-subtle uppercase sm:w-40 sm:shrink-0 lg:w-auto">
                    {row.label}
                  </dt>
                  <dd className="min-w-0">
                    <span
                      className={cn("text-body text-ink block font-medium", row.tabular && "tabular")}
                    >
                      {row.value}
                    </span>
                    {row.note && (
                      <span className="text-meta text-ink-subtle mt-1 block">{row.note}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Says plainly what the plate is, in the plate. */}
            <p className="border-border text-meta text-ink-subtle border-t px-[var(--pad-card)] py-4">
              Registration details as filed. No other credential is claimed on this page.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
