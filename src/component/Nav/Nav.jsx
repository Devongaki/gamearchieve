import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


export const Navigation = () => {
  
  
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Link to="/">Gamestudios</Link>
        </div>
        <div className="nav_links">
          <NavLink to={`/`} className="nav_links-items">
            Home
          </NavLink>
          <NavLink to={`/games`} className="nav_links-items">
            Games
          </NavLink>
          <NavLink to="/about" className="nav_links-items">
            About
          </NavLink>
          <NavLink to="/" className="nav_links-items">
            SearchBox
          </NavLink>
        </div>

        <div className="menu_btns">
          <div className="menu_btns-close">
            <FaBars />
          </div>
          <div className="menu_btns-open">
            <FaTimes />
          </div>
        </div>
      </nav>
    </div>
  );
};
