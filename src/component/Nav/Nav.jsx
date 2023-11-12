import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Assuming you have a list of games
  const games = [
    { id: 1, title: "Game 1" },
    { id: 2, title: "Game 2" },
    // Add more games as needed
  ];

  return (
    <div className="nav_container">
      <nav className="container">
        <Link to="/" className="logo">
          Gamestudios
        </Link>
        <div
          className="menu_btns"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <NavLink to={`/`} className="nav_links-items">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/games`} className="nav_links-items">
              Games
            </NavLink>
          </li>
          {games.map((game) => (
            <li key={game.id}>
              <NavLink
                to={`/game-details/${game.id}`}
                className="nav_links-items"
              >
                {game.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
