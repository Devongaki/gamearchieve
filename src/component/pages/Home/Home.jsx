import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import backgroundImage from "../../../assets/images/desktop/image-hero.jpg";
import sbImage from "../../../assets/images/desktop/image-interactive.jpg";
import { Footer } from "../../Footer/Footer";
import { fetchGames } from "../Games/FetchGames";

export const HomePage = () => {
  const [games, setGames] = useState([]);
  const gamesToDisplay = 10;

  useEffect(() => {
    const fetchData = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };

    if (games.length === 0) {
      fetchData();
    }
  }, [games]);


  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...read more`
      : description;
  };

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
              <Link to="/games">
                <button>See all</button>
              </Link>
            </div>
          </div>
          <div className="sc_card_display">
            {games.slice(0, gamesToDisplay).map((game) => (
              <a key={game.id} href={`/game-details/${game.id}`}>
                <div className="card">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${game.thumbnail})` }}
                  />
                  <div className="card-content-container">
                    <h2>{game.title}</h2>
                    <p>{truncateDescription(game.short_description, 50)}</p>
                  </div>
                </div>
              </a>
            ))}
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
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="William Ongaki "
                  required
                />

                <label htmlFor="email">Email:</label>
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
