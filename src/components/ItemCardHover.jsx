import React from "react";


export default function ItemCardHover({
  itemName,
  sheetData,
}) {
  return (


    <ol className='pt-2 flex-rows'>
    {sheetData && sheetData.length ? (
      sheetData.filter(row => row[1]==itemName).map(item => (
        <li key={item}>
          <div className='object-center grid items-center justify-center'>
            <div className='group relative inline-block'>
              <div className="p-1 text-center underline text-xl">{item[1]}</div>   
                <div className="invisible w-96 h-96 group-hover:visible group-hover:block bg-white transition p-1 rounded absolute right-full top-1/2 ml-5 border-2 border-cyan-700">
                      <div className="text-gray-600">
                        <h3 className="text-gray-900 text-xl font-medium text-center">{item[1]}</h3>
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