import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Operations',
      skills: ['Operations Management', 'Process Optimization', 'Workflow Improvement', 'Inventory Management']
    },
    {
      title: 'Technical',
      skills: ['MS Excel', 'Data Analysis', 'Reporting', 'Basic Computer Skills']
    },
    {
      title: 'Quality & Business',
      skills: ['Quality Assurance', 'Documentation', 'Customer Relationship Management', 'Problem Solving']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Team Collaboration', 'Time Management', 'Attention to Detail']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card skill-category"
            >
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .skill-category {
          height: 100%;
        }
        .skill-category h3 {
          margin-bottom: 1.5rem;
          color: var(--accent-cyan);
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .skill-tag {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .skill-tag:hover {
          background: var(--gradient-main);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(34, 211, 238, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Skills;
