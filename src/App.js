import { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Homepage } from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/Header";
import { Authentication } from "./pages/authentication/Authentication.component";
import { auth } from "./firebase";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
