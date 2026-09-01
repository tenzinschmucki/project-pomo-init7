import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './config/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  // Metadata provides the authoritative hreflang entries. Disable next-intl's
  // response header because its x-default URL is the redirecting root path.
  alternateLinks: false,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
