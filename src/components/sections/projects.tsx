import Image from "next/image";

import { Container, Section } from "@/components/layout";
import { ArrowRightIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction } from "@/lib/navigation";
import type { ProjectType } from "@/lib/projects";
import { projectTypes } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Projects / case studies.
 *
 * There is no verified FLEMDEK project record, so this band cannot be a
 * portfolio and does not pretend to be one. What it can honestly be is a
 * showcase of the *kinds* of project the approved scope is delivered as — which
 * is what it is. Every entry describes a type of work in general engineering
 * terms; nothing here names a client, a site, a date, a value, a count or an
 * outcome, and the closing note states that in visible copy rather than leaving
 * it to be inferred. See `lib/projects.ts` for the same constraint on the data.
 *
 * The reference's first design stops below its "Why Choose Us" band, so as with
 * the two sections before it there is no composition to clone — only its visual
 * language to continue: an accent eyebrow over a display heading, a supporting
 * column, large rounded image planes carrying translucent ink overlays, hairline
 * rules, dotted-grid texture, accent reserved for eyebrows and links, and a lot
 * of air.
 *
 * Composed as photographic plates on white paper rather than as bordered cards.
 * Capabilities directly above is already white cards lifted off a tinted plane,
 * and repeating that here would read as the same component twice; running the
 * plates on `surface` with no card chrome makes the photographs the objects in
 * the band, which is what a project showcase should be. It also gives the page a
 * plane it has not used since Trust, so the four bands now read
 * canvas → surface → canvas → sunken → surface rather than drifting into one
 * long light stretch.
 *
 * The taxonomy is deliberately a different axis from Capabilities'. That band
 * groups the twelve services by discipline area; this one groups work by the
 * shape a project arrives in — supply works, new-build, plant, retrofit — so the
 * two answer "what the work divides into" and "what a job looks like" instead of
 * restating one another. The services each type draws on are named as a quiet
 * caption line, not as a third ruled list, for the same reason.
 *
 * What was deliberately NOT built:
 *
 * - Case-study links, "view project" affordances, or per-card headings that
 *   imply a page behind them. No project pages exist, so every one would be a
 *   dead link dressed as a portfolio. The cards are not interactive; the band's
 *   single action is the shell's existing primary action, as in Services.
 * - Metrics, counts, values, durations, client logos and testimonials — the
 *   furniture a showcase section usually carries. None of it is on record.
 * - Captions on the photographs. An `alt=""` decorative plate cannot be read as
 *   a claim; a caption under it can, however carefully worded.
 *
 * Mounted as `#projects`: the shell's navigation already points there and, until
 * now, at nothing.
 */

/** The lead takes the large plate; the rest run as a row beneath it. */
const [leadProject, ...supportingProjects] = projectTypes;

/**
 * Discipline overlay — the reference's translucent plate, reused from Trust's
 * credential badge at a smaller weight. `bg-ink/85` holds white type far clear
 * of AA over any part of a photograph.
 */
function DisciplineTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-label text-ink-inverse absolute top-4 left-4 max-w-[calc(100%-2rem)] rounded-lg bg-ink/85 px-3 py-1.5 uppercase backdrop-blur-sm sm:top-5 sm:left-5">
      {children}
    </span>
  );
}

/**
 * The services a project of this kind draws on, as a caption rather than a list
 * treatment: Capabilities directly above already rules its service names, and
 * Services rules its own, so a third variant would read as a competing
 * taxonomy. Semantically still a list — the separators are punctuation.
 *
 * Separated by commas in one inline flow, not by dot glyphs in a wrapping flex
 * row. Every one of these lists wraps — four service names do not fit on one
 * line in the lead's five-column measure, let alone in a third of the
 * supporting row — and at the break a dot separator has nowhere good to go:
 * bound to the item before it, it strands at the end of a line with nothing
 * after it to separate; bound to the item after it, it opens the new line and
 * pushes the first word out of the caption's left edge. A comma cannot strand,
 * because it is punctuation belonging to the word it follows, and a line ending
 * in one is what every wrapped sentence on this page already does.
 */
