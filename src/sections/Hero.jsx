import { OrbitControls } from "@react-three/drei";
// import Astronaut from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBacground from "../components/ParallaxBacground";
import { Canvas } from "@react-three/fiber";







const Hero = () => {
  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden
    c-space">
      
        <HeroText />
        <ParallaxBacground />

        {/* <figure 
        className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
        
        <Canvas>
            <Astronaut position={[0, -1, 0]} /><OrbitControls enableZoom={false} />
            

        </Canvas>

        </figure> */}
    </section>
  )
}

export default Hero