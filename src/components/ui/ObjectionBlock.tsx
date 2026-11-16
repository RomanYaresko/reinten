type ObjectionBlockProps = Readonly<{
  title: string;
  description: string;
}>;

export default function ObjectionBlock({ title, description }: ObjectionBlockProps) {
  return (
    <article className="flex flex-col">
      <h3 className="mb-4 text-lg font-bold text-light-primary">{title}</h3>
      <p className="text-base text-light-secondary">{description}</p>
    </article>
  );
}
