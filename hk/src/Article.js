import React, { Component } from "react";


// define our Hello component
class Article extends Component {
  // what should the component render

  render() {

   
    return (

     
        <div>
           
            <h2>{this.props.title}</h2>
           
            <p>{this.props.content}</p>
               
        </div>
      

    )


  }
}

  export default Article;


 

  