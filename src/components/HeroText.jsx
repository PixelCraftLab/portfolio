import { useEffect, useRef } from "react";
import FlipWords from "./Flip"
import {motion} from "framer-motion"






const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 40,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

const  HeroText = () => {
    
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-col md:flex c-space"
    >
      {/* <motion.h1 
        variants={item}
        className="text-7xl font-medium mb-5 mt-25 text-neutral-100">
        Welcome to My World!
      </motion.h1> */}

    <motion.h1 

        variants={item}
        className="text-7xl font-extrabold mb-5 mt-25 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-white via-white to-yellow-100
        drop-shadow-[0_0_25px_rgba(255,255,0,0.9)]
        scale-105 z-10"  >
        Welcome to My World!
        </motion.h1>

      {/* <motion.h1 
        variants={item}
        className="text-4xl font-medium text-white"
        // style={{color: "#FFFFFF"}}   
        >
        Hi, there I'm Vishal Kumar Gowda
      </motion.h1> */}

      <motion.h1 
        variants={item}
        className="text-4xl font-bold 
        text-transparent bg-clip-text 
        bg-gradient-to-r from-white via-white to-blue-500

        tracking-wide z-10">
        Hi, there I'm Vishal Kumar Gowda
        </motion.h1>

      <motion.div variants={item} className="z-10 flex flex-col items-start">
        <motion.p 
          variants={item}
          className=" text-5xl font-medium text-transparent bg-clip-text 
        bg-gradient-to-r from-neutral-200 via-white to-white z-20" >
          A Developer <br/> Dedicated to Crafting
        </motion.p>

        {/* <motion.p 
          variants={item}
          className="text-5xl font-semibold text-primary">
          <FlipWords />
        </motion.p> */}

        <motion.p 
            variants={item}
            className="text-5xl font-extrabold 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-white

            animate-pulse z-20">
            <FlipWords />
        </motion.p>

        {/* <motion.p 
          variants={item}
          className="text-4xl font-medium text-neutral-300">
          Web Solutions
        </motion.p> */}

        <motion.p 
            variants={item}
            className="text-4xl font-bold 
            text-white
            z-10
            animate-pulse">
            Web Solutions!
            </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default HeroText