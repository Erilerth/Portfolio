'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className='flex justify-end'>
      <ul className='flex gap-2 mr-5'>
        <Button variant='ghost'>
          <Link href='https://github.com/Erilerth'>
            <li>Github</li>
          </Link>
        </Button>
        <Button variant='ghost'>
          <Link href='mailto:tony.therlier@gmail.com'>
            <li>Email</li>
          </Link>
        </Button>
      </ul>
    </footer>
  );
}
