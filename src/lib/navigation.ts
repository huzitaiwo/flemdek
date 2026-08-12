/**
 * Primary site navigation.
 *
 * One source of truth shared by the header and the footer so the two can
 * never drift apart. Destinations are in-page anchors for now: the sections
 * they point at are built in later stages, and inventing routes ahead of the
 * pages that serve them would produce dead links.
 */
export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/** The single conversion action carried by the shell. */
export const primaryAction = {
  label: "Request a Quote",
  href: "#contact",
} as const;
