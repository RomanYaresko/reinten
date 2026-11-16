type TextBlocksProps = Readonly<{
  title: string;
  list: string[];
}>;

export default function TextBlocks({ title, list }: TextBlocksProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-code text-sm text-light-primary">{title}</h3>
      <ul className="flex flex-wrap gap-4">
        {list.map((item) => (
          <li
            key={item}
            className="border border-dark-secondary px-4 py-2 font-code text-sm text-light-secondary text-code"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
