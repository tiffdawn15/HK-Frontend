// bring in React and Component instance from React
import React, { Component } from "react";


// define our Hello component
class Article extends Component {
  // what should the component render
  
  render() {
   
    // const {author, title, urlToImage, content} = article
    const {description, urlToImage, content} = this.props
  // console.log(this.props)
  // console.log(description)

    // Make sure to return some UI
    return(
        <div className="Header">
            <h1> {description} </h1>
            <image> {urlToImage} </image>
            <p> {content}</p>
            
        </div>
    ) 
    

  }
}

export default Article;

