import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import history from '../history';

import Login from "../Views/Login";
import Home from "../Views/Home/Home";
import { ProtectedRoute } from "../protected.route";



function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" exact component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route path="/admin/restaurant" component={Home} />
        {/* 
        <Route path="/admin/restaurant/add" component={Admin} />
        <Route path="/admin/bakery" component={Admin} />
        <Route path="/admin/bakery/add" component={Admin} />
        <Route path="/admin/member" component={Admin} />
        <Route path="/admin/invoice" component={Admin} />
        <Route path="/navbar-admin" component={NavbarAdmin} />
        <Route path="/admin/profile" component={Admin} /> */}
      </Switch>
    </Router>
  )
}
export default Routes