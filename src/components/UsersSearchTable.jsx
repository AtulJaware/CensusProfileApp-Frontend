import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { StringConstant } from "../Constants/StringConstant";
import { UserApiConstant } from "../Constants/ApiConstant";
import { ServiceCall } from "../Services/ServiceMethod";

const UsersSearchTable = ({ searchResult }) => {
  const handleDelete = (userId) => {
    if (window.confirm(StringConstant.deleteAlert)) {
      ServiceCall.deleteApi(UserApiConstant.deleteUser(userId))
        .then(() => {
          alert(StringConstant.userDeleted + userId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <h3>Search Result</h3>
      <Table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResult &&
            searchResult.map((user) => {
              return (
                <tr>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dob}</td>
                  <td>{user.contactNo}</td>
                  <td>{user.login.email}</td>
                  <td>
                    <Link to={`/user/update/${user.userId}`}>
                        <i className="bi bi-pencil-square me-3" type="button"></i>
                    </Link>
                    <i
                        className="bi bi-trash3"
                        type="button"
                        onClick={() => {handleDelete(user.userId)}}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default UsersSearchTable;