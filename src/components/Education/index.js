import React from "react";
import "./index.css";

const educationData = [
  {
    institution: "Mahatma Gandhi University, Nalgonda",
    duration: "2022 – 2024",
    degree: "Master of Computer Applications (MCA)",
    grade: "CGPA: 8.0",
  },
  {
    institution: "KRR College, Kodad, Suryapet",
    duration: "2018 – 2022",
    degree: "Bachelor of Science (B.Sc.) – Computer Science",
    grade: "CGPA: 7.85",
  },
  {
    institution: "KRR College, Kodad, Suryapet",
    duration: "2016 – 2018",
    degree: "Intermediate (MPC)",
    grade: "Percentage: 71.5%",
  },
  {
    institution: "ZPHS Kodad, Suryapet",
    duration: "2015 – 2016",
    degree: "Secondary School Certificate (SSC)",
    grade: "CGPA: 8.5",
  },
];

const Education = () => {
  return (
    <section className="education-wrapper">
      <h2 className="education-heading">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="edu-institution">{edu.institution}</h3>
            <p className="edu-degree">{edu.degree}</p>
            <div className="edu-info">
              <span>{edu.duration}</span>
              <span>{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
