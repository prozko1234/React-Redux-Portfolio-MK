import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contacts/Contact";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
