import type { Metadata } from 'next';
import '@/app/globals.css';
import { spaceGrotesk, IBMPlexMono } from './fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '--Change TITLE HERE',
  description: '--Change DESCRIPTION HERE',
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${IBMPlexMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
