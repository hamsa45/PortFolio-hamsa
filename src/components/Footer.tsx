import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Abhilash Hamsa. All rights reserved.</p>
          <div className="social-links">
            <a href="#linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#github">
              <i className="fab fa-github"></i>
            </a>
            <a href="#twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
