'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='px-4 pb-4 pt-8 sm:px-8 md:px-12 md:pt-10'>
      <div className='flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-5'>
        <div className='flex gap-4 sm:gap-8'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>2026 © Edition</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-7'>
              <time>IST</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex flex-wrap gap-4 sm:gap-8'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