function ScopeCaption({ scope, className }: { scope: readonly string[]; className?: string }) {
  return (
    <div className={cn("border-border border-t pt-[var(--stack-sm)]", className)}>
      <p className="text-label text-ink-subtle uppercase">Scope drawn from</p>
      {/* `inline` items in normal block flow, so the only break opportunity is
          the space after each comma: the comma always travels with the name it
          follows, and the left edge stays flush. */}
      <ul className="text-body-sm text-ink-muted mt-1.5">
        {scope.map((service, index) => (
          <li key={service} className="inline">
            {service}
            {index < scope.length - 1 && ", "}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Shared plate: dark ground behind the photograph so no gap flashes white. */
function ProjectPlate({
  project,
  sizes,
  className,
}: {
  project: ProjectType;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={cn("bg-ink motion-image-frame relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={project.image.src}
        // Decorative. The photograph is representative of the sector and is not
        // a FLEMDEK installation, so it carries no description that could be
        // read as identifying one.
        alt=""
        fill
        // The base layer sets `img { height: auto }`, which would fight `fill`;
        // the explicit sizing restores it. The crop is per-photograph data, so
        // `object-position` comes from the record rather than a static class.
        className="h-full w-full object-cover"
        style={{ objectPosition: project.image.focus }}
        sizes={sizes}
      />
      <DisciplineTag>{project.discipline}</DisciplineTag>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      spacing="base"
      tone="surface"
      aria-labelledby="projects-heading"
      // Clips the dotted grid to the band, as every band above it clips its own.
      className="overflow-clip"
    >
      {/* Dotted-grid accent, bottom-left — alternating with Capabilities',
          which sits top-right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden size-40 translate-y-1/3 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <Container className="relative z-10 motion-reveal">
        {/* Editorial header ----------------------------------------------
            A third header shape, so three consecutive bands do not open the
            same way: Services splits 7/5 and carries its action in the header,
            Capabilities is one measure-capped column, and this one splits
            evenly with its action moved down to the closing row — which gives
            the band a colophon to land on after the plates. */}
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-label text-accent uppercase">Projects</p>

            <h2
              id="projects-heading"
              className="text-h2 font-display text-ink mt-[var(--stack-sm)] max-w-[22ch]"
            >
              The shapes an engineering scope arrives in.
            </h2>
          </div>

          <div className="mt-[var(--stack-md)] lg:col-span-6 lg:mt-0">
            <p className="text-body-lg text-ink-muted max-w-[52ch]">
              The twelve services {company.shortName} works in reach a site as projects, and the
              shape of a project decides how its scope is planned, staged and handed over. These
              four are the shapes that work takes, described in general engineering terms.
            </p>
          </div>
        </div>

        {/* Lead plate ----------------------------------------------------
            Stacked below `lg`, where the copy has to sit under the image to
            keep both readable. At `lg` it becomes the asymmetric spread: a
            7-column plate against a 5-column copy block, vertically centred on
            it so the two read as one composition rather than two blocks. */}
        <article className="mt-[var(--stack-xl)] lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <ProjectPlate
            project={leadProject}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[4/3] sm:aspect-[2/1] lg:col-span-7 lg:aspect-[4/3]"
          />

          <div className="mt-[var(--stack-md)] lg:col-span-5 lg:mt-0">
            <h3 className="text-h3 font-display text-ink">{leadProject.title}</h3>

            <p className="text-body text-ink-muted mt-[var(--stack-sm)] max-w-[46ch]">
              {leadProject.summary}
            </p>

            <ScopeCaption scope={leadProject.scope} className="mt-[var(--stack-md)]" />
          </div>
        </article>

        {/* Supporting row ------------------------------------------------
            Three intentional tiers rather than one layout shrunk twice. On a
            phone each item stacks — plate, then copy — because a side-by-side
            image would be too small to read as anything. From `sm` to `lg` they
            become wide horizontal items, which uses the width a tablet has
            without forcing three cramped columns. At `lg` they return to a
            three-up row of plates. */}
        <ol className="mt-[var(--stack-xl)] grid gap-[var(--stack-xl)] lg:grid-cols-3 lg:gap-10">
          {supportingProjects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-[var(--stack-md)] sm:flex-row sm:gap-6 lg:flex-col lg:gap-[var(--stack-md)]"
            >
              <ProjectPlate
                project={project}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 100vw"
                className={cn(
                  "aspect-[4/3]",
                  // Held to the plate's own ratio in the row tier rather than
                  // stretched to the copy's height, so the three crops stay
                  // consistent with the ones in the `lg` row.
                  "sm:w-2/5 sm:shrink-0 sm:self-start",
                  "lg:w-full",
                )}
              />

              {/* `grow` gives the copy the remaining height at `lg` so the
                  caption can bottom-align; without it the column is only as
                  tall as its text and the three captions sit at three
                  different heights across the row. */}
              <div className="flex min-w-0 grow flex-col">
                <h3 className="text-h4 font-display text-ink">{project.title}</h3>

                <p className="text-body-sm text-ink-muted mt-[var(--stack-sm)] max-w-[46ch]">
                  {project.summary}
                </p>

                <ScopeCaption
                  scope={project.scope}
                  className="mt-auto pt-[var(--stack-md)] sm:pt-[var(--stack-md)]"
                />
              </div>
            </li>
          ))}
        </ol>

        {/* Closing note --------------------------------------------------
            The band's disclosure and its single action, on one rule. Stating
            plainly what the photographs are and what the page does not claim is
            the honest position, and putting it in visible copy rather than in a
            comment is the only version of it a reader ever sees. */}
        <div className="border-border mt-[var(--stack-xl)] flex flex-col gap-[var(--stack-md)] border-t pt-[var(--stack-md)] lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <p className="text-meta text-ink-subtle max-w-[76ch]">
            These are representative project types. The photographs illustrate the kind of work
            described and are not of {company.shortName} installations; no client, site, date or
            contract value is named on this page. For scope detail relevant to your own project,
            speak to the office.
          </p>

          <a
            href={primaryAction.href}
            // `min-h-11` keeps the hit area at 44px on touch without padding the
            // link into a second button: the Hero carries the page's one accent
            // action, and Services sets this precedent.
            className="text-nav text-accent hover:text-accent-hover transition-interactive inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xs"
          >
            {primaryAction.label}
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
