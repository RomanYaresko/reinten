import type { MetadataRoute } from 'next';
import { projectDetails } from '@/data/project';
import { routing } from '@/i18n/routing';
import { getLocalizedAlternates, getLocalizedUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const routes = [
  { pathname: '/', priority: 1 },
  ...projectDetails.map((project) => ({
    pathname: `/project/${project.slug}/`,
    priority: 0.7,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ pathname, priority }) =>
    routing.locales.map((locale) => ({
      url: getLocalizedUrl(locale, pathname),
      changeFrequency: pathname === '/' ? 'weekly' : 'monthly',
      priority,
      alternates: {
        languages: getLocalizedAlternates(pathname),
      },
    })),
  );
}
