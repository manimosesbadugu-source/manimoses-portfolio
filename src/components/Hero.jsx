import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Send } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const name = "Mani Moses Badugu";
  
  const firstName = "Mani Moses";
  const lastName = "Badugu";

  const letterVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(5px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1, opacity }}
        className="hero-content"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">Operations & Quality Specialist</span>
        </motion.div>
        
        <motion.h1
          className="hero-title"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          I'm 
          <span className="gradient-text" style={{ marginLeft: '1.2rem', display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="hero-subtitle"
        >
          Operations & Quality Analyst Professional
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="hero-tagline"
        >
          “Experienced in operations management, quality analysis, and customer relationship handling with a strong focus on efficiency and process improvement.”
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="hero-btns"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FileText size={20} />
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            <Send size={20} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-bg-accent"></div>

      <style>{`
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          padding-top: 80px;
        }
        .hero-content {
          max-width: 1000px;
          z-index: 10;
        }
        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(34, 211, 238, 0.1);
          border: 1px solid rgba(34, 211, 238, 0.3);
          border-radius: 20px;
          color: var(--accent-cyan);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5.5rem);
          line-height: 1.1;
          margin-bottom: 0.5rem;
          font-weight: 900;
        }
        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .hero-tagline {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        .hero-btns {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-bg-accent {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
          z-index: 1;
          filter: blur(100px);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
