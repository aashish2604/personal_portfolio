'use client';

import { achievements } from '@/data';

export function Achievements() {
  const duplicatedAchievements = [...achievements, ...achievements];
  const cards = duplicatedAchievements.map(({ value, label, detail }, index) => (
    <article
      key={`${label}-${index}`}
      className='w-80 flex-none rounded-[2rem] border border-border/70 bg-card/40 p-6 backdrop-blur-sm'
    >
      <p className='text-[clamp(2rem,5vw,3rem)] leading-none'>{value}</p>
      <h3 className='mt-4 text-lg'>{label}</h3>
      <p className='mt-3 text-sm leading-7 text-muted-foreground'>{detail}</p>
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
              Milestones earned through execution.
            </h2>
          </div>
          <p className='max-w-xl text-base leading-7 text-muted-foreground'>
            A rolling snapshot of competitive wins, academic milestones,
            open-source maintenance, and high-leverage engineering outcomes.
          </p>
        </div>

        <div className='overflow-hidden'>
          <div className='achievements-marquee flex min-w-max gap-5 pe-5'>
            {cards}
          </div>
        </div>
      </div>
    </section>
  );
}
