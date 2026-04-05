import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { MagneticButton } from '@/components';
import { projectPages } from '@/data';
import { Navbar, Transition } from '@/layout';

export function generateStaticParams() {
  return projectPages.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projectPages.find(({ slug }) => slug === params.slug);

  if (!project) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }) {
  const project = projectPages.find(({ slug }) => slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-8 pb-24 pt-32 text-foreground'>
        <section className='mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center'>
          <div className='flex-1'>
            <p className='mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground'>
              {project.category}
            </p>
            <h1 className='mb-6 text-[clamp(3rem,9vw,7rem)] leading-none'>
              {project.title}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              {project.summary}
            </p>
            <p className='mt-6 max-w-2xl text-base leading-8'>
              {project.description}
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <a href={project.externalUrl} target='_blank' rel='noopener noreferrer'>
                <MagneticButton variant='primary' size='md'>
                  Open project
                </MagneticButton>
              </a>
              <Link href='/contact'>
                <MagneticButton variant='outline' size='md'>
                  Let&apos;s brainstorm
                </MagneticButton>
              </Link>
            </div>
          </div>

          <div className='relative aspect-square w-full overflow-hidden rounded-3xl bg-muted lg:max-w-xl'>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill={true}
              sizes='(max-width: 1024px) 100vw, 40vw'
              className='object-cover'
              priority={true}
            />
          </div>
        </section>
      </main>
    </Transition>
  );
}
