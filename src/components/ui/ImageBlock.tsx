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
      <div className="relative aspect-square w-full overflow-hidden mb-6">
        <Image
          src={src}
          alt={title ? `Image of ${title}` : 'Image'}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </div>

      {title && <span className="text-[17px]/[1] font-bold text-dark-primary mb-2">{title}</span>}
      {subtitle && <span className="text-[14px]/[1] text-dark-muted mb-4">{subtitle}</span>}
      {linkTitle && link && (
        <Link className="text-[13px]/[1] text-accent" href={link}>
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
