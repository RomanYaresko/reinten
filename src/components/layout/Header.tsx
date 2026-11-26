'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LocalizationButton from '@/components/localization/LocalizationButton';

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');
  const isHomePage = pathname === '/';

  return (
    <header className="w-full flex items-center justify-center bg-dark-primary p-8 border-b border-dark-subtle">
      <div className="w-full max-w-244 flex gap-4 justify-between text-[13px] tracking-widest font-code">
        <Link href="/" className="text-light-primary ">
          {t('brand')}
        </Link>
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <Link href="/" className="text-light-tertiary hover:text-light-primary duration-300">
              {t('allWork')}
            </Link>
          )}
          <LocalizationButton />
        </div>
      </div>
    </header>
  );
}
