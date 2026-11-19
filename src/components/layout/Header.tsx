'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-center bg-dark-primary p-8 border-b border-dark-subtle">
      <div className="w-full max-w-244 flex justify-between text-[13px] tracking-widest font-code">
        <Link href="/" className="text-light-primary ">
          REINTEN TECH
        </Link>
        {pathname !== '/' && (
          <Link href="/" className="text-light-tertiary hover:text-light-primary duration-300">
            ← All work
          </Link>
        )}
      </div>
    </header>
  );
}
