import React from 'react'
import { motion } from 'framer-motion'

const ProjectDetails = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    closeModal,



}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur'>
        <motion.div className='relative max-w-2xl w-full max-h-[80vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        >
        <div className='p-5'>
            <button onClick={closeModal} className='position fixed absolute p-2 rounded-sm top-5 right-5 bg-neutral-600 hover:bg-black cursor-pointer'>
                <img src='assets/close.svg' className=' w-6 h-6' />
            </button>
            <img src={image} alt={title} className='w-full rounded-t-2xl' />
        
                <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                <p className='mb-3 font-normal text-neutral-400'>{description}</p>
                <p className='mb-3 font-normal text-neutral-400'>{subDescription}</p>
                
                
                
            
            {/* <div className='flrx items-center justify-between mt-4'></div> */}
            <a target="_blank" className='inline-flex items-center gap-1 font-medium hover:animation cursor-pointer target:blank'  href={href}>View Project
                <img src='assets/arrow-up.svg'
                className='size-4'
                />
            </a>
            
        </div>
        </motion.div>
        
    </div>
  )
}

export default ProjectDetails