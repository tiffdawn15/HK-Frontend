// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';

//importing JSON. Remove this once the backend is finished 

// define our Hello component

//Adding styling for Nav bar. 

const UL = styled.ul`
  display: flex;
  justify-content: center;
`

const LI = styled.li`
   list-style-type: none;
   margin: 0;
   padding: 10px;
   flex-direction: row;
  
  

`

class Header extends Component {


  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div className="Header">
        <h1>Stand with Hong Kong </h1>
        <div className="nav-bar">
      
            <nav>

            </nav>
            <UL>
              <LI>Home</LI>
              <LI>Help</LI>
              <LI>Sign Up</LI>
            </UL>
        
        </div>
      </div>
    )


  }
}

export default Header;

// To do for this component: 
// Add Routes for the nav bar 