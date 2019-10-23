import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Router, Route, Switch,  } from "react-router";
import { BrowserRouter as Link } from "react-router-dom";




//Importing my components 
import Header from "./Header"
import ArticleList from "./ArticleList"
import Home from "./Home"
import Help from "./Help"










const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  background-color: #DE2810;
  color:#FFFFFD;


`



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
     
        <Switch>
        <Header />
        
        </Switch>


        <main>
        <Route path="/" exact render={state => <Home {...this.state}  handleRefresh={this.fetchData}/>}/>
        <Route path="/help" render component={Help}/>

        </main>


       

        



      </div>
    </Wrapper>
  )
}

}


export default App;
