import { useEffect } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { ShopPage } from "./pages/shop";
import { AuthenticationPage } from "./pages/authentication";
import { CheckoutPage } from "./pages/checkout";

import { Header } from "./components/Header";
import { auth, createUserProfileDoc } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user, null);

        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
