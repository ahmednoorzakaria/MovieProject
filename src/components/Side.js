import React from "react";

function Side() {
  return (
    <>
      <img
        className="logo"
        src="https://i.pinimg.com/236x/b0/dc/e5/b0dce57c83c13bb8b3356bcdb62242e8.jpg"
        alt="Your logo"
      />
      <div id="heading">
        <h1>Movieflix</h1>
      </div>
      <div id="sub-heading">
        <button className="select">Genres</button>
        <button className="select">Trending</button>
        <button className="select">Upcoming</button>
        <button className="select">Favorites</button>
        <button className="login">Login</button>
      </div>
    </>
  );
}

export default Side;
