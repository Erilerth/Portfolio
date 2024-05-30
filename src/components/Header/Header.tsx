'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMenu } from 'react-icons/io5';

export default function Header() {
  return (
    <header className='container flex justify-between py-5 sticky top-0 bg-inherit z-50'>
      <Link href='/'>
        <h1>Tony</h1>
      </Link>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <p className='sr-only'>menu</p>
            <IoMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href='#works'>Works</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/'>About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/'>Skills</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
