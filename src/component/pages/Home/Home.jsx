import React from "react";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="hero_section-sa">
        <div className="hero_img">
          <img src={backgroundImage} alt="" />
        </div>
        <div className="hero_heading">
          <h1>
            Immersive<br></br>
            experiences <br></br> that deliver
          </h1>
        </div>
      </div>
      <div className="section-sb">
        <div className="sb-image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
