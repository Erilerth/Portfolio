'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='flex justify-end'>
      <ul className='flex gap-5 mr-5'>
        <Link href='https://github.com/Erilerth'>
          <li>Github</li>
        </Link>
        <Link href='mailto:tony.therlier@gmail.com'>
          <li>Email</li>
        </Link>
      </ul>
    </footer>
  );
}
