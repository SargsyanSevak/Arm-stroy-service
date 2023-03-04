import React from "react";
import "./projects.css";
import CountUp from "react-countup";

const Projects = () => {
 
  return (
    <div id="projects">
      <div className="header">в цифрах</div>
      <div className="Projects">
        <div className="statisticsContainer">
          <CountUp start={0} end={15000} duration={1}>
            {({ countUpRef }) => (
              <div className="statistics">
                <span ref={countUpRef} />
                <h5>Асфальтировано дорог, км</h5>
              </div>
            )}
          </CountUp>
          <CountUp start={0} end={5000} duration={1}>
            {({ countUpRef }) => (
              <div className="statistics">
                <span ref={countUpRef} />
                <h5>Отремонтировано дорог, км </h5>
              </div>
            )}
          </CountUp>
          <CountUp start={0} end={500000} duration={1}>
            {({ countUpRef }) => (
              <div className="statistics">
                <span ref={countUpRef} />
                <h5>Уложено тротуарной плитки, м2</h5>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </div>
  );
};

export default Projects;
