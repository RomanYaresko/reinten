'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations('Header');
  const isHomePage = pathname === '/';

  return (
    <header className="w-full flex items-center justify-center bg-dark-primary p-8 border-b border-dark-subtle">
      <div className="w-full max-w-244 flex justify-between text-[13px] tracking-widest font-code">
        <Link href="/" className="text-light-primary ">
          {t('brand')}
        </Link>
        {!isHomePage && (
          <Link href="/" className="text-light-tertiary hover:text-light-primary duration-300">
            {t('allWork')}
          </Link>
        )}
      </div>
    </header>
  );
}
