// import React from 'react'

// const Certification = () => {
//     return (
//         <div>
//             <div 
//             className='text-4xl mb-15'
//             >
//                 Certifications
//             </div>
//             <BounceCards
//                 className="z-10 ml-60 custom-bounceCards"
//                 images={images}
//                 containerWidth={500}
//                 containerHeight={250}
//                 animationDelay={0.6}
//                 animationStagger={0.09}
//                 easeType="elastic.out(1, 0.5)"
//                 transformStyles={transformStyles}
//                 enableHover
//             />
//         </div>
//     )
// }

// export default Certification

// import BounceCards from '../components/BounceCards'

// const images = [
//     "https://drive.google.com/file/d/1EtZM2rY1uZOiOrY8KoSINZPF4XaspXDx/view?usp=sharing",
//     "https://picsum.photos/500/500?grayscale",
//     "https://picsum.photos/600/600?grayscale",
//     "https://picsum.photos/700/700?grayscale",
//     "https://picsum.photos/300/300?grayscale"
// ];

// const transformStyles = [
//     "rotate(5deg) translate(-150px)",
//     "rotate(0deg) translate(-70px)",
//     "rotate(-5deg)",
//     "rotate(5deg) translate(70px)",
//     "rotate(-5deg) translate(150px)"
// ];

import CardSwap, { Card } from '../components/CardSwap'
import { motion } from "framer-motion"


import React from 'react'

const Certification = () => {
    return (
        <div
            className='mr-40 mt-20 '
        >
            
            <motion.h2 className="text-heading "
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 100 }}
                transition={{ duration: 2.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}>
                Certifications
            </motion.h2>
            <div className='h-4'>
                
            </div>
            <span 
            className='ml-15'
            >
                The certificates i have investe time are not just compleate coures then get it,<br></br>
                <span className='ml-15'></span>
                They are praticall to do.
            </span>

            <div

                style={{ height: '600px', position: 'relative' }}>
                <CardSwap

                    cardDistance={50}
                    verticalDistance={70}
                    delay={4000}
                    pauseOnHover
                >
                    <Card>
                        <h2>#1</h2>
                        <img src='public/assets/AntropicAgent.svg'>

                        </img>
                    </Card>
                    <Card>
                        <h2>#2</h2>
                        <img src='public/assets/Certifications/ClaudeCodeInAction.png'>
                        </img>
                    </Card>
                    <Card>
                        <h2>#3</h2>
                        <img src='public/assets/Certifications/AntropicAPI.png'>
                        </img>
                    </Card>
                    <Card>
                        <h2>#4</h2>
                        <img src='public/assets/Certifications/MCPAntropic.png'>
                        </img>
                    </Card>
                </CardSwap>
            </div>
        </div>
    )
}

export default Certification