// bring in React and Component instance from React
import React, { Component } from "react";


// define our Hello component
class Article extends Component {
  // what should the component render

  render() {

    // const {author, title, urlToImage, content} = article
    // const {description, urlToImage, content} = this.props
    if (this.props.render) {



      // Make sure to return some UI
      return (



        <div className="Article">
         <h1> {this.props.title} </h1> 
          
          <img className="article-photo" src={this.props["urlToImage"]} alt={this.props.title} /> 
          <p> {this.props.content}</p>

        </div>
      )


    }

  }
}

export default Article;

