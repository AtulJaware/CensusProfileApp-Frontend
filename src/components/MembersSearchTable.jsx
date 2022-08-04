import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { StringConstant } from "../Constants/StringConstant";
import { MemberApiConstant } from "../Constants/ApiConstant";
import { ServiceCall } from "../Services/ServiceMethod";

const MembersSearchTable = ({ searchResult }) => {
  const handleDeleteBtm = (memId) => {
    if (window.confirm(StringConstant.deleteAlert)) {
      ServiceCall.deleteApi(MemberApiConstant.deleteMember(memId))
        .then(() => {
          alert(StringConstant.memberDeleted + memId);
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
            <th>Member Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Marital Status</th>
            <th>Qualification</th>
            <th>Relation</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searchResult &&
            searchResult.map((mem) => {
              return (
                <tr>
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
                      <Button variant="success">Edit</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button
                      variant="success"
                      onClick={() => {
                        handleDeleteBtm(mem.memId);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default MembersSearchTable;
