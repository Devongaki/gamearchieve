import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../urlPath";
import { useParams } from "react-router-dom";
import { options } from "./FetchGames";

export const GameDetailsPage = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`${BaseUrl}game?id=${gameId}`, options);
        const detailsData = await response.json();
        setGameDetails(detailsData);
        setLoading(false);
      } catch (error) {
        console.error(
          `Error fetching game details for game ID ${gameId}:`,
          error
        );
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="grid-container">
        <div className="image-column">
          <img src={gameDetails.thumbnail} alt={gameDetails.title} />
        </div>
        <div className="details-column">
          <h1>{gameDetails.title}</h1>
          <p>{gameDetails.short_description}</p>
          <p>Genre: {gameDetails.genre}</p>
          <p>Platform: {gameDetails.platform}</p>
          <p>Publisher: {gameDetails.publisher}</p>
          <p>Developer: {gameDetails.developer}</p>
          <p>Release Date: {gameDetails.release_date}</p>
          <a
            href={gameDetails.game_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="game-url-button">Play Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};
