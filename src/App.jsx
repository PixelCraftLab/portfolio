import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import  About  from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Graphs from './sections/Graphs.jsx';
import CustomCursor from './sections/CustomCursor.jsx';


const App = () => {
  return (
    <div className="container mx-auto max-w-7xl ">
    <Navbar />  
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="graphs"><Graphs /></section>
    <section id="projects"><Projects /></section>
    
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