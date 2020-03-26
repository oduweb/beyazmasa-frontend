import React from "react";

import Dashboard from "./Template/Dashboard";
import Login from "./Template/Login";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
