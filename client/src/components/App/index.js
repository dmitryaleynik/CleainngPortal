import React from 'react';
import SignIn from '../SignIn/index';
import SignUpClient from '../SignUpClient/index';
import Header from '../Header/index';
import {Route, Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
              <div>
                  <Header /> 
                  <Route path="/signIn" component={SignIn}/>
                  <Route path="/signUp" component={SignUpClient}/>
              </div>
        );
    }
}

export default App;