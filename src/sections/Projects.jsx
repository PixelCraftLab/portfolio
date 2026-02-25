import { myProjects } from "../constants"  
import Project from "../components/Project"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState } from "react";

let frame;
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x,{damping:10, stiffness:50});
  const springY = useSpring(y,{damping:10, stiffness:50});
  const handleMouseMove = (e) => {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
    frame = null;
  });
};

  const [preview, setPreview]= useState(null);

  return (
    <section onMouseMove={handleMouseMove} className="relative c-space section-spacing ">
        <h2 className="text-heading">My Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"/>
        {myProjects.map((project)=>(<Project key={project.id}{...project} setPreview={setPreview}/>))}
        {preview &&(<motion.img className="fixed top-0 left-0z-50 object-cover h-56 rounded-lg pointer-events-none w-80"
        style={{x:springX, y:springY}}
        src={preview}
        />)}

    </section>
  )
}

export default Projects