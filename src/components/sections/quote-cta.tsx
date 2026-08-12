import { Container, Section } from "@/components/layout";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction } from "@/lib/navigation";

/**
 * Focused quotation CTA using the existing verified enquiry paths.
 */
export function QuoteCta() {
  return (
    <Section aria-labelledby="quote-cta-heading" spacing="base" tone="ink">
      <Container width="wide">
        <div className="grid gap-[var(--stack-lg)] motion-reveal lg:grid-cols-[minmax(0,1fr)_minmax(18rem,auto)] lg:items-center lg:gap-[var(--stack-xl)]">
          <div className="max-w-[46rem]">
            <p className="text-label text-accent-contrast uppercase">Request a quote</p>
            <h2
              id="quote-cta-heading"
              className="text-h2 text-accent-contrast mt-[var(--stack-sm)] max-w-[20ch]"
            >
              Make the next step clear.
            </h2>
            <p className="text-body text-ink-inverse-muted mt-[var(--stack-md)] max-w-[58ch]">
              Share the scope or engineering brief you are considering and use the verified enquiry route to begin the conversation.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
            <ButtonLink
              href={`mailto:${company.email}`}
              variant="outline"
              aria-label={`${primaryAction.label} by email`}
              className="w-full sm:w-auto"
            >
              {primaryAction.label}
              <ArrowRightIcon aria-hidden="true" className="motion-arrow ml-2 size-4" />
            </ButtonLink>
            <a
              href="#contact"
              className="text-nav text-accent-contrast inline-flex min-h-11 items-center transition-interactive motion-button hover:text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-contrast"
            >
              View contact details
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
