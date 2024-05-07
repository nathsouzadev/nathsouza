'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { useContactModal } from '@/hooks/contact-model';
import { Github } from 'lucide-react';

export const LandingNavBar = () => {
  const proModal = useContactModal();

  return (
    <div className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-8 w-8 mr-4'>
          <Image alt='Logo' fill src='/logo.png' />
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href='https://github.com/nathsouzadev' target='_blank' className='flex w-full justify-end'>
          <Button
            variant='outline'
            className='rounded-full flex justify-center items-center gap-x-1'
            onClick={proModal.onOpen}
          >
            <Github /> Github
          </Button>
        </Link>
      </div>
    </div>
  );
};
