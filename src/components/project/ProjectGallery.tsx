import Image from 'next/image';

export interface ProjectGalleryImage {
  src: string;
  title: string;
  ratio: {
    x: number;
    y: number;
  };
}

type ProjectGalleryProps = Readonly<{
  images: ProjectGalleryImage[];
  maxRowRatio?: number;
}>;

function getAspectRatio(image: ProjectGalleryImage): number {
  return image.ratio.x / image.ratio.y;
}

function groupImages(images: ProjectGalleryImage[], maxRowRatio: number) {
  const rows: ProjectGalleryImage[][] = [];
  let currentRow: ProjectGalleryImage[] = [];
  let currentRatio = 0;

  for (const image of images) {
    const ratio = getAspectRatio(image);
    const isImageOverflows = currentRatio + ratio > maxRowRatio;
    if (currentRow.length > 0 && isImageOverflows) {
      rows.push(currentRow);
      currentRow = [];
      currentRatio = 0;
    }

    currentRow.push(image);
    currentRatio += ratio;
  }

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

export default function ProjectGallery({ images, maxRowRatio = 3 }: ProjectGalleryProps) {
  const rows = groupImages(images, maxRowRatio);

  return (
    <div className="flex flex-col gap-16">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 gap-8 md:grid-cols-(--columns)"
          style={
            {
              '--columns': row.map((image) => `${getAspectRatio(image)}fr`).join(' '),
            } as React.CSSProperties
          }
        >
          {row.map((image) => (
            <figure key={image.src} className="min-w-0">
              <div className="w-full border border-light-secondary rounded-sm overflow-x-hidden bg-white">
                <div className="flex gap-1.5 px-3 py-2.5 border-b border-light-secondary">
                  {[...Array(3)].map((_, index) => (
                    <i key={index} className="block w-2 h-2 rounded-full bg-light-secondary" />
                  ))}
                </div>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={image.ratio.x}
                  height={image.ratio.y}
                  sizes="100vw"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-code text-light-muted uppercase tracking-[0.18em] text-[11.5px]/[1]">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
