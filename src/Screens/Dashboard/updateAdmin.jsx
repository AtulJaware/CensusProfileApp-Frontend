import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AdminApiConstant } from "../../Constants/ApiConstant";
import { AdminServiceCall } from "../../Services/ServiceMethod";

const UpdateAdmin = () => {
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
    role: "Admin",
  });

  //useEffect(callback function,[condition] )
  // get existing admin details using id and update admin state obj
  useEffect(() => {
    AdminServiceCall.getApi(AdminApiConstant.getAdmin(params.adminId)).then((response)=>setAdmin(response.data))
  }, []);
  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

    // copy admin details to newadmin obj
    const newAdmin = { ...admin };

    //newAdmin.id =10;
    //newAdmin["id"] = 10;
    //update newAdmin object
    newAdmin[event.target.name] = event.target.value;

    // update admin obj with newAdmin obj details
    setAdmin(newAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    AdminServiceCall.putApi(AdminApiConstant.putAdmin(params.adminId),admin);
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Admin</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label float-start">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              value={admin.Name}
              name="Name"
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
              email
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
              password
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
          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </div>
          </form>
          </div>
          </div>

  );
};

export default UpdateAdmin;
