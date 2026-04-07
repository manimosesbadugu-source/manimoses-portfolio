import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      
      {/* Background elements */}
      <div className="bg-gradient-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
