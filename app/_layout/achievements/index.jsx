'use client';

import { achievements } from '@/data';

export function Achievements() {
  const items = achievements.map(({ value, label, detail }) => (
    <article
      key={label}
      className='rounded-[2rem] border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-transform duration-300 ease-in-expo hover:-translate-y-1'
    >
      <p className='text-[clamp(2.5rem,7vw,5rem)] leading-none'>{value}</p>
      <h3 className='mt-4 text-xl'>{label}</h3>
      <p className='mt-3 max-w-sm text-sm leading-7 text-muted-foreground'>
        {detail}
      </p>
    </article>
  ));

  return (
    <section className='container mt-28'>
      <div className='rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-card via-background to-muted/40 px-6 py-10 lg:px-10 lg:py-14'>
        <div className='mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-sm uppercase tracking-[0.3em] text-muted-foreground'>
              Achievements
            </p>
            <h2 className='mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-none'>
              Tangible momentum behind the craft.
            </h2>
          </div>
          <p className='max-w-xl text-base leading-7 text-muted-foreground'>
            A quick snapshot of scale, consistency, and the kind of work this
            portfolio is designed to represent.
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>{items}</div>
      </div>
    </section>
  );
}
