'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from '@/lib/navigation';

export function Navbar() {
  const t = useTranslations('nav');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-border/50" />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
          aria-label={t('title')}
        >
          {t('title')}
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}