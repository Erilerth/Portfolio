'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const param = usePathname();
  return (
    <header className='flex h-16 items-center justify-between px-4 sticky top-0 bg-inherit md:px-6 z-[999]'>
      <Link href='/' className='text-lg font-bold' prefetch={false}>
        <h1>Tony</h1>
      </Link>
      <nav className='flex items-center gap-4 sm:gap-6'>
        <Link
          href={param === '/' ? '#about' : '/#about'}
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}>
          About
        </Link>
        <Link
          href={param === '/' ? '#works' : '/#works'}
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}>
          Works
        </Link>
      </nav>
    </header>
  );
}
