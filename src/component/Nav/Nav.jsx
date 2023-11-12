import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          <li>
            <NavLink
              to={`/game-details/:gameId`}
              className="nav_links-items"
            ></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
