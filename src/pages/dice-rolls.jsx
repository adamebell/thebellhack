import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import RulesContent from '@/components/RulesContent';
import Seo from '@/components/Seo';



export default function SheetsPage({ data }) {
  return (
    <Layout>
      <Seo templateTitle='Dice Rolls' description='Rolling Dice in the Bell Hack'/>
        <section className='bg-cyan-100'>
          <div className='layout min-h-screen py-20 text-dark'>
            <Header pageTitle='Dice Rolls' nextPageText='Stats, Health, Defeat, and Recovery' nextPageURL='stats-health-defeat-recovery'/>
            <RulesContent data={data}/>
          </div>
        </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sheet = await getSheetData("Dice Rolls");
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}