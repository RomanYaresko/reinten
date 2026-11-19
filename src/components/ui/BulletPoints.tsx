type BulletPointsProps = Readonly<{
  bulletPoints: string[];
}>;

export default function BulletPoints({ bulletPoints }: BulletPointsProps) {
  return (
    <ul className="grid w-full grid-cols-1 gap-x-16 gap-y-6 md:grid-cols-2">
      {bulletPoints.map((bulletPoint, index) => (
        <li key={`${index}-${bulletPoint}`} className="flex items-start gap-4">
          <span aria-hidden="true" className="pt-0.5 text-accent">
            —
          </span>
          <span className="text-base text-light-secondary">{bulletPoint}</span>
        </li>
      ))}
    </ul>
  );
}
