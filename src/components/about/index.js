import React from 'react';
import './index.css';

const About = () => {
  return (
    <section className="about-container">
      <h2 className="section-title">About Me</h2>
      <p className="name">Shaik Yasin Baba</p>
      <p className="location">📍 Suryapet, Telangana, 508206</p>
      <p className="contact">
        📞 <a href="tel:+919381125634">9381125634</a> |
        📧 <a href="mailto:shaikyasinbaba6@gmail.com">shaikyasinbaba6@gmail.com</a>
      </p>
      <p className="links">
        🔗 <a href="https://www.linkedin.com/in/yasinbaba-shaik" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        💻 <a href="https://github.com/shaikYasinBaba" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
      <div className="summary">
        <h3>Professional Summary</h3>
        <p>
          Full-stack web developer skilled in <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>SQL</strong>,
          with hands-on experience building real-world web applications.
        </p>
        <p>
          Strong foundation in full-stack development through project-based learning. Recently completed
          <strong> MCA (2024)</strong> and passionate about building scalable, user-friendly web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
