import React from "react";
import "./index.css";

function Side() {
  return (
    <>
      <img
        className="logo img-fluid"
        src="https://i.pinimg.com/236x/b0/dc/e5/b0dce57c83c13bb8b3356bcdb62242e8.jpg"
        alt="Your logo"
      />
      <div id="heading">
        <h1 className="display-4">Movieflix</h1>
      </div>
      <div id="sub-heading" className="d-flex flex-column align-items-center">
        <button className="btn btn-outline-info mb-2">Genres</button>
        <button className="btn btn-outline-info mb-2">Trending</button>
        <button className="btn btn-outline-info mb-2">Upcoming</button>
        <button className="btn btn-outline-info mb-2">Favorites</button>
        <button className="btn btn-outline-primary">Login</button>
      </div>
    </>
  );
}

export default Side;
