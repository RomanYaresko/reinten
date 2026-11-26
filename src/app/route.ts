import { routing } from '@/i18n/routing';
import { assetPath } from '@/lib/paths';

export const dynamic = 'force-static';

export function GET() {
  const destination = assetPath(`/${routing.defaultLocale}/`);

  return new Response(
    `<!doctype html><html lang="${routing.defaultLocale}"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${destination}"><title>Redirecting</title></head><body><a href="${destination}">Continue</a></body></html>`,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    },
  );
}
