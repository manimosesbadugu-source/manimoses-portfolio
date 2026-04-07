import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Let's collaborate</h3>
            <p>Ready to discuss how I can help your team achieve operational excellence and maintain high-quality standards.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="icon-box"><Mail size={20} /></div>
                <div>
                  <p className="label">Email</p>
                  <p className="value">manimosesbadugu@email.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><Phone size={20} /></div>
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+91 123 456 7890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box"><MapPin size={20} /></div>
                <div>
                  <p className="label">Location</p>
                  <p className="value">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card contact-form"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 4rem;
          align-items: center;
        }
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }
        .info-item .label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 0.2rem;
        }
        .info-item .value {
          font-weight: 600;
          color: white;
        }
        .contact-form {
          padding: 3rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.08);
        }
        .w-full { width: 100%; justify-content: center; border: none; cursor: pointer; }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
