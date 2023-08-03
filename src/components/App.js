import React, { useState, useEffect } from "react";
import Body from "./Body";
import Side from "./Side";
import NavBar from "./Navbar";
import "./index.css";

function App() {
  const [data, setData] = useState([]);
  const apiKey = "702e82f205abc7fb5cb4651aa49efc8b";

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        const movieArray = responseData.results || [];
        setData(movieArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {<NavBar /> }
      <Side />
      <Body data={data} />
    </div>
  );
}

export default App;
