import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Git', icon: 'fab fa-git-alt', class: 'git' },
    { name: 'Linux', icon: 'fab fa-linux', class: 'linux' },
    { name: 'JUnit', icon: 'JU', class: 'junit' },
    { name: 'Java', icon: 'fab fa-java', class: 'java' },
    { name: 'Jackson', icon: 'J', class: 'jackson' },
    { name: 'Design Patterns', icon: 'fas fa-layer-group', class: 'patterns' },
    { name: 'SQL', icon: 'fas fa-database', class: 'sql' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills Acquired</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className={`skill-icon ${skill.class}`}>
                {skill.icon.startsWith('fab') || skill.icon.startsWith('fas') ? (
                  <i className={skill.icon}></i>
                ) : (
                  <span>{skill.icon}</span>
                )}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
