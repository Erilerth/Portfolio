'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Projects from '@/data/projectsData.json';
import WorksCard from '@/components/WorksCard/WorksCard';
import About from '@/data/about.json';
import AboutCheck from '@/components/AboutCheck/AboutCheck';

export default function page() {
  const skills = About.skills.split(', ');
  const formations = About.Formations.split(', ');

  Projects.sort((a, b) => b.id - a.id);

  return (
    <main className='container'>
      <section
        className='h-[calc(100vh-64px)] flex flex-col justify-between'
        id='introduction'>
        <article className='flex-grow flex flex-col items-center justify-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          <h2>Tony THERLIER</h2>
          <h2>Web Integrator</h2>
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

      <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6'>
          <div className='mx-auto max-w-3xl space-y-6'>
            <article className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                A propos
              </h2>
              <p className='text-gray-500 md:text-xl dark:text-gray-400'>
                Bonjour, je m&apos;appelle Tony. Je suis intégrateur web.
                J&apos;ai une connaissance approfondie des frameworks et
                bibliothèques JavaScript modernes et je suis toujours désireux
                d&apos;apprendre et d&apos;explorer de nouveaux outils et
                techniques pour améliorer mes compétences.
              </p>
            </article>
            <div className='grid gap-4 sm:grid-cols-2'>
              <article className='space-y-2'>
                <h3 className='text-xl font-bold'>Compétences clé</h3>
                <ul className='space-y-1 text-gray-500 dark:text-gray-400'>
                  {skills.map((rule, id) => {
                    return <AboutCheck key={id} name={rule} />;
                  })}
                </ul>
              </article>
              <article className='space-y-2'>
                <h3 className='text-xl font-bold'>Formations</h3>
                <ul className='space-y-1 text-gray-500 dark:text-gray-400'>
                  {formations.map((rule, id) => {
                    return <AboutCheck key={id} name={rule} />;
                  })}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id='works' className='w-full py-12 md:py-24 lg:py-32'>
        <div className='grid gap-8 px-4 md:px-6'>
          <article className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Mes Projets
              </h2>
              <p className='max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                Ici est une présentation des projets sur lesquels j&apos;ai
                travaillé. Cliqué sur les cartes pour plus d&apos;information
                relative aux projets
              </p>
            </div>
          </article>
          <article className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {Projects.map((rule, id) => {
              return (
                <WorksCard
                  key={id}
                  image={rule.image}
                  alt={rule.alt}
                  name={rule.name}
                  slug={rule.slug}
                  desc={rule['desc-short']}
                  tag={rule.language}
                  link={rule.Live}
                />
              );
            })}
          </article>
        </div>
      </section>
    </main>
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
