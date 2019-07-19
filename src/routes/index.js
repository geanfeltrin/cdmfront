import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Private from "./private";
// import Admin from "./admin";
import Guest from "./guest";

// import Users from "../components/Admin/users";
// import Category from "../components/Admin/category";
// import Roles from "../components/Admin/roles";

import Main from "../views/Main";
import SignIn from "../views/SignIn";
import Perfil from '../views/Perfil'

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Private path="/" exact component={Main} />
      <Private path="/perfil" component={Perfil} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
