type TextBlocksProps = Readonly<{
  title: string;
  list: string[];
}>;

export default function TextBlocks({ title, list }: TextBlocksProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-code text-[13px]/[1] text-light-tertiary">{title}</h3>
      <ul className="flex flex-wrap gap-4">
        {list.map((item) => (
          <li
            key={item}
            className="border border-dark-subtle px-4 py-2 font-code text-[12px]/[1] text-light-tertiary text-code"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
