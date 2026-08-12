import Image from "next/image";

import { Container, Section } from "@/components/layout";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Primary hero.
 *
 * The composition is translated from the supplied design reference — the light
 * property-listing layout, not the dark food-ordering one: a left-aligned
 * display headline over muted subcopy, an elevated white action strip that
 * terminates in the accent button, a three-up fact row beneath it, dotted-grid
 * texture, and a diagonally-clipped dark plane holding the imagery on the right.
 *
 * What was deliberately NOT carried across:
 *
 * - The reference's stat row ("450+ Property Sold", "1200+ Happy Customer",
 *   "210+ Award Winning"). No such figures exist for FLEMDEK, and inventing
 *   project counts or awards to fill three slots would put unverifiable claims
 *   at the top of every page. The slot keeps its shape and carries the
 *   registration number and the two office locations instead — the only
 *   three-up facts the company record actually supports.
 * - The reference's search form. A non-functional set of filter fields would
 *   be decoration pretending to be a feature, so the same elevated strip
 *   carries the two real contact routes and the shell's existing primary action.
 *
 * The photograph in the plane is a representative image of the kind of
 * building the company works in — and is NOT a FLEMDEK project. It is never
 * captioned or described as one. Because it carries tone and texture rather
 * than information, it is presented decoratively (`alt=""`) and makes no
 * claim the company record cannot support.
 *
 * Every value naming the company, its offices, its number, its telephone lines
 * or its address is read from `company.ts` rather than retyped.
 */

/** Served from `public/`, so referenced by path: a static import would make the
 *  bundler emit a second hashed copy of the same file. `fill` supplies the
 *  geometry from the parent, so no intrinsic dimensions are needed and there is
 *  no layout shift while it loads. */
const HERO_PHOTO = "/images/placeholder-flemdek.jpg";

/** Registration and both offices — the only three-up facts on record. */
const heroFacts = [
  {
    value: `RC ${company.rcNumber}`,
    note: "Registered company number",
    tabular: true,
  },
  ...company.offices.map((office) => ({
    value: office.label,
    note: office.address,
    tabular: false,
  })),
];

const [primaryPhone] = company.phones;

