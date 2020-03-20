import React from "react";

import Dashboard from "./Template/Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
