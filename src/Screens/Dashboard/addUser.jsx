import React from "react";
import { useParams } from "react-router-dom";
import { ServiceCall } from "../../Services/RegisterServiceMethods";
import { UserApiConstant } from "../../Constants/ApiConstant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  //value,name,handleOnChange(),hanleSubmit
  //react hook methods-useState() - define state of component
  //useEffect - called at the time of page loading and when there is change in state
  const params = useParams();
  console.log(params);

  // Define state using useState
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    contactNo: "",
    dob: "",
    email: "",
    password: "",
    role: "User",
  });

  

  // define state
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy user details to newUser obj
    const newUser = { ...user };

    //update newEmp object
    newUser[event.target.name] = event.target.value;

    // update emp obj with newEmp obj details
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ServiceCall.postApi(UserApiConstant.postUser, user);
    navigate("/users");
  };

  console.log(user);
  return (
    <div>
      <h1>user page</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-50 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded"
        >
          <p className="text-center fs-4 bg-secondary text-white">
            Add New User
          </p>
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
