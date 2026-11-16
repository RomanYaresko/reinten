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
    <div className="w-full border border-dark-secondary bg-dark-primary">
      <div className={`grid grid-cols-1 md:grid-cols-${items.length}`}>
        {items.map((item, itemIndex) => (
          <div
            key={item.id}
            className={
              itemIndex < items.length - 1 ? 'border-0 md:border-r border-dark-secondary' : ''
            }
          >
            <div className="py-8 px-12 border-b border-dark-secondary bg-dark-secondary/20">
              <h2 className="mb-2 text-2xl font-bold text-light-primary">{item.title}</h2>
              <p className="text-sm text-light-secondary">{item.description}</p>
            </div>
            {item.children.map((itemChild, itemChildIndex) => (
              <div
                key={itemChild.id}
                className={[
                  'py-8 px-12',
                  itemChildIndex < item.children.length - 1 ? 'border-b border-dark-secondary' : '',
                ].join(' ')}
              >
                <h2 className="mb-2 text-base font-bold text-light-primary">{itemChild.title}</h2>
                <p className="text-sm text-light-secondary">{itemChild.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
