import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class Users extends Component {
    state = {  
        users: [],
        };
        componentDidMount() {
          // send get request
          axios
            .get("http://localhost:8081/user")
            .then((response) => {
              console.log(response);
              this.setState({ users: response.data });
            })
            .catch((error) => console.log(error));
  };
      // Delete user
  handleDelete = (id) => {
    // http://localhost:8081/user/{id}
    axios
      .delete(`http://localhost:8081/user/${id}`)
      .then((res) => {
        console.log(res);
        // return all users except user which is selected for delete
        const user = this.state.users.filter((user) => user.id !== id);

        // update state object with users
        this.setState({ users: user });
        alert("User with Id " + id + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };
    render() { 
        return (
            <div className="w-75 mx-auto">
            <h4 className="mt-4">User's Data</h4>
            <Link to="/register" className="btn btn-primary float-end mb-2">
              Add New User</Link>
            <table className="table w-75 mx-auto">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Date of Birth</td>
                  <td>Contact No.</td>
                  <td>Email</td>
                  <td>Password</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.dob}</td>
                    <td>{user.contactNo}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><Link to={`/user/update/${user.id}`}>
                      <i className="bi bi-pencil-square me-3"
                            type="button"></i></Link>
                  <i className="bi bi-trash-fill"
                  type="button"
                  onClick={() => this.handleDelete(user.id)} ></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}
 
export default Users;