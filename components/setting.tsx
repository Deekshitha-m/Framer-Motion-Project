import Link from 'next/link';
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import ToggleBar from './togglebar';


const Setting = () => {
  return (
    <>
    <div className='absolute z-50  bottom-12  left-[63%] w-[400px] h-60 bg-gray-500 bg-opacity-60 rounded-2xl  text-white '>
        <div className='flex flex-col  justify-center items-start px-2 relative'>
            <div className='flex items-center justify-between text-white font-medium text-3xl gap-44 py-5  px-8'>
            <p>Settings</p>
          
            </div>
            <div>
                <hr className='border-[1px] border-white px-48'/>
            </div>
            <div>
                <p className='pt-4 pl-5 '> Exhibition mode</p>
                <div className='absolute top-1 left-72'> <ToggleBar /></div>
                </div>
               
                <button className='absolute top-40 left-48 border-white border-[1px] p-3 rounded-lg hover:text-black hover:bg-white'>
                    Save preferences
                </button>
              
                
                

            
            

        </div>

    </div>
    </>
  )
}

export default Setting