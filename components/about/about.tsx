'use client'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const About = () => {
  return (
    <>
    <div className='h-[60vh] lg:h-[170vh] bg-abt bg-cover bg-no-repeat bg-center relative  '>
      {/* Add a semi-transparent blue layer */}
      <div className="absolute inset-0 bg-yellow-600 bg-opacity-65">
      <div className='flex flex-col items-center justify-center '>
        <div className='flex items-center justify-around pl-[350px] gap-80'>
          <div className='text-center text-white font-normal text-4xl font-serif p-8'>
            TRUTH PORTAL
          </div>
          <button><IoMenu className='w-10 h-10 text-white ' /></button>   
        </div>
        <div className='text-white text-6xl font-serif font-medium'>About the Project</div>
        <div className='text-white text-lg tracking-wide font-medium italic'> They told us our stories aren’t worth remembering, this is where you find </div>
        <div className='text-white text-lg tracking-wide font-medium italic'> your truth.</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
