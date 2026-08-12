import { Container, Section } from "@/components/layout";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { company } from "@/lib/company";
import { primaryAction } from "@/lib/navigation";

/**
 * Final conversion section with verified contact routes and office details.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-heading"
      spacing="lg"
      tone="sunken"
    >
      <Container width="wide"> motion-reveal
        <div className="grid gap-[var(--stack-xl)] lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-end">
          <div className="max-w-[44rem]">
            <p className="text-label text-accent uppercase">Contact / enquiry</p>
            <h2
              id="contact-heading"
              className="text-h2 text-ink mt-[var(--stack-sm)] max-w-[18ch]"
            >
              Let&apos;s talk about the work ahead.
            </h2>
            <p className="text-body text-ink-muted mt-[var(--stack-md)] max-w-[56ch]">
              For a quotation or project enquiry, share the scope you are considering and connect with the FLEMDEK team through the verified contact routes below.
            </p>

            <div className="mt-[var(--stack-lg)] flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={`mailto:${company.email}`}
                aria-label={`${primaryAction.label} by email`}
                className="w-full sm:w-auto"
              >
                {primaryAction.label}
                <ArrowRightIcon aria-hidden="true" className="ml-2 size-4" />
              </ButtonLink>
              <a
                href={`tel:${company.phones[0]}`}
                className="text-nav text-ink inline-flex min-h-11 items-center gap-2 transition-interactive hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <PhoneIcon aria-hidden="true" className="size-4" />
                <span>Call FLEMDEK</span>
              </a>
            </div>
          </div>

          <div className="border-border bg-surface rounded-xl border p-[var(--pad-card)] shadow-sm">
            <p className="text-label text-ink-subtle uppercase">Contact details</p>
            <div className="mt-[var(--stack-md)] grid gap-[var(--stack-md)]">
              <div className="border-border flex gap-3 border-t pt-4">
                <MailIcon aria-hidden="true" className="text-accent mt-0.5 size-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-meta text-ink-subtle uppercase">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-body text-ink mt-1 block break-all font-medium transition-interactive hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="border-border flex gap-3 border-t pt-4">
                <PhoneIcon aria-hidden="true" className="text-accent mt-0.5 size-5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-meta text-ink-subtle uppercase">Phone</p>
                  <div className="mt-1 flex flex-col gap-1">
                    {company.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-body text-ink block font-medium tabular transition-interactive hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-border flex gap-3 border-t pt-4">
                <div aria-hidden="true" className="bg-accent mt-1 size-2 shrink-0 rounded-full" />
                <div className="min-w-0">
                  <p className="text-meta text-ink-subtle uppercase">Office locations</p>
                  <div className="mt-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {company.offices.map((office) => (
                      <address key={office.label} className="text-body-sm text-ink not-italic">
                        <span className="font-medium">{office.label}</span>
                        <span className="text-ink-muted mt-0.5 block">{office.address}</span>
                      </address>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-border flex gap-3 border-t pt-4">
                <div aria-hidden="true" className="bg-accent mt-1 size-2 shrink-0 rounded-full" />
                <div className="min-w-0">
                  <p className="text-meta text-ink-subtle uppercase">Registration</p>
                  <p className="text-body-sm text-ink mt-1 font-medium">RC {company.rcNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
