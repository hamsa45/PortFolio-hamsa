import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Get all sections
      const sections = ['hero', 'skills', 'projects', 'achievements', 'github'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Find which section is currently in view
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = (section: string) => {
    return `nav-link ${activeSection === section ? 'active' : ''}`;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./images/profile-icon.jpg" alt="Abhilash Hamsa" className="profile-icon" />
          <span className="nav-name">Abhilash Hamsa</span>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#skills" className={getNavLinkClass('skills')}>Skills Acquired</a>
          <a href="#projects" className={getNavLinkClass('projects')}>My Projects</a>
          <a href="#achievements" className={getNavLinkClass('achievements')}>Achievements</a>
          <a href="#github" className={getNavLinkClass('github')}>GitHub</a>
          <a href="https://www.linkedin.com/in/abhilash-h45/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/hamsa45" target="_blank" rel="noopener noreferrer" className="nav-link">
            <i className="fab fa-github"></i>
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
