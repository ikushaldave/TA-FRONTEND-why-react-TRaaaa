import React from "react";
import ReactDOM from "react-dom";

// components

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// stylesheet

import "./styles/main.css";

function App () {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))