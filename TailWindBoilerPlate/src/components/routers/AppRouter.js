import React from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Checkout from "../Checkout";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Homepage from "../Homepage";
import SellerCard from "../SellerCard";
import NewsLetter from "../NewsLetter";

import Signin from "../Signin";
import Signup from "../Signup";

import Resources from "../Resources";

export const history = createHistory();

const AppRouter = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname.toLowerCase() === "/signup".toLowerCase() ||
      location.pathname.toLowerCase() === "/signin".toLowerCase() ? null : (
        <Header />
      )}
      <Switch>
        <Route path="/" component={Homepage} exact={true} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/sellercard" component={SellerCard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/checkout" component={Checkout} />
        <Route component={Homepage} />
      </Switch>

      {location.pathname.toLowerCase() === "/signup".toLowerCase() ||
      location.pathname.toLowerCase() === "/signin".toLowerCase() ? null : (
        <>
          <Resources />
          <NewsLetter />
        </>
      )}
    </div>
  );
};

const newRouter = () => {
  return (
    <Router history={history}>
      <AppRouter />
    </Router>
  );
};

export default newRouter;
