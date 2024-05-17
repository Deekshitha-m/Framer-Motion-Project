import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOutlineArrowOutward, MdClose } from 'react-icons/md';
import Setting from './settings/setting';

const Menu = () => {
  const [settingOpen, setOpenSetting] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    // Animate the paragraphs back downwards
    const paragraphs = document.querySelectorAll('.animate-paragraph');
    paragraphs.forEach(paragraph => {
      paragraph.style.transition = 'transform 1s, opacity 1s';
      paragraph.style.transform = 'translateY(50px)';
      paragraph.style.opacity = 0;
    });
  };

  const handleHomeClick = () => {
    handleClose();
    // Simulate a delay to allow the animations to finish before closing the menu
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const onClickHandler2 = () => {
    setOpenSetting(prev => !prev);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: 1100 }}
          animate={{ x: 0 }}
          exit={{ x: 1400 }}
          transition={{ duration: 1 }}
          className={`w-screen h-[60vh] lg:h-[170vh] absolute z-50 top-0 right-0 bg-hero bg-cover bg-no-repeat bg-center ${isOpen ? 'left-0' : '-left-1100'}`}>
          <div className='flex flex-col justify-end items-end pt-20 pr-28 text-white text-xl gap-4'>
            <AnimatePresence>
              <motion.div
                key="paragraphs"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className='max-w-xl tracking-wide'>
                <p className='animate-paragraph'>
                  TRUTH is an interactive web platform that collects and transmits audio-based stories of Black women, by Black
                  women in an effort to expand the data that informs how Black women and girls are depicted online. Our goal is
                  to create a safe space and alternative experience on the internet that allows Black femmes to reclaim their
                  identity through storytelling and community. TRUTH is led by creator Genel Ambrose
                </p>
                <p className='animate-paragraph'>
                  Supported by the Mozilla Creative Media Award.{' '}
                  <span className='underline cursor-pointer'>Learn more here.</span>
                </p>
                <p className='animate-paragraph'>This platform is best experienced on desktop.</p>
              </motion.div>
            </AnimatePresence>
            <hr className='border-white pr-[580px]' />
            <AnimatePresence>
              <motion.div
                key="more"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className='max-w-xl text-[22px] pt-3'>
                Let's keep in touch, there's so much more TRUTH to explore.
              </motion.div>
            </AnimatePresence>
            <form className='flex gap-8 pb-4 '>
              <input
                type='email'
                required
                className='px-3 bg-transparent border-b-[1px] border-blue-500 outline-none w-full min-w-[450px]'
                placeholder=' Email'
              />
              <button className='px-7 border-[1px] border-white rounded-lg hover:bg-white hover:text-amber-900 py-0.5'>
                Join
              </button>
            </form>
            <Link href='/' className='pr-[480px] flex items-center justify-center gap-2' onClick={handleHomeClick}>
              Home <MdOutlineArrowOutward />
            </Link>
            <hr className='border-white pr-[580px]' />
            <Link href='/about' className='pr-[480px] flex items-center justify-center gap-2'>
              About <MdOutlineArrowOutward />
            </Link>
            <hr className='border-white pr-[580px]' />
            <Link href='#' className='pr-[370px] flex items-center justify-center gap-2'>
              Submit Your Story <MdOutlineArrowOutward />
            </Link>
            <hr className='border-white pr-[580px]' />
            <Link href='#' className='pr-[420px] flex items-center justify-center gap-2'>
              Get In Touch <MdOutlineArrowOutward />
            </Link>
            <hr className='border-white pr-[580px]' />
            <Link href='#' className='pr-[415px] flex items-center justify-center gap-2'>
              Good Mirrors <MdOutlineArrowOutward />
            </Link>
            <hr className='border-white pr-[580px]' />
            <button className="absolute top-5  right-20 p-2  text-white w-10 h-10 border-2 border-white rounded-full" onClick={handleClose}><MdClose /></button>
          </div>
          <div className='flex items-center justify-around pl-[490px] mt-20 gap-80 text-lg text-white'>
            <p>2023 © All rights reserved. </p>
            <button onClick={onClickHandler2}><IoSettingsSharp className='w-6 h-6 ' /></button>
          </div>
          {settingOpen && <Setting />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
