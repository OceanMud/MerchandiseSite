import { withRouter, Router, Route, Switch } from "react-router-dom";
import SellerCard from "../SellerCard";
import Header from "../Header";
import Signup from "../Signup";
import Signin from "../Signin";
import Dashboard from "../Dashboard";
import NotFoundPage from "../NotFoundPage";
import Resources from "../Resources";
import NewsLetter from "../NewsLetter";

const AppRouter = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "signup" ||
      location.pathname === "signin" ? null : (
        <Header />
      )}
      <Resources />
      <div>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={SellerCard} exact={true} />
          <Route path="/Dashboard" component={Dashboard} />

          <Route component={SellerCard} />
        </Switch>
      </div>
      <Resources />
    </div>
  );
};

export default AppRouter;
