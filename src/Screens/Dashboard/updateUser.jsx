import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserServiceCall } from "../../Services/ServiceMethod";
import { UserApiConstant } from "../../Constants/ApiConstant";

const UpdateUser = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [user, setUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    dob: "",
    contactNo: "",
    login: {
      email: "",
      password: "",
    },
  });

  //useEffect(callback function,[condition] )
  // get existing user details using id and update user state obj
  useEffect(() => {
    UserServiceCall.getApi(UserApiConstant.getUser(params.id)).then(
      (response) => setUser(response.data)
    );
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy user details to newUser obj
    const newUser = { ...user };

    //newUser.id =10;
    //newUser["id"] = 10;
    //update newUser object
    newUser[event.target.name] = event.target.value;

    // update user obj with newUser obj details
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UserServiceCall.putApi(UserApiConstant.putUser(params.id), user)
      .then(() => {
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update User</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="useId" className="form-label float-start">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={user.userId}
              name="userId"
              onChange={handleChange}
              disabled
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
              type="text"
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
              value={user.login.email}
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
              value={user.login.password}
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
