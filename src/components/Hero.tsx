import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-name">Abhilash Hamsa</h1>
            <p className="hero-bio">
              I have built many industry grade projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :)
            </p>
            
            <div className="contact-info">
              <p>
                <i className="fas fa-phone"></i> +91 8096585052 | 
                <i className="fas fa-envelope"></i> abhilashhamsa9@gmail.com
              </p>
            </div>
            
            {/* Stats Container */}
            <div className="stats-container">
              <div className="stat-item">
                <h3>7</h3>
                <p>VERIFIED SKILLS</p>
              </div>
              <div className="stat-item">
                <h3>5</h3>
                <p>PROFESSIONAL PROJECTS</p>
              </div>
              <div className="stat-item">
                <h3>75+</h3>
                <p>DSA PROBLEMS SOLVED</p>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="./images/profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
