import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Address extends Component {
  state = {
    members: [],
  };
  componentDidMount() {
    // send get request
    axios
      .get(`http://localhost:8081/address/87`)
      .then((response) => {
        console.log(response);
        this.setState({ members: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="w-75 mx-auto">
        <h3 className="mt-4">Address</h3>
        <table className="table w-100 border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
          <thead>
            <tr>
              <th>Address Id</th>
              <th>Door No.</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.state.members.map((mem) => (
              <tr key={mem.id}>
                <td>{mem.id}</td>
                <td>{mem.d_no}</td>
                <td>{mem.street}</td>
                <td>{mem.city}</td>
                <td>{mem.state}</td>
                <td>{mem.pincode}</td>
                <td>
                  <Link to={`/member/update/${mem.memId}`}>
                    <i className="bi bi-pencil-square me-3" type="button"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Address;
