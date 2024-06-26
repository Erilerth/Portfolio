'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className='flex justify-end'>
      <ul className='flex gap-2 mr-5'>
        <li className='text-gray-400'>
          <Link href='https://github.com/Erilerth'>
            <Button variant='ghost'>Github</Button>
          </Link>
        </li>
        <li className='text-gray-400'>
          <Link href='mailto:tony.therlier@gmail.com'>
            <Button variant='ghost'>Email</Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
