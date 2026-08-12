import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { company } from "@/lib/company";
import { fontVariables } from "./fonts";
import "./globals.css";

const siteTitle = `${company.name} — ${company.tagline}`;
const siteDescription = `${company.name} — ${company.tagline}.`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  legalName: company.registeredName,
  description: siteDescription,
  email: company.email,
  telephone: company.phones,
  address: company.offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.address,
  })),
  identifier: {
    "@type": "PropertyValue",
    propertyID: "RC Number",
    value: company.rcNumber,
  },
} as const;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s — ${company.shortName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: company.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Zoom is deliberately left unrestricted; capping it fails WCAG 1.4.4.
  themeColor: "#0f4c81",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Bypass block: the first stop for a keyboard or screen-reader user,
            visually hidden until it takes focus. */}
        <a
          href="#main"
          className="bg-accent text-accent-contrast text-nav focus-visible:page-gutter sr-only rounded-lg focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:py-3"
        >
          Skip to content
        </a>

        {/* The shell is composed once here, so every page added later inherits
            header, main, and footer without repeating the composition. */}
        <SiteHeader />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
