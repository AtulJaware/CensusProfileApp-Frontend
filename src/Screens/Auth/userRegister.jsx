import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ServiceCall } from "../../Services/RegisterServiceMethods";
import { UserApiConstant } from "../../Constants/ApiConstant";

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

  const userl = useSelector((state) => state.login.users);

  const handleChange = (event) => {
    const newUser = { ...users };
    newUser[event.target.name] = event.target.value;
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ServiceCall.postApi(UserApiConstant.registerUser, users);
    navigate("/login");
  };
  console.log(users);
  return (
    <div>
      <h1>Register Page</h1>
      <div>
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
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UserRegister;
