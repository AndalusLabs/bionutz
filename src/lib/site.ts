/**
 * Canonical public site URL.
 * - Local/dev: http://localhost:3000 (or NEXT_PUBLIC_SITE_URL override)
 * - Production: https://www.bionutz.com (or NEXT_PUBLIC_SITE_URL override)
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
  if (fromEnv) return fromEnv;

  if (process.env.NODE_ENV === 'production') {
    return 'https://www.bionutz.com';
  }

  return 'http://localhost:3000';
}

export const SITE_NAME = 'BIONUTZ';
export const SITE_DESCRIPTION =
  "Premium pinda's uit Gambia. Puur van oorsprong, eindeloos in mogelijkheden.";
