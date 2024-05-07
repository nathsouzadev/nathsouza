'use client';

import TypewriterComponent from 'typewriter-effect';
import { Button } from './ui/button';
import { useContactModal } from '@/hooks/contact-model';
import Image from 'next/image';

export const LandingHero = () => {
  const proModal = useContactModal();

  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>Nathally Souza</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: [
                'Typescript',
                'Javascript',
                'Clojure',
                'Python',
                'AWS',
                'Github',
                'Fullstack',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <div className='relative h-32 w-32 mr-4'>
          <Image alt='Logo' fill src='/nu.svg' />
        </div>
        <div className='relative h-32 w-32 mr-4'>
          <Image alt='Logo' fill src='/tw.svg' />
        </div>
        <div className='relative h-32 w-32 mr-4'>
          <Image alt='Logo' fill src='/ge.svg' />
        </div>
        <div className='relative h-32 w-32 mr-4'>
          <Image alt='Logo' fill src='/g1.svg' />
        </div>
      </div>
      <div className='text-sm md:text-xl font-light text-zinc-400'>
        Software engineer, consultant, journalist and speaker.
      </div>
      <div>
        <Button
          variant='premium'
          className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
          onClick={proModal.onOpen}
        >
          Contact me
        </Button>
      </div>
      <div className='text-zinc-400 font-normal'>
        When education is not liberating, the oppressed dream is to be the
        oppressor - Paulo Freire
      </div>
    </div>
  );
};
