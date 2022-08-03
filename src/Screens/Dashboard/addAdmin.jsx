import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminServiceCall } from "../../Services/ServiceMethod";
import { AdminApiConstant } from "../../Constants/ApiConstant";

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
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy mem details to newMem obj
    const newAdmin = { ...admin };

    newAdmin[event.target.name] = event.target.value;

    // update mem obj with newMem obj details
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
        AdminServiceCall.postApi(AdminApiConstant.postAdmin,admin)
        navigate("/admins");
      
  }
  
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Add New Admin</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label float-start">
              AdminId
            </label>
            <input
              type="text"
              className="form-control"
              id="adminId"
              value={admin.adminId}
              name="adminId"
              onChange={handleChange}
            />
          </div>
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
