/* eslint-disable react/no-unescaped-entities */
'use client'
import { motion,  } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const Menu = () => {
 
  
 
  return (
    <motion.div 
    
    initial={{x:1100}}
    animate={{x:0}}
    transition={{
      duration:1
    }}
    className='w-screen h-[60vh] lg:h-[142vh] absolute z-50  top-20 right-0 left-0 bg-hero bg-cover bg-no-repeat bg-center '>
      <div className='flex flex-col justify-end items-end  pt-10 pr-28 text-white text-xl gap-4'>
      <motion.p 
  
      className=' max-w-xl tracking-wide '>TRUTH is an interactive web platform that collects and transmits audio-based stories of Black women, by Black women in an effort to expand the data that informs how Black women and girls are depicted online. Our goal is to create a safe space and alternative experience on the internet that allows Black femmes to reclaim their identity through storytelling and community. TRUTH is a led by creator Genel Ambrose</motion.p>
      <p className='text-[18px] max-w-2xl pr-4'>Supported by the Mozilla Creative Media Award. <span  className='underline cursor-pointer '>Learn more here.</span></p>
      <p className='pr-36'>This platform is best experienced on desktop.</p>
      <hr className='border-white  pr-[580px]'/>
      <p className='max-w-xl text-[22px] pt-3'>Let's keep in touch, there's so much more TRUTH to explore. </p>
      <form className='flex gap-8 pb-4 '>
        <input type="email" required className='px-3 bg-transparent border-b-[1px] border-blue-500 outline-none w-full min-w-[450px]' placeholder=' Email'  />
        <button className='px-7 border-[1px] border-white rounded-lg hover:bg-white hover:text-amber-900 py-0.5'  >Join
        </button>
      </form>
      <Link href="/" className='pr-[480px] flex items-center justify-center gap-2'>Home <MdOutlineArrowOutward/></Link>
      <hr className='border-white  pr-[580px]'/>
      <Link href="#" className='pr-[480px] flex items-center justify-center gap-2'>About <MdOutlineArrowOutward/></Link>
      <hr className='border-white  pr-[580px]'/>
      <Link href="#" className='pr-[370px] flex items-center justify-center gap-2'>Submit Your Story <MdOutlineArrowOutward/></Link>
      <hr className='border-white  pr-[580px]'/>
      <Link href="#" className='pr-[420px] flex items-center justify-center gap-2'>Get In Touch <MdOutlineArrowOutward/></Link>
      <hr className='border-white  pr-[580px]'/>
      <Link href="#" className='pr-[415px] flex items-center justify-center gap-2'>Good Mirrors <MdOutlineArrowOutward/></Link>
      <hr className='border-white  pr-[580px]'/>

      </div>
    </motion.div>
  )
}

export default Menu