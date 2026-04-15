'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  const outlinedTextStyle = {
    color: '#fff',
    WebkitTextStroke: '2px #000',
    paintOrder: 'stroke fill',
  };
  const heroTitleStyle = {
    color: '#fff',
    WebkitTextStroke: '3.5px #000',
    paintOrder: 'stroke fill',
  };

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* Mobile hero image */}
      <Image
        src='/images/hero/hero-mobile.jpeg'
        className='object-cover md:hidden'
        fill={true}
        sizes='100vw'
        priority={true}
        alt='Aashish Ranjan Singh hero portrait'
      />
      {/* Desktop hero image */}
      <Image
        src='/images/hero/hero.webp'
        className='hidden object-cover md:block md:scale-125 md:object-contain'
        fill={true}
        sizes='100vw'
        priority={true}
        alt='Aashish Ranjan Singh hero portrait'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1
            className='text-[max(4.5em,7.5vw)] leading-[0.9] text-white md:text-[max(9em,15vw)]'
            style={heroTitleStyle}
          >
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Aashish Ranjan Singh
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:mr-auto'>
          <div className='mx-6 text-black max-md:my-12 sm:mx-10 md:mx-36'>
            <div
              className='mb-4 text-white md:mb-20'
              style={outlinedTextStyle}
            >
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4
              className='text-[clamp(1.55em,2.5vw,2.75em)] text-white'
              style={outlinedTextStyle}
            >
              <span className='block'>Software Developer</span>
              <span className='block'>AI Enthusiast &amp;</span>
              <span className='block'>Systems Architect</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