export function Hero() {
  return (
    <Section
      spacing="lg"
      tone="canvas"
      aria-labelledby="hero-heading"
      // Clips the plane and the dotted grid to the band so neither can widen
      // the document. `clip` rather than `hidden`, for the same reason the
      // global rule uses it: `hidden` would break sticky descendants.
      className="overflow-clip"
    >
      {/* Dotted-grid accent on the light side, as in the reference. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden size-40 translate-y-1/3 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Photographic plane ----------------------------------------------
          One image element for both tiers, so the photograph stays a single source across breakpoints.
          Below `lg` it sits first in flow, placing the image before the copy on small screens while carrying the page gutter and the same width cap as the Container so its edges line up with the copy above.
          At `lg` it becomes the reference's diagonally-clipped plane, anchored
          to the full-bleed Section so it runs to the viewport edge. */}
      <div
        className={cn(
          "mt-[var(--stack-xl)] px-[var(--gutter)] motion-hero motion-hero-delay-2",
          "lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[46%] lg:px-0",
        )}
      >
        <div
          className={cn(
            "bg-ink relative mx-auto h-64 max-w-[var(--container-page)] overflow-hidden rounded-2xl",
            "xs:h-72 sm:h-96 md:h-[28rem]",
            "lg:h-full lg:max-w-none lg:rounded-none",
            "lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]",
          )}
        >
          <Image
            src={HERO_PHOTO}
            // Decorative: the plane carries tone and texture, and the image is
            // not a FLEMDEK project, so it must not be described as one.
            alt=""
            fill
            // The base layer sets `img { height: auto }`, which would fight
            // `fill`; the explicit sizing below restores it.
            //
            // The source is portrait. In the short landscape letterbox below
            // `lg` the crop is biased upward, which holds the roofline and the
            // cantilevered corner — the part of the frame that reads as a
            // building at small sizes. At `lg` the plane is tall and the crop
            // moves right, away from the diagonal edge that eats the left of
            // the frame. Both values were kept from the previous photograph:
            // checked at every width against this one, they still frame it.
            className="h-full w-full object-cover object-[50%_22%] lg:object-[68%_45%]"
            sizes="(min-width: 1024px) 46vw, 100vw"
            // Above the fold. `priority` is deprecated in Next 16 in favour of
            // `preload`, and the docs prefer these two for the common case.
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="lg:w-[52%] motion-hero motion-hero-delay-1">
          <p className="text-label text-accent">{company.tagline}</p>

          <h1
            id="hero-heading"
            className="text-h1 font-display text-ink mt-[var(--stack-sm)]"
          >
            Electrical and mechanical engineering, delivered to specification.
          </h1>

          <p className="text-body-lg text-ink-muted mt-[var(--stack-md)] max-w-[46ch]">
            {company.registeredName} works from two offices in Abuja on the electrical and
            mechanical services a building depends on. Speak to the office directly about what
            your project requires.
          </p>

          {/* Action strip -------------------------------------------------
              The reference's floating search bar, rebuilt around the two
              contact routes on record and the shell's existing primary action.
              Same lift off the canvas.

              It goes horizontal at `sm`, but between `lg` and `xl` the column
              is only 52% of the viewport and the row crushes: the labels break
              mid-word and the email splits across three lines. So it returns to
              a stack for that band and goes back to a row at `xl`, where there
              is width for it again. */}
          <div
            className={cn(
              "border-border bg-surface mt-[var(--stack-lg)] rounded-2xl border p-2 shadow-lg",
              "flex flex-col gap-1",
              "sm:flex-row sm:items-center sm:gap-2",
              "lg:flex-col lg:items-stretch lg:gap-1",
              "xl:flex-row xl:items-center xl:gap-2",
            )}
          >
            <a
              href={`tel:${primaryPhone}`}
              className="hover:bg-canvas transition-interactive flex min-w-0 items-center gap-3 rounded-xl px-3 py-2.5"
            >
              <PhoneIcon aria-hidden="true" className="text-accent size-5 shrink-0" />
              <span className="flex min-w-0 flex-col">
                <span className="text-label text-ink-subtle">Call the office</span>
                <span className="text-body-sm text-ink tabular font-medium">{primaryPhone}</span>
              </span>
            </a>

            <span aria-hidden="true" className="bg-border hidden w-px self-stretch sm:block lg:hidden xl:block" />

            <a
              href={`mailto:${company.email}`}
              className="hover:bg-canvas transition-interactive flex min-w-0 items-center gap-3 rounded-xl px-3 py-2.5"
            >
              <MailIcon aria-hidden="true" className="text-accent size-5 shrink-0" />
              <span className="flex min-w-0 flex-col">
                <span className="text-label text-ink-subtle">Email</span>
                <span className="text-body-sm text-ink font-medium break-all">{company.email}</span>
              </span>
            </a>

            <ButtonLink
              href={primaryAction.href}
              className="mt-1 w-full sm:mt-0 sm:ml-auto sm:w-auto lg:mt-1 lg:w-full xl:mt-0 xl:ml-auto xl:w-auto"
            >
              {primaryAction.label}
              <ArrowRightIcon aria-hidden="true" className="motion-arrow size-4" />
            </ButtonLink>
          </div>

          {/* Fact row ------------------------------------------------------ */}
          <ul className="mt-[var(--stack-xl)] grid gap-[var(--stack-md)] sm:grid-cols-3 sm:gap-8">
            {heroFacts.map((fact) => (
              <li
                key={fact.value}
                className="border-border-strong flex flex-col gap-1 border-t pt-4"
              >
                <span className={cn("text-h4 font-display text-ink", fact.tabular && "tabular")}>
                  {fact.value}
                </span>
                <span className="text-meta text-ink-subtle">{fact.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

    </Section>
  );
}
