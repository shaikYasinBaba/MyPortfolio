import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "./components/Nav";
import Education from "./components/Education";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/about";
import Home from "./components/home";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
