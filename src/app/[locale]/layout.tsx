import type { Metadata } from 'next';
import './globals.css';
import { spaceGrotesk, IBMPlexMono } from './fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { assetPath } from '@/lib/paths';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import {
  getLocalizedAlternates,
  getLocalizedUrl,
  getSiteUrl,
  openGraphLocales,
  OPEN_GRAPH_IMAGE_PATH,
  SITE_NAME,
  SITE_ORIGIN,
} from '@/lib/seo';

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const title = t('homeTitle');
  const description = t('homeDescription');
  const image = getSiteUrl(OPEN_GRAPH_IMAGE_PATH);

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    icons: {
      icon: assetPath('/favicon.ico'),
    },
    alternates: {
      canonical: getLocalizedUrl(locale),
      languages: getLocalizedAlternates(),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: openGraphLocales[locale],
      url: getLocalizedUrl(locale),
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: t('openGraphImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const [{ locale: requestedLocale }, messages] = await Promise.all([params, getMessages()]);
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return (
    <html
      lang={locale}
      style={
        {
          '--services-lines-url': `url("${assetPath('/images/servicesLines.svg')}")`,
        } as React.CSSProperties
      }
    >
      <body className={`${spaceGrotesk.variable} ${IBMPlexMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <StructuredData locale={locale} />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
