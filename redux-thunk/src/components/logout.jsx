import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions/loginactions";
import { useDispatch, useSelector } from "react-redux";

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