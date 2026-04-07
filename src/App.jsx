import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Creativity from './components/Creativity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the background glow
  const springConfig = { damping: 50, stiffness: 300 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      
      {/* Interactive Background Glow */}
      <motion.div 
        className="mouse-glow"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Static Background elements */}
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
        <Creativity />
        <Contact />
      </main>

      <Footer />

      <style>{`
        .mouse-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
          filter: blur(80px);
        }
      `}</style>
    </div>
  );
}

export default App;
