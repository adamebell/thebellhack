import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import RulesContent from '@/components/RulesContent';
import Seo from '@/components/Seo';



export default function SheetsPage({ data }) {
  return (
    <Layout>
      <Seo templateTitle='Character Creation' description='Character Creation'/>
      <section className='bg-cyan-100'>
          <div className='layout min-h-screen py-20 text-dark'>
            <Header pageTitle='Character Creation' nextPageText='Dice Rolls' nextPageURL='dice-rolls'/>
            <ArrowLink direction='right' className='mt-2' href='/character-roles'>View Character Roles</ArrowLink>
            <RulesContent data={data}/>
          </div>
        </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sheet = await getSheetData("Character Creation");
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}