import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const params = useParams();
  console.log(params);

  // Define state using useState
  let navigate = useNavigate();

  // define state
  const [user, setUser] = useState({
    id: "1",
    firstName: "",
    lastName: "",
    dob: "",
    contactNo: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy user details to newUser obj
    const newUser = { ...user };

    
    newUser[event.target.name] = event.target.value;

    // update user obj with newUser obj details
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/user`, user)
      .then((res) => {
        console.log(res);
        alert("User Added with ID " + res.data.id + " successfully!");
        navigate("/member/add");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-50 mx-auto mt-3">
      <p className="display-6">User Registration</p>
      <form className="border p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label float-start">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={user.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label float-start">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={user.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label float-start">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={user.dob}
            name="dob"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label float-start">
            Contact No.
          </label>
          <input
            type="number"
            className="form-control"
            id="contactNo"
            name="contactNo"
            value={user.contactNo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label float-start">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label float-start">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;