import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiConstant } from "../Constants/ApiConstant";
import { ServiceCall } from "../Services/applicationServiceMethod";

const Application = () => {
  const [application, setApplication] = useState([]);
  useEffect(() => {
    ServiceCall.getApi(ApiConstant.applicationApi)
      .then((response) => {
        console.log(response);
        setApplication(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-75 mx-auto">
      <h3 className="mt-4">Application Details</h3>
      <table className="table w-100 border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>User_id</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {application.map((app) => (
            <tr key={app.appid}>
              <td>{app.id}</td>
              <td>{app.status}</td>
              <td>{app.user_id}</td>
              <td>
                <Link to={`/application/update/${app.id}`}>
                  <i className="bi bi-pencil-square me-3" type="button"></i>
                </Link>
                <i
                  onClick={() => {
                    if (window.confirm("Are you sure you want to update")) {
                      ServiceCall.updateApi(
                        ApiConstant.updateapplication(app.appId)
                      );

                      alert(
                        "Application with Id " +
                          app.appId +
                          " updated successfully!"
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
export default Application;
