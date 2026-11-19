type ObjectionBlockProps = Readonly<{
  title: string;
  description: string;
}>;

export default function ObjectionBlock({ title, description }: ObjectionBlockProps) {
  return (
    <article className="flex flex-col gap-4">
      <h3 className="text-[17px]/[1] font-bold text-light-primary">{title}</h3>
      <p className="text-[15px]/[1.55] text-light-tertiary">{description}</p>
    </article>
  );
}
