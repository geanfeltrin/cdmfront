import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../views/Main";
import SingIn from "../views/SignIn";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/singin" component={SingIn} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
