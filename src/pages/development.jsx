import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import RulesContent from '@/components/RulesContent';
import Seo from '@/components/Seo';


export default function SheetsPage({ data }) {
  return (
    <Layout>
      <Seo templateTitle='Development Log' description='Developing the Bell Hack'/>
      <section className='bg-cyan-100'>
          <div className='layout min-h-screen py-20 text-dark'>
            <Header pageTitle='Development Log' nextPageText='Character Creation' nextPageURL='character-creation'/>
            <RulesContent data={data}/>
          </div>
        </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sheet = await getSheetData("Development");
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}