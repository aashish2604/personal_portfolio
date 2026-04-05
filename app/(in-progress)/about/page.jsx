import Link from 'next/link';

import { MagneticButton } from '@/components';
import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About',
  description:
    'Identifying bottlenecks, architecting solutions, and delivering at scale.',
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
              Identifying bottlenecks, architecting solutions, and delivering at scale.
            </h1>
          </div>

          <div className='space-y-6 text-lg leading-relaxed text-muted-foreground'>
            <p>
              I work at the intersection of software engineering, AI systems,
              and product execution. My strength lies in breaking down difficult
              technical bottlenecks, designing reliable architectures, and then
              moving quickly enough to turn those systems into working products.
            </p>
            <p>
              From internships and hackathon wins to open-source maintenance and
              production work at Adobe, my path has been shaped by a bias toward
              shipping useful software with depth, speed, and long-term
              maintainability.
            </p>
            <p>
              I am especially interested in AI-native developer tooling,
              systems architecture, automation infrastructure, and building
              products that remove friction for both users and engineering
              teams.
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
