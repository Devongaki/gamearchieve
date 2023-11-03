import React from "react";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";

export const HomePage = () => {
  return (
    <div className="container">
      <div className="hero_img">
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
};
