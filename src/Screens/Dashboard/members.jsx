import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MemberApiConstant } from "../../Constants/ApiConstant";
import { ServiceCall } from "../../Services/ServiceMethod";
import { StringConstant } from "../../Constants/StringConstant";
import MembersSearchTable from "../../components/MembersSearchTable";
import { Container, Button, Form, Row } from "react-bootstrap";
import { NOT_FOUND } from "../../Constants/StringConstant";

const Members = () => {
  const [members, setMembers] = useState([]);
  const searchInput = useRef();
  const searchAction = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [showMemberstable, setShowMemberstable] = useState(true);
  const [showSearchMember, setShowSearchMember] = useState(false);

  useEffect(() => {
    ServiceCall.getApi(MemberApiConstant.memeberApi)
      .then((response) => {
        console.log(response);
        setMembers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePerformClick = () => {
    console.log(
      "perforam profile",
      searchInput.current.value,
      searchAction.current.value
    );
    switch (searchAction.current.value) {
      case "BY_LNAME":
        findByLname(searchInput.current.value);
        break;
      case "BY_FNAME":
        findByFname(searchInput.current.value);
        break;
      case "BY_DOB":
        findByFnameDOB(searchInput.current.value);
        break;
      // default:
      //     alert("choose action to proceed");
    }
  };

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

  const findByLname = (name) => {
    setSearchResult([]);
    const searchRes = [];

    members.map((mem) => {
      if (mem.lastName == name) {
        searchRes.push(mem);
      } else alert(NOT_FOUND.LAST + name);
    });
    setSearchResult(searchRes);
    setShowMemberstable(false);
    setShowSearchMember(true);
  };

  const findByFname = (name) => {
    setSearchResult([]);
    const searchRes = [];
    members.map((mem) => {
      if (mem.firstName == name) {
        searchRes.push(mem);
      } else alert(NOT_FOUND.FIRST + name);
    });
    setSearchResult(searchRes);
    setShowMemberstable(false);
    setShowSearchMember(true);
  };

  const findByFnameDOB = (dob) => {
    setSearchResult([]);
    const searchRes = [];
    members.map((mem) => {
      if (mem.dob == dob) {
        searchRes.push(mem);
      } else alert(NOT_FOUND.DOB + dob);
    });
    setSearchResult(searchRes);
    setShowMemberstable(false);
    setShowSearchMember(true);
  };
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
            <th>Relation</th>
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
                    handleDeleteBtm(mem.memId);
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Container>
        <Row className="mx-1">
          <Form.Select className="w-25 mx-0" inline ref={searchAction}>
            <option>Search Member By</option>
            <option value="BY_FNAME">First Name</option>
            <option value="BY_LNAME">Last Name</option>
            <option value="BY_DOB">Date of Birth</option>
          </Form.Select>
          &nbsp;&nbsp;
          <Form.Control
            type="text"
            placeholder="text here..."
            className="w-25"
            ref={searchInput}
          />
          &nbsp;&nbsp;
          <Button
            variant="success"
            className="w-25"
            onClick={handlePerformClick}
          >
            Search
          </Button>
        </Row>
      </Container>
      <br />
      {showSearchMember ? (
        <MembersSearchTable searchResult={searchResult} />
      ) : null}
    </div>
  );
};
export default Members;
