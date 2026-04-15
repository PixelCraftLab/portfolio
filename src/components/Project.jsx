import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import { motion } from 'framer-motion';

const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <motion.div className='z-50 flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'
        // onMouseEnter={() => setPreview(image)}
        // onMouseLeave={()=> setPreview(null)}
        // whileHover={{ scale: 1.1 }}
        // transition={{ type: "spring", stiffness: 200, damping: 15 }}

      >
        <div>
          <p className='text-2xl'>{title}</p>
          <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (<span key={tag.id}>{tag.name}</span>))}




          </div>

        </div>
        <div className=''>
        <button onClick={() => setIsHidden(true)} className='z-10 flex iteams-center gap-1 cursor-pointer hover-animation relative'>
          Read More
          <img src='assets/arrow-right.svg'
            className='w-5 cursor-pointer '
          />
          

        </button>
        </div>
      </motion.div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full' />
      {isHidden && (<ProjectDetails
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tags={tags}
        href={href}
        closeModal={() => setIsHidden(false)}
      />)}
    </>
  )
}

export default Project