import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import Main from "../views/Main";
import SignIn from "../views/SignIn";
import Perfil from "../views/perfil";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Private path="/" exact component={Main} />
      <Private path="/user" component={Perfil} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
