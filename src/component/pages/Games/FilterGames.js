// filterUtils.js
export const filterGames = (games, searchTerm, setSelectedFilter) => {
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { handleFilterChange, filteredGames };
};

export const handleInputChange = (event, setSearchTerm) => {
  setSearchTerm(event.target.value);
};
export const handleFilterChange = (event, setSelectedFilter) => {
  setSelectedFilter(event.target.value);
};