// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


import { Link } from "react-router-dom";




//Adding styling for Nav bar. 

const Wrapper = styled.section`
  background-color: #DE2810;
  margin: 0 auto;
  font-family: 'Dosis', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100vw;
  padding: 0px 0px;
`



const H1 = styled.h1`
  font-size: 32px;
  padding: 0px 20px;
`

const Img = styled.img`
  float: left;
  height: 100px;
  
  `
const UL = styled.ul`
display: flex;

padding: 20px;


`
const Li = styled.li`
   list-style-type: none;
   margin: 0;
   padding: 10px;
   flex-direction: row;
   color: white;
   font-size: 26px;
  
  
  

`

class Header extends Component {


  // what should the component render
  render() {
    // Make sure to return some UI
    return (
      <div className="Header">
        <Wrapper>
          <H1>Stand with Hong Kong </H1>
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/200px-Flag_of_Hong_Kong.svg.png" alt="flag"></Img>


          <nav>



            <UL>
              <Link to="/">
                <Li>Home</Li>
              </Link>
              <Link to="/help">
                <Li>Help</Li>
              </Link>
              <Link to="/contact">
                <Li>Contact</Li>
              </Link>

            </UL>

          </nav>

        </Wrapper>
      </div>
    )


  }
}

export default Header;

