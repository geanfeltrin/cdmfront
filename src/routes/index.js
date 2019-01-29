import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../views/Main";
import Login from "../views/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/singin" component={Login} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
