import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Graphs from './sections/Graphs.jsx';
import SplashCursor from './components/SplashCursor.jsx';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
      <div className="fixed inset-0 z-[1] ">
        <SplashCursor
          baseThickness={19}
          colors={["#5227FF", "#06a597"]}
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