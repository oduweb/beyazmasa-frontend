import React from "react";

import Dashboard from "./Template/Dashboard";
import Login from "./Template/Login";

import { Switch, Route } from "react-router-dom";

function App() {
  let path = window.location.pathname;
  return (
    <div>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route path="/ui" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path={path} component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
