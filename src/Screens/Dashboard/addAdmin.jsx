import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminServiceCall } from "../../Services/ServiceMethod";
import { AdminApiConstant } from "../../Constants/ApiConstant";
import Joi from "joi-browser";
const AddAdmin = () => {
  const params = useParams();
  console.log(params);

  // Define state using useState
  let navigate = useNavigate();

  // define state
  const [admin, setAdmin] = useState({
    adminId: "1",
    name: "",
    contact: "",
    email: "",
    password: "",
    role: "Admin",
  });
  const [errors, setErrors] = useState({});
  
const schema = {
    adminId: Joi.string().required(),
    name: Joi.string().alphanum().max(30).required(),
    contact: Joi.number().integer().max(9999999999).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  };
const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(admin, schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[adminname] = "adminname is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy admin details to newAdmin obj
    const newAdmin = { ...admin };

    newAdmin[event.target.name] = event.target.value;

    // update admin obj with newAdmin obj details
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
       // Call validate function
    // validate login details with schema
    setErrors(validate())
    if (errors) return;
        AdminServiceCall.postApi(AdminApiConstant.postAdmin,admin).then (()=>{
navigate("/admins");
}).catch(error=>{console.log("Error")})
      
  }
  
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Add New Admin</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label float-start">
               Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={admin.name}
              name="name"
              onChange={handleChange}
            />
            {errors && (
              <small className="text-danger">{errors.name}</small>

            )}
          </div>
           <div className="mb-3">
            <label htmlFor="contact" className="form-label float-start">
            Contact
            </label>
            <input
              type="number"
              className="form-control"
              id="contact"
              value={admin.contact}
              name="contact"
              onChange={handleChange}
            />
            {errors && (

              <small className="text-danger">{errors.contact}</small>

            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label float-start">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={admin.email}
              name="email"
              onChange={handleChange}
            />
            {errors && (

              <small className="text-danger">{errors.email}</small>

            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label float-start">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
              value={admin.password}
              onChange={handleChange}
            />
            {errors && (

              <small className="text-danger">{errors.password}</small>

            )}
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddAdmin;
