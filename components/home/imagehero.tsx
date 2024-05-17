/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image';
import img1 from '../../public/home/home1.jpg'
import img2 from '../../public/home/home2.jpg';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

const Anihero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-24'>
      <p className='text-2xl text-white font-normal pt-14 text-center tracking-wider '>They told us our stories aren't worth remembering,<br/> 
       this is where you find your truth.</p>
       <div className='flex gap-32 items-center justify-center  '>
       <motion.div className='h-[400px] w-[400px] relative'
       animate={{
          x: "calc(0vw - 30px)", // Moves image to the right edge of the screen
          y: "calc(0vh - 15px)", // Moves image to the bottom edge of the screen
        }}
        transition={{
          duration: 3, // Adjust duration as needed
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "reverse", // Reverse animation direction after each repeat
        }}>
           <Link href="/findtruth">
         <Image
            src={img1}
            alt='no'
            width={206}
            height={254}
            className='w-[100%] h-[100%] rounded-2xl hover:blur-lg hover:scale-105 ' />
            <div className='flex  items-center justify-center absolute top-[40%] left-[20%] text-3xl text-white cursor-pointer font-medium  '>Find your truth <MdOutlineKeyboardArrowRight /></div>
            </Link>
        </motion.div>
        


          <div className='h-[400px] w-[400px] relative cursor-pointer'>
            <Link href="/sharetruth">
          
            <Image
             src={img2} alt='no'
             width={380}
            height={228}
            className='w-[100%] h-[100%]  rounded-2xl hover:blur-lg hover:scale-105   ' />
             <div className='flex  items-center justify-center absolute top-[40%] left-[20%] text-3xl text-white  font-medium  '>Share your truth <MdOutlineKeyboardArrowRight />
             </div>
            
             </Link>
             
         </div>

       </div>
    </div>
  );
};

export default Anihero;