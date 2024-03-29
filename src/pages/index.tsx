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
        <section className='bg-dark text-white'>
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
            <p className='mt-2 text-sm w-3/5'>
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
              <ButtonLink className='mt-6' href='/character-creation' variant='light'>
                Character Creation
              </ButtonLink>
              <ButtonLink className='mt-6' href='/dice-rolls' variant='light'>
                Dice Rolls
              </ButtonLink>
              <ButtonLink className='mt-6' href='/character-roles' variant='light'>
                Character Roles
              </ButtonLink>
            </div>
            <div className=' flex flex-wrap gap-2'>
              <ButtonLink className='mt-2' href='/stats-health-defeat-recovery' variant='light'>
                Stats, Health, Defeat, and Recovery
              </ButtonLink>
              <ButtonLink className='mt-2' href='/turn-based-play' variant='light'>
                Turn Based Play
              </ButtonLink>
            </div>
            <footer className='absolute bottom-2 text-white'>
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
