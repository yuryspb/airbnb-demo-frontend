import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Homes from "./Homes/List";
import Rooms from "./Homes/Rooms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
          <Route path="/homes/:id" component={Rooms} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
