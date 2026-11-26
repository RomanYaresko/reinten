import { routing, type Locale } from '@/i18n/routing';
import { assetPath } from '@/lib/paths';

export const SITE_NAME = 'Reinten Tech';
const DEFAULT_SITE_ORIGIN =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://example.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_ORIGIN;
export const OPEN_GRAPH_IMAGE_PATH = '/images/og-image.png';

export const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  pl: 'pl_PL',
  uk: 'uk_UA',
  ru: 'ru_RU',
  es: 'es_ES',
  de: 'de_DE',
};

export function getSiteUrl(path: string): string {
  return new URL(assetPath(path), `${SITE_ORIGIN.replace(/\/+$/, '')}/`).toString();
}

export function getLocalizedPath(locale: Locale, pathname = '/'): string {
  const route = pathname.split('/').filter(Boolean).join('/');
  return `/${locale}/${route ? `${route}/` : ''}`;
}

export function getLocalizedUrl(locale: Locale, pathname = '/'): string {
  return getSiteUrl(getLocalizedPath(locale, pathname));
}

export function getLocalizedAlternates(pathname = '/'): Record<string, string> {
  return {
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, getLocalizedUrl(locale, pathname)]),
    ),
    'x-default': getLocalizedUrl(routing.defaultLocale, pathname),
  };
}
