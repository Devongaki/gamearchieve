import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the menu if the click is outside the navigation container
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside the navigation container
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="nav_container" ref={navigationRef}>
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
        </ul>
      </nav>
    </div>
  );
};
