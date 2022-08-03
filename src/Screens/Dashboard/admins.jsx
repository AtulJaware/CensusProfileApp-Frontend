import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiConstant } from "../../Constants/ApiConstant";
import { ServiceCall } from "../../Services/ServiceMethod";
const Admins = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    ServiceCall.getApi(ApiConstant.adminApi)
      .then((response) => {
        console.log(response);
        setAdmins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-75 mx-auto">
      <h3 className="mt-4">Admin's Data</h3>
      <Link to="/admin/add" className="btn btn-primary float-end mb-2">
        Add New Admin
      </Link>
      <table className="table w-100 border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
        <thead>
          <tr>
            <th>Admin Id</th>
            <th> Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.adminId}>
              <td>{admin.adminId}</td>
              <td>{admin.name}</td>
              <td>{admin.contact}</td>
              <td>{admin.email}</td>
              <td>{admin.password}</td>
              <td>
                <Link to={`/admin/update/${admin.adminId}`}>
                  <i className="bi bi-pencil-square me-3" type="button"></i>
                </Link>
                <i
                  class="bi bi-trash3"
                  type="button"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete")) {
                      ServiceCall.deleteApi(
                        ApiConstant.deleteAdmin(admin.adminId)
                      );
                      alert(
                        "Admin with Id " + admin.adminId + " deleted successfully!"
                      );
                    }
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Admins;
