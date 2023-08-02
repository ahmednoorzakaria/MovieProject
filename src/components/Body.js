import React from "react";
import "./index.css";

function Body({ data }) {
  const Types = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science fiction",
    "Tv Movie",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <main>
      <div className="button-container">
        {Types.map((type) => (
          <button className="my-button" key={type}>
            {type}
          </button>
        ))}
      </div>
      <div className="movie-container">
        {data.map((movie) => (
          <div className="card" style={{ width: "18rem" }} key={movie.id}>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Release Date: {movie.release_date}</p>
              <p className="card-text">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Body;
