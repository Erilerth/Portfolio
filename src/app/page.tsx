'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Projects from '@/data/projectsData.json';
import WorksCard from '@/components/WorksCard/WorksCard';

export default function page() {
  console.log(Projects);
  return (
    <main className='container'>
      <section
        className='h-[calc(100vh-64px)] flex flex-col justify-between'
        id='introduction'>
        <article className='flex-grow flex flex-col items-center justify-center text-3xl text-left'>
          <h2>Tony THERLIER</h2>
          <h2>Web developer</h2>
        </article>
        <article className='self-start text-right'>
          <Button variant='ghost' asChild className='mr-1'>
            <Link href='https://github.com/Erilerth'>
              <p className='sr-only'>github</p>
              <FaGithub />
            </Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href='mailto:tony.therlier@gmail.com'>Mail</Link>
          </Button>
        </article>
      </section>
      <section id='works' className='mt-6'>
        <h2 className='text-2xl'>Works</h2>
        <section className='mt-5'>
          {Projects.map((rule, id) => {
            return (
              <WorksCard
                key={id}
                image={rule.image}
                alt={rule.alt}
                name={rule.name}
                tags={rule.tags}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}
