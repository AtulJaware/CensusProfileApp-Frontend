import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ScreenName } from "../Routes/screenName";
import { AppConstant } from "../Constants/AppConstant";
const Bar = () => {
  const login = useSelector((state) => state.login.login);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <b>{AppConstant.AppName}</b>
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
                <i class="bi bi-house-fill"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/members">
                Members
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                <i class="bi bi-person-circle"></i>
                Users
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {login.loggedIn ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to={ScreenName().LOGIN_SCREEN} className="nav-link">
                  <i class="bi bi-power"></i>
                  Login
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
