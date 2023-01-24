import React from "react";


export default function ItemCardHover({
  itemName,
  sheetData,
}) {
  return (


    <ol className='mt-8 flex-rows w-3/4'>
    {sheetData && sheetData.length ? (
      sheetData.filter(row => row[1]==itemName).map(item => (
        <li key={item}>
          <div className='object-center flex items-center justify-center'>
            <div className='group relative inline-block'>
              {item[1]}     
                <div className="invisible group-hover:visible group-hover:block bg-white transition p-1 rounded absolute left-full top-1/2 ml-5 border">
                      <div className="text-gray-600">
                        <h5 className="text-gray-900 text-xl font-medium text-center">{item[1]}</h5>
                        <div>{item[5]}</div>
                      </div>
                </div>
          </div>
            
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