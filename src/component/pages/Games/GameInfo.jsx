import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../urlPath";
import { useParams } from "react-router-dom";

export const GameDetailsPage = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`${BaseUrl}/${gameId}`, {
          headers: {
            "X-RapidAPI-Key":
              "4318904c87mshcf8fcdc984cadc9p1f8d99jsn9790322cce04",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        });
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
      <h1>{gameDetails.title}</h1>
      <img src={gameDetails.thumbnail} alt={gameDetails.title} />
      <p>{gameDetails.short_description}</p>
      {/* Render other details as needed */}
    </div>
  );
};
