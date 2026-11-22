import type { Metadata } from 'next';
import './globals.css';
import { spaceGrotesk, IBMPlexMono } from './fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { assetPath } from '@/lib/paths';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: '--Change TITLE HERE',
  description: '--Change DESCRIPTION HERE',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const [{ locale }, messages] = await Promise.all([params, getMessages()]);

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
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
