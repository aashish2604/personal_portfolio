import Link from 'next/link';

import { MagneticButton } from '@/components';
import { Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Get in touch to brainstorm software systems, AI products, and production-ready engineering solutions.',
};

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background px-8 pb-24 pt-32 text-foreground'>
        <section className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
          <div>
            <p className='mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground'>
              Contact
            </p>
            <h1 className='text-[clamp(3rem,9vw,7rem)] leading-none'>
              Let&apos;s build something ambitious together.
            </h1>
            <p className='mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
              I&apos;m always open to brainstorming ambitious software products,
              AI infrastructure, developer tooling, and high-leverage systems
              that need both architectural thinking and fast execution.
            </p>
          </div>

          <div className='space-y-6 rounded-3xl border border-border/60 p-8'>
            <div>
              <p className='text-sm uppercase tracking-[0.2em] text-muted-foreground'>
                Email
              </p>
              <a className='mt-2 block text-2xl' href='mailto:singh.aashish2604@gmail.com'>
                singh.aashish2604@gmail.com
              </a>
            </div>
            <div>
              <p className='text-sm uppercase tracking-[0.2em] text-muted-foreground'>
                Phone
              </p>
              <a className='mt-2 block text-2xl' href='tel:+919199892122'>
                +91 91998 92122
              </a>
            </div>
            <div className='pt-4'>
              <Link href='/work'>
                <MagneticButton variant='primary' size='md'>
                  Browse work
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
