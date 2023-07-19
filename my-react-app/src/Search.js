import React from "react";

function Search({ handleMatchArray }) {
  const handleChange = (e) => {
    const searchValue = e.target.value;
    return handleMatchArray(searchValue);
  };

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
