import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { darkmode } from "./utils";

ReactDOM.render(<App />, document.getElementById("root"));

darkmode();
