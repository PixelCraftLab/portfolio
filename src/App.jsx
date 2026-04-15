import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Graphs from './sections/Graphs.jsx';
// import CustomCursor from './sections/CustomCursor.jsx';
import Ribbons from "./components/Ribbons.jsx";


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <div className="fixed inset-0 z-50">
        <Ribbons
          baseThickness={19}
          colors={["#5227FF", "#06a597"]}
          speedMultiplier={0.55}
          maxAge={700}
          enableFade
          enableShaderEffect
        />
      </div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="graphs"><Graphs /></section>
      <section id="projects"><Projects /></section>

      {/* <CustomCursor/> */}

      {/* <Hero />
    <About/>
    <Graphs/>
    <Projects/>
    <CustomCursor/> */}




      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>


  );
};

export default App;