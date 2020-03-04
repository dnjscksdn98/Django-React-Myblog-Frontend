import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route
      render={({ location }) => (
        <React.Fragment>
          <h1>이 페이지는 존재하지 않습니다.</h1>
        </React.Fragment>
      )}
    />
  </Switch>
);

export default BaseRouter;
