type QuoteBlockProps = Readonly<{
  quote: string;
  author?: string;
}>;

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <figure className="w-full border border-dark-secondary bg-dark-primary px-8 py-10 md:px-12 md:py-12">
      <blockquote className="text-lg text-light-primary md:text-2xl">{quote}</blockquote>
      {author && (
        <figcaption className="mt-6 text-sm text-light-secondary">{author}</figcaption>
      )}
    </figure>
  );
}
