'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { REFERRAL_CODE_COPY } from '@/lib/constants';

interface CopyButtonProps {
  onCopy?: () => void;
}

export function CopyButton({ onCopy }: CopyButtonProps) {
  const t = useTranslations('referral');
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE_COPY);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = REFERRAL_CODE_COPY;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 3000);
    }
  }, [onCopy]);

  if (copied) {
    return (
      <motion.a
        href="https://www.init7.net"
        target="_blank"
        rel="nofollow noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={t('visit')}
      >
        {t('visit')}
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={t('copy')}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Check className="w-4 h-4" aria-hidden="true" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Copy className="w-4 h-4" aria-hidden="true" />
          </motion.span>
        )}
      </AnimatePresence>
      {copied ? t('copied') : t('copy')}
    </motion.button>
  );
}