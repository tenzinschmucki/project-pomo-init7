import { createNavigation } from 'next-intl/navigation';
import { locales, localePrefix } from '@/config/i18n';

export const { Link, useRouter, usePathname, redirect } = createNavigation({
  locales,
  localePrefix,
});