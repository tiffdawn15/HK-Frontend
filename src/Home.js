import React, { Component } from 'react';
import ArticleList from './ArticleList';


class Home extends Component {
    
    render() { 
        return ( 
            <div className="event-list">
             <ArticleList {...this.props} />
             </div>
             );
    }
}
 
export default Home;