"use client"
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import Anihero from './imagehero';
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosMenu } from 'react-icons/io';
import Menu from './menu';


const Hero = () => {
    const [menuOpen,setOpenMenu] = useState(false)
    console.log(menuOpen)

    const onClickHandler = ()=>{
        setOpenMenu(prev=>!prev)
    }
  return (
    <>
   
    <div className='h-[60vh] lg:h-[155vh] bg-hero bg-cover bg-no-repeat bg-center relative '>
        <div className='flex items-center justify-around pl-[400px] gap-32'>
        <div className='text-center text-white font-medium text-4xl font-serif p-8'>
            TRUTH PORTAL
            </div>
            <button onClick={onClickHandler} ><IoMenu  className='w-10 h-10 text-white ' /></button>   
        </div>

        {
            menuOpen && (
                <Menu />
            )
        }

        <Anihero />

        
         

        <div className='flex items-center justify-around pl-[490px] mt-32 gap-80 text-lg text-white'>
            <p>2023 © All rights reserved. </p>
            <IoSettingsSharp className='w-6 h-6' />

        </div>
      
       

        </div>
    </>
  )
}

export default Hero