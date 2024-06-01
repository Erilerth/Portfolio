import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface CardType {
  image: string;
  alt: string;
  name: string;
  slug: string;
  desc: string;
  tag: string;
}

export default function WorksCard({
  image,
  alt,
  name,
  slug,
  desc,
  tag,
}: CardType) {
  return (
    <div className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'>
      <Link
        href={`/projects/${slug}`}
        className='absolute inset-0 z-10'
        prefetch={false}>
        <span className='sr-only'>View {name}</span>
      </Link>
      <Image
        src={image}
        alt={alt}
        width={600}
        height={400}
        className='object-cover w-full h-64 group-hover:opacity-50 transition-opacity'
      />
      <div className='absolute top-4 left-4 bg-gray-900 text-white px-2 py-1 rounded text-xs'>
        {tag}
      </div>
      <div className='bg-white p-4 dark:bg-gray-950'>
        <h3 className='font-bold text-xl'>{name}</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>{desc}</p>
        <div className='flex items-center justify-between mt-4'>
          <div className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2'>
            <GlobeIcon className='w-4 h-4' />
            Live
          </div>
          <div className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-2'>
            <CodeIcon className='w-4 h-4' />
            Source
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeIcon(props: any) {
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
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  );
}

function GlobeIcon(props: any) {
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
      <circle cx='12' cy='12' r='10' />
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
      <path d='M2 12h20' />
    </svg>
  );
}
