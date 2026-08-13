"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button, ButtonLink } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction, primaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Global site header.
 *
 * Deliberately a consistently solid surface rather than a scroll-aware
 * transparent-to-solid header: the shell must stay legible above any section
 * a later stage puts beneath it, and a header that changes identity on scroll
 * is a liability once content it does not know about sits behind it. The only
 * scroll response is a hairline border that appears once the page has moved,
 * which separates the header from the canvas without moving anything.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Hairline appears once the page has scrolled at all.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, returning focus to the trigger so keyboard users are not
  // dropped at the top of the document.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll while the panel covers the viewport. The scrollbar's
  // width is compensated so locking does not shift the layout sideways.
  useEffect(() => {
    if (!open) return;

    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // A resize into the desktop tier must not leave the panel open behind an
  // inline navigation that has become visible.
  useEffect(() => {
    if (!open) return;

    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header
      className={cn(
        "z-50 w-full",
        open ? "fixed inset-x-0 top-0" : "sticky top-0",
        "bg-surface",
        // The border is always laid out, only its colour changes, so the
        // header never changes height and the page below never shifts.
        "border-b transition-[border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)]",
        scrolled || open ? "border-border" : "border-transparent",
      )}
    >
      <Container>
        <div className="flex h-[var(--header-height)] items-center justify-between gap-4">
          {/* Brand ------------------------------------------------------ */}
          <Link
            href="/"
            aria-label={`${company.name} — home`}
            className="rounded-sm focus-visible:outline-offset-4"
          >
            <Wordmark />
          </Link>

          {/* Desktop navigation ----------------------------------------- */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-nav text-ink-muted hover:text-ink hover:bg-canvas-sunken",
                      "transition-interactive relative rounded-md px-3.5 py-2",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions ----------------------------------------------------- */}
          <div className="flex items-center gap-2">
            {/* The CTA is held back until `sm`. Below that the header would
                have to choose between a cramped brand and a cramped action;
                the panel carries it instead, at full width. */}
            <ButtonLink
              href={primaryAction.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {primaryAction.label}
            </ButtonLink>

            <Button
              ref={triggerRef}
              variant="ghost"
              size="icon"
              className="text-ink -mr-2 lg:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <CloseIcon aria-hidden="true" className="size-6" />
              ) : (
                <MenuIcon aria-hidden="true" className="size-6" />
              )}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile panel ------------------------------------------------- */}
      <MobileNav id={panelId} open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
