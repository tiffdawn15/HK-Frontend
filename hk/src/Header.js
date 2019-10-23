// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { Router, Route, Switch,  } from "react-router";

import {  Link } from "react-router-dom";




//Adding styling for Nav bar. 

const UL = styled.ul`
  display: flex;
  justify-content: center;
`

const li = styled.li`
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

         
        
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/help">
                <li>Help</li>
              </Link>
              <Link to="/sign-up">
                <li>Sign Up</li>
              </Link>

            </ul>
         
          </nav>

       
      </div>
    )


  }
}

export default Header;

//Don't need an anchor tab 
//Need to pass Props down. 