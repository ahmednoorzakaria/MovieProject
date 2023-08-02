import React from "react";
import "./index.css"



function Body() {
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
    </main>
  );
}

export default Body;
