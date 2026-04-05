import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { projectPages } from '@/data';
import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Work() {
  const items = projectPages.map((project) => (
    <Link
      key={project.slug}
      href={project.href}
      className='group flex flex-col gap-6 rounded-3xl border border-border/60 p-5 transition-transform duration-300 ease-in-expo hover:-translate-y-1'
    >
      <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted'>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill={true}
          sizes='(max-width: 1024px) 100vw, 50vw'
          className='object-cover transition-transform duration-500 ease-in-expo group-hover:scale-105'
        />
      </div>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <h2 className='text-3xl'>{project.title}</h2>
          <p className='mt-3 max-w-xl text-muted-foreground'>
            {project.summary}
          </p>
        </div>
        <span className='pt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground'>
          Open
        </span>
      </div>
    </Link>
  ));

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-8 pb-24 pt-32 text-foreground'>
        <section className='mx-auto max-w-6xl'>
          <div className='mb-14 flex flex-col gap-6 lg:max-w-3xl'>
            <p className='text-sm uppercase tracking-[0.3em] text-muted-foreground'>
              Selected work
            </p>
            <h1 className='text-[clamp(3rem,9vw,7rem)] leading-none'>Work</h1>
            <p className='text-lg leading-relaxed text-muted-foreground'>
              A lightweight overview of the linked project routes in this
              template so every visible entry point has a working destination.
            </p>
            <div>
              <Link href='/contact'>
                <MagneticButton variant='primary' size='md'>
                  Let&apos;s talk
                </MagneticButton>
              </Link>
            </div>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>{items}</div>
        </section>
      </main>
    </Transition>
  );
}
