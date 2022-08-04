import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ServiceCall } from "../../Services/RegisterServiceMethods";
import { AdminApiConstant } from "../../Constants/ApiConstant";
import { registerAction } from "../../AppState/actions/loginactions";
import { dispatch } from "react";
import Joi from "joi-browser";
import { useParams } from "react-router-dom";

const AdminRegister = () => {
  const params = useParams();
  console.log(params);

  // Define state using useState
  const navigate = useNavigate();

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
    adminId: Joi.string().required(),
    name: Joi.string().alphanum().min(5).max(30).required(),
    contact: Joi.number().integer().min(10).required(),
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

    // ex: errors[username] = "username is required";

    // ex: errors[password] = "password is required";

    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const adminl = useSelector((state) => state.login.admins);
  const handleChange = (event) => {
    // copy admin details to newAdmin obj
    const newAdmin = { ...admin };
    newAdmin[event.target.name] = event.target.value;
    // update admin obj with newAdmin obj details
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // validate login details with schema

    // Call validate function
    setErrors(validate());

    if (errors) return;
    ServiceCall.postApi(AdminApiConstant.registerAdmin, admin)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setErrRes(adminl.errMsg);
      });
  };

  console.log(admin);

  return (
    <div className="w-50 mx-auto mt-3">
      <h1>Admin Register Page</h1>
      {errRes && <p className="alert alert-danger">{errRes}</p>}
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
          {errors && <small className="text-danger">{errors.name}</small>}
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
          {errors && <small className="text-danger">{errors.contact}</small>}
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
            value={admin.password}
            name="password"
            onChange={handleChange}
          />
          {errors && <small className="text-danger">{errors.password}</small>}
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
