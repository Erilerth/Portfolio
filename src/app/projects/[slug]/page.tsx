'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  const param = useParams();
  console.log(param.slug);
  return (
    <main className='h-[calc(100vh-64px-40px)] w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6'>
      <div className='grid md:grid-cols-2 gap-6 lg:gap-12'>
        <div className='rounded-lg overflow-hidden'>
          <Image
            src='/placeholder.svg'
            alt='Project Screenshot'
            width={800}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='space-y-6'>
          <div>
            <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
              Project Name
            </h1>
            <p className='text-gray-500 dark:text-gray-400 mt-2 text-lg'>
              A brief description of the project and what it does.
            </p>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <LinkIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <Link
                href='#'
                className='text-primary hover:underline'
                prefetch={false}>
                Live App
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <GithubIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
              <Link
                href='#'
                className='text-primary hover:underline'
                prefetch={false}>
                Source Code
              </Link>
            </div>
          </div>
          <div className='prose dark:prose-invert'>
            <p>
              A more detailed description of the project, including the
              technologies used, the features, and any other relevant
              information.
            </p>
            <p>
              You can also include any additional details or context about the
              project, such as the motivation behind it, the challenges you
              faced, or the lessons you learned.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
      <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
    </svg>
  );
}
