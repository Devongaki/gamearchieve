import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Link to="/">Gamestudios</Link>
        </div>
        <div className="nav_links">
          <Link to={`/`} className="nav_links-items">
            Home
          </Link>
          <Link to={`/games`} className="nav_links-items">
            Games
          </Link>
          <Link to="/about" className="nav_links-items">
            About
          </Link>
          <Link to="/" className="nav_links-items">
            SearchBox
          </Link>
          
        
        </div>
      </nav>
    </div>
  );
};
