import { useEffect, useRef } from "react";
import FlipWords from "./Flip"

const HeroText = () => {
  return (
    <div className="z-10 mt-20
    text-center md:mt-40 md:text-left
    rounded-3xl bg-clip-text">
        {/* DesktopViews */}
        <div className="flex-col  md:flex c-space">
            <h1 className="text-7xl font-medium mb-5 text-blue-200">
                Welcome to My World!
            </h1>
            
            <h1 className="text-4xl font-medium">
                Hi, there I'm Vishal Kumar Gowad
            </h1>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium text-neutral-300">
                    A Developer<br/> Dedicated to Crafting
                    </p>
                <p id="flipwords" 
                className="text-5xl font-semibold text-neutral-100">
                    <FlipWords />


                    
                </p>
                <p className="text-4xl font-medium text-neutral-300 ">
                    Web Solutions 
                </p>
            </div>
        </div>
        {/* MobileViews */}
    </div>
  )
}

export default HeroText