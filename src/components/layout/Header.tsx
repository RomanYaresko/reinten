import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center bg-dark-primary p-8 border-b border-solid border-dark-secondary">
      <div className="w-full max-w-244 flex justify-between text-sm tracking-widest font-code">
        <Link href="/" className="text-light-primary ">
          REINTEN TECH
        </Link>
        <Link href="/" className="text-light-secondary hover:text-light-primary duration-300">
          ← All work
        </Link>
      </div>
    </header>
  );
}
