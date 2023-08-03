import React from "react";
import "./index.css";
import Dropdown from 'react-bootstrap/Dropdown';

function Side() {
  return (
    <aside className="sidenav">
      <div className="side-content">
        <h1 className="display-4">Movieflix</h1>
        <div className="btn-group-vertical mt-4">
          <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="genres-dropdown">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Horror</Dropdown.Item>
              <Dropdown.Item>War</Dropdown.Item>
              <Dropdown.Item>Adventure</Dropdown.Item>
              <Dropdown.Item>Comedy</Dropdown.Item>
              <Dropdown.Item>Crime</Dropdown.Item>
              <Dropdown.Item>Documentary</Dropdown.Item>
              <Dropdown.Item>Drama</Dropdown.Item>
              <Dropdown.Item>Family</Dropdown.Item>
              <Dropdown.Item>Fantasy</Dropdown.Item>
              <Dropdown.Item>History</Dropdown.Item>
              <Dropdown.Item>Animation</Dropdown.Item>
              <Dropdown.Item>Music</Dropdown.Item>
              <Dropdown.Item>Mystery</Dropdown.Item>
              <Dropdown.Item>Romance</Dropdown.Item>
              <Dropdown.Item>Science Fiction</Dropdown.Item>
              <Dropdown.Item>TV Movie</Dropdown.Item>
              <Dropdown.Item>Thriller</Dropdown.Item>
              <Dropdown.Item>Western</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
