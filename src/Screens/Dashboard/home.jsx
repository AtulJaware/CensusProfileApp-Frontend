//class component
import React, { Component } from "react";

class Home extends Component {
  state = {
   count: 0,
  };
  render() {
    return (
      <div>
        <h2>Home page</h2>
      </div>
    );
  }
}

export default Home;