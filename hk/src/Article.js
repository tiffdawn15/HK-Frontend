// bring in React and Component instance from React
import React, { Component } from "react";



// define our Hello component
class Article extends Component {
  // what should the component render
  render() {
    // Make sure to return some UI
    return(
        <div className="Header">
            <h1>Title of Article </h1>
            <p>Webiste it is from</p>
            <p>Date posted</p>
            <p>Image </p>
            <p>Article</p>
            
        </div>
    ) 
    

  }
}

export default Article;

// To do for this component: 
// Add Routes for the nav bar 
//Add props so 