import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { UserApiConstant } from "../../Constants/ApiConstant";
import { UserServiceCall } from "../../Services/ServiceMethod";
import { StringConstant } from "../../Constants/StringConstant";
import UsersSearchTable from "../../components/UsersSearchTable";
import { Container, Button, Form, Row } from "react-bootstrap";
import { NOT_FOUND } from "../../Constants/StringConstant";

const Users = () => {
  const [users, setUsers] = useState([]);
  const searchInput = useRef();
  const searchAction = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [showUserstable, setShowUserstable] = useState(true);
  const [showSearchUser, setShowSearchUser] = useState(false);

  useEffect(() => {
    UserServiceCall.getApi(UserApiConstant.userApi)
      .then((response) => {
        console.log(response);
        setUsers(response.data);
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
      case "BY_ID":
        findById(searchInput.current.value);
        break;
      case "BY_EMAIL":
        findByEmail(searchInput.current.value);
      // default:
      //     alert("choose action to proceed");
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm(StringConstant.deleteAlert)) {
      UserServiceCall.deleteApi(UserApiConstant.deleteUser(userId))
        .then(() => {
          alert(StringConstant.userDeleted + userId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const findByLname = (name) => {
    setSearchResult([]);
    const searchRes = [];

    users.map((user) => {
      if (user.lastName == name) {
        searchRes.push(user);
      } else alert(NOT_FOUND.LAST + name);
    });
    setSearchResult(searchRes);
    setShowUserstable(false);
    setShowSearchUser(true);
  };

  const findByFname = (name) => {
    setSearchResult([]);
    const searchRes = [];
    users.map((user) => {
      if (user.firstName == name) {
        searchRes.push(user);
      } else alert(NOT_FOUND.FIRST + name);
    });
    setSearchResult(searchRes);
    setShowUserstable(false);
    setShowSearchUser(true);
  };


  const findByEmail = (name) => {
    setSearchResult([]);
    const searchRes = [];
    users.map((user) => {
      if (user.login.email == name) {
        searchRes.push(user);
      } else alert(NOT_FOUND.EMAIL + name);
    });
    setSearchResult(searchRes);
    setShowUserstable(false);
    setShowSearchUser(true);
  };


  const findByFnameDOB = (dob) => {
    setSearchResult([]);
    const searchRes = [];
    users.map((user) => {
      if (user.dob == dob) {
        searchRes.push(user);
      } else alert(NOT_FOUND.DOB + dob);
    });
    setSearchResult(searchRes);
    setShowUserstable(false);
    setShowSearchUser(true);
  };
  const findById = (userId) => {
    setSearchResult([]);
    const searchRes = [];
    users.map((user) => {
      if (user.userId == userId) {
        searchRes.push(user);
      } else alert(NOT_FOUND.ID + userId);
    });
    setSearchResult(searchRes);
    setShowUserstable(false);
    setShowSearchUser(true);
  };
  return (
    <div className="w-75 mx-auto">
      <h3 className="mt-4">User's Data</h3>
      <Link to="/user/add" className="btn btn-primary float-end mb-2">
        Add New User
      </Link>
      <table className="table w-100 border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
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
                  class="bi bi-trash3"
                  type="button"
                  onClick={() => {
                    handleDelete(user.userId);
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
            <option>Search User By</option>
            <option value="BY_FNAME">First Name</option>
            <option value="BY_LNAME">Last Name</option>
            <option value="BY_DOB">Date of Birth</option>
            <option value="BY_EMAIL">Email</option>
            <option value="BY_ID">User Id</option>
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
      {showSearchUser ? (
        <UsersSearchTable searchResult={searchResult} />
      ) : null}
    </div>
  );
};
export default Users;
