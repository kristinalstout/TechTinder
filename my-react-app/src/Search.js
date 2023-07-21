import React, {useState} from "react";

function Search({setSearchValue}) {
  
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <form className="search-bar">
      <input
        type="text"
        id="search"
        placeholder="search..."
        style={{ color: "white" }}
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