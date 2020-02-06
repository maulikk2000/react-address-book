import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router";
import HomePage from "./HomePage";
import Navbar from "react-bootstrap/Navbar";
import { createBrowserHistory as createHistory } from "history";
import Nav from "react-bootstrap/Nav";

const history = createHistory();
function App({ contactsStore }: any) {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Address Book App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route
          path="/"
          exact
          component={(props: any) => (
            <HomePage {...props} contactsStore={contactsStore} />
          )}
        />
      </Router>
    </div>
  );
}
export default App;
