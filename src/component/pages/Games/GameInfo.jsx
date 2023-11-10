import React from "react";

export const GameDetailsPage = ({ game }) => {
  if (!game) {
    return null;
  }
  return (
    <div>
      <h1>{game.title}</h1>
      <img src={game.thumbnail} alt={game.title} />
      <p>{game.short_description}</p>
    </div>
  );
};
