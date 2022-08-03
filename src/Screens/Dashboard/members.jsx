import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MemberApiConstant } from "../../Constants/ApiConstant";
import { ServiceCall } from "../../Services/ServiceMethod";
import { StringConstant } from "../../Constants/StringConstant";
const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    ServiceCall.getApi(MemberApiConstant.memeberApi)
      .then((response) => {
        console.log(response);
        setMembers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="w-75 mx-auto">
      <h3 className="mt-4">Member's Data</h3>
      <Link to="/member/add" className="btn btn-primary float-end mb-2">
        Add New Member
      </Link>
      <table className="table w-100 border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
        <thead>
          <tr>
            <th>Member Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Qualification</th>
            <th>Relationship</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((mem) => (
            <tr key={mem.memId}>
              <td>{mem.memId}</td>
              <td>{mem.firstName}</td>
              <td>{mem.lastName}</td>
              <td>{mem.dob}</td>
              <td>{mem.gender}</td>
              <td>{mem.marital_status}</td>
              <td>{mem.qualification}</td>
              <td>{mem.relationShip}</td>
              <td>
                {mem.address.d_no +
                  " " +
                  mem.address.street +
                  " " +
                  mem.address.city +
                  " " +
                  mem.address.state +
                  " " +
                  mem.address.pincode}
              </td>
              <td>
                <Link to={`/member/update/${mem.memId}`}>
                  <i className="bi bi-pencil-square me-3" type="button"></i>
                </Link>
                <i
                  class="bi bi-trash3"
                  type="button"
                  onClick={() => {
                    if (window.confirm(StringConstant.deleteAlert)) {
                      ServiceCall.deleteApi(
                        MemberApiConstant.deleteMember(mem.memId)
                      );
                      alert(
                        "Member with Id " + mem.memId + " deleted successfully!"
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
export default Members;
