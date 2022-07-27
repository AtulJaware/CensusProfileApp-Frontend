import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const UpdateAdmin = () => {
  const login = useSelector((state) => state.login.login);
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [admin, setAdmin] = useState({
    adminId: "",
    name: "",
    contact: "",
    email: "",
    password: "",
    role: "Admin"
  });

  //useEffect(callback function,[condition] )
  // get existing user details using id and update user state obj
  useEffect(() => {
    axios
      .get(`http://localhost:8081/admin/${params.id}`)
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy user details to newUser obj
    const newAdmin = { ...admin };

    //newUser.id =10;
    //newUser["id"] = 10;
    //update newUser object
    newAdmin[event.target.name] = event.target.value;

    // update user obj with newUser obj details
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/admin/update/${params.id}`, admin)
      .then((res) => {
        console.log(res);
        alert("Admin Updated with ID " + res.data.adminId + " successfully!");
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Admin</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="adminId" className="form-label float-start">
              Admin ID
            </label>
            <input
              type="text"
              className="form-control"
              id="adminId"
              value={admin.adminId}
              name="adminId"
              onChange={handleChange}
              disabled
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
              Contact No.
            </label>
            <input
              type="text"
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
            value={login.email}
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
            value={login.password}
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

export default UpdateAdmin;