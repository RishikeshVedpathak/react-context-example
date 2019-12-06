import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../Navbar';
import Home from "../Home";
import Cart from "../Cart"

export default () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
