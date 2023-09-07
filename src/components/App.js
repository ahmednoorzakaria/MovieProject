import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Movie from "./Movie";
import Navbar from "./Navbar";
import Series from "./Series";
import Home from "./Home";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  console.log(seriesData);
  const apiKey = "702e82f205abc7fb5cb4651aa49efc8b";
  const movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const seriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

  useEffect(() => {
    fetch(movieUrl)
      .then((res) => res.json())
      .then((responseData) => {
        const movieArray = responseData.results || [];
        setMovieData(movieArray);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });

    fetch(seriesUrl)
      .then((res) => res.json())
      .then((responseData) => {
        const seriesArray = responseData.results || [];
        setSeriesData(seriesArray);
      })
      .catch((error) => {
        console.error("Error fetching series data:", error);
      });
  }, []);

  return (
    <>
      <Router>
        {" "}
        <div className="app-container">
          <Navbar />

          <Routes>
            <Route path="/movies" element={<Movie Data={movieData} />} />
            <Route path="/" element={<Home Data={movieData} />} />
            <Route path="/series" element={<Series Data={seriesData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
