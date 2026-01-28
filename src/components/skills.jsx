import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills-page">
      {/* Heading with background image */}
      <div className="skills-heading">
        <h2>Technical & Software Skills</h2>
      </div>

      {/* Skills boxes */}
      <div className="skills-box">
        <p className="skills-intro">
          I have experience with the following tools and technologies:
        </p>
        <ul>
          <li><strong>Simulation & CAD:</strong> ANSYS, COMSOL, SolidWorks, AutoCAD, Simulink</li>
          <li><strong>Programming:</strong> FORTRAN, C</li>
          <li><strong>Data Analysis:</strong> Origin Pro, Excel</li>
          <li><strong>Numerical Tools:</strong> MATLAB</li>
          <li><strong>Others:</strong> LaTeX, Arduino, MS Office</li>
        </ul>
      </div>
    </div>
  );
}
