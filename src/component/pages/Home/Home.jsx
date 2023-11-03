import React from "react";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";
import sbImage from "../../../assets/images/desktop/image-interactive.jpg";

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
          <img src={sbImage} alt="" />
        </div>
        <div className="sb_info">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="sc_section">
        <div className="sc_cont-heading">
          <div className="sc_title">
            <h2>Our Games</h2>
          </div>
          <div className="sc_button">
            <button>See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};
