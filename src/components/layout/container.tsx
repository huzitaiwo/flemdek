import type { ElementType } from "react";

import { cn } from "@/lib/utils";

/**
 * Content widths. `page` is the default for ordinary sections; `wide` is for
 * near-bleed compositions (large imagery, asymmetric splits); `measure` caps
 * running text at a comfortable reading length.
 */
const containerWidth = {
  page: "max-w-[var(--container-page)]",
  wide: "max-w-[var(--container-wide)]",
  narrow: "max-w-[var(--container-narrow)]",
  measure: "max-w-[var(--container-measure)]",
  full: "max-w-none",
} as const;

export type ContainerWidth = keyof typeof containerWidth;

type ContainerTag = "div" | "section" | "article" | "aside" | "header" | "footer" | "nav" | "main";

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Element to render. Layout primitives must never dictate page semantics. */
  as?: ContainerTag;
  width?: ContainerWidth;
  /**
   * Drop the responsive horizontal padding. For compositions that bleed to
   * the viewport edge and reapply the gutter on an inner element.
   */
  flush?: boolean;
}

/**
 * Horizontal layout primitive: centres content, caps its width, and applies
 * the responsive page gutter. Pair with `Section` for vertical rhythm.
 */
export function Container({
  as = "div",
  width = "page",
  flush = false,
  className,
  ...props
}: ContainerProps) {
  const Tag = as as ElementType;

  return (
    <Tag
      className={cn("mx-auto w-full", containerWidth[width], !flush && "page-gutter", className)}
      {...props}
    />
  );
}
