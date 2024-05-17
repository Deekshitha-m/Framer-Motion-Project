"use client"
import React, { useState } from 'react'
import { IoMenu, IoSettingsSharp } from 'react-icons/io5'
import Setting from '../settings/setting'

const ShareTruthOne = () => {
  
  const [settingOpen,setOpenSetting] = useState(false)
    
  const onClickHandler2 = ()=>{
      setOpenSetting(pre=>!pre)
  }
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
        <div>
          <p className='text-6xl font-medium text-white font-serif pt-12'> Share Your Truth</p>
        </div>
        <p className='text-white text-base pt-5' >Record your own mantra, story, affirmation, or</p> 
        <p className='text-white text-base'>wisdom to share with the community.</p>
        <form>
          <p className='text-gray-300 flex flex-col items-start justify-center text-lg pt-16 gap-2 '>
          First and Last Name*
          <input type='text' required  className='px-3 text-white focus:outline-none bg-transparent min-w-[800px] border-b-white border-b-[1px]'/>
          </p>

          <div className='flex items-center justify-center gap-10'>
          <p className='text-gray-300 flex flex-col items-start justify-center text-lg pt-16 gap-2 '>
          Email*
          <input type='email' required  className='px-3 text-white focus:outline-none bg-transparent min-w-[380px] border-b-white border-b-[1px]'/>
          </p>

          <p className='text-gray-300 flex flex-col items-start justify-center text-lg pt-16 gap-2 '>
          Title
          <input type='text'   className='px-3 text-white focus:outline-none bg-transparent min-w-[380px] border-b-white border-b-[1px]'/>
          </p>
          </div>

          <div className='flex items-center justify-center gap-10'>
          <p className='text-gray-300 flex flex-col items-start justify-center text-lg pt-16 gap-2 '>
          City*
          <input type='text' required  className='px-3 text-white focus:outline-none bg-transparent min-w-[380px] border-b-white border-b-[1px]'/>
          </p>

          <p className='text-gray-300 flex flex-col items-start justify-center text-lg pt-16 gap-2 '>
          State*
          <input type='text' required  className='px-3 text-white focus:outline-none bg-transparent min-w-[380px] border-b-white border-b-[1px]'/>
          </p>
          </div>

        <div className='text-white text-lg pt-10 flex gap-2 items-baseline justify-center'>
        <input
          type="checkbox" required
        className='w-4 h-4 '/> 
        <p>By checking this box you are agreeing to the  <a href='/sharetruth' className='underline'>terms of use</a>  and acknowledging the privacy <br/>policy.</p>
        </div>

        <button className='hover:bg-white hover:text-black text-white text-base bg-transparent border-[1px] border-white py-4 px-40  font-medium mt-16 mx-48 rounded-xl'>Continue</button>
          
        </form>

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

export default ShareTruthOne