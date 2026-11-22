import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="w-full flex items-center justify-center bg-dark-primary p-12 botder-t border-dark-subtle">
      <div className="w-full flex items-center justify-center text-light-muted text-[12px]/[1.55]">
        {t('copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
