import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


const Div = styled.div`
     
    `

const Wrapper = styled.section`
       height: 200px; 
    padding: 20px 20px 0px;
    
    justify-content: left;

    border: 2px solid;
     padding: 20px 20px 10px;
     margin: 50px 50px 0px; 
     display: flex;
    
     
`

const Editorial = styled.section`

    padding: 5px 5px 0px;
  
    
`

const Img= styled.img`
    justify-content: right;
    height: 200px;
    border-radius: 5px;
    width: 200px;
    
 
`

const A = styled.a` 
    font-size: 30px;
    color: #097280;
`






// define our Hello component
class Article extends Component {
  // what should the component render

  render() {

   
    return (

     
        <Div>
           
            {/* I want the image to float left of the title and content */}
            <Wrapper> 
            
            <Img src={this.props.urlToImage} alt="article-photo"></Img>
            <Editorial>
            
            <A href={this.props.url}>{this.props.title}</ A>
            <p>{this.props.content}</p>
            
            
               

            </Editorial>  
            </Wrapper>
           
        </Div>
      

    )


  }
}

  export default Article;


 

  