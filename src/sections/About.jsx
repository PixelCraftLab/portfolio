import CopyEmailButton from "../components/CopyEmailButton"
import {Frameworks} from "../components/Framework"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};









export const About = () => {

        const audioRef = useRef(null);
        const [isPlaying, setIsPlaying] = useState(false);

        useEffect(() => {
        const audio = audioRef.current;

        
        }, []);

        const toggleAudio = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
        };

  return (


    

    <section className="relative c-space section-spacing"
    style={{
        backgroundImage:"url(/assets/projects/StarsImg.png)",
        backgroundSize: "cover",
    }}
    >

        {/* <img
            src="/assets/projects/StarsImg.png"   
            alt="stars"
            className="absolute inset-0 w-full h-170 object-cover z-10 animate-pulse"
        /> */}
        
        <motion.h2
            className="text-heading "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 100 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            >
            About Me
        </motion.h2>
        {/* <div className="absolute inset-0 pointer-events-none rounded-lg border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-border-rotate"></div> */}
        
        <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                transition: {
                    staggerChildren: 1.2
                }
                }
            }}
            >

            <motion.div className="overflow-scroll relative grid-default-color grid-1 flex flex-col justify-end 
                border-4 border-transparent via-black"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}

            >
                <img
                src="assets/projects/SelfImg.png"
                className="w-40 mb-4"
                />
                {/* <p className="headtext z-1">Hi, I am Vishal</p> */}
                <p className=" text-gray-300">
                Im a software developer who enjoys turning ideas into real, usable products. I focus on building clean, scalable applications and solving problems that go beyond just writing code.
                Ive worked on projects involving realworld problem solving—always with an emphasis on performance, usability, and maintainability. Im particularly interested in building applications that combine good design with strong backend logic.
                What sets me apart is my approach: I dont just build features, I think about why they matter, how they scale, and how users experience them. I enjoy learning new technologies quickly and applying them in practical ways.
                I also gained hands-on experience leading a social impact startup project for about 3 to 4 months. I was responsible for designing the system, planning features, coordinating the development team, and making sure everything was done on time. This experience helped me improve my problem-solving, planning, and execution skills, which I am excited to bring to this in your project.
                Currently, Im focused on strengthening my skills.
                </p>

                {/* <button
                onClick={playIntro}
                className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                            text-white rounded-lg transition duration-300 
                            shadow-lg hover:shadow-purple-500/50"
                >
                🔊 Hear About Me
                </button> */}
            </motion.div>
            <motion.div
                className=" overflow-scroll grid-default-color grid-2
                border-4 border-purple-800 via-blue-800
                p-8 md:p-12 rounded-2xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                <div className=" overflow-scroll flex flex-col gap-6 text-lg md:text-xl text-gray-300 leading-relaxed">

                    <p>
                        a developer driven by curiosity, creativity, and a deep interest in building intelligent digital experiences.
                    </p>

                    <p>
                    I dont just build websites I build systems that think, react, and feel alive.
                    </p>


                </div>
                </motion.div>
            <motion.div className="border-4 border-blue-400 grid-default-color grid-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className=" z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">
                        Im based in India (IST) and comfortable collaborating across different time zones. I maintain flexible working hours to ensure smooth communication and timely delivery, whether working with teams locally or globally. I value clear responsibility.
                    </p>


                </div>
            
                <figure className="absolute left-95 top-30 transform -translate-x-1/2 -translate-y-1/4 animate-pulse">
                    <motion.img 
                        src="/assets/projects/FloatingPlanet.png" 
                        alt="Time Zone Illustration"
                        className="w-132 h-132 md:w-48 md:h-48 lg-w-96 lg-h-96 object-contain"
                        animate={{ y: [0, -30, 0] }}    
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                
                </figure>

            </motion.div>


            {/* <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"/> */}

            <motion.div className="grid-special-color grid-4 "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >

                

                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Do you want to start a project together?</p>
                    <CopyEmailButton/>

                </div>

            </motion.div>
            <motion.div className="border-2 border-white grid-default-color grid-5
             via-black
            "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className=" z-10 w-[50%]">
                    <p className="headText">Tech Stak</p>
                    <p className="subtext">
                       I leverage a modern, full-stack technology stack to build scalable, efficient, and production-ready applications. I focus on clean architecture, performance optimization, and maintainable code, enabling me to deliver robust solutions for frontend systems.
                    </p>
                    
                </div>
                <div className="absolute inset-y-0 md:inset-y-9. w-full h-full start-[50%] md:scale-125">
                    
                    <Frameworks/>
                </div>

            </motion.div>

        </motion.div>







<audio ref={audioRef} preload="auto" loop>
  <source src="/audio/intro.mp3" type="audio/mpeg" />
</audio>
        <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 
            bg-purple-600 hover:bg-purple-700 
            text-white px-5 py-3 rounded-full 
            shadow-lg z-50 transition"
            >
            {isPlaying ? "Pause Intro" : " Play Intro"}
        </button>
    </section>

  )
}


export default About;