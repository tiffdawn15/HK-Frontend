// bring in React and Component instance from React
import React, { Component } from "react";

// define our Hello component
class Email extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return(
        <div className="Header">
            <h1>Signup for Email Updates </h1>
            <div className="Form">
                <form>
                    <label>
                        <input type="text" name="name">Name</input>
                        <input type="email" name="email">Email</input>
                    </label>
                    <input type="button" name="button">Submit</input>

                </form>
            </div>
            
        </div>
    ) 
    

  }
}

export default Email;

// To do for this component: 
// Add Routes for the nav bar 