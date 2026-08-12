/**
 * Returns an explicitly configured public origin for SEO routes.
 *
 * No fallback domain is used: sitemap and robots metadata must not invent a
 * production URL when the deployment origin has not been verified.
 */
export function getSiteOrigin() {
  const rawOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawOrigin) {
    return null;
  }

  try {
    const origin = new URL(rawOrigin);

    if (origin.protocol !== "https:" && origin.protocol !== "http:") {
      return null;
    }

    return origin.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}
