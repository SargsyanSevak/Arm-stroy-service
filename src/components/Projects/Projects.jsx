import React from "react";
import "./projects.css";


const Projects = () => {
  return (
    <div id="projects">
      <div className="header">в цифрах</div>
      <div className="Projects">
        <div className="statisticsContainer">
          <div className="statistics">
            <span>15000</span>
            <h5>Асфальтировано дорог, км</h5>
          </div>

          <div className="statistics">
            <span>5000</span>
            <h5>Отремонтировано дорог, км </h5>
          </div>

          <div className="statistics">
            <span>450000</span>
            <h5>Уложено тротуарной плитки, м2</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
