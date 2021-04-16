import React from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
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
  const location = useLocation();
  return (
    <div>
      {location.pathname.toLowerCase() === "/signup".toLowerCase() ||
      location.pathname.toLowerCase() === "/signin".toLowerCase() ? null : (
        <Header />
      )}
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/" component={SellerCard} exact={true} />
        <Route path="/Dashboard" component={Dashboard} />

        <Route component={SellerCard} />
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
