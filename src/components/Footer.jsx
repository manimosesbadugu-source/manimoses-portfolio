import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gradient-text">Mani Moses Badugu</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} All rights reserved. Designed for excellence.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 3rem 0;
          border-top: 1px solid var(--glass-border);
          background: rgba(5, 7, 10, 0.9);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          font-family: var(--font-outfit);
        }
        .footer-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: white;
        }
        @media (max-width: 600px) {
          .footer-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
