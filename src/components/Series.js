import React from "react";

function Series({ Data }) {
  console.log(Data);
  return (
    <div className="movie-container">
      {Data.map((movie) => (
        <div key={movie.id} className="movie-item">
          <div className="movie-details">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.name}
            />
            <div className="movie-info">
              <h5>Series: {movie.name}</h5>
              <p></p>
              <p>Rating: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Series;
