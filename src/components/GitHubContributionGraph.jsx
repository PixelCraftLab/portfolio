import React from 'react'
import { motion } from 'framer-motion'

const GitHubContributionGraph = () => {
  return (
    <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ always: true, amount: 0.5 }}
    >


      <a
      className='cursor-pointer'
      target='_blank' 
      href='https://github.com/PixelCraftLab'
      >
        <h2 className='font-bold m-10 ml-15 text-3xl hover:text-4xl transition-all duration-300 ease-out'
            
        >
            GitHub Contributions
        </h2>
      </a>

      <a 
      className='cursor-pointer'
      target='_blank'
      href='https://github.com/PixelCraftLab'
      >
        <img 
        className='ml-15 mb-10 transform transition-transform duration-500 ease-in-out hover:scale-120'
        src="https://ghchart.rshah.org/PixelCraftLab" 
        alt="GitHub Contribution Calendar"
        // src="https://ghchart.rshah.org/409ba5/PixelCraftLab" blue colorz
        />


        {/* <img
        className='ml-15'
        src="https://github-readme-activity-graph.vercel.app/graph?username=PixelCraftLab&theme=github"
        alt="GitHub Activity Graph"
        style={{ width: "100%", maxWidth: "900px" }}
        /> */}
      </a>


    </motion.div>
    
  )
}

export default GitHubContributionGraph