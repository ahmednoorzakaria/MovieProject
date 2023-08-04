import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar-margin" style={{ margin: "20px" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4">
        <Link className="navbar-brand" to="/">
          MOVIEFLIX
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
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
      </nav>
    </div>
  );
}

export default Navbar;
