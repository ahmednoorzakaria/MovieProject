import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar-margin" style={{ margin: "20px" }}>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4">
        <Link className="navbar-brand" to="/">
          MOVIEFLIX
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/movies"
                activeClassName="active"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/series"
                activeClassName="active"
              >
                Series
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-margin"></div>
      </nav>
    </div>
  );
}

export default Navbar;
