/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import img1 from '../public/home/home1.jpg'
import img2 from '../public/home/home2.jpg'

const Anihero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-24'>
         <p className='text-2xl text-white font-normal pt-10 text-center tracking-wider '>They told us our stories aren't worth remembering,<br/> 
          this is where you find your truth.</p>
          <div className='flex gap-28  items-center justify-center  '>
            <Image src={img1} alt='no'
            width={306}
            height={254}
             className='w-full aspect-auto ' />

             <Image src={img2} alt='no'
            width={306}
            height={154}
             className='w-full ' />

          </div>
    </div>
  )
}

export default Anihero