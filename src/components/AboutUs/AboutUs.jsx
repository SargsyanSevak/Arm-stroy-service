import React from "react";
import "./aboutUs.css";
import aboutIcon from "../../Assets/aboutIcon.webp";
import bgabout3 from "../../Assets/bgabout3.jpg";
const AboutUs = () => {
  return (
    <div id="about">
      <div className="header">
        <h3>КОРОТКО О НАС</h3>
      </div>
      <div className="AboutUsContainer">
        <div className="about">
          <div className="roadIcon">
            <img src={aboutIcon} alt="" />
          </div>
          <div className="aboutUs">
            <p>
              Мы уже много лет успешно занимаемся асфальтированием дорог,
              площадок, стоянок, тротуаров, дворов, укладки тротуарной плитки,
              благоустройством территорий больших и малых площадей, услугами по
              устройству экопарковок, а также предоставляет услуги по аренде
              строительной техники и все это далеко не полный спектр выполняемых
              нами услуг.
            </p>
          </div>
        </div>
        <div className="aboutImage">
          <img src={bgabout3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
