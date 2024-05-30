import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface CardType {
  image: string;
  alt: string;
  name: string;
  tags: string;
}

export default function WorksCard({ image, alt, name, tags }: CardType) {
  const tagList = tags.split(', ');

  return (
    <Link href='/' className='inline-block'>
      <figure>
        <div className='overflow-hidden'>
          <Image
            priority={false}
            src={image}
            alt={alt}
            width={352}
            height={600}
            className='object-cover w-card h-card opacity-75 transition ease-in-out hover:opacity-100 hover:scale-110 duration-300'
          />
        </div>
        <figcaption className='text-3xl'>{name}</figcaption>
        {tagList.map((tag, index) => (
          <Badge key={index} className='mr-1'>
            {tag}
          </Badge>
        ))}
      </figure>
    </Link>
  );
}
