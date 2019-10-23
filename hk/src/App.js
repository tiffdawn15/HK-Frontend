import React, { Component } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Router, Route, Switch, } from "react-router";
import { BrowserRouter as Link } from "react-router-dom";



//Importing my components 
import Header from "./Header"
import Article from "./Article"

//Importing data - Remove this once the backend is working. 
// import HK from "./hk.json"

// const article1 =
// {
//   "source": {
//     "id": "the-new-york-times",
//     "name": "The New York Times"
//   },
//   "author": "Scott Cacciola",
//   "title": "LeBron James Says Executive Was ‘Misinformed’ in China Tweet",
//   "description": "The Lakers star said he believed Daryl Morey’s choice to post about protests in Hong Kong could have endangered traveling players.",
//   "url": "https://www.nytimes.com/2019/10/14/sports/basketball/lebron-james-china.html",
//   "urlToImage": "https://static01.nyt.com/images/2019/10/14/sports/14lebron-lede/14lebron-lede-facebookJumbo.jpg",
//   "publishedAt": "2019-10-15T03:48:59Z",
//   "content": "James, like many star players in the N.B.A., has large business interests in China through sponsors like Nike. He declined to offer his views of the political situation in China, saying he did not know enough about it to offer an informed opinion.\r\nFor me per… [+1029 chars]"
// }
// const article2 =
// {
//   "source": {
//     "id": null,
//     "name": "Heise.de"
//   },
//   "author": null,
//   "title": "Hongkong-Proteste: Apple-Chef verteidigt Rauswurf von Hongkong-Map-App",
//   "description": "Die App, die Polizeiaktivitäten rund um die Proteste in Hongkong auflistet, wurde für Verbrechen eingesetzt, so Tim Cook. Das Memo stößt auf scharfe Kritik.",
//   "url": "https://www.heise.de/mac-and-i/meldung/Hongkong-Proteste-Apple-Chef-verteidigt-Rauswurf-von-Hongkong-Map-App-4553384.html?wt_mc=rss.ho.beitrag.atom",
//   "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/2/7/6/6/4/7/2/Bildschirmfoto_2019-10-11_um_14-f69d2d674f747008.png",
//   "publishedAt": "2019-10-11T12:13:00Z",
//   "content": "Apple-Chef Tim Cook hat den Rauswurf der HKmap-App aus dem App Store gegenüber Mitarbeitern gerechtfertigt. Er wolle die Beweggründe für die Entscheidung aus \"Respekt vor der Arbeit\" der Angestellten mit diesen teilen, schreibt Cook in dem an die Öffentlichke… [+2325 chars]"
// }
// const article3 =
// {
//   "source": {
//     "id": "spiegel-online",
//     "name": "Spiegel Online"
//   },
//   "author": "SPIEGEL ONLINE",
//   "title": "Proteste in Hongkong: Per Notstandsgesetz - Regierung in Hongkong verbietet Vermummung",
//   "description": "In Hongkong dürfen sich Demonstranten künftig nicht mehr mit Masken schützen. Um das Vermummungsverbot durchzusetzen, beruft sich die Regierung auf ein Gesetz der einstigen britischen Kolonialherren.",
//   "url": "https://www.spiegel.de/politik/ausland/hongkong-regierung-nutzt-notstandsgesetz-fuer-vermummungsverbot-a-1289929.html",
//   "urlToImage": "https://cdn1.spiegel.de/images/image-1475883-860_poster_16x9-tflx-1475883.jpg",
//   "publishedAt": "2019-10-04T08:26:39Z",
//   "content": "Freitag, 04.10.2019  \r\n10:26 Uhr\r\nDie Proteste in Hongkong reißen nicht ab. Nun bemüht Regierungschefin Carrie Lam ein Notstandsgesetz aus der britischen Kolonialzeit, um härter gegen die Demonstranten vorzugehen.\r\nWie Lam mitteilte, wurde ein Vermummungsverb… [+2979 chars]"
// }




// const articleData = [article1, article2, article3]



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

       <Article {...this.state}/>

        


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
