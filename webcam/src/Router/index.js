import React from 'react';
import { Switch, Route } from "react-router-dom";

import '../Assets/Css/mainStyle.css'
import Login from "../Views/Login";
import Users from "../Views/Users/";
import Admin from "../Views/Admin";
import { ProtectedRoute } from "../protected.route";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/welcome" exact component={Login} />
        <ProtectedRoute path="/admin" component={Admin} />
        <ProtectedRoute path="/" component={Users} />
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </>
  )
}
export default Routes