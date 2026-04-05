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

    const ctx = gsap.context(() => {
      let distance = 0;

      const measure = () => {
        if (!viewportRef.current || !trackRef.current) return;

        distance = Math.max(
          trackRef.current.scrollWidth - viewportRef.current.clientWidth,
          0,
        );
      };

      const setProgress = (progress) => {
        gsap.set(trackRef.current, {
          x: -distance * progress,
        });
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
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = careerTimeline.map(({ year, title, description }, index) => {
    const isTop = index % 2 === 0;

    return (
      <li
        key={`${year}-${title}`}
        className='relative grid w-[72vw] flex-none grid-rows-[1fr_auto_1fr] sm:w-[26rem] lg:w-[30rem]'
      >
        <article
          className={`rounded-[1.75rem] border border-border/70 bg-background p-5 shadow-sm ${
            isTop ? 'mb-6 self-end' : 'invisible'
          }`}
          aria-hidden={!isTop}
        >
          {isTop ? (
            <>
              <p className='text-sm uppercase tracking-[0.25em] text-muted-foreground'>
                {year}
              </p>
              <h3 className='mt-2 text-[clamp(1.4rem,2.4vw,2rem)] leading-none'>
                {title}
              </h3>
              <p className='mt-3 max-w-md text-sm leading-6 text-muted-foreground'>
                {description}
              </p>
            </>
          ) : null}
        </article>

        <div className='relative flex h-20 items-center justify-center'>
          <div className='absolute inset-x-0 h-px bg-border' />
          <div
            className={`absolute left-1/2 h-6 w-px -translate-x-1/2 bg-border ${
              isTop ? 'bottom-1/2' : 'top-1/2'
            }`}
          />
          <div className='relative z-10 size-4 rounded-full border-[3px] border-background bg-foreground' />
        </div>

        <article
          className={`rounded-[1.75rem] border border-border/70 bg-background p-5 shadow-sm ${
            isTop ? 'invisible' : 'mt-6 self-start'
          }`}
          aria-hidden={isTop}
        >
          {!isTop ? (
            <>
              <p className='text-sm uppercase tracking-[0.25em] text-muted-foreground'>
                {year}
              </p>
              <h3 className='mt-2 text-[clamp(1.4rem,2.4vw,2rem)] leading-none'>
                {title}
              </h3>
              <p className='mt-3 max-w-md text-sm leading-6 text-muted-foreground'>
                {description}
              </p>
            </>
          ) : null}
        </article>
      </li>
    );
  });

  return (
    <section ref={sectionRef} className='mt-28 bg-background py-10'>
      <div className='container'>
        <div className='mb-12 max-w-3xl'>
          <p className='text-sm uppercase tracking-[0.3em] text-muted-foreground'>
            Career Tree
          </p>
          <h2 className='mt-4 text-[clamp(2.75rem,6vw,5rem)] leading-none'>
            Milestones that shaped my path in software.
          </h2>
          <p className='mt-6 text-base leading-7 text-muted-foreground'>
            Scroll through the defining moments across academics, internships,
            open source, hackathons, Adobe, and my current product journey.
          </p>
        </div>
      </div>

      <div
        ref={viewportRef}
        className='overflow-hidden'
        style={{ paddingInline: 'max(1rem, calc((100vw - 1400px) / 2 + 1rem))' }}
      >
        <ol
          ref={trackRef}
          className='flex min-w-max items-stretch gap-8 pe-[35vw] will-change-transform lg:gap-10'
        >
          {items}
        </ol>
      </div>
    </section>
  );
}
