import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Warehouse Manager',
      company: 'SRI CAR TECH WORKSHOP',
      period: '2022 – 2026',
      responsibilities: [
        'Managed end-to-end warehouse operations including inventory tracking and stock control',
        'Supervised daily activities ensuring smooth workflow and timely task completion',
        'Handled payroll management and employee coordination',
        'Maintained strong customer relationships and resolved service-related issues',
        'Implemented process improvements to increase efficiency and reduce operational delays',
        'Coordinated with vendors and internal teams for inventory and logistics'
      ]
    },
    {
      role: 'Quality Analyst',
      company: 'MEDREICH Ltd',
      period: '2019 – 2020',
      responsibilities: [
        'Conducted detailed quality checks and inspections on products/processes',
        'Ensured compliance with company standards and regulatory guidelines',
        'Identified defects and implemented corrective actions to reduce errors',
        'Prepared quality reports and documentation for audits',
        'Collaborated with teams to improve quality assurance processes'
      ]
    },
    {
      role: 'Loan Processor',
      company: 'Bajaj Finserv',
      period: '2019',
      responsibilities: [
        'Processed loan applications with accuracy and efficiency',
        'Verified customer documents and ensured compliance with policies',
        'Maintained records and updated system data regularly',
        'Coordinated with customers and internal teams for faster approvals',
        'Ensured timely loan processing and high customer satisfaction'
      ]
    },
    {
      role: 'Quality Analyst',
      company: 'INDOMIM',
      period: '2018 – 2019',
      responsibilities: [
        'Performed quality inspections and ensured adherence to standards',
        'Monitored production/service processes to identify issues',
        'Documented findings and supported process improvement initiatives',
        'Worked closely with teams to maintain consistent quality output'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <div className="exp-header">
                  <div className="exp-role">
                    <Briefcase size={20} className="icon" />
                    <h3>{exp.role}</h3>
                  </div>
                  <div className="exp-company">
                    <h4>{exp.company}</h4>
                    <span className="period">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="exp-details">
                  {exp.responsibilities.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding-bottom: 5rem;
        }
        .text-center { text-align: center; }
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 4rem auto 0;
          padding-left: 30px;
          border-left: 2px solid var(--glass-border);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }
        .timeline-dot {
          position: absolute;
          left: -41px;
          top: 0;
          width: 20px;
          height: 20px;
          background: var(--gradient-main);
          border-radius: 50%;
          border: 4px solid var(--bg-dark);
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }
        .timeline-content {
          padding: 2rem;
        }
        .exp-header {
          margin-bottom: 1.5rem;
        }
        .exp-role {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .exp-role h3 {
          font-size: 1.5rem;
          color: white;
        }
        .exp-role .icon {
          color: var(--accent-cyan);
        }
        .exp-company {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .exp-company h4 {
          color: var(--accent-purple);
          font-size: 1.1rem;
        }
        .period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 12px;
          border-radius: 20px;
        }
        .exp-details {
          list-style: none;
        }
        .exp-details li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .exp-details li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
        }
        @media (max-width: 768px) {
          .exp-company {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
