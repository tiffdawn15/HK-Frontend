// bring in React and Component instance from React
import React, { Component } from "react";
import styled, { ThemeProvider } from 'styled-components';

//Other Component 
import Article from "./Article"


//Start styling here 

// define our Hello component
class ArticleList extends Component {
  // what should the component render

  render() {
    

    return (

     
      // Article List is mapping through the data and sending it to the Article Component
     
         <div className="article-list">
                { this.props.articles.map( (article, index) => {
            return <Article
                      key={index} 
                      {...article}
                      handleRefresh={this.props.handleRefresh}
                      />
            })}
        </div>
      

    )


  }
}

  export default ArticleList;

