type StepBlockProps = Readonly<{
  tag: string;
  title: string;
  description: string;
  subtitle: string;
}>;

export default function StepBlock({ tag, title, description, subtitle }: StepBlockProps) {
  return (
    <article className="flex flex-col">
      <span className="font-code text-xs text-accent text-code">{tag}</span>
      <h3 className="mb-4 text-lg font-bold text-light-primary">{title}</h3>
      <p className="mb-6 text-base text-light-secondary">{description}</p>
      <p className="font-code text-xs text-light-secondary/80">{subtitle}</p>
    </article>
  );
}
