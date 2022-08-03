import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../AppState/Actions/loginactions";

const Logout = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  console.log(login.email);
  useEffect(() => {
    dispatch(logoutAction(login.email));
  }, []);
  return (
    <div>
      <h1>
        Logged out successfully! click <Link to="/login">here</Link> to login
      </h1>
    </div>
  );
};

export default Logout;
