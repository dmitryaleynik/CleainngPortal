import React from 'react';
import ReactDom from 'react-dom';
import {Route, NavLink, HashRouter, Router} from 'react-router-dom';
import Home from './components/Home/index'


class App extends React.Component {
    render() {
        return (
            
            
              <div>
                <div>
                 Home
                </div>
                <div>Sign In</div>
                <div>Sign Up</div>
              </div>
            
        );
    }
}

<Route exact path="/" component={Home}/>

export default App;