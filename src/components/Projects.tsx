import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'QContest',
      date: 'Jul 2025',
      description: 'QContest is a robust contest application designed to simulate programming challenges, similar to platforms like Hackerrank. This project aims to develop an application that enables users to participate in and manage coding contests. By focusing on core Java and design principles, developers are tasked with creating a scalable and maintainable contest framework.',
      skills: ['Object Oriented Design', 'Java', 'Unit testing', 'Design Patterns', 'SOLID Principles', 'Exception Handling']
    },
    {
      title: 'QCalc',
      date: 'Jan 2025',
      description: 'This project aims to obtain basic skills in Java and OOPs principles by building a subset of features seen in calculators. During the course of this project: Made use of different features of VSCode IDE to build the project. Built feature of a calculator by following OOPS Principles. Wrote unit tests to ensure edge cases are handled correctly. Fixed the bugs in the implementation of newly introduced features of the calculator.',
      skills: ['Java', 'Unit testing', 'JUnit', 'Exception Handling']
    }
  ];

  const handleViewProject = (title: string) => {
    alert(`Detailed view for ${title} coming soon! This would show a comprehensive project overview with screenshots, code snippets, and live demo.`);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-date">{project.date}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button 
                    className="btn-view-project"
                    onClick={() => handleViewProject(project.title)}
                  >
                    View Project Details
                  </button>
                </div>
                <div className="project-image">
                  <div className="code-illustration">
                    <div className="code-lines">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
