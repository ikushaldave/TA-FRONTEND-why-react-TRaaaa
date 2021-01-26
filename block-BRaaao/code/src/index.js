import React from "react";
import ReactDOM from "react-dom";

// components

import Header from "./components/Header";

// stylesheet

import "./styles/main.css"

function App () {
  return (
    <Header />
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))