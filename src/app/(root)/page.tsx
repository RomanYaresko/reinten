import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { assetPath } from '@/lib/paths';

export default function HomePage() {
  redirect(assetPath(`/${routing.defaultLocale}/`));
}
