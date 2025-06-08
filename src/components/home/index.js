import React from 'react';
import About from '../about';
import Experience from '../Experience';
import Skills from '../skills';
import Projects from '../Projects';
import Education from '../Education';


const Home = () => {
  return (
    <div className="home-container">
      <About />
      <Experience />
      <Skills />
      <Education/>
      <Projects />
      
    </div>
  );
};

export default Home;
