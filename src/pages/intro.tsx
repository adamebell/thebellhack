import clsx from 'clsx';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';


type Color = (typeof colorList)[number];

export default function ComponentsPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color, setColor] = React.useState<Color>('sky');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <Layout>
      <Seo
        templateTitle='Intro'
        description='About the Bell Hack'
      />

      <main>
        <section
          className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white', color)}
        >
          <div
            className={clsx(
              'layout min-h-screen py-20',
              mode === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            <h1>About the Bell Hack</h1>

            
            <div className='flex flex-wrap gap-5 content-center'>
              <ArrowLink direction='left' className='mt-2' href='/'>
                Back to Home
              </ArrowLink>
              <ArrowLink direction='right' className='mt-2' href='/'>
                Core Rules
              </ArrowLink>
            </div>

            <ol className='mt-8 space-y-6'>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>About the Game</h2>
                <p className={clsx('!mt-1 text-sm', textColor)}>
                  intro
                </p>
              </li>
              <li className='space-y-2'>
                <h2 className='text-lg md:text-xl'>Fantasy Roleplaying</h2>
                <p className={clsx('!mt-1 text-sm', textColor)}>
                  it's fun. you get to be a funny little guy and roll dice.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const colorList = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const;
