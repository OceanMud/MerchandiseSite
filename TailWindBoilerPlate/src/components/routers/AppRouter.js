import React from "react";
import { withRouter, Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import SellerCard from "../SellerCard";
import Header from "../Header";
import Signup from "../Signup";
import Signin from "../Signin";
import Dashboard from "../Dashboard";
import NotFoundPage from "../NotFoundPage";
import Resources from "../Resources";
import NewsLetter from "../NewsLetter";

export const history = createHistory();

const AppRouter = () => {
  let location = location();
  return (
    <div>
      {location.pathname === "signup" ||
      location.pathname === "signin" ? null : (
        <Header />
      )}
      <Switch>
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
        <Route path="/" component={SellerCard} exact={true} />
        <Route path="/Dashboard" component={Dashboard} />

        <Route component={SellerCard} />
      </Switch>
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
