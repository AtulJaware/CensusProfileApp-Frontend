import React, { Component } from 'react';
class Home extends Component {
    state = {
        count: 0,
      };
      render() {
        return (
          <div>
            <h1>Home Page</h1>
            <h5>count: {this.state.count}</h5>
          </div>
        );
      }
    }
    
    export default Home;