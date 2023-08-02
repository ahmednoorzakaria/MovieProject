// Body.js
import React from "react";
import "./index.css";
import SingleMovie from "./SingleMovie";
import SearchContainer from "./SearchContainer"; // Import the SearchContainer component

function Body({ data }) {
  const Types = [
    "Movie",
    "Series",
  ];
  
  const displayedMovies = data.map(movie => <SingleMovie key={movie.id} movie={movie}/>)
  
  return (
    <main className="container main">
      <SearchContainer /> {/* Use the SearchContainer component here */}
      <div className="button-container">
        {Types.map((type) => (
          <button className="my-button" key={type}>
            {type}
          </button>
        ))}
      </div>
      <div className="movie-container row">
        {displayedMovies}
      </div>
    </main>
  );
}

export default Body;
