import Link from 'next/link';

import { MagneticButton } from '@/components';
import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-8 pb-24 pt-32 text-foreground'>
        <section className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <p className='mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground'>
              About
            </p>
            <h1 className='text-[clamp(3rem,9vw,7rem)] leading-none'>
              Design, code, and interaction working together.
            </h1>
          </div>

          <div className='space-y-6 text-lg leading-relaxed text-muted-foreground'>
            <p>
              This page is now a valid route instead of a placeholder dead end.
              It gives the navigation an intentional landing point and keeps the
              tone of the site aligned with the homepage.
            </p>
            <p>
              The template centers on thoughtful motion, sharp typography, and a
              portfolio structure that can be expanded into a fuller personal or
              studio site over time.
            </p>
            <div className='pt-4'>
              <Link href='/work'>
                <MagneticButton variant='outline' size='md'>
                  View work
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
