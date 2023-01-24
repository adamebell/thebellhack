import React from "react";

export default function RulesContent({
  itemName,
  sheetData,
}) {
  return (

    <ol className='mt-8 space-y-6 flex-rows w-3/4'>
    {sheetData && sheetData.length ? (
      sheetData.map((item) => (
        <li key={item}>
          <div className='object-center flex items-center justify-center'>
            { (item[0] == itemName) &&
              <p className={item[1]}>{item[0]}</p>
            }
          </div>
        </li>
                            

        ))
      ) : (
        <li>Error: do not forget to setup your env variables 👇</li>
      )}
    </ol>

)}




    /*
    {sheetData && sheetData.length ? (
      sheetData.map((item) => (

        { (itemName == item[0]) &&
        <div>
          <p className={item[1]}>{item[0]}</p>
          <div className='object-center flex items-center justify-center'>        
          </div>
        </div>
      ))}
        ))
      ) : (
        <li>Item Not Found Oops</li>
      )
      }

  )
}

*/