import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './config/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};