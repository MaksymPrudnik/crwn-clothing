import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Homepage } from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Header } from "./components/Header/Header.component";
import { Authentication } from "./pages/authentication/Authentication.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
