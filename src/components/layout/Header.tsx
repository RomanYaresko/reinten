import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center bg-dark-primary p-8 border-b border-solid border-dark-secondary">
      <div className="w-full max-w-244 flex justify-between text-light-primary text-sm tracking-widest font-code">
        <Link href="/">REINTEN TECH</Link>
        <Link href="/">← All work</Link>
      </div>
    </header>
  );
}
