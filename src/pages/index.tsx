import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */


export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <NextImage
                  useSkeleton
                  className='w-5/6'
                  src='/images/banner.jpg'
                  width='1200'
                  height='630'
                  alt='Icon'
                />
            <h1 className='mt-4'>
              The Bell Hack Beta SRD
            </h1>
            <p className='mt-2 text-sm w-3/5 text-gray-800'>
              This is a beta ruleset for your new favorite fantasy adventure RPG. 
              The game is playable as-is, but I'll be developing the rules, content, 
              and setting as my playtesting continues. Check out the {' '}
              <UnderlineLink href='/development'>Development Page</UnderlineLink>{' '}
              for more information on the current and future state of the game.
            </p>
            <div className='!mt-4 flex flex-wrap gap-2'>
              <ButtonLink className='mt-6' href='/intro' variant='light'>
                Intro
              </ButtonLink>
              <ButtonLink className='mt-6' href='/core-rules' variant='light'>
                Core Rules
              </ButtonLink>
              <ButtonLink className='mt-6' href='/character-creation' variant='light'>
                Character Creation
              </ButtonLink>
              <ButtonLink className='mt-6' href='/setting' variant='light'>
                Setting
              </ButtonLink>
            </div>
            <div className=' flex flex-wrap gap-2'>
              <ButtonLink className='mt-2' href='/initiative' variant='light'>
                Initiative
              </ButtonLink>
              <ButtonLink className='mt-2' href='/gm-stuff' variant='light'>
                GM Stuff
              </ButtonLink>
              <ButtonLink className='mt-2' href='/campaign-play' variant='light'>
                Campaign Play
              </ButtonLink>
              <ButtonLink className='mt-2' href='/play-materials' variant='light'>
                Play Materials
              </ButtonLink>
            </div>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://adamebell.games'>
                Adam Bell
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
