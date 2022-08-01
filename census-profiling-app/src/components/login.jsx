import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <form class="w-25 mx-auto border border-secondary rounded mt-4 p-2 shadow-lg p-3 mb-5 bg-body rounded">
          <p class="text-center fs-4 bg-secondary text-white">Login Form</p>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Role</option>
            <option value="1">User</option>
            <option value="2">Admin</option>
            <option value="3">Member</option>
          </select>
          <div class="d-grid gap-2 mt-3">
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;