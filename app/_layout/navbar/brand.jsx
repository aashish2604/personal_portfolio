'use client';

import { Copyright } from 'lucide-react';
import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link href='/' className='group flex cursor-pointer pb-5'>
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright />
      </div>

      <div className='ms-2 flex overflow-hidden whitespace-nowrap'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:translate-x-1'>
          Coded by Aashish
        </h5>
      </div>
    </Link>
  );
}
