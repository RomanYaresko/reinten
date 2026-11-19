import Image from 'next/image';
import Link from 'next/link';

type ImageBlockProps = Readonly<{
  src: string;
  title?: string;
  subtitle?: string;
  linkTitle?: string;
  link?: string;
}>;

export default function ImageBlock({ src, title, subtitle, linkTitle, link }: ImageBlockProps) {
  return (
    <div className="flex flex-1 min-w-0 flex-col">
      <div className="relative aspect-square w-full overflow-hidden mb-8">
        <Image
          src={src}
          alt={title ? `Image of ${title}` : 'Image'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </div>

      {title && <span className="text-base font-bold text-dark-primary mb-2">{title}</span>}
      {subtitle && <span className="text-sm text-dark-secondary mb-4">{subtitle}</span>}
      {linkTitle && link && (
        <Link className="text-sm text-accent mb-4" href={link}>
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
