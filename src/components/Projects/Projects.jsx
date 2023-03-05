import React from "react";
import "./projects.css";


const Projects = () => {
  return (
    <div id="projects">
      <div className="header">в цифрах</div>
      <div className="Projects">
        <div className="statisticsContainer">
          <div className="statistics">
            <span>40000</span>
            <h5>Асфальтировано дорог, M<sup>2</sup></h5>
          </div>

          <div className="statistics">
            <span>5000</span>
            <h5>Отремонтировано дорог, м<sup>2</sup> </h5>
          </div>

          <div className="statistics">
            <span>45000</span>
            <h5>Уложено тротуарной плитки, м<sup>2</sup></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
