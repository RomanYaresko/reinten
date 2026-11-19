type QuoteBlockProps = Readonly<{
  quote: string;
  author?: string;
}>;

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <figure className="w-full border border-dark-subtle bg-dark-primary px-8 py-10 md:px-12 md:py-12">
      <blockquote className="text-[22px]/[1.4] text-light-primary">{quote}</blockquote>
      {author && (
        <figcaption className="mt-6 text-[14px]/[1] text-light-primary">{author}</figcaption>
      )}
    </figure>
  );
}
