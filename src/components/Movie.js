import React from "react";

function Movie({ Data }) {
  console.log(Data);

  function Moviedata() {
    return Data.map((movie) => (
      <div key={movie.id} className="movie-item">
        <div className="movie-details">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h5>{movie.title.substring(0, 15) + "..."}</h5>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="movie-container">
      <Moviedata />
    </div>
  );
}

export default Movie;
