import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { BASE_PATH } from './src/lib/paths';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  ...(BASE_PATH && {
    basePath: BASE_PATH,
  }),

  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
