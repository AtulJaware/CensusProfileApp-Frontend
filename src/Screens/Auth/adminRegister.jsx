import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";

const AdminRegister = () => {
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
  const [errRes, setErrRes] = useState("");

  const schema = {
    name: Joi.string().alphanum().max(30).required(),
    contact: Joi.number().integer().min(10).required(),
    role: Joi.string().required(),
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
    const result = Joi.validate(admin, schema, {
      abortEarly: false,
    });
    console.log(result);
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
    axios
      .post(`http://localhost:8081/admin/register`, admin)
      .then((res) => {
        console.log(res);
        alert(
          "Admin Registered with Admin ID " +
            res.data.adminId +
            " successfully!"
        );
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-50 mx-auto mt-3">
      <p className="display-6">Admin Registration</p>
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
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label float-start">
            Contact No.
          </label>
          <input
            type="number"
            className="form-control"
            id="contact"
            name="contact"
            value={admin.contact}
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
            value={admin.email}
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
            value={admin.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Role</option>
          <option value="2">Admin</option>
        </select>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
