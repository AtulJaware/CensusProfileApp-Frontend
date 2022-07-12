import React, { Component } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Register = () => { 

    const [ user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    contactNo: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    //console.log(event);
    console.log(event.target.name); // field name
    console.log(event.target.value); // filed value

    const newUser = {};
    newUser[event.target.name] = event.target.value;
    setUser(()=>user, newUser);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/user`, user)
      .then((res) => {
        console.log(res);
        alert("User Added with ID " + res.data.id + " successfully!");
      })
      .catch((error) => console.log(error));
  };
  console.log(user);
  return (
    <div className="w-50 mx-auto mt-3">
      <p className="display-6">User Registration</p>
      <form className="border p-3">
        <div className="mb-3">
          <label htmlFor="id" className="form-label float-start">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={user.id}
            name="id"
            onChange={handleChange}
          />
        </div>
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