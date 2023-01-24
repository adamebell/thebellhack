import React from "react";

import NextImage from '@/components/NextImage';

export default function RulesContent({
  data,
}) {
  return (
    <>

  <ol className='mt-8 space-y-6 flex-rows w-3/4'>
    {data && data.length ? (
      data.map((item) => (
        <li key={item}>
          <p className={item[1]}>{item[0]}</p>
          <div className='object-center flex items-center justify-center'>
            { (item[4] > 0) &&
            <NextImage
                            useSkeleton
                            className=''
                            src={item[2]}
                            width={item[4]}
                            height='0'
                            alt={item[3]}
            />
            }
          </div>
        </li>
                            

        ))
      ) : (
        <li>Error: do not forget to setup your env variables 👇</li>
      )}
    </ol>
    </>
  )
}
