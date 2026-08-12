import { cn } from "@/lib/utils";
import { company } from "@/lib/company";

/**
 * FLEMDEK website brand treatment.
 *
 * A typographic wordmark built from the existing display face rather than an
 * illustrated logo — this is the site's brand treatment, not the company's
 * official registered logo, and it should not be presented as one.
 *
 * The mark is: a small accent rule, the name set tight in the display face,
 * and the legal descriptor set small and tracked beneath it. The rule is the
 * only ornament — an engineering datum line rather than a decorative symbol.
 */

interface WordmarkProps {
  /** `inverse` is for the ink footer and the dark mobile panel. */
  tone?: "default" | "inverse";
  /** Hide the "NIG. LIMITED" descriptor where vertical space is tight. */
  showDescriptor?: boolean;
  className?: string;
}

export function Wordmark({
  tone = "default",
  showDescriptor = true,
  className,
}: WordmarkProps) {
  const inverse = tone === "inverse";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* Datum rule. Decorative, so it is hidden from assistive technology:
          the accessible name comes from the text beside it. */}
      <span
        aria-hidden="true"
        className={cn(
          "h-7 w-[3px] shrink-0 rounded-xs lg:h-8",
          inverse ? "bg-accent-border" : "bg-accent",
        )}
      />

      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] leading-none font-extrabold tracking-[-0.02em] uppercase lg:text-[1.5rem]",
            inverse ? "text-ink-inverse" : "text-ink",
          )}
        >
          {company.shortName}
        </span>

        {showDescriptor && (
          <span
            className={cn(
              "mt-1 text-[0.625rem] leading-none font-semibold tracking-[0.18em] uppercase",
              inverse ? "text-ink-inverse-muted" : "text-ink-subtle",
            )}
          >
            Nig. Limited
          </span>
        )}
      </span>
    </span>
  );
}
