// bring in React and Component instance from React
import React, { Component } from "react";

//importing JSON. Remove this once the backend is finished 

// define our Hello component
class Header extends Component {
  

  // what should the component render
  render() {
    // Make sure to return some UI
    return(
        <div className="Header">
            <h1>Stand with Hong Kong </h1>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Help</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </div>
    ) 
    

  }
}

export default Header;

// To do for this component: 
// Add Routes for the nav bar 