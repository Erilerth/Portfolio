'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CiMenuBurger } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='container flex justify-between pt-5 sticky'>
      <Link href='/'>
        <h1>Tony</h1>
      </Link>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CiMenuBurger />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href='/'>Works</Link>
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
