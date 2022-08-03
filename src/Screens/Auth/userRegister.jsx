import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ServiceCall } from "../../Services/RegisterServiceMethods";
import { UserApiConstant } from "../../Constants/ApiConstant";
import { registerAction } from "../../AppState/Actions/loginactions";
import { dispatch } from "react";
import Joi from "joi-browser";
import { dispatch } from "react";

const UserRegister = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    dob: "",
    contactNo: "",
    email: "",
    password: "",
    role: "User",
  });

  const [errors, setErrors] = useState({});
  const [errRes, setErrRes] = useState("");

  const schema = {
    firstName: Joi.string().alphanum().min(5).max(30).required(),
    lastName: Joi.string().alphanum().min(5).max(30).required(),
    contactNo: Joi.number().integer().max(10).required(),
    dob: Joi.date().iso().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
  };

  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(users, schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const userl = useSelector((state) => state.login.users);

  const handleChange = (event) => {
    const newUser = { ...users };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call validate function
    // validate login details with schema
    setErrors(validate());

    if (errors) return;

    // dispatch login action to rest api
    dispatch(registerAction(users));

    setTimeout(() => {
      if (userl.users.loggedIn) {
        ServiceCall.postApi(UserApiConstant.registerUser, users);
        navigate("/login");
      } else {
        console.log("*********" + userl.errMsg);
        setErrRes(userl.errMsg);
      }
    }, 1000);
  };
  console.log(users);
  return (
    <div className="w-75 mx-auto mt-4">
      <h1>Register Page</h1>
      {errRes && <p className="alert alert-danger">{errRes}</p>}
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
      >
        <p className="text-center fs-4 bg-secondary text-white">
          User Register Form
        </p>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label float-start">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={users.firstName}
            name="firstName"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.firstName}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label float-start">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={users.lastName}
            name="lastName"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.lastName}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label float-start">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={users.dob}
            name="dob"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.dob}</small>}
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
            value={users.contactNo}
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.contactNo}</small>}
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
            value={users.email}
            name="email"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.email}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label float-start">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={users.password}
            name="password"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.password}</small>}
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
export default UserRegister;
