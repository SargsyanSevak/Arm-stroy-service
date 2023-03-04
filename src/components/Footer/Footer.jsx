import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo">
        <div className="logoCircle"></div>
      </div>
      <div className="footerMain"></div>
      <div className="author">
        <p>
          2023 Copyright © АРМстройСЕРВИС | Разработка сайта{" "}
          <span>
            <a href="https://s-sargsyan.netlify.app/" target="_blank">
              Sargsyan
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
