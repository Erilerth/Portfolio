'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex h-16 items-center justify-between px-4 md:px-6'>
      <Link href='/' className='text-lg font-bold' prefetch={false}>
        <h1>Tony</h1>
      </Link>
      <nav className='flex items-center gap-4 sm:gap-6'>
        <Link
          href='#about'
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}>
          About
        </Link>
        <Link
          href='#works'
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}>
          Works
        </Link>
      </nav>
    </header>
  );
}
