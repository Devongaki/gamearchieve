import React, { useState } from "react";
import "./index.css";
import { Footer } from "../../Footer/Footer";

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("genre");

  const handleSearchClick = () => {
    console.log("Search clicked:", searchTerm);
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="games_title">
          <h1>All Games</h1>
        </div>
        <div className="game_searchBtn">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="games_filter">
          <select
            id="filter"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="genre">Genre</option>
            <option value="ratings">Ratings</option>
            <option value="name">Name</option>
            <option value="releaseDate">Release Date</option>
          </select>
        </div>
        <div className="games_display">
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
        <div className="load_gamesBtn">
          <button>Load More</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
