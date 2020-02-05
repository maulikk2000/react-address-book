import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router";
import HomePage from "./HomePage";
import Navbar from "react-bootstrap/Navbar";
import { createBrowserHistory as createHistory } from "history";
import Nav from "react-bootstrap/Nav";

const history = createHistory();
const App = (contatcsStore: any) => {
  return (
    <div className="App">
      <Router history={history}></Router>
    </div>
  );
};

export default App;
