import { getTranslations } from 'next-intl/server';

export default async function BookingButton() {
  const t = await getTranslations('BookingButton');

  return (
    <button className="cursor-pointer bg-accent hover:bg-dark-subtle duration-300 ease-in px-8 py-6 text-white font-bold text-[16px] rounded-xs">
      {t('label')}
    </button>
  );
}
