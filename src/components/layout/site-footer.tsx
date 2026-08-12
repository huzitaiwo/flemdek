import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { company } from "@/lib/company";
import { primaryNav } from "@/lib/navigation";

/**
 * Global site footer.
 *
 * Three columns, not four: the suggested "Services" column would require a
 * factual service list, and none is established in the codebase yet. Inventing
 * service names to balance a grid would put unverified claims on every page,
 * so navigation and contact carry the footer until that data exists.
 *
 * Every value here is read from `company.ts` rather than retyped, so the
 * footer cannot drift from the verified record.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Section as="footer" tone="ink" spacing="sm" className="border-border-inverse border-t">
      <Container>
        <div className="grid gap-[var(--stack-xl)] lg:grid-cols-[1.5fr_1fr_1.5fr] lg:gap-16">
          {/* Brand ------------------------------------------------------ */}
          <div className="flex flex-col gap-[var(--stack-sm)]">
            <Wordmark tone="inverse" />
            <p className="text-body-sm text-ink-inverse-muted max-w-[34ch]">
              {company.tagline}
            </p>
          </div>

          {/* Navigation ------------------------------------------------- */}
          <nav aria-label="Footer">
            <h2 className="text-label text-ink-inverse-muted uppercase">Navigation</h2>
            <ul className="mt-[var(--stack-md)] flex flex-col gap-3">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-ink-inverse hover:text-accent-border transition-interactive"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact ----------------------------------------------------- */}
          <div>
            <h2 className="text-label text-ink-inverse-muted uppercase">Contact</h2>

            <div className="mt-[var(--stack-md)] grid gap-[var(--stack-md)] sm:grid-cols-2 lg:grid-cols-1">
              <address className="flex flex-col gap-4 not-italic">
                {company.offices.map((office) => (
                  <div key={office.label} className="flex flex-col gap-1">
                    <span className="text-meta text-ink-inverse-muted">{office.label}</span>
                    <span className="text-body-sm text-ink-inverse max-w-[36ch]">
                      {office.address}
                    </span>
                  </div>
                ))}
              </address>

              <div className="flex flex-col gap-1">
                <a
                  href={`mailto:${company.email}`}
                  className="text-body-sm text-ink-inverse hover:text-accent-border transition-interactive break-all"
                >
                  {company.email}
                </a>
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-body-sm text-ink-inverse hover:text-accent-border transition-interactive tabular"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal line --------------------------------------------------- */}
        <div className="border-border-inverse mt-[var(--stack-xl)] flex flex-col gap-2 border-t pt-[var(--stack-md)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-meta text-ink-inverse-muted">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-meta text-ink-inverse-muted tabular">RC {company.rcNumber}</p>
        </div>
      </Container>
    </Section>
  );
}
