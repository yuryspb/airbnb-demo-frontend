import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "flexboxgrid2";
import "./index.css";
import "./rheostat.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
