// imrc - imports both React and Component from react module
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// cc - create class
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home"><b>Census Profiling Application</b></NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                  Home
                  </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/members">
                Members
              </NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">About us</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink></li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink></li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/faq">FAQ</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;