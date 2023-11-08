import React from "react";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";
import sbImage from "../../../assets/images/desktop/image-interactive.jpg";
import { Footer } from "../../Footer/Footer";
import midImage1 from "../../../assets/images/mid-hero 1.jpeg";
import midImage2 from "../../../assets/images/mid2.jpg";
import midImage3 from "../../../assets/images/mid3.jpg";
import midImage4 from "../../../assets/images/mid4.jpg";

export const HomePage = () => {
  return (
    <>
      <div className="hero_section-sa">
        <div className="hero_img">
          <img src={backgroundImage} alt="" />
        </div>
        <div className="container">
          <div className="hero_heading ">
            <h1>
              Immersive <br />
              experiences <br /> that deliver
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-sb">
          <div className="sb-container">
            <div className="sb-image">
              <img src={sbImage} alt="" />
            </div>
            <div className="sb_info">
              <h2>
                The leader in <br /> interactive VR
              </h2>
              <p>
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
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

          <div className="sc_card_display">
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h2>Game Title</h2>
                <p>Description of the game goes here.</p>
              </div>
              <div className="view-button">
                <a href="#">View Game</a>
              </div>
            </div>
          </div>
        </div>
        <div className="sd_section mid_hero">
          <div className="mid_content">
            <div className="mid_info">
              <h1>INSPIRED BY OUR SIMMERS</h1>
              <p>
                Meet our diverse community of talented players who make The Sims
                every day and continuously inspire us to push the boundaries of
                life and keep changing the status quo.
              </p>
              <button>learn more</button>
            </div>
            <div className="mid_gallery">
              <img src={midImage1} alt="" />
              <img src={midImage2} alt="" />
              <img src={midImage3} alt="" />
              <img src={midImage4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="se_section news_container"></div>
      <div className="sf_section newsletter_container"></div>
      <Footer />
    </>
  );
};
