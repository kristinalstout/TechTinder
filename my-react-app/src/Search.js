import React, { useState } from "react";

function Search({ handleMatchArray }) {
  const handleChange = (e) => {
    e.preventDefault();
    const searchValue = (e) => {
      handleMatchArray(searchValue);
    };
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
