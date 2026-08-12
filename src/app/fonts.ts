import { Inter, Manrope } from "next/font/google";

/**
 * Body and interface typeface. Exposed as a CSS variable and consumed by
 * `--font-sans` in globals.css rather than applied via a class, so the token
 * layer stays the single source of truth.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Body copy, interface labels and emphasis. Variable font: these axes are
  // interpolated from one file, not four downloads.
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

/**
 * Display typeface for headlines and statistics. Manrope's tighter apertures
 * and geometric caps hold up at the large editorial sizes this design uses.
 */
export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["500", "600", "700"],
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

/** Applied once on <html> so both variables resolve document-wide. */
export const fontVariables = `${inter.variable} ${manrope.variable}`;
