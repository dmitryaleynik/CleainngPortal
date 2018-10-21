import React from "react";
import SignIn from "../SignIn/container";
import SignUpClient from "../SignUpClient/index";
import Home from "../Home/index";
import Header from "../Header/index";
import { Route, Link, Switch } from "react-router-dom";
import BookingForm from "../BookingForm/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUpClient} />
          <Route pathe="/bookingForm" component={BookingForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
