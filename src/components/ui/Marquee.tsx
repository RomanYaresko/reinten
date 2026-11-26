import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type MarqueeProps = Readonly<{
  images: string[];
}>;

export default async function Marquee({ images }: MarqueeProps) {
  const t = await getTranslations('Marquee');

  return (
    <div className="relative h-40 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-dark-primary to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-dark-primary to-transparent" />

      <div className="flex h-full w-max animate-marquee items-center">
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex h-full shrink-0 items-center px-3">
            <Image
              src={image}
              alt={t('itemAlt')}
              width={1000}
              height={600}
              className="h-auto max-h-40 w-auto max-w-none rounded border border-dark-subtle"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
