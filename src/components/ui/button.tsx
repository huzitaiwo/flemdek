import type { ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Visual weights. `accent` carries conversion actions, `outline` sits beside
 * it as the quieter companion, and `ghost` is for icon controls and other
 * chrome that must not read as a call to action.
 */
const buttonVariant = {
  accent:
    "bg-accent text-accent-contrast hover:bg-accent-hover active:bg-accent-active border border-transparent",
  outline:
    "border border-border-strong bg-surface text-ink hover:border-ink-subtle hover:bg-canvas",
  ghost: "border border-transparent bg-transparent text-ink hover:bg-canvas-sunken",
} as const;

/**
 * `sm` is the shell's default: a header action should read as deliberate, not
 * as the loudest thing on the page. `icon` is square, for glyph-only controls.
 */
const buttonSize = {
  sm: "text-nav px-4 py-2",
  md: "text-nav px-6 py-3",
  lg: "text-body px-8 py-4",
  icon: "size-11",
} as const;

export type ButtonVariant = keyof typeof buttonVariant;
export type ButtonSize = keyof typeof buttonSize;

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * React 19 passes `ref` as an ordinary prop, so these need no `forwardRef`.
 * The header takes a ref on its menu trigger to restore focus after Escape.
 */
export type ButtonProps = BaseProps & ComponentPropsWithRef<"button">;
export type ButtonLinkProps = BaseProps & ComponentPropsWithRef<"a">;

/**
 * Shared shape and interaction. The focus ring is inherited from the global
 * `:focus-visible` rule rather than redeclared here, and `transition-interactive`
 * deliberately excludes `outline-color` so that ring appears instantly.
 */
const base = cn(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium",
  "transition-interactive motion-button select-none",
  "disabled:pointer-events-none disabled:opacity-55",
);

export function Button({ variant = "accent", size = "md", className, type, ...props }: ButtonProps) {
  return (
    <button
      // Buttons inside a form default to `submit`; the shell's controls are
      // not submitters, so the default is made explicit rather than inherited.
      type={type ?? "button"}
      className={cn(base, buttonVariant[variant], buttonSize[size], className)}
      {...props}
    />
  );
}

/**
 * Anchor styled as a button. Separate from `Button` rather than a polymorphic
 * `as` prop: a link and a button differ in keyboard behaviour and in the
 * attributes they accept, and collapsing them tends to produce elements that
 * look right but do not behave right.
 */
export function ButtonLink({
  variant = "accent",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(base, buttonVariant[variant], buttonSize[size], className)} {...props} />
  );
}
