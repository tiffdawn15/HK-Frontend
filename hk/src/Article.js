import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


const Wrapper = styled.section`
     border: 2px solid;
`


// define our Hello component
class Article extends Component {
  // what should the component render

  render() {

   
    return (

     
        <div>
           
            <a href={this.props.url}>{this.props.title}</a>
           
            <p>{this.props.content}</p>
               
        </div>
      

    )


  }
}

  export default Article;


 

  