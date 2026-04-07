import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Sparkles, Camera, Lightbulb } from 'lucide-react';

const Creativity = () => {
  return (
    <section id="creativity" className="creativity-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Creativity & <span className="gradient-text">Passion</span>
        </motion.h2>

        <div className="creativity-grid">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card creativity-main"
          >
            <div className="icon-header">
              <Sparkles className="icon pulse" size={32} />
            </div>
            <p className="creativity-text">
              “I am deeply passionate about creativity and always look for innovative approaches in everything I do. I believe creativity is not limited to art — it is about thinking logically, solving problems in unique ways, and improving processes with fresh ideas.”
            </p>
            <p className="creativity-text">
              “Beyond my professional work, I enjoy capturing moments and telling stories through my lens. I love vlogging and documenting life — preserving memories, emotions, and real-world experiences that inspire both myself and others.”
            </p>
            <p className="creativity-text highlight-text">
              “Creativity is something I continuously explore, whether it is in my work, my thinking, or the way I see the world around me.”
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card youtube-card"
          >
            <div className="youtube-content">
              <Youtube className="yt-icon" size={60} color="#FF0000" />
              <h3>My YouTube Channel</h3>
              <p>Follow my journey and creativity through my YouTube channel where I share moments, experiences, and stories.</p>
              
              <motion.a 
                href="https://www.youtube.com/@mosesrudy" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="yt-link"
              >
                Visit @mosesrudy
              </motion.a>
            </div>
            <div className="decorative-elements">
              <Camera className="deco-icon icon-1" size={24} />
              <Lightbulb className="deco-icon icon-2" size={24} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .creativity-section {
          position: relative;
          padding-top: 120px;
          padding-bottom: 120px;
        }
        .creativity-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
          margin-top: 4rem;
        }
        .creativity-main {
          padding: 3.5rem;
          position: relative;
          overflow: hidden;
        }
        .icon-header {
          margin-bottom: 2rem;
          color: var(--accent-cyan);
        }
        .creativity-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .highlight-text {
          color: white;
          font-weight: 600;
          font-style: italic;
          border-left: 3px solid var(--accent-purple);
          padding-left: 1.5rem;
          margin-top: 2rem;
        }
        .youtube-card {
          padding: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: rgba(255, 0, 0, 0.03);
          border-color: rgba(255, 0, 0, 0.1);
          position: relative;
        }
        .youtube-content h3 {
          font-size: 1.8rem;
          margin: 1.5rem 0 1rem;
        }
        .youtube-content p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .yt-link {
          display: inline-block;
          padding: 14px 28px;
          background: #FF0000;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          transition: all 0.3s ease;
        }
        .decorative-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .deco-icon {
          position: absolute;
          opacity: 0.2;
          color: white;
        }
        .icon-1 { top: 15%; right: 15%; transform: rotate(15deg); }
        .icon-2 { bottom: 15%; left: 15%; transform: rotate(-15deg); }
        
        .pulse {
          animation: pulse-animation 2s infinite;
        }
        @keyframes pulse-animation {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 900px) {
          .creativity-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Creativity;
