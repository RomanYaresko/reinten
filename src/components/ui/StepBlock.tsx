const modeClasses = {
  accent: {
    tag: 'text-accent',
    title: 'text-light-primary',
    description: 'text-light-tertiary',
    subtitle: 'text-light-muted',
  },
  white: {
    tag: 'text-light-muted',
    title: 'text-dark-primary',
    description: 'text-dark-muted',
    subtitle: 'text-dark-muted',
  },
};

type StepBlockProps = Readonly<{
  tag?: string;
  title?: string;
  description?: string;
  subtitle?: string;
  mode?: keyof typeof modeClasses;
}>;

export default function StepBlock({
  tag,
  title,
  description,
  subtitle,
  mode = 'accent',
}: StepBlockProps) {
  const colors = modeClasses[mode];

  return (
    <article className="flex flex-col">
      {tag && (
        <span className={`font-code text-[11.5px]/[1] tracking-[0.18em] ${colors.tag}`}>{tag}</span>
      )}
      {title && <h3 className={`mb-4 text-[19px]/[1] font-bold ${colors.title}`}>{title}</h3>}
      {description && (
        <p className={`mb-6 text-[15px]/[1.55] ${colors.description}`}>{description}</p>
      )}
      {subtitle && <p className={`font-code text-[11.5px]/[1] ${colors.subtitle}`}>{subtitle}</p>}
    </article>
  );
}
