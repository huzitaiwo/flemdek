import type { ElementType } from "react";

import { cn } from "@/lib/utils";

/**
 * Vertical rhythm. Each step is fluid between 320px and 1440px, so section
 * spacing scales with the viewport rather than snapping at breakpoints.
 */
const sectionSpacing = {
  none: "",
  sm: "section-y-sm",
  base: "section-y",
  lg: "section-y-lg",
} as const;

/**
 * Background planes. Sections are full-bleed bands; alternating tone is what
 * separates them, not rules or margins.
 */
const sectionTone = {
  canvas: "bg-canvas text-ink",
  surface: "bg-surface text-ink",
  sunken: "bg-canvas-sunken text-ink",
  ink: "bg-ink text-ink-inverse",
  accent: "bg-accent text-accent-contrast",
  none: "",
} as const;

export type SectionSpacing = keyof typeof sectionSpacing;
export type SectionTone = keyof typeof sectionTone;

type SectionTag = "section" | "div" | "article" | "aside" | "header" | "footer";

export interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  as?: SectionTag;
  spacing?: SectionSpacing;
  tone?: SectionTone;
}

/**
 * Vertical layout primitive: a full-width band carrying a background plane
 * and section padding. Deliberately does not constrain width — nest a
 * `Container` inside so full-bleed and constrained content can coexist
 * within one band (needed for the asymmetric compositions to come).
 */
export function Section({
  as = "section",
  spacing = "base",
  tone = "none",
  className,
  ...props
}: SectionProps) {
  const Tag = as as ElementType;

  return (
    <Tag
      className={cn("relative w-full", sectionSpacing[spacing], sectionTone[tone], className)}
      {...props}
    />
  );
}
