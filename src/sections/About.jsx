import CopyEmailButton from "../components/CopyEmailButton"
import {Frameworks} from "../components/Framework"
import { motion } from "framer-motion"

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

   const playIntro = async () => {
  try {
        const response = await fetch(`http://localhost:5000/api/voice?t=${Date.now()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: "Hi, I am Vishal Kumar Gowda, a Computer Science student passionate about open source and neuroscience inspired AI systems."
        }),
        });

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
    } catch (error) {
        console.error("Error playing intro:", error);
    }
    };

  return (


    

    <section className="relative c-space section-spacing "
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
            className="text-heading"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
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

            <motion.div className="relative grid-default-color grid-1 flex flex-col justify-end 
                border-4 border-transparent via-purple-600"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}

            >
                <img
                src="assets/coding-pov.png"
                className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inste--y-10 lg:acale[2.5] "
                />
                <p className="headtext">Hi, I am Vishal</p>
                <p className="subtext">
                Over the last few months, I developed frontend dev skills 
                along with backend basics to deliver dynamic software and web applications.
                </p>

                <button
                onClick={playIntro}
                className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                            text-white rounded-lg transition duration-300 
                            shadow-lg hover:shadow-purple-500/50"
                >
                🔊 Hear About Me
                </button>
            </motion.div>
            <motion.div
                className=" overflow-scroll grid-default-color grid-2
                border-4 border-transparent via-blue-800
                p-8 md:p-12 rounded-2xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                <div className=" overflow-scroll flex flex-col gap-6 text-lg md:text-xl text-gray-300 leading-relaxed">

                    <p>
                    Meet <span className="text-white font-semibold">Me</span> — a developer driven by curiosity, creativity, and a deep interest in building intelligent digital experiences.
                    </p>

                    <p>
                    I don’t just build websites — I build systems that think, react, and feel alive.
                    </p>


                </div>
                </motion.div>
            <motion.div className="grid-default-color grid-3"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in India, and opean to work worldwide</p>


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
            <motion.div className="grid-default-color grid-5
            border-4 border-transparent via-black
            "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className="z-10 w-[50%]">
                    <p className="headText">Tech Stak</p>
                    <p className="subtext">
                        I specialize in a variety of languages, framewrks , and tools that allow me to build scalable applications
                    </p>
                    
                </div>
                {/* <div className="absolute inset-y-0 md:inset-y-9. w-full h-full start-[50%] md:scale-125">
                    
                    <Frameworks/>
                </div> */}

            </motion.div>

        </motion.div>








    </section>

  )
}


export default About;