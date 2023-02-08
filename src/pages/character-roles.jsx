import * as React from 'react';

import { getSheetData } from '@/lib/sheets';

import ItemCardHover from '@/components/ItemCardHover'
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function SheetsPage({ data, itemData }) {
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

            <div className='mt-8 space-y-6 grid-flow-col'>
              {data && data.length ? (
                data.filter(row => row[0]==1).map((item) => (
                  <div key={item}>
                    <div className="justify-center">
                      <div className="grid grid-rows-8 grid-cols-6 rounded-xl shadow-lg bg-white lg:w-2/3 max-w">
                        <div className="role-name col-span-2 p-6  text-gray-900 ">
                          <h1 className="pt-3 pb-1 text-center">
                            {item[1]}
                          </h1>
                          <p className="text-gray-700 text-sm px-3 mb-4 italic">{item[2]}</p> 
                        </div>
                        <div className="role-stat p-6 border-l border-cyan-800 col-span-2">
                            <p className="text-gray-700 text-xs text-center border-b mb-3">Special Stat & Benefit</p>
                            <p className="text-gray-900 text-2xl font-medium mb-2 text-center">{item[3]}</p>
                            <p className="text-gray-700">{item[4]}</p>
                        </div>
                        <div className="role-items col-span-2 p-6 border-l  border-cyan-800 text-gray-600 text-center">
                        <p className="text-gray-700 text-xs text-center border-b">Special Items</p>
                          <div className=' '>
                            <div className="">
                              <ItemCardHover sheetData={itemData} itemName={item[9]}/>
                            </div>
                            <div className="">
                              <ItemCardHover sheetData={itemData} itemName={item[10]}/>
                            </div>
                            <div className="">
                              <ItemCardHover sheetData={itemData} itemName={item[11]}/>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6 py-3 border-t border-cyan-800 text-gray-700 text-xs text-center'>Special Abilities</div>
                            <div className="p-6 border-r  border-cyan-700 text-gray-600 col-span-3">
                            <h5 className="text-gray-900 text-xl font-medium text-center">{item[5]}</h5>
                            <div>{item[6]}</div>
                          </div>
                          <div className="p-6  text-gray-600 col-span-3">
                            <h5 className="text-gray-900 text-xl font-medium text-center">{item[7]}</h5>
                            <div>{item[8]}</div>
                          </div>
                      </div>
                    </div> 
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
