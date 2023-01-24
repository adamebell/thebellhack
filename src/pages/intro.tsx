import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import RulesContent from '@/components/RulesContent';
import Seo from '@/components/Seo';


type Color = (typeof colorList)[number];

export default function SheetsPage({ data }) {
  return (
    <Layout>
      <Seo templateTitle='Intro' description='About the Bell Hack'/>
        <section className='bg-dark'>
          <div className='layout min-h-screen py-20 text-white'>
            <Header nextPageText='Core Rules' nextPageURL='core-rules'/>
            <RulesContent data={data}/>
          </div>
        </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sheet = await getSheetData("Intro");
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}