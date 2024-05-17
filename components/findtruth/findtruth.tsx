"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMenu, IoSettingsSharp } from 'react-icons/io5'
import {face} from '@/data'
import Image from 'next/image'
import Setting from "../settings/setting";

const FindTruth = () => {
    const [settingOpen,setOpenSetting] = useState(false)
    
    const onClickHandler2 = ()=>{
        setOpenSetting(pre=>!pre)
    }


    const [hoveredId, setHoveredId] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        };
    
        document.addEventListener("mousemove", updateMousePosition);
    
        return () => {
          document.removeEventListener("mousemove", updateMousePosition);
        };
      }, []);
      
    
      const calculateImageMovement = (imagePosition: { x: number; y: number; }) => {
        const dx = mousePosition.x - imagePosition.x;
        const dy = mousePosition.y - imagePosition.y;
    
        // You can adjust the speed factor as needed
        const speedFactor = 0.05;
    
        return {
          x: dx * speedFactor,
          y: dy * speedFactor,
        };
      };
    



  return (
   <>
    <div className='h-[60vh] lg:h-[170vh] bg-hero bg-cover bg-no-repeat bg-center relative  '>
      <div className='flex flex-col items-center justify-center '>
     <div className='flex items-center justify-around pl-[350px] gap-80'>
        <div className='text-center text-white font-normal text-4xl font-serif p-8'>
            TRUTH PORTAL
            </div>
            <button  ><IoMenu  className='w-10 h-10 text-white ' /></button>   
        </div>
        <div className='grid grid-cols-4 items-center justify-around gap-14 max-w-[900px] mt-16 '>
        {face.map((data, index) => (
        <motion.div 
          key={data.id} 
          initial={{ opacity: 1, x: 0, y: 0 }} // Initially clear
          animate={{
            opacity: 1,
            translateX: index % 2 === 0 ? [-10, 10, -10] : 0,
            translateY: index % 2 === 0 ? [-10, 10, -10] : 0,
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          style={{
            x: calculateImageMovement({ x: data.id * 100, y: 0 }).x,
            y: calculateImageMovement({ x: data.id * 100, y: 0 }).y,
            filter: hoveredId && hoveredId !== data.id ? 'blur(8px)' : 'none' // Apply blur effect conditionally
          }}
          onMouseEnter={() => setHoveredId(data.id)} // Set hovered image ID
          onMouseLeave={() => setHoveredId(null)} // Reset hovered image ID
        >
          <Image 
            src={data.image}
            alt='no'
            height={data.height}
            width={data.width}
            className='w-[200px] h-[200px] rounded-3xl z-50'
          />
        </motion.div>
      ))}
        </div>

        <div>
        </div>
        <div className='flex items-center justify-around pl-[360px] mt-16 gap-80 text-lg text-white'>
            <p>2023 © All rights reserved. </p>
            <button onClick={onClickHandler2} ><IoSettingsSharp className='w-6 h-6  mt-8 ml-20' /></button>
        </div>
        {
            settingOpen && (
             
                <Setting  />
             
            )
        }
        </div>
        </div>
   </>
  )
}

export default FindTruth
