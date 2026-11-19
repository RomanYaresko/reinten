const modeClasses = {
  accent: {
    tag: 'text-accent',
    title: 'text-light-primary',
    description: 'text-light-secondary',
    subtitle: 'text-light-secondary/80',
  },
  white: {
    tag: 'text-dark-secondary',
    title: 'text-dark-primary',
    description: 'text-dark-secondary',
    subtitle: 'text-dark-secondary/80',
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
      {tag && <span className={`font-code text-xs text-code ${colors.tag}`}>{tag}</span>}
      {title && <h3 className={`mb-4 text-lg font-bold ${colors.title}`}>{title}</h3>}
      {description && <p className={`mb-6 text-base ${colors.description}`}>{description}</p>}
      {subtitle && <p className={`font-code text-xs ${colors.subtitle}`}>{subtitle}</p>}
    </article>
  );
}
