import React, { useEffect, useState } from "react";
import "./index.css";
import { Footer } from "../../Footer/Footer";
import { fetchGames } from "./FetchGames";
import { filterGames, handleInputChange } from "./FilterGames";

export const GamesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);
  const [gamesToDisplay, setGamesToDisplay] = useState(20);
  const gamesPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };

    if (games.length === 0) {
      fetchData();
    }
  }, [games]);

  const { filteredGames } = filterGames(
    games.slice(0, gamesToDisplay),
    searchTerm
  );

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
        <div className="games_display">
          <div className="sc_card_display">
            {filteredGames.map((game) => (
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

        <div className="load_gamesBtn">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
