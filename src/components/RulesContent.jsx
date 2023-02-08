import React from "react";

import NextImage from '@/components/NextImage';

export default function RulesContent({
  data,
}) {
  return (
   

  <div className='mt-8 space-y-6 flex-rows w-3/4'>
    {data && data.length ? (
      data.map((item) => (
        <div key={item}>
          { (item[2] == 'div') && <div className={item[1]}>{item[0]}</div> }
          { (item[2] == 'h1') && <h1 className={item[1]}>{item[0]}</h1> }
          { (item[2] == 'h2') && <h2 className={item[1]}>{item[0]}</h2> }
          { (item[2] == 'ul') && <ul className={item[1]}>{item[0]}</ul> }
          { (item[2] == 'li') && <li className={item[1]}>{item[0]}</li> }
          { (item[4] > 0) &&
          <div className='object-center flex items-center justify-center'> 
            <NextImage
                            useSkeleton
                            className=''
                            src={item[2]}
                            width={item[4]}
                            height='0'
                            alt={item[3]}
            />
          </div>
        }
        </div>
                            

        ))
      ) : (
        <li>Error: do not forget to setup your env variables 👇</li>
      )}
    </div>
  )
}
