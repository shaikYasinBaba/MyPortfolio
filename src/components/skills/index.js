import React, { useEffect, useState } from 'react';
import './index.css';

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains('dark-mode');
    setIsDarkMode(isDark);
  }, []);

  return (
    <div className={`skills-container ${isDarkMode ? 'dark' : ''}`}>
      <h2>Technical Skills</h2>

      <div className="skills-category">
        <h4>Frontend:</h4>
        <div className="skills-list">
          <div className="skill-item"><i className="fab fa-html5 skill-icon"></i>HTML</div>
          <div className="skill-item"><i className="fab fa-css3-alt skill-icon"></i>CSS</div>
          <div className="skill-item"><i className="fab fa-bootstrap skill-icon"></i>Bootstrap</div>
          <div className="skill-item"><i className="fab fa-js skill-icon"></i>JavaScript</div>
          <div className="skill-item"><i className="fab fa-react skill-icon"></i>React.js</div>
        </div>
      </div>

      <div className="skills-category">
        <h4>Backend:</h4>
        <div className="skills-list">
          <div className="skill-item"><i className="fab fa-node skill-icon"></i>Node.js</div>
          <div className="skill-item"><i className="fas fa-server skill-icon"></i>Express.js</div>
          <div className="skill-item"><i className="fab fa-python skill-icon"></i>Python</div>
        </div>
      </div>

      <div className="skills-category">
        <h4>Database:</h4>
        <div className="skills-list">
          <div className="skill-item"><i className="fas fa-database skill-icon"></i>SQLite</div>
          <div className="skill-item"><i className="fas fa-database skill-icon"></i>SQL</div>
        </div>
      </div>

      <div className="skills-category">
        <h4>Programming Languages:</h4>
        <div className="skills-list">
          <div className="skill-item"><i className="fab fa-python skill-icon"></i>Python</div>
          <div className="skill-item"><i className="fab fa-js skill-icon"></i>JavaScript</div>
        </div>
      </div>

      <div className="skills-category">
        <h4>Tools & Software:</h4>
        <div className="skills-list">
          <div className="skill-item"><i className="fas fa-file-word skill-icon"></i>MS Word</div>
          <div className="skill-item"><i className="fas fa-file-excel skill-icon"></i>MS Excel</div>
          <div className="skill-item"><i className="fas fa-file-powerpoint skill-icon"></i>MS PowerPoint</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
