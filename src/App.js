import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Homes from "./Homes/List";
import Rooms from "./Homes/Rooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/homes" component={Homes} />
          <Route exact path="/homes/:id" component={Rooms} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
