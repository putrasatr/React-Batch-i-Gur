import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import history from '../history';

import Login from "../Views/Login";
import Home from "../Views/Users/Home/Home";
import Admin from "../Views/Admin/Dashboard/Dashboard";
import { ProtectedRoute } from "../protected.route";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin/dashboard" component={Admin} />
        <ProtectedRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  )
}
export default Routes