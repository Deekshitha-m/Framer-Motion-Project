'use client'
import React, { useState } from "react";
import { color, motion } from "framer-motion";

function ToggleBar() {
  const [isToggleOn, setIsToggleOn] = useState(false);


  const spring = {
    
    type: "spring",
    stiffness: 700,
    damping: 40,
   
  };

  return (
    <div
   
      className={
        "  w-14 h-6 rounded-full flex items-center p-1 cursor-pointer mt-24" +
        (isToggleOn ? " justify-end bg-green-500 " : " justify-start bg-slate-500")
       
      }
      onClick={() => setIsToggleOn(!isToggleOn)}
    >
      <motion.div
        className="rounded-full w-4 h-4 bg-white"
        layout
        transition={spring}
        
      ></motion.div>
    </div>
  );
}

export default ToggleBar;