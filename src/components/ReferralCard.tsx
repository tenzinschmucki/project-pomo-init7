'use client';

import { useRef, useState, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CopyButton } from './CopyButton';
import { REFERRAL_CODE, REFERRAL_PROGRAM_LAST_VERIFIED } from '@/lib/constants';
import { CheckCircle } from 'lucide-react';

export function ReferralCard() {
  const t = useTranslations('referral');
  const locale = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 20);
    setRotateY((x - centerX) / 20);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  const handleCopy = useCallback(() => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  }, []);

  return (
    <section className="relative" aria-label="Referral code card">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        className="relative mx-auto max-w-md"
      >
        <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 sm:p-10 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-50" aria-hidden="true" />
          
          <div className="relative space-y-6">
            {/* Code display */}
            <div className="text-center space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                {t('copy')}
              </p>
              <p
                className="code-display text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.15em] text-foreground select-all whitespace-nowrap"
                aria-label={`Referral code: ${REFERRAL_CODE}`}
              >
                {REFERRAL_CODE}
              </p>
            </div>

            {/* Validity check */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/70">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" aria-hidden="true" />
              <span>
                {t('validity')} ·{' '}
                <time dateTime={REFERRAL_PROGRAM_LAST_VERIFIED}>
                  {new Intl.DateTimeFormat(locale, {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format(new Date(`${REFERRAL_PROGRAM_LAST_VERIFIED}T12:00:00Z`))}
                </time>
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-border/50" />

            {/* Copy button */}
            <div className="flex justify-center">
              <CopyButton onCopy={handleCopy} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Toast notification */}
      {toastVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-3 bg-foreground text-background rounded-xl shadow-lg text-sm font-medium"
          role="status"
          aria-live="polite"
        >
          {t('toast')}
        </motion.div>
      )}
    </section>
  );
}
