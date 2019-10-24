import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';


//Styled sections. 

const Wrapper = styled.section`
       
    padding: 20px 20px 0px;
    
    justify-content: left;

    border: 2px solid;
    border-radius: 25px;
     padding: 20px 20px 20px;
     margin: 50px 100px 0px; 
     display: flex;
     font-family: 'Dosis', sans-serif;
    
     
`

const Editorial = styled.section`

    padding: 5px 5px 0px;
  
    
`

const Img= styled.img`
    justify-content: right;
    height: 200px;
    border-radius: 5px;
    max-width: 350px;
    
 
`

const A = styled.a` 
    font-size: 30px;
    color: #4FB0B7;
`

const P = styled.p`
    font-size: 18px;
    padding: 10px;
`





// define our Hello component
class Article extends Component {
  // what should the component render

  render() {

   
    return (

     
        <div>
           
            {/* I want the image to float left of the title and content */}
            <Wrapper> 
            
            <Img src={this.props.urlToImage} alt="article-photo"></Img>
            <Editorial>
            
            <A href={this.props.url}>{this.props.title}</ A>
            <P>{this.props.content}</P>
            
            
               

            </Editorial>  
            </Wrapper>
           
        </div>
      

    )


  }
}

  export default Article;


 

  