import React from "react";

function SearchContainer() {
  return (
    <div className="search-container" style={{ backgroundColor: "purple" }}>
      <input
        type="text"
        placeholder="Search movies and series..."
        // search functionality
      />
    </div>
  );
}

export default SearchContainer;