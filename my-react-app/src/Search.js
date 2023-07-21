import React, { useState } from "react";

function Search({ setSearchValue, setSearching, setMatchArray, searchValue }) {
  function handleChange(e) {
    if (searchValue === " ") {
      setMatchArray([]);
    }
    e.preventDefault();
    setSearchValue(e.target.value);
    setSearching(true);
  }

  return (
    <form className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="search..."
        style={{ color: "black" }}
        onChange={handleChange}
      />
      <button className="glass" type="submit">
        🔎
      </button>
    </form>
  );
}

export default Search;
//
