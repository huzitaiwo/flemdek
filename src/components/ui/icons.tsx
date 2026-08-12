import type { SVGProps } from "react";

/**
 * The glyph set.
 *
 * Authored inline rather than pulled from an icon library: no icon package is
 * installed, and adding one for a handful of shapes would be a dependency for
 * its own sake. All are drawn on Lucide's 24px grid with a 2px stroke so that
 * if a library is adopted later, these can be swapped out without visual drift.
 *
 * Always decorative here — every control that uses one carries its own
 * accessible name — so each is marked `aria-hidden` at the call site.
 */

type IconProps = SVGProps<SVGSVGElement>;

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function MenuIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M15.5 21A12.5 12.5 0 0 1 3 8.5 2.5 2.5 0 0 1 5.5 6h2a1 1 0 0 1 1 .84l.62 3.1a1 1 0 0 1-.5 1.06l-1.3.7a11 11 0 0 0 4.98 4.98l.7-1.3a1 1 0 0 1 1.06-.5l3.1.62a1 1 0 0 1 .84 1v2A2.5 2.5 0 0 1 15.5 21Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 8.4 5.6a1 1 0 0 0 1.2 0L21 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
