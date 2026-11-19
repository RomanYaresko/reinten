export interface TableItem {
  id: number;
  title: string;
  description: string;
  children: TableItem[];
}

type TableProps = Readonly<{
  items: TableItem[];
}>;

export default function Table({ items }: TableProps) {
  return (
    <div className="w-full border border-dark-subtle bg-dark-primary">
      <div className={`grid grid-cols-1 md:grid-cols-${items.length}`}>
        {items.map((item, itemIndex) => (
          <div
            key={item.id}
            className={
              itemIndex < items.length - 1 ? 'border-0 md:border-r border-dark-subtle' : ''
            }
          >
            <div className="flex flex-col gap-2 py-8 px-12 border-b border-dark-subtle bg-dark-tertiary">
              <h2 className="mb-2 text-[26px]/[1] font-bold text-light-primary">{item.title}</h2>
              <p className="text-[15px]/[1] text-light-tertiary">{item.description}</p>
            </div>
            {item.children.map((itemChild, itemChildIndex) => (
              <div
                key={itemChild.id}
                className={[
                  'flex flex-col gap-2 py-8 px-12',
                  itemChildIndex < item.children.length - 1 ? 'border-b border-dark-subtle' : '',
                ].join(' ')}
              >
                <h2 className="mb-2 text-[17px]/[1] font-bold text-light-primary">
                  {itemChild.title}
                </h2>
                <p className="text-[15px]/[1] text-light-tertiary">{itemChild.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
