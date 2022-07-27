import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const login = useSelector((state) => state.login.login);
  console.log(login);
  const [admin, setAdmin] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    if (login.role === "Admin") {
      axios
        .get(`http://localhost:8081/admin/email/${login.email}`)
        .then((res) => setAdmin(res.data))
        .catch((err) => console.log(err));
    }
    axios
      .get(`http://localhost:8081/user/email/${login.email}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(admin);
  console.log(user);

  return (
    <div>
      <div className="container mt-5">
        <div className="card w-50 mx-auto">
          <div className="d-flex justify-content-between card-header">
            <h5>
              <i className="bi bi-person-lines-fill"></i> Personal Details
            </h5>
            <h5>
              {login.role == "User" ? (
                <Link to={`/user/update/${user.userId}`}>
                  <i className="bi bi-pencil-square" type="button"></i>
                </Link>
              ) : (
                <Link to={`/admin/update/${admin.adminId}`}>
                  <i className="bi bi-pencil-square" type="button"></i>
                </Link>
              )}
            </h5>
          </div>
          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name: </b>
                  </td>
                  <td className="ps-3">
                    {admin.name || user.firstName + " " + user.lastName}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Role: </b>
                  </td>
                  <td className="ps-3">{login.role || login.role}</td>
                </tr>
                <tr>
                  <td>
                    <b>Contact: </b>
                  </td>
                  <td className="ps-3">{admin.contact || user.contactNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Email: </b>
                  </td>
                  <td>{login.email}</td>
                </tr>
                <tr>
                  <td>
                    <b>Date of Birth: </b>
                  </td>
                  <td className="ps-3">{admin.dob || user.dob}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
