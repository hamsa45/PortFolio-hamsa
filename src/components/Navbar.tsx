import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./images/profile-icon.jpg" alt="Abhilash Hamsa" className="profile-icon" />
          <span className="nav-name">Abhilash Hamsa</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#skills" className="nav-link">Skills Acquired</a>
          <a href="#projects" className="nav-link active">My Projects</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#github" className="nav-link">GitHub</a>
          <a href="#linkedin" className="nav-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#codechef" className="nav-link">
            <i className="fas fa-code"></i>
          </a>
        </div>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
