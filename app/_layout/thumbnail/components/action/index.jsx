import Link from 'next/link';

import { Center, MagneticButton } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailAction({ children }) {
  return (
    <Center>
      <Link
        href='https://github.com/aashish2604'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MagneticButton
          variant='outline'
          className='px-10 py-8 text-base before:-top-1/2 hover:text-background'
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}
