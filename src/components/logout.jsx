import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginServiceCall } from "../Services/ServiceMethod";
import { LoginApiConstant } from "../Constants/ApiConstant";

const Logout = () => {
  const login = useSelector((state) => state.login.login);
  console.log(login.email);
  useEffect(() => {
    LoginServiceCall.patchApi(LoginApiConstant.patchLogin(login.email));
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
