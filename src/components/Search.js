import React, { useState } from "react";

function Search({ searchData, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-container">
      <div className="input-group search-input-container">
        <input
          type="search"
          className="form-control search-input"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search-addon"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
