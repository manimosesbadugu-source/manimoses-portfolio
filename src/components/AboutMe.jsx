import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card about-card"
          >
            <p className="about-text">
              “I am an experienced professional with a background in quality analysis, loan processing, and warehouse management. I have worked in fast-paced environments handling operations, payroll, and customer relationships. I focus on improving workflows, maintaining quality standards, and delivering efficient results.”
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>8+</h3>
                <p>Years Exp</p>
              </div>
              <div className="stat-item">
                <h3>4+</h3>
                <p>Companies</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Quality Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          text-align: left;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .about-card {
          position: relative;
          overflow: hidden;
        }
        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .about-stats {
          display: flex;
          gap: 3rem;
          border-top: 1px solid var(--glass-border);
          padding-top: 2rem;
        }
        .stat-item h3 {
          font-size: 2rem;
          color: var(--accent-cyan);
          margin-bottom: 0.2rem;
        }
        .stat-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 600px) {
          .about-stats {
            gap: 1.5rem;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
