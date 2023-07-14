import React from "react";

function Search({ handleMatchArray }) {
  const handleChange = (e) => {
    const searchValue = e.target.value;
    handleMatchArray(searchValue);
  };

  return (
    <form className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="search..."
        onChange={handleChange}
      />
      <button type="submit">🔎</button>
    </form>
  );
}

export default Search;
