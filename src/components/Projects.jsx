import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, PieChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Inventory Management System',
      description: 'A comprehensive concept for tracking stock and warehouse operations. designed to optimize inventory levels and provide real-time reporting.',
      icon: <Layers size={40} className="icon" />,
      features: ['Stock Tracking', 'Warehouse Workflow', 'Inventory Optimization', 'Reporting'],
      link: '#'
    },
    {
      title: 'Customer Tracking Dashboard',
      description: 'An advanced Excel-based solution for tracking customer interactions and performance metrics. Provides deep insights through automated reports.',
      icon: <PieChart size={40} className="icon" />,
      features: ['Interaction Tracking', 'Performance Metrics', 'Automated Reports', 'Visual Dashboards'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Key <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card project-card"
            >
              <div className="project-icon-box">
                {project.icon}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.features.map((feature, fIdx) => (
                    <span key={fIdx} className="p-tag">{feature}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={project.link} className="view-link">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2.5rem;
        }
        .project-icon-box {
          width: 80px;
          height: 80px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .project-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-info p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }
        .p-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-purple);
          background: rgba(168, 85, 247, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .project-actions {
          margin-top: auto;
        }
        .view-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .view-link:hover {
          color: var(--accent-cyan);
        }
      `}</style>
    </section>
  );
};

export default Projects;
