import React from 'react'
import { motion } from 'framer-motion'

const LeetCodeStreekGraph = () => {
  return (
    <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ always: true, amount: 0.5 }}
    >
        <a 
        className='cursor-pointer' target='_blank'
        href='https://leetcode.com/u/VishalKumarGowda/'
        >
         <h2 
            className='m-10 ml-15 mt-5 mb-10 text-3xl hover:text-4xl transition-all duration-300 ease-out'
            
            >
            LeetCode Streek
        </h2>
        </a>
        
        <a 
        className='cursor-pointer' target='_blank'
        href='https://leetcode.com/u/VishalKumarGowda/'
        >
            <img 
            className=' cursor-pointer ml-15 transform transition-transform duration-500 ease-in-out hover:scale-105'
            src="https://leetcard.jacoblin.cool/VishalKumarGowda?ext=heatmap" 
            alt="LeetCode Heatmap"
            />
        </a>


    </motion.div>
  )
}

export default LeetCodeStreekGraph