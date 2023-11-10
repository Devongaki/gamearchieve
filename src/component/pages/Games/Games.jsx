import React, { useEffect, useState } from "react";
import "./index.css";
import { Footer } from "../../Footer/Footer";
import { BaseUrl } from "../../urlPath";

const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
  params: {
    tag: "3d.mmorpg.fantasy.pvp",
    platform: "pc",
  },
  headers: {
    "X-RapidAPI-Key": "4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("genre");
  const [games, setGames] = useState([]);

  const handleSearchClick = () => {
    console.log("Search clicked:", searchTerm);
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const fetchGames = async () => {
    try {
      const resp = await fetch(BaseUrl, options);
      const gamesData = await resp.json();

      setGames(gamesData);
    } catch (error) {
      console.log("Error fetching games:", error);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);

  const filterGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

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
            {filterGames.map((game) => (
              <div
                className="card"
                key={game.id}
                style={{ backgroundImage: `url(${game.thumbnail})` }}
              >
                <div className="card-content-container">
                  <h2>{game.title}</h2>
                  <p>{game.short_description}</p>
                  <div className="view-button">
                    <a href="#">View Game</a>
                  </div>
                </div>
              </div>
            ))}
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
