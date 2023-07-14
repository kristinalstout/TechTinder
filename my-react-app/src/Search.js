import React from "react";

function Search({ handleMatchArray }) {
  const handleChange = (e) => {
    const searchValue = e.target.value;
    handleMatchArray(searchValue);
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
