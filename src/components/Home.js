import React, { useState } from "react";
import Search from "./Search";

function Home({ Data }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState(""); // "movie" or "series"

  function handleSearch(query) {
    const apiKey = "702e82f205abc7fb5cb4651aa49efc8b";
    const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;

    fetch(searchUrl)
      .then((res) => res.json())
      .then((responseData) => {
        setSearchResults(responseData.results || []);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  }

  return (
    <div className="home-container">
      <h2 className="glowing-text">Welcome to MovieFlix!</h2>
      <p className="glowing-text">
        Discover the latest movies and top-rated TV series.
      </p>
      <Search onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2 className="white-text">Search Results</h2>
          <div className="movie-container">
            {searchResults.map((result) => (
              <div key={result.id} className="movie-item">
                <div className="movie-details">
                  {result.poster_path && (
                    <img
                      className="movie-image"
                      src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                      alt={result.title || result.name}
                    />
                  )}
                  <div className="movie-info">
                    <h5 className="white-text">
                      {result.title || result.name}
                    </h5>
                    <p className="white-text">
                      Type: {result.media_type === "movie" ? "Movie" : "Series"}
                    </p>
                    <p className="white-text">
                      Release Date:{" "}
                      {result.release_date || result.first_air_date}
                    </p>
                    <p className="white-text">Rating: {result.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
