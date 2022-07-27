import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <b>Census Profiling Application</b>
        </NavLink>
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
              <NavLink className="nav-link" aria-current="page" to="/home">
                Home
              </NavLink>
            </li>
            {login.loggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/members">
                Members
              </NavLink>
            </li>
            )}
            {login.loggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </li>
            )}
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
            {login.loggedIn ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  <i className="bi bi-power"></i> <br></br>
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  <i className="bi bi-unlock-fill"></i><br></br>
                  Login
                </NavLink>
              </li>
            )}
            {login.loggedIn ? (
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  <i className="bi bi-person-square"></i><br></br>
                  Profile
                </NavLink>
              </li>
            ) : (
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                <i className="bi bi-person-plus-fill"></i> <br></br>
                Register
              </NavLink>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;