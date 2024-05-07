'use client';

import { useContactModal } from '@/hooks/contact-model';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const socials = [
  {
    label: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nathsouza/',
    color: 'text-blue-600',
  },
  {
    label: 'github',
    icon: Github,
    href: 'https://github.com/nathsouzadev',
    color: 'text-white-500',
  },
  {
    label: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com/nathsouzadev',
    color: 'text-violet-500',
  },
  {
    label: 'twitter',
    icon: Twitter,
    href: 'https://twitter.com/nathsouzadev',
    color: 'text-blue-300',
  }
]

export const ProModal = () => {
  const proModal = useContactModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className='bg-[#111827] text-muted-foreground border-black/5'>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              Contact me
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {socials.map(social => (
              <Card 
                key={social.href}
                className='p-3 border-black/5 bg-[#293B61] text-zinc-400 flex items-center justify-between'
              >
                <Link href={social.href} target='_blank' className={cn('flex w-full cursor-pointer rounded-lg')}>
                  <div className='p-2 w-ft rounded-md flex items-center flex-1'>
                    <social.icon className='w-6 h-6 mr-2' />
                    <div className='font-semibold text-sm'>
                      {social.label}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
};
