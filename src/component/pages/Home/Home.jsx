import React from "react";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";
import sbImage from "../../../assets/images/desktop/image-interactive.jpg";
import { Footer } from "../../Footer/Footer";

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
      </div>
      <div className="se_section news_container">
        <div className="se_section news_container">
          <div className="newsletter-content">
            <div className="text-side">
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Stay updated with the latest news and updates by subscribing to
                our newsletter.
              </p>
            </div>
            <div className="form-side">
              <form>
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="William Ongaki "
                  required
                />

                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ongaki.dev@gmail.com"
                  required
                />

                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
