'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import Modal from '@/components/ui/Modal';

const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  uk: 'Українська',
  ru: 'Русский',
  es: 'Español',
  de: 'Deutsch',
};

export default function LocalizationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Localization');
  const pathname = usePathname();
  const router = useRouter();

  function selectLocale(nextLocale: Locale) {
    setIsOpen(false);

    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={t('buttonLabel')}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="cursor-pointer text-light-tertiary hover:text-light-primary transition-colors duration-300"
        onClick={() => setIsOpen(true)}
      >
        {localeNames[locale as Locale].slice(0, 3).toUpperCase()}
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="font-code mb-4 text-lg">{t('title')}</h2>
        <ul className="flex flex-col gap-2">
          {routing.locales.map((option) => (
            <li key={option}>
              <button
                type="button"
                aria-current={option === locale ? 'true' : undefined}
                className="
                  flex gap-2
                  w-full text-left
                  cursor-pointer
                  text-light-primary
                  hover:text-light-tertiary
                  aria-current:pointer-events-none
                  aria-current:font-semibold
                  aria-current:ml-2
                  transition-colors duration-300
                "
                onClick={() => selectLocale(option)}
              >
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                {localeNames[option]}
              </button>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
