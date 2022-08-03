import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AdminServiceCall } from "../../Services/ServiceMethod";
import { AdminApiConstant } from "../../Constants/ApiConstant";
import { StringConstant } from "../../Constants/StringConstant";
class Admins extends Component {
  state = {
    admins: [],
  };
  componentDidMount() {
    // send get request
    AdminServiceCall.getApi(AdminApiConstant.getAdmins)
      .then((response) => {
        console.log(response);
        this.setState({ admins: response.data });
      })
      .catch((error) => console.log(error));
  }
  // Delete admin
  handleDelete = (id) => {
    // http://localhost:9002/admin/{id}
    if (window.confirm(StringConstant.deleteAlert)) {
      AdminServiceCall.deleteApi(AdminApiConstant.deleteAdmin(id))
        .then((response) => {
          console.log(response);
          // return all admins except admin which is selected for delete
          const admin = this.state.admins.filter((admin) => admin.adminId !== id);

          // update state object with admins
          this.setState({ admins: admin });
          alert("Admin with Id " + id + " deleted successfully!");
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <h3 className="mt-4">Admin's Data</h3>
        <Link to="/admin/add" className="btn btn-primary float-end mb-2">
        Add New Admin
      </Link>
        <table className="table w-75 mx-auto border border-secondary rounded mt-4 p-2 shadow p-3 mb-5 bg-body rounded">
          <thead>
            <tr>
              <th>Admin Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.admins.map((admin) => (
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
                    onClick={() => this.handleDelete(admin.adminId)}
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

export default Admins;
