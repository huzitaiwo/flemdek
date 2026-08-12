"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { company } from "@/lib/company";
import { primaryAction, primaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  id: string;
  open: boolean;
  /** Close the panel once a destination has been chosen. */
  onNavigate: () => void;
}

/**
 * Mobile navigation panel.
 *
 * A full-height sheet anchored beneath the header rather than an overlay drawer:
 * the brand and the close control stay in place, so the panel reads as the
 * header expanding rather than as a separate surface sliding over the page.
 *
 * Focus is trapped while open, and the panel is fully removed from the
 * accessibility tree and the tab order when closed.
 */
export function MobileNav({ id, open, onNavigate }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Move focus into the panel on open, and keep Tab inside it while it is the
  // only thing the user can meaningfully interact with.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const selector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    // Defer so the panel is visible before focus moves; focusing a element
    // inside a `hidden` subtree is a no-op.
    const raf = requestAnimationFrame(() => {
      panel.querySelector<HTMLElement>(selector)?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(selector));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      // The trigger lives outside the panel, so Shift+Tab from the first item
      // would otherwise escape upward into the page behind it.
      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      id={id}
      ref={panelRef}
      // `hidden` keeps the panel out of the tab order and the accessibility
      // tree when closed — visibility alone would leave its links focusable.
      hidden={!open}
      className={cn(
        "bg-surface border-border fixed inset-x-0 z-40 border-t lg:hidden",
        "top-[var(--header-height)] bottom-0 overflow-y-auto overscroll-contain",
      )}
    >
      <nav aria-label="Primary" className="page-gutter flex min-h-full flex-col pt-8 pb-10">
        <ul className="flex flex-col">
          {primaryNav.map((item, index) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "text-ink hover:text-accent border-border flex items-baseline gap-4 border-b py-4",
                  "transition-interactive text-h4 font-display",
                )}
              >
                {/* Index numerals borrow the specimen's engineering-document
                    voice. Decorative, so kept out of the accessible name. */}
                <span aria-hidden="true" className="text-label text-ink-subtle tabular">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-6">
          <ButtonLink href={primaryAction.href} size="lg" onClick={onNavigate}>
            {primaryAction.label}
          </ButtonLink>

          {/* Direct contact routes, from the verified company record. */}
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${company.email}`}
              onClick={onNavigate}
              className="text-body-sm text-ink-muted hover:text-accent transition-interactive break-all"
            >
              {company.email}
            </a>
            {company.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                onClick={onNavigate}
                className="text-body-sm text-ink-muted hover:text-accent transition-interactive tabular"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
