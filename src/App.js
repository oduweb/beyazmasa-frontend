import React from "react";

import Login from "./component/pages/Login";
import Dashboard from "./component/Dashboard";
import { Switch, Route } from "react-router-dom";
import NotFound from "./component/pages/NotFound";

function App() {
  return (
    <div className="App relative">
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/NewUser" component={Dashboard}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
