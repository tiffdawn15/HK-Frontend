import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Router, Route, Switch, } from "react-router";
import { BrowserRouter as Link } from "react-router-dom";



//Importing my components 
import Header from "./Header"
import ArticleList from "./ArticleList"










const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`



class App extends Component {
  constructor(props) {
    super(props);

    this.State = {
      articles: [],
      loading: true,
      error: null
    }
  }


  componentDidMount() {
    this.fetchData()
  }
  

  fetchData = () => {
      fetch("https://hongkong34.herokuapp.com/")
      .then((res) => { return res.json()})
      .then((articles)  => this.setState({ articles, loading: false }))
      .then((error) => this.setState({ error, loading: false }))
      .then(err => console.log(err))

  }
  

     
  
      
render() {
 

  
    
  

  return (
    <Wrapper>
      <div className="App">

        <Header />

       <ArticleList {...this.state}/>

        


        {/* <Route
          path="/"
          exact
          render={() => {
            return this.state.articles.map((article, i) => {
              return (
                <Link to={"/" + article._id} key={i}>
                  <Article {...article} key={i} />
                </Link>
              );
            });
          }}
        /> */}
      


        {/* {articleJSX} */}




      </div>
    </Wrapper>
  )
}

}


export default App;
