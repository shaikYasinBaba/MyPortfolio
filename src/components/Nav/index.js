import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio 
      
      
      </div>
      
          
       
      <button onClick={toggleTheme} className="theme-toggle-btn">
            {darkMode ? "🌞" : "🌙"}
          </button>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
       
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/about">About</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
