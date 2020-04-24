import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
