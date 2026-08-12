import Image from "next/image";

import { Container, Section } from "@/components/layout";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

/**
 * Trust / credibility band — the reference's "Why Choose Us?" section.
 *
 * Translated from the same light property-listing design as the Hero: a tall
 * image plane on the left carrying an overlaid credential badge and a floating
 * card that breaks its lower edge, against a right-hand column of eyebrow,
 * two-line display heading, and a numbered 01/02/03 list with accent markers.
 *
 * What was deliberately NOT carried across:
 *
 * - The badge's quote, "25+ years we have experience in the property sector".
 *   No trading history is established anywhere in the company record, and a
 *   fabricated tenure is exactly the kind of claim a credibility section must
 *   not make. The badge keeps its position and carries the registration
 *   number instead — the one credential actually on file.
 * - The floating "Jenny Collins · Property Agent" card. No named staff exist
 *   in the record, and inventing a person to fill the slot would put a
 *   fictional employee on the page. The same floating surface carries the two
 *   verified office locations.
 * - The list's lorem ipsum. Each of the three points is a restatement of
 *   something already on record — the company's declared scope, its
 *   registration, and its two offices — rather than a new claim.
 *
 * The photograph shows mechanical services of the kind the company works on
 * and is NOT a FLEMDEK project, so it is presented decoratively (`alt=""`)
 * and is never captioned as one.
 *
 * Mounted as `#why-us`, after its own eyebrow. It held `#about` only while it
 * was the sole band answering the shell's About navigation item; the About band
 * is the section that item actually names, so the anchor moved there and this
 * one took the id matching what it says. Nothing links to `#why-us` yet — it is
 * a stable target for the band rather than a dead nav destination.
 */

/** Served from `public/`, so referenced by path — see the note in `hero.tsx`. */
const TRUST_PHOTO = "/images/hero-mechanical-services.jpg";

/**
 * The three reasons. Each restates a fact from `company.ts`; none introduces
 * a figure, a date, or a capability the record does not already carry.
 */
const reasons = [
  {
    title: "Electrical and mechanical under one contract",
    body: `${company.shortName} covers both services, so the wiring and the ductwork are specified, installed and handed over by one contractor rather than co-ordinated across two.`,
  },
  {
    title: "A registered Nigerian company",
    body: `Trading as ${company.registeredName} under registration number ${company.rcNumber} — verifiable on the public register before you commit to anything.`,
  },
  {
    title: "Two offices in Abuja",
    body: "Work is run out of Garki and Kubwa, so the people responsible for a site are in the same city as it and reachable on a direct line.",
  },
] as const;

export function Trust() {
  return (
    <Section
      id="why-us"
      spacing="base"
      tone="surface"
      aria-labelledby="trust-heading"
      // Clips the dotted grid to the band, as the Hero clips its own.
      className="overflow-clip"
    >
      {/* Dotted-grid accent, mirrored to the right edge — the reference places
          it opposite the Hero's. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 hidden size-40 -translate-y-1/4 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <Container className="relative z-10"> motion-reveal
        <div className="grid items-center gap-[var(--stack-xl)] lg:grid-cols-2 lg:gap-16">
          {/* Image plane ------------------------------------------------
              The badge sits over the photograph at every width. The office
              card rides below it in flow on small screens — where an overlap
              would cover the image entirely — and only becomes the
              reference's floating, edge-breaking card at `lg`. */}
          <div className="relative">
            <div className="bg-ink relative aspect-[3/2] overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src={TRUST_PHOTO}
                // Decorative: representative of the work, not a project of the
                // company's, so it carries no description that implies it is.
                alt=""
                fill
                // The source is portrait. The pipe runs are the subject, so the
                // crop holds the upper-middle of the frame in the short
                // letterbox and centres at `lg`, where the plane is tall.
                className="h-full w-full object-cover object-[50%_38%] lg:object-[50%_50%]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />

              {/* Credential badge ------------------------------------------
                  The reference's translucent quote plate. `bg-ink/85` keeps
                  white text far clear of AA over any part of the photograph. */}
              <div className="absolute top-4 left-4 max-w-[calc(100%-2rem)] rounded-xl bg-ink/85 px-4 py-3 backdrop-blur-sm sm:top-6 sm:left-6">
                <p className="text-label text-ink-inverse-muted uppercase">
                  Registered company
                </p>
                <p className="text-h4 font-display text-ink-inverse tabular mt-1">
                  RC {company.rcNumber}
                </p>
              </div>
            </div>

            {/* Office card ------------------------------------------------- */}
            <div
              className={cn(
                "border-border bg-surface mt-[var(--stack-md)] rounded-2xl border p-5 shadow-lg",
                "lg:absolute lg:right-6 lg:bottom-0 lg:mt-0 lg:max-w-[19rem] lg:translate-y-1/3",
              )}
            >
              <p className="text-label text-accent uppercase">Where we work from</p>
              <ul className="mt-[var(--stack-sm)] grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {company.offices.map((office) => (
                  <li key={office.label} className="flex flex-col gap-0.5">
                    <span className="text-body-sm text-ink font-medium">{office.label}</span>
                    <span className="text-meta text-ink-subtle">{office.address}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copy column -------------------------------------------------
              At `lg` the floating card overhangs the image, so the column
              takes matching top padding to keep the two visually level. */}
          <div className="lg:pt-[var(--stack-xl)]">
            <p className="text-label text-accent uppercase">Why choose us</p>

            <h2 id="trust-heading" className="text-h2 font-display text-ink mt-[var(--stack-sm)]">
              Engineering a building can be signed off against.
            </h2>

            <p className="text-body-lg text-ink-muted mt-[var(--stack-md)] max-w-[46ch]">
              Electrical and mechanical services are the part of a project that has to be right
              before anything else can be finished. Here is what {company.shortName} brings to that.
            </p>

            <ol className="mt-[var(--stack-lg)] flex flex-col gap-[var(--stack-md)]">
              {reasons.map((reason, index) => (
                <li key={reason.title} className="flex gap-4 sm:gap-5">
                  {/* The ordinal is decorative — the list element already
                      conveys order to assistive technology. */}
                  <span
                    aria-hidden="true"
                    className="bg-accent text-accent-contrast text-body-sm tabular flex size-10 shrink-0 items-center justify-center rounded-xl font-semibold"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="text-h4 font-display text-ink">{reason.title}</h3>
                    <p className="text-body-sm text-ink-muted max-w-[52ch]">{reason.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
