// GamesPage.js
import React, { useEffect, useState } from "react";
import "./index.css";
import { Footer } from "../../Footer/Footer";
import { filterGames, handleInputChange } from "./FilterGames";
import { fetchGames } from "./FetchGames";

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("genre");
  const [games, setGames] = useState([]);
  const [gamesToDisplay, setGamesToDisplay] = useState(20);
  const gamesPerPage = 10;

  const { handleFilterChange, filteredGames } = filterGames(
    games.slice(0, gamesToDisplay),
    searchTerm,
    setSelectedFilter
  );

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

  const handleLoadMore = () => {
    setGamesToDisplay((prevCount) => prevCount + gamesPerPage);
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
            onChange={(event) => handleInputChange(event, setSearchTerm)}
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
            {filteredGames.map((game) => (
              <a key={game.id} href={`/game-details/${game.id}`}>
                <div
                  className="card"
                  style={{ backgroundImage: `url(${game.thumbnail})` }}
                >
                  <div className="card-content-container">
                    <h2>{game.title}</h2>
                    <p>{truncateDescription(game.short_description, 50)}</p>
                    <div className="view-button">
                      <span>View Game</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="load_gamesBtn">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
