import React from "react";
import "./index.css";

function Side() {
  return (
    <aside className="sidenav">
      <div className="side-content">
        <h1 className="display-4">Movieflix</h1>
        <div className="btn-group-vertical mt-4">
          <button className="btn btn-outline-info mb-2">Genres</button>
          <button className="btn btn-outline-info mb-2">Trending</button>
          <button className="btn btn-outline-info mb-2">Upcoming</button>
          <button className="btn btn-outline-info mb-2">Favorites</button>
          <button className="btn btn-outline-primary">Login</button>
        </div>
      </div>
    </aside>
  );
}

export default Side;
