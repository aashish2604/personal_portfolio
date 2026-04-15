'use client';

import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { careerTimeline } from '@/data';

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !viewportRef.current || !trackRef.current) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      let distance = 0;

      const measure = () => {
        if (!viewportRef.current || !trackRef.current) return;
        distance = Math.max(
          trackRef.current.scrollWidth - viewportRef.current.clientWidth,
          0,
        );
      };

      const setProgress = (progress) => {
        gsap.set(trackRef.current, { x: -distance * progress });
      };

      measure();
      setProgress(0);

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${distance || window.innerHeight}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefreshInit: () => {
          measure();
          setProgress(0);
        },
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });

      const resizeObserver = new ResizeObserver(() => {
        measure();
        ScrollTrigger.refresh();
      });

      resizeObserver.observe(viewportRef.current);
      resizeObserver.observe(trackRef.current);

      return () => {
        resizeObserver.disconnect();
        trigger.kill();
        gsap.set(trackRef.current, { x: 0 });
      };
    });

    return () => mm.revert();
  }, []);

  const items = careerTimeline.map(({ year, title, description }, index) => {
    const isTop = index % 2 === 0;

    const cardContent = (
      <>
        <p className='text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm'>
          {year}
        </p>
        <h3 className='mt-1 text-[clamp(1.1rem,2vw,1.6rem)] leading-none'>
          {title}
        </h3>
        <p className='mt-1.5 max-w-md text-xs leading-5 text-muted-foreground md:mt-2'>
          {description}
        </p>
      </>
    );

    return (
      <li
        key={`${year}-${title}`}
        className='relative flex gap-4 pb-8 last:pb-0 md:grid md:w-[26rem] md:flex-none md:grid-rows-[1fr_auto_1fr] md:gap-0 md:pb-0 lg:w-[30rem]'
      >
        {/* Mobile connector — continuous vertical line + dot */}
        <div className='relative flex flex-col items-center md:hidden'>
          <div className='absolute inset-y-0 w-px bg-border' />
          <div className='relative mt-1.5 size-3 shrink-0 rounded-full border-2 border-background bg-foreground' />
        </div>

        {/* Mobile card */}
        <article className='flex-1 rounded-xl border border-border/70 bg-background p-3 shadow-sm md:hidden'>
          {cardContent}
        </article>

        {/* Desktop top card */}
        <article
          className={`hidden rounded-[1.75rem] border border-border/70 bg-background p-3 shadow-sm md:block lg:p-4 ${
            isTop ? 'mb-3 self-end' : 'invisible'
          }`}
          aria-hidden={!isTop}
        >
          {isTop ? cardContent : null}
        </article>

        {/* Desktop connector — horizontal line + dot */}
        <div className='relative hidden h-12 items-center justify-center md:flex'>
          <div className='absolute inset-x-0 h-px bg-border' />
          <div
            className={`absolute left-1/2 h-6 w-px -translate-x-1/2 bg-border ${
              isTop ? 'bottom-1/2' : 'top-1/2'
            }`}
          />
          <div className='relative z-10 size-4 rounded-full border-[3px] border-background bg-foreground' />
        </div>

        {/* Desktop bottom card */}
        <article
          className={`hidden rounded-[1.75rem] border border-border/70 bg-background p-3 shadow-sm md:block lg:p-4 ${
            isTop ? 'invisible' : 'mt-3 self-start'
          }`}
          aria-hidden={isTop}
        >
          {!isTop ? cardContent : null}
        </article>
      </li>
    );
  });

  return (
    <section ref={sectionRef} className='mt-16 bg-background py-4 md:mt-28 md:py-6'>
      <div className='container'>
        <div className='mb-4 max-w-3xl md:mb-6'>
          <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm'>
            Career Tree
          </p>
          <h2 className='mt-3 text-[clamp(2rem,5vw,4rem)] leading-none md:mt-4'>
            Milestones that shaped my path in software.
          </h2>
          <p className='mt-2 text-sm leading-6 text-muted-foreground md:mt-3 md:text-base md:leading-7'>
            Scroll through the defining moments across academics, internships,
            open source, hackathons, Adobe, and my current product journey.
          </p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className='md:overflow-hidden'
        style={{ paddingInline: 'max(1rem, calc((100vw - 1400px) / 2 + 1rem))' }}
      >
        <ol
          ref={trackRef}
          className='flex flex-col gap-0 px-4 md:min-w-max md:flex-row md:items-stretch md:gap-8 md:px-0 md:pe-[35vw] md:will-change-transform lg:gap-10'
        >
          {items}
        </ol>
      </div>
    </section>
  );
}
