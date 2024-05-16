
import React from 'react'
import { IoMenu } from "react-icons/io5";
import Anihero from './anihero';


const Hero = () => {
  return (
    <>
   
    <div className='h-[60vh] lg:h-[200vh] bg-hero bg-cover bg-no-repeat bg-center '>
        <div className='flex items-center justify-around pl-[340px]'>
        <div className='text-center text-white font-medium text-4xl font-serif p-8'>
            TRUTH PORTAL
            </div>
            <IoMenu className='w-10 h-10 text-white ' />
        </div>
            <div>
                <Anihero />
            </div>
      
       

        </div>
    </>
  )
}

export default Hero