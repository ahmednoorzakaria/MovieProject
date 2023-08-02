import React from "react";

function SearchContainer() {
  return (
    <div className="search-container" style={{ backgroundColor: "purple" }}>
      <input
        type="text"
        placeholder="Search movies and series..."
        // Add your search functionality here
      />
    </div>
  );
}

export default SearchContainer;