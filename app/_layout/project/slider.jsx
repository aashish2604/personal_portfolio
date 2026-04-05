'use client';

import Image from 'next/image';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {string} props.source
 */
export function ProjectSlider({ source }) {
  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      <Image
        src={source}
        className='object-cover'
        fill={true}
        sizes='(max-width: 768px) 150px, 25vw'
        alt='Project preview'
      />
    </Center>
  );
}
