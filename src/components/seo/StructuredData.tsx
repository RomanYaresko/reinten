import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { getLocalizedUrl, getSiteUrl, OPEN_GRAPH_IMAGE_PATH, SITE_NAME } from '@/lib/seo';

type StructuredDataProps = Readonly<{
  locale: Locale;
  page?: Readonly<{
    title: string;
    description: string;
    url: string;
  }>;
}>;

export default async function StructuredData({ locale, page }: StructuredDataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const organizationUrl = getSiteUrl('/');
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      name: SITE_NAME,
      url: organizationUrl,
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: getLocalizedUrl(locale),
      inLanguage: locale,
      description: t('homeDescription'),
    },
  ];

  if (page) {
    graph.push({
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      inLanguage: locale,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': page.url,
      },
      image: getSiteUrl(OPEN_GRAPH_IMAGE_PATH),
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: organizationUrl,
      },
    });
  }

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}
