import React, { useState } from "react";
import "./index.css";


export const GamesPage = () => {
   const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("genre");

   const handleSearchClick = () => {
     console.log("Search clicked:", searchTerm);
   };
   const handleInputChange = (event) => {
     setSearchTerm(event.target.value);
   };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
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
            onChange={handleInputChange}
          />
        </div>
        <div className="games_filter">
          <label htmlFor="filter">Filter By:</label>
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
          {/* You can add more filter options or components based on the selected filter */}
        </div>
        <div className="games_display"></div>
      </div>
    </>
  );
};
