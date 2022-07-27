import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Register extends Component{
  state = {};

  render() { 
        return (

  <div className="w-25 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded">
    <h2 className="mb-4"><b>Register</b></h2>
    <div className="text-center w-75 mx-auto">
        <Link to="/register/admin" className="btn btn-primary me-4 mt-2 mb-4">
              Admin</Link>
        <Link to="/register/user" className="btn btn-primary ms-4 mt-2 mb-4">
              User</Link>
          </div>

  </div>
          
        );
  }
}
export default Register;