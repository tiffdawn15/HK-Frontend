// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


import { BrowserRouter as Link } from "react-router-dom";

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
        

          <nav>

         
        
            <UL>
              <Link to="/">
                <LI>Home</LI>
              </Link>
              <Link to="/help">
                <LI>Help</LI>
              </Link>
              <Link to="/sign-up">
                <LI>Sign Up</LI>
              </Link>

            </UL>
         
          </nav>

       
      </div>
    )


  }
}

export default Header;

