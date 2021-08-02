import React from 'react';
import { Switch, Route } from "react-router-dom";

import '../Assets/Css/mainStyle.css'
import Login from "../Views/Login";
import Users from "../Views/Users/";
import Admin from "../Views/Admin";
import Loading from "../Assets/Background/Loading";
import MenuView from "../Assets/Background/MenuView";
import { ProtectedRoute } from "../protected.route";
import routers from "./router"
function Routes() {
  const [isLoading, setLoading] = React.useState(true)
  setTimeout(() => setLoading(false), 2000)
  return (
    <>
      {isLoading && <Loading />}
      <MenuView />
      <Switch>
        {routers.map(({ path, Component, protected }, i) => {
          protected
            ? <ProtectedRoute key={i} path={path} component={Component} />
            : <Route key={i} path="/welcome" exact component={Component} />
        })}
      </Switch>
    </>
  )
}
export default Routes