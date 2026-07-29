'use client';

import { usePathname, useRouter } from '@/lib/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { locales, localeNames, type Locale } from '@/config/i18n';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <nav className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50" aria-label="Language selector">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          disabled={isPending}
          className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
            locale === l
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-label={`Switch to ${localeNames[l]}`}
          aria-current={locale === l ? 'true' : undefined}
        >
          {locale === l && (
            <motion.span
              layoutId="language-pill"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{l.toUpperCase()}</span>
        </button>
      ))}
    </nav>
  );
}