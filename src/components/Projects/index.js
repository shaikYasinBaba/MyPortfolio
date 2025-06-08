import React from 'react';
import './index.css';

import firstproject from './firstproject.PNG';
import secondproject from './secondproject.PNG';
import thardproject from './thardprojct.PNG';

const projects = [
  {
    id: 1,
    title: 'Job Application Tracker',
    image: firstproject,
    link: 'https://jobseekerswebapplication.onrender.com/',
  },
  {
    id: 2,
    title: 'Todos Application',
    image: secondproject,
    link: 'https://todoswebyasin.ccbp.tech/',
  },
  {
    id: 3,
    title: 'Insta Share (Instagram Clone)',
    image: thardproject,
    link: 'https://yasininstaclone.ccbp.tech/login',
  },
];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
