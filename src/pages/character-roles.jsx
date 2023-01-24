import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';
import ItemCard from '@/components/ItemCard'

export default function SheetsPage({ data }) {
  return (
    <Layout>
      <Seo
        templateTitle='Intro'
        description='About the Bell Hack'
      />

      <main>
        <section className='bg-dark'>
          <div className='layout min-h-screen py-20 text-white'>
            <h1>The Bell Hack</h1>
            <div className='flex flex-wrap gap-5 content-center'>
              <ArrowLink direction='left' className='mt-2' href='/'>
                Back to Home
              </ArrowLink>
              <ArrowLink direction='right' className='mt-2' href='/'>
                Core Rules
              </ArrowLink>
            </div>

            <div className='mt-8 space-y-6 w-3/4 grid-flow-col'>
              {data && data.length ? (
                data.map((item) => (
                  <div key={item}>
                    {item[0]==1 && 
                    <div className="flex justify-center">
                      <div className="block rounded-lg shadow-lg bg-white max-w-sm">
                        <div className="p-6 border-b  border-gray-300 text-gray-900 ">
                          <h1 className="pt-3 pb-1 text-center">
                            {item[1]}
                          </h1>
                          <p className="text-gray-700 text-sm px-3 mb-4">{item[2]}</p> 
                        </div>
                        <div className="p-6 border-b">
                          <p className="text-gray-900 text-2xl font-medium mb-2 text-center">{item[3]}</p>
                          <p className="text-gray-700">{item[4]}</p>
                       </div>
                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                          <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">{item[5]}</h5>
                          <div>{item[6]}</div>
                        </div>
                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                          <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">{item[7]}</h5>
                          <div>{item[8]}</div>
                        </div>
                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600 text-center">
                          <h5 className="text-gray-900 text-xl font-medium mb-2">Special Items</h5>
                          <div>{item[9]}</div>
                          <div>{item[10]}</div>
                          <div>{item[11]}</div>
                        </div>
                      </div>
                    </div> }
                  </div>
                       
                  ))
                ) : (
                  <li>Error: do not forget to setup your env variables 👇</li>
                )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const sheet = await getSheetData("Roles");
  const itemSheet = await getSheetData("ItemDetails")
  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
      itemData: itemSheet.slice(1, itemSheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}
