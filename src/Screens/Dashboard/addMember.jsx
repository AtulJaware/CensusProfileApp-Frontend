import React from "react";
import { useParams } from "react-router-dom";
import { ServiceCall } from "../../Services/ServiceMethod";
import { MemberApiConstant } from "../../Constants/ApiConstant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";

const AddMember = () => {
  const params = useParams();
  console.log(params);

  // Define state using useState
  let navigate = useNavigate();

  // define state
  const [mem, setMem] = useState({
    memId: "1",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    relationShip: "",
    qualification: "",
    marital_status: "",
    d_no: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const schema = {
    firstName: Joi.string().alphanum().max(30).required(),
    lastName: Joi.string().alphanum().max(30).required(),
    dob: Joi.date().iso().required(),
    gender: Joi.string().required(),
    memId: Joi.required(),
    relationShip: Joi.string().required(),
    qualification: Joi.string().required(),
    marital_status: Joi.string().required(),
    pincode: Joi.number().integer().required(),
    d_no: Joi.string().required(),
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
  };

  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(mem, schema, {
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
    // Call validate function
    // validate member details with schema
    setErrors(validate());

    if (errors) return;
    ServiceCall.postApi(MemberApiConstant.postMember, mem);
    navigate("/members");
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Add New Member</p>
        <form
          className="border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded"
          onSubmit={handleSubmit}
        >
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
            {errors && (
              <small className="text-danger">{errors.firstName}</small>
            )}
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
              value={mem.dob}
              name="dob"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.dob}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label float-start">
              Gender
            </label>
            <select
              type="text"
              className="form-control"
              aria-label="Default select example"
              id="gender"
              name="gender"
              value={mem.gender}
              onChange={handleChange}
            >
              <option value="">Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors && <small className="text-danger">{errors.gender}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="relationShip" className="form-label float-start">
              Relationship
            </label>
            <select
              type="text"
              className="form-control"
              aria-label="Default select example"
              id="relationShip"
              value={mem.relationShip}
              name="relationShip"
              onChange={handleChange}
            >
              <option value="">choose Relation</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Daughter">Daughter</option>
              <option value="Son">Son</option>
            </select>
            {errors && (
              <small className="text-danger">{errors.relationShip}</small>
            )}
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
            {errors && (
              <small className="text-danger">{errors.qualification}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="marital_status" className="form-label float-start">
              Marital Status
            </label>
            <select
              type="text"
              className="form-control"
              id="marital_status"
              value={mem.marital_status}
              name="marital_status"
              onChange={handleChange}
            >
              <option value="">Choose status</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
              <option value="Other">Other</option>
            </select>
            {errors && (
              <small className="text-danger">{errors.marital_status}</small>
            )}
          </div>
          <div>Address</div>
          <div className="mb-3">
            <label htmlFor="d_no" className="form-label float-start">
              Door no.
            </label>
            <input
              type="text"
              className="form-control"
              id="d_no"
              value={mem.d_no}
              name="d_no"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.d_no}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label float-start">
              Street Name
            </label>
            <input
              type="text"
              className="form-control"
              id="street"
              value={mem.street}
              name="street"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.street}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label float-start">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={mem.city}
              name="city"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.city}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label float-start">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={mem.state}
              name="state"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.state}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label float-start">
              Pincode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              value={mem.pincode}
              name="pincode"
              onChange={handleChange}
            />
            {errors && <small className="text-danger">{errors.pincode}</small>}
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
