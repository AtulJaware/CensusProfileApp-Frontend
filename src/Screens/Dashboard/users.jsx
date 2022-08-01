import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Users extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    // send get request
    axios
      .get("http://localhost:9002/users")
      .then((response) => {
        console.log(response);
        this.setState({ users: response.data });
      })
      .catch((error) => console.log(error));
  }
  // Delete user
  handleDelete = (id) => {
    // http://localhost:9002/user/{id}
    axios
      .delete(`http://localhost:9002/user/delete/${id}`)
      .then((res) => {
        console.log(res);
        // return all users except user which is selected for delete
        const user = this.state.users.filter((user) => user.userId !== id);

        // update state object with users
        this.setState({ users: user });
        alert("User with Id " + id + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <h3 className="mt-4">User's Data</h3>
        <table className="table w-75 mx-auto border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Contact No.</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
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
                    onClick={() => this.handleDelete(user.userId)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
