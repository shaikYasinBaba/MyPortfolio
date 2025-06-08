import React from 'react';
import './index.css';

const Experience = () => {
  return (
    <section className="experience-container">
      <h2 className="section-title">Experience & Training</h2>
      
      <p className="experience-title">Technical Training: Nxtwave Disruptive Technologies</p>
      <p className="experience-duration">Aug 2022 – April 2023</p>
      <p className="experience-role">
        <strong>Industry Ready Certification in Full-Stack Development (MERN Stack)</strong>
      </p>

      <ul className="experience-list">
        <li>Completed a project-based certification program in MERN Stack development.</li>
        <li>Built and deployed responsive web applications and RESTful APIs.</li>
        <li>Worked with React.js, modern JavaScript (ES6+), Node.js, and Express.js.</li>
        <li>Handled data modeling and CRUD operations using SQL databases.</li>
        <li>Implemented secure user authentication and authorization flows.</li>
        <li>Solved real-world challenges through debugging and coding exercises.</li>
      </ul>

      <p><strong>Technologies:</strong> Python, JavaScript (ES6+), React.js, Node.js, Express.js, SQLite, HTML, CSS</p>
    </section>
  );
};

export default Experience;
