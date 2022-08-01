import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const params = useParams();
  console.log(params);

  // Define state using useState
  let navigate = useNavigate();

  // define state
  const [mem, setMem] = useState({
    memId:"1",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    relationShip: "",
    qualification: "",
    marital_status: "",
  });
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy mem details to newMem obj
    const newMem = { ...mem };

    
    newMem[event.target.name] = event.target.value;

    // update mem obj with newMem obj details
    setMem(newMem);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8081/member/add`, mem)
      .then((res) => {
        console.log(res);
        alert("Member Added with ID " + res.data.memId + " successfully!");
        navigate("/members");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Add New Member</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label float-start">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={mem.firstName}
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
              value={mem.lastName}
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
              value={mem.dob}
              name="dob"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label float-start">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={mem.gender}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="relationShip" className="form-label float-start">
              Relationship
            </label>
            <input
              type="text"
              className="form-control"
              id="relationShip"
              value={mem.relationShip}
              name="relationShip"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="qualification" className="form-label float-start">
              Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="qualification"
              value={mem.qualification}
              name="qualification"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marital_status" className="form-label float-start">
              Marital Status
            </label>
            <input
              type="text"
              className="form-control"
              id="marital_status"
              value={mem.marital_status}
              name="marital_status"
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
export default AddMember;