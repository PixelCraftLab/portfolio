import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import  About  from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Graphs from './sections/Graphs.jsx';
import CustomCursor from './sections/CustomCursor.jsx';
// import ChatBot from './sections/ChatBot.jsx';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
    <Navbar />  
    <Hero />
    <About/>
    <Graphs/>
    <Projects/>
    <CustomCursor/>
    {/* <ChatBot/> */}
    
    
    
    {/* experience */}
    {/* contact */}
    {/* footer */}
    </div>

    
  );
};

export default App;