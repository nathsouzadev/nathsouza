'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Github, Monitor } from 'lucide-react';

export const LandingContent = () => {
  const projects = [
    {
      name: 'AI chatbot and code generator',
      description:
        'A chatbot that helps you generate code snippets for your projects.',
      url: 'https://ai-demo-live.vercel.app/dashboard',
      repo: 'https://github.com/nathsouzadev/ai-demo-live'
    },
    {
      name: 'Whats4Social',
      description: 'Integration to create post from WhatsApp to social media.',
      url: 'https://w4s.betteruptime.com',
      repo: 'https://github.com/nathsouzadev/whats4social'
    },
  ];

  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Self projects
      </h2>
      <div className='grid sm: grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((project) => (
          <Card
            key={project.description}
            className='bg-[#192339] border-none text-white'
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <Link href='/'>
                    <p className='text-lg ml-1'> {project.name} </p>
                  </Link>

                  <div className='flex items-center gap-x-2'>
                    <Link href={project.repo} target='_blank' className='flex justify-end'>
                      <Button className='rounded-full flex justify-center items-center gap-x-1'>
                        <Github /> Github
                      </Button>
                    </Link>

                    <Link href={project.url} target='_blank' className='flex justify-end'>
                      <Button className='rounded-full flex justify-center items-center gap-x-1' variant='premium'>
                        <Monitor /> Live
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                <p className='mb-5'>{project.description}</p>
              </CardContent>
              <iframe src={project.url} height='600' className='rounded-md'></iframe>
            </CardHeader>
          </Card>
        ))}
      </div>

    </div>
  );
};
